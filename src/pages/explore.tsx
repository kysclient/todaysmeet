import {SEO} from "@components/common/seo";
import {MainContainer} from "@components/home/main-container";
import {MainHeader} from "@components/home/main-header";
import {useAuth} from "@lib/context/auth-context";
import {HomeLayout, ProtectedLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import Bookmarks from "./bookmarks";
import {ChatBody, Conversation, Message} from "@lib/types/chat";
import {IconClearAll, IconSettings} from '@tabler/icons-react';
import {Modal} from "@components/modal/modal";
import {ActionModal} from "@components/modal/action-modal";
import {useModal} from "@lib/hooks/useModal";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import {
    MutableRefObject,
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
    ReactElement, ReactNode
} from 'react';
import {OpenAIModels} from "@lib/types/openai";
import {toast} from "react-hot-toast";
import {MemoizedChatMessage} from "@components/chat/MemoizedChatMessage";
import {ChatLoader} from "@components/chat/ChatLoader";
import {ChatInput} from "@components/chat/ChatInput";
import {useTranslation} from "react-i18next";
import {ChatContainer} from "@components/home/chat-container";

export default function Explore(): JSX.Element {
    const {open, openModal, closeModal} = useModal();
    const {user} = useAuth();
    const [currentMessage, setCurrentMessage] = useState<Message>();
    const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [showScrollDownButton, setShowScrollDownButton] =
        useState<boolean>(false);
    const stopConversationRef = useRef<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [messageIsStreaming, setMessageIsStreaming] = useState(false);
    const {t} = useTranslation('chat');

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

    const onClearAll = () => {
        setMessages([]);
        closeModal()
    };

    const handleScrollDown = () => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth',
        });
    };


    const handleSend = useCallback(
        async (message: Message, deleteCount = 0, plugin: Plugin | null = null) => {
            let updateMessages: Message[];

            if (deleteCount) {
                const updatedMessages = [...messages];
                for (let i = 0; i < deleteCount; i++) {
                    updatedMessages.pop();
                }
                updateMessages = [...updatedMessages, message];
            } else {
                updateMessages = [...messages, message];
            }
            setMessages(updateMessages)
            setLoading(true)
            setMessageIsStreaming(true)
            const chatBody: ChatBody = {
                model: OpenAIModels["gpt-3.5-turbo"],
                messages: updateMessages,
                key: process.env.OPEN_AI_API_KEY as string,
                prompt: message.content,
                temperature: 1.0,
            };
            const endpoint = 'api/chat'
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
                setLoading(false)
                setMessageIsStreaming(false)
                toast.error(response.statusText);
                return;
            }
            const data = response.body;
            console.log('data : ', data)
            if (!data) {
                setLoading(false)
                setMessageIsStreaming(false)
                return;
            }
            setLoading(false);
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
                const chunkValue = decoder.decode(value);
                text += chunkValue;
                if (isFirst) {
                    isFirst = false;
                    const updatedMessages: Message[] = [
                        ...messages,
                        {role: 'assistant', content: chunkValue},
                    ];
                    console.log('isFirst : ', updatedMessages)
                    setMessages(updatedMessages)
                } else {
                    const updatedMessages: Message[] =
                        messages.map((message, index) => {
                            if (index === messages.length - 1) {
                                return {
                                    ...message,
                                    content: text,
                                };
                            }
                            return message;
                        });
                    console.log('not First : ', updatedMessages)
                    setMessages(updatedMessages)
                }
            }
            setLoading(false)
            setMessageIsStreaming(false)

        }, [messages, stopConversationRef, currentMessage])


    return (
        <ChatContainer>
            <SEO title='맛집추천 / BungSin'/>
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
            <MainHeader className='flex items-center justify-between' useMobileSidebar>

                <div className='-mb-1 flex flex-col'>
                    <h2 className='-mt-1 text-xl font-bold'>맛집추천</h2>
                    <p className='text-xs text-light-secondary dark:text-dark-secondary'>
                        @{user?.username}
                    </p>
                </div>
                <Button
                    className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10
                     dark:active:bg-dark-primary/20'
                    onClick={openModal}
                >
                    <HeroIcon className='h-5 w-5' iconName='ArchiveBoxXMarkIcon'/>
                    <ToolTip
                        className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
                        tip='메세지 전체 삭제'
                    />
                </Button>
            </MainHeader>

            <section className='mt-10 relative h-full'>
                <div className="relative h-full overflow-hidden bg-main-background">
                    <div
                        className="max-h-full overflow-x-hidden"
                        ref={chatContainerRef}
                        onScroll={handleScroll}
                    >
                        {
                            messages.length === 0 ? (
                                    <>
                                        <div
                                            className="mx-auto flex flex-col space-y-5 md:space-y-10 px-3 pt-5 md:pt-12 sm:max-w-[600px]">
                                            <div
                                                className="text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
                                                Chatbot UI
                                            </div>
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                        {
                                            messages.map((message, index) => (
                                                <MemoizedChatMessage
                                                    key={index}
                                                    index={index}
                                                    message={message}
                                                    messages={messages}
                                                    setMessages={setMessages}
                                                    messageIsStreaming={messageIsStreaming}
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
                                        {loading && <ChatLoader /> }
                                        <div
                                            className="h-[162px] bg-main-background"
                                            ref={messagesEndRef}
                                        />
                                    </>
                                )}
                    </div>
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

            </section>

        </ChatContainer>
    )
}
Explore.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <MainLayout>
            <HomeLayout>{page}</HomeLayout>
        </MainLayout>
    </ProtectedLayout>
);
