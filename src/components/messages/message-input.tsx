import {MutableRefObject} from "react";
import {t} from "i18next";
import {InputOptions} from "@components/input/input-options";
import {MessageInputOptions} from "@components/messages/message-input-options";
import {useWindow} from "@lib/context/window-context";

interface Props {
    onScrollDownClick: () => void;
    textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
    showScrollDownButton: boolean;
}

export const MessageInput = ({
                                 onScrollDownClick,
                                 textareaRef,
                                 showScrollDownButton
                             }: Props) => {
    const {isMobile} = useWindow();

    return (
        <>
            <div
                className="absolute bottom-0 left-0 w-full pt-2  md:w-[calc(100%-.5rem)]">
                <div
                    className="stretch  mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl">
                    <div
                        style={{marginBottom: `${isMobile ? 60 : 0}px`,}}
                        className="relative mx-2 flex w-full flex-grow flex-col rounded-md border border-black/10  dark:border-gray-900/50 dark:text-white  sm:mx-4 bg-main-sidebar-background">
                                         <textarea
                                             ref={textareaRef}
                                             className="m-0 w-full  resize-none border-0 p-0 py-2 pr-8 pl-5 dark:bg-transparent dark:text-white md:py-3 md:pl-5 bg-main-sidebar-background focus:outline-none focus:ring-0"
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
                                             placeholder="메세지를 입력하세요."
                                             value={""}
                                             rows={1}
                                         />
                        <div className="p-2">
                            <MessageInputOptions
                                inputLimit={280}
                                inputLength={280}
                                isValidTweet={true}
                                isCharLimitExceeded={false}
                                handleImageUpload={() => {
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
