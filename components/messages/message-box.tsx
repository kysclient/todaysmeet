import {variants} from "../aside/aside-trends";
import {AnimatePresence, motion} from 'framer-motion';
import {RoomMessage} from "@lib/types/messages";
import {useAuth} from "@lib/context/auth-context";
import {ImagePreview} from "@components/input/image-preview";

interface Props {
    message: RoomMessage
}

export const MessageBox = ({message}: Props) => {
    const {user} = useAuth();
    const userId = user?.id as string;


    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
            >
                {
                    message.sender === userId ?
                        <div className="flex justify-end">
                            <div className={`bg-main-accent rounded-br rounded-xl max-w-[60%] py-[12px] px-[16px] ${message.images && 'w-[60%]'}`}>
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
                        :
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
                }

            </motion.div>
        </AnimatePresence>
    )
}
