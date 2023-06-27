import {MutableRefObject, useEffect, useRef, useState} from "react";
import {Message} from "@lib/types/chat";
import {IconArrowDown, IconPlayerStop, IconRepeat, IconSend} from "@tabler/icons-react";
import {useTranslation} from "next-i18next";
import {useWindow} from "@lib/context/window-context";

interface Props {
    onSend: (message: Message, plugin: Plugin | null) => void;
    onRegenerate: () => void;
    onScrollDownClick: () => void;
    stopConversationRef: MutableRefObject<boolean>;
    textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
    showScrollDownButton: boolean;
    messageIsStreaming: boolean;
    messages: Message[]
}

export const ChatInput = ({
                              onSend,
                              onRegenerate,
                              onScrollDownClick,
                              stopConversationRef,
                              textareaRef,
                              showScrollDownButton,
                              messageIsStreaming,
                              messages
                          }: Props) => {
    const {t} = useTranslation('chat');
    const [content, setContent] = useState<string>();
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showPromptList, setShowPromptList] = useState(false);
    const [activePromptIndex, setActivePromptIndex] = useState(0);
    const [promptInputValue, setPromptInputValue] = useState('');
    const [variables, setVariables] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showPluginSelect, setShowPluginSelect] = useState(false);
    const [plugin, setPlugin] = useState<Plugin | null>(null);
    const { isMobile } = useWindow();

    const promptListRef = useRef<HTMLUListElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const maxLength = 12000;

        if (maxLength && value.length > maxLength) {
            alert(
                t(
                    `Message limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`,
                    {maxLength, valueLength: value.length},
                ),
            );
            return;
        }
        setContent(value);
    };

    const handleSend = () => {
        if (messageIsStreaming) {
            return;
        }
        if (!content) {
            alert(t('메세지를 입력하세요.'));
            return;
        }
        onSend({role: 'user', content}, plugin);
        setContent('');
        setPlugin(null);

        if (window.innerWidth < 640 && textareaRef && textareaRef.current) {
            textareaRef.current.blur();
        }
    };

    const handleStopConversation = () => {
        stopConversationRef.current = true;
        setTimeout(() => {
            stopConversationRef.current = false;
        }, 1000);
    };

    const mobile = () => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobileRegex =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
        return mobileRegex.test(userAgent);
    };


    const handleKeyDown = (e: any) => {
        if (showPromptList) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActivePromptIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : prevIndex,
                );
            } else if (e.key === 'Tab') {
                e.preventDefault();
            } else if (e.key === 'Enter') {
                e.preventDefault();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setShowPromptList(false);
            } else {
                setActivePromptIndex(0);
            }
        } else if (e.key === 'Enter' && !isTyping && !mobile() && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        } else if (e.key === '/' && e.metaKey) {
            e.preventDefault();
            setShowPluginSelect(!showPluginSelect);
        }
    };

    const parseVariables = (content: string) => {
        const regex = /{{(.*?)}}/g;
        const foundVariables = [];
        let match;

        while ((match = regex.exec(content)) !== null) {
            foundVariables.push(match[1]);
        }

        return foundVariables;
    };

    const handleSubmit = (updatedVariables: string[]) => {
        const newContent = content?.replace(/{{(.*?)}}/g, (match, variable) => {
            const index = variables.indexOf(variable);
            return updatedVariables[index];
        });

        setContent(newContent);

        if (textareaRef && textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = 'inherit';
            textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
            textareaRef.current.style.overflow = `${
                textareaRef?.current?.scrollHeight > 400 ? 'auto' : 'hidden'
            }`;
        }
    }, [content]);

    return (
        <div
            className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent pt-2 md:pl-2 md:w-[calc(100%-.5rem)]">
            <div
                className="stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl">
                {messageIsStreaming && (
                    <button
                        className="absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2"
                        onClick={handleStopConversation}
                    >
                        <IconPlayerStop size={16}/> {t('멈추기')}
                    </button>
                )}

                {!messageIsStreaming &&
                    messages.length > 0 && (
                        <button
                            className="absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 bg-main-sidebar-background dark:text-white md:mb-0 md:mt-2"
                            onClick={onRegenerate}
                        >
                            <IconRepeat size={16}/> {t('응답 재생성')}
                        </button>
                    )}
                <div
                    style={{marginBottom: `${isMobile ? 60 : 0}px`,}}
                    className="relative mx-2 flex w-full flex-grow flex-col rounded-md border border-black/10 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] sm:mx-4 bg-main-sidebar-background">
                     <textarea
                         ref={textareaRef}
                         className="m-0 w-full resize-none border-0 p-0 py-2 pr-8 pl-10 dark:bg-transparent dark:text-white md:py-3 md:pl-10 bg-main-sidebar-background"
                         style={{
                             resize: 'none',
                             bottom: `${textareaRef?.current?.scrollHeight}px`,
                             maxHeight: '400px',
                             overflow: `${
                                 textareaRef.current && textareaRef.current.scrollHeight > 400
                                     ? 'auto'
                                     : 'hidden'
                             }`,
                         }}
                         placeholder={
                             t('봇에게 맛집추천을 받아보세요!') || ''
                         }
                         value={content}
                         rows={1}
                         onCompositionStart={() => setIsTyping(true)}
                         onCompositionEnd={() => setIsTyping(false)}
                         onChange={handleChange}
                         onKeyDown={handleKeyDown}
                     />

                    <button
                        className="absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200"
                        onClick={handleSend}
                    >
                        {messageIsStreaming ? (
                            <div
                                className="h-4 w-4 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"></div>
                        ) : (
                            <IconSend size={18}/>
                        )}
                    </button>

                    {showScrollDownButton && (
                        <div className="absolute bottom-12 right-0 lg:bottom-0 lg:-right-10">
                            <button
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-300 text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-neutral-200"
                                onClick={onScrollDownClick}
                            >
                                <IconArrowDown size={18}/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}
