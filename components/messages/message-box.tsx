import {variants} from "../aside/aside-trends";
import {AnimatePresence, motion} from 'framer-motion';
import {RoomMessage} from "@lib/types/messages";
import {useAuth} from "@lib/context/auth-context";
import {ImagePreview} from "@components/input/image-preview";
import {formatDate} from "@lib/date";
import {useEffect} from "react";

interface Props {
    message: RoomMessage
}

export const MessageBox = ({message}: Props) => {
    const {user} = useAuth();
    const userId = user?.id as string;

    const formatMessageTime = (timestamp: any): string => {

        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const period = hours >= 12 ? '오후' : '오전';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        return `${month}월 ${day}일 ${period} ${formattedHours}:${formattedMinutes}`;
    };


    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
            >
                {
                    message.sender === userId ?
                        <>
                            <div className="flex justify-end">
                                <div
                                    className={`bg-main-accent rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px] ${message.images && 'w-[60%]'}`}>
                                    {message.text}

                                    {message.images && (
                                        <ImagePreview
                                            tweet={false}
                                            imagesPreview={message.images}
                                            previewCount={message.images.length}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-xs mt-2 text-light-secondary dark:text-dark-secondary">{message.timestamp && formatMessageTime(message.timestamp)}</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-start">
                                <div
                                    className={`bg-main-sidebar-background rounded-bl rounded-xl max-w-[60%] py-[12px] px-[16px] ${message.images && 'w-[60%]'}`}>
                                    {message.text}

                                    {message.images && (
                                        <ImagePreview
                                            tweet={true}
                                            imagesPreview={message.images}
                                            previewCount={message.images.length}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-xs mt-2 text-light-secondary dark:text-dark-secondary">{message.timestamp && formatMessageTime(message.timestamp)}</p>
                            </div>
                        </>
                }

            </motion.div>
        </AnimatePresence>
    )
}
