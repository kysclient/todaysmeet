import {variants} from "@components/aside/aside-trends";
import {motion} from 'framer-motion';


export const MessageBox = () => {
    return (
        <motion.div {...variants}>
            <div className="flex justify-end">
                <div className="bg-main-accent bor rounded-br rounded-xl max-w-1/2 py-[12px] px-[16px]">
                    나의 메시지
                </div>
            </div>
        </motion.div>

                    // <div className="flex justify-start">
                    //     <div className="bg-main-sidebar-background rounded-bl rounded-xl max-w-1/2 py-[12px] px-[16px]">
                    //         상대방의 메시지
                    //     </div>
                    // </div>

    )
}
