import {ChangeEvent, ClipboardEvent, FormEvent, MutableRefObject, useEffect, useId, useRef, useState} from "react";
import {t} from "i18next";
import {InputOptions} from "../input/input-options";
import {MessageInputOptions} from "./message-input-options";
import {useWindow} from "../../lib/context/window-context";
import {FilesWithId, ImageData, ImagesPreview} from "@lib/types/file";
import {getImagesData} from "@lib/validation";
import {toast} from "react-hot-toast";
import TextArea from "react-textarea-autosize";
import {ImagePreview} from "@components/input/image-preview";
import {AnimatePresence} from "framer-motion";
import {RoomMessage} from "@lib/types/messages";
import {UserWithChatRooms} from "@lib/types/chatRooms";
import {uploadImages} from "@lib/firebase/utils";
import {ref, serverTimestamp, update} from "@firebase/database";
import {useAuth} from "@lib/context/auth-context";
import {rdb} from "@lib/firebase/app";
import {Timestamp} from "firebase/firestore";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import {Loading} from "@components/ui/loading";
import {IconSend} from "@tabler/icons-react";

interface Props {
    onScrollDownClick: () => void;
    textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
    showScrollDownButton: boolean;
    selectedData: UserWithChatRooms
}

export const MessageInput = ({
                                 onScrollDownClick,
                                 textareaRef,
                                 showScrollDownButton,
                                 selectedData
                             }: Props) => {
    const {isMobile} = useWindow();
    const [inputValue, setInputValue] = useState('');
    const [selectedImages, setSelectedImages] = useState<FilesWithId>([]);
    const [imagesPreview, setImagesPreview] = useState<ImagesPreview>([]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const previewCount = imagesPreview.length;
    const isUploadingImages = !!previewCount;
    const [visited, setVisited] = useState(false);
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    const userId = user?.id as string;

    useEffect(
        () => {
            return cleanImage;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const handleVideoUpload = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        if (e.target.files) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
        }
    }

    const handleImageUpload = (
        e: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLTextAreaElement>
    ): void => {
        const isClipboardEvent = 'clipboardData' in e;

        if (isClipboardEvent) {
            const isPastingText = e.clipboardData.getData('text');
            if (isPastingText) return;
        }

        const files = isClipboardEvent ? e.clipboardData.files : e.target.files;

        const imagesData = getImagesData(files, previewCount);

        if (!imagesData) {
            toast.error('이미지를 업로드 해주세요. 이미지는 최대 4장까지 업로드 가능합니다.');
            return;
        }

        const {imagesPreviewData, selectedImagesData} = imagesData;

        setImagesPreview([...imagesPreview, ...imagesPreviewData]);
        setSelectedImages([...selectedImages, ...selectedImagesData]);
        inputRef.current?.focus();
    };

    const removeImage = (targetId: string) => (): void => {
        setSelectedImages(selectedImages.filter(({id}) => id !== targetId));
        setImagesPreview(imagesPreview.filter(({id}) => id !== targetId));

        const {src} = imagesPreview.find(
            ({id}) => id === targetId
        ) as ImageData;

        URL.revokeObjectURL(src);
    };

    const cleanImage = (): void => {
        imagesPreview.forEach(({src}) => URL.revokeObjectURL(src));

        setSelectedImages([]);
        setImagesPreview([]);
    };

    const handleChange = ({
                              target: {value}
                          }: ChangeEvent<HTMLTextAreaElement>): void => setInputValue(value);


    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        void sendMessage();
    };

    const [isFocus, setIsFocus] = useState(false);
    const handleFocus = (): void => setVisited(!loading);

    const inputFocus = () => {
        setIsFocus(true)
    }

    const formId = useId();

    const inputLimit = 280;

    const inputLength = inputValue.length;
    const isValidInput = !!inputValue.trim().length;
    const isCharLimitExceeded = inputLength > inputLimit;

    const handleScrollDown = () => {
        window.scrollTo(0, document.body.scrollHeight);

    };

    const sendMessage = async (): Promise<void> => {
        setLoading(true)
        inputRef.current?.blur();
        const currentDate = new Date();

        const messageData: RoomMessage = {
            sender: userId,
            text: inputValue,
            images: await uploadImages(userId, selectedImages) as ImagesPreview,
            timestamp: serverTimestamp() as Timestamp
        }
        const updateMessages = selectedData.chatRoom.messages ? [...selectedData.chatRoom.messages, messageData] : [messageData]
        let updateData = selectedData.chatRoom
        updateData.messages = updateMessages;

        await update(ref(rdb, `chatRooms/${selectedData.roomKey}`), updateData)

        setInputValue("")
        cleanImage()
        setLoading(false)
        // onScrollDownClick()
        handleInputFocus()
        handleScrollDown()
    }


    const handleInputFocus = () => {
        // 인풋 요소가 포커스되었을 때, 해당 위치로 스크롤을 내립니다.
        setIsFocus(true)
        if (inputRef.current) {
            inputRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div
                    className="w-full md:w-[calc(100%-.5rem)]">
                    <div
                        className="stretch flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-3xl">
                        <div
                            style={{marginBottom: `${isMobile ? 60 : 0}px`,}}
                            className="relative mx-2 flex w-full flex-grow flex-col rounded-3xl border border-black/10  dark:border-gray-900/50 dark:text-white  sm:mx-4 bg-main-sidebar-background">
                            <TextArea
                                id={formId}
                                ref={inputRef}
                                className={`m-0 w-full relative resize-none border-0 p-0 py-2 pr-8 dark:bg-transparent dark:text-white md:py-3  ${!isFocus ? "pl-12 md:pl-12" : "pl-5 md:pl-5"} bg-main-sidebar-background focus:outline-none focus:ring-0`}
                                placeholder="메세지를 입력하세요."
                                value={inputValue}
                                minRows={1}
                                maxRows={5}
                                onChange={handleChange}
                                onPaste={handleImageUpload}
                                onFocus={handleInputFocus}
                            >
                            </TextArea>

                            {
                                !isFocus &&
                                <>
                                    <div
                                        className='flex text-main-accent absolute left-2 top-0 md:top-1'
                                    >
                                        <Button
                                            className='accent-tab accent-bg-tab group relative rounded-full p-2
                                                        hover:bg-main-accent/10 active:bg-main-accent/20'
                                        >
                                            <HeroIcon className='h-5 w-5' iconName={'PhotoIcon'}/>
                                            <ToolTip tip={'미디어'} modal={false}/>
                                        </Button>
                                    </div>

                                    <Button
                                        className={`absolute right-2 top-0 md:top-1 accent-tab text-main-accent`}
                                    >
                                        <IconSend size={18}/>
                                    </Button>

                                </>
                            }

                            {isUploadingImages && (
                                <ImagePreview
                                    imagesPreview={imagesPreview}
                                    previewCount={previewCount}
                                    removeImage={!loading ? removeImage : undefined}
                                />
                            )}

                            {
                                isFocus &&
                                <div className="p-2">
                                    <AnimatePresence initial={false}>
                                        <MessageInputOptions
                                            inputLimit={280}
                                            inputLength={inputValue.length}
                                            isValidTweet={true}
                                            isCharLimitExceeded={false}
                                            handleImageUpload={handleImageUpload}
                                            handleSend={sendMessage}
                                            loading={loading}
                                        />
                                    </AnimatePresence>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}
