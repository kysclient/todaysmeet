import React, {
    Dispatch,
    memo,
    MutableRefObject,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import {useTranslation} from "next-i18next";
import {ChatBody, Message} from "../../lib/types/chat";
import {OpenAIModels} from "../../lib/types/openai";
import {toast} from "react-hot-toast";
import {MemoizedChatMessage} from "./MemoizedChatMessage";
import {ChatLoader} from "./ChatLoader";
import {ChatInput} from "./ChatInput";
import ChatContext from "../../lib/context/chat-context";
import {Modal} from "../modal/modal";
import {ActionModal} from "../modal/action-modal";
import {HeroIcon} from "@components/ui/hero-icon";

interface Props {
    stopConversationRef: MutableRefObject<boolean>
    closeModal: () => void;
    open: boolean;
    openModal: () => void;
}

export const Chat = memo(({stopConversationRef, closeModal, open, openModal}: Props) => {
    const {t} = useTranslation('chat');

    const {
        state: {
            messages,
            messageIsStreaming,
            loading,
        },
        dispatch: chatDispatch,
    } = useContext(ChatContext);

    const onClearAll = () => {
        chatDispatch({field: 'messages', value: []})
        closeModal()
    };

    const [currentMessage, setCurrentMessage] = useState<Message>();
    const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
    const [showScrollDownButton, setShowScrollDownButton] =
        useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const {scrollTop, scrollHeight, clientHeight} =
                chatContainerRef.current;
            const bottomTolerance = 30;

            if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
                setAutoScrollEnabled(false);
                setShowScrollDownButton(true);
            } else {
                setAutoScrollEnabled(true);
                setShowScrollDownButton(false);
            }
        }
    };


    const handleScrollDown = () => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth',
        });
    };

    const handleScrollToEnd = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAutoScrollEnabled(entry.isIntersecting);
                if (entry.isIntersecting) {
                    textareaRef.current?.focus();
                }
            },
            {
                root: null,
                threshold: 0.5,
            },
        );
        const messagesEndElement = messagesEndRef.current;
        if (messagesEndElement) {
            observer.observe(messagesEndElement);
        }
        return () => {
            if (messagesEndElement) {
                observer.unobserve(messagesEndElement);
            }
        };
    }, [messagesEndRef]);

    const handleSend = useCallback(
        async (message: Message, deleteCount: number, plugin: Plugin | null = null) => {
            let baseMessages = [...messages, message]
            if (deleteCount) {
                const updatedMessages = [...messages];
                for (let i = 0; i < deleteCount; i++) {
                    updatedMessages.pop();
                }
                chatDispatch({field: 'messages', value: [...updatedMessages, message]});
            } else {
                chatDispatch({field: 'messages', value: [...messages, message]});
            }
            chatDispatch({field: 'loading', value: true});
            chatDispatch({field: 'messageIsStreaming', value: true});

            const chatBody: ChatBody = {
                model: OpenAIModels["gpt-3.5-turbo"],
                messages: baseMessages,
                key: process.env.OPEN_AI_API_KEY as string,
                prompt: message.content,
                temperature: 0.1,
            };

            const endpoint = `/api/chat`
            let body = JSON.stringify(chatBody);
            const controller = new AbortController();

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal: controller.signal,
                body,
            });

            if (!response.ok) {
                chatDispatch({field: 'loading', value: false});
                chatDispatch({field: 'messageIsStreaming', value: false});
                toast.error(response.statusText);
                return;
            }
            const data = response.body;
            if (!data) {
                chatDispatch({field: 'loading', value: false});
                chatDispatch({field: 'messageIsStreaming', value: false});
                return;
            }
            chatDispatch({field: 'loading', value: false});
            const reader = data.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let isFirst = true;
            let text = '';
            while (!done) {
                if (stopConversationRef.current) {
                    controller.abort();
                    done = true;
                    break;
                }
                const {value, done: doneReading} = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value!);
                text += chunkValue;
                if (isFirst) {
                    isFirst = false;
                    const updatedMessages: Message[] = [
                        ...baseMessages,
                        {role: 'assistant', content: chunkValue},
                    ];
                    baseMessages = updatedMessages;
                    chatDispatch({field: 'messages', value: updatedMessages});
                    handleScrollToEnd()
                } else {
                    const updatedMessages: Message[] = baseMessages.map((message, index) => {
                        if (index === baseMessages.length - 1) {
                            return {
                                ...message,
                                content: text,
                            };
                        } else {
                            return message;
                        }
                    });
                    baseMessages = baseMessages.map((message, index) => {
                        if (index === baseMessages.length - 1) {
                            return {
                                ...message,
                                content: text,
                            };
                        } else {
                            return message;
                        }
                    });
                    chatDispatch({field: 'messages', value: updatedMessages});
                    handleScrollToEnd()
                }
            }
            chatDispatch({field: 'loading', value: false});
            chatDispatch({field: 'messageIsStreaming', value: false});


        }, [messages, stopConversationRef, chatDispatch])

    return (
        <>
            <Modal
                modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
                open={open}
                closeModal={closeModal}
            >
                <ActionModal
                    title='메세지를 모두 삭제하시겠습니까?'
                    description='현재 작성된 답변은 저장 혹은 기록되지 않으며, 답변은 항상 달라질 수 있습니다.'
                    mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab
                            focus-visible:bg-accent-red/90'
                    mainBtnLabel='삭제'
                    action={onClearAll}
                    closeModal={closeModal}
                />
            </Modal>
            <div
                className="max-h-full overflow-x-hidden"
                ref={chatContainerRef}
                onScroll={handleScroll}
            >
                {
                    messages.length === 0 ? (
                            <>
                                <div
                                    className="mx-auto flex flex-col space-y-4 px-3 pt-5 md:pt-12 sm:max-w-[600px]">
                                    <div className="flex justify-end">
                                        <div className={`flex items-center bg-main-background rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px]`}>
                                            <HeroIcon iconName={'ChatBubbleOvalLeftEllipsisIcon'} className="w-7 h-7 mr-2" />
                                            이런걸 물어볼 수 있어요
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className={`text-white flex items-center bg-main-accent rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px]`}>
                                            지금부터 너는 나의 친구야. 나의 얘기를 듣고 대화 해줘.
                                        </div>

                                    </div>

                                    <div className="flex justify-end">
                                        <div className={`text-white flex items-center bg-main-accent rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px]`}>
                                            요즘 한국 트렌드 알려줘.
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className={`text-white flex items-center bg-main-accent rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px]`}>
                                            강남구 논현동 맛집 알려줘.
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                        : (
                <>
                    {
                        messages.map((message, index) => (
                            <MemoizedChatMessage
                                key={`${message.role + index}`}
                                index={index}
                                message={message}
                                messageIndex={index}
                                onEdit={(editedMessage) => {
                                    setCurrentMessage(editedMessage);
                                    // discard edited message and the ones that come after then resend
                                    handleSend(
                                        editedMessage,
                                        messages.length - index,
                                    );
                                }}
                            />
                        ))
                    }
                    {loading && <ChatLoader/>}
                    <div
                        className="h-[182px] bg-main-background"
                        ref={messagesEndRef}
                    />
                </>
                )}
                <ChatInput
                    stopConversationRef={stopConversationRef}
                    textareaRef={textareaRef}
                    onSend={(message, plugin) => {
                        setCurrentMessage(message);
                        handleSend(message, 0, plugin);
                    }}
                    onScrollDownClick={handleScrollDown}
                    messageIsStreaming={messageIsStreaming}
                    onRegenerate={() => {
                        if (currentMessage) {
                            handleSend(currentMessage, 2, null);
                        }
                    }}
                    showScrollDownButton={showScrollDownButton}
                    messages={messages}
                />
            </div>
        </>
    )

});

Chat.displayName = "Chat"
