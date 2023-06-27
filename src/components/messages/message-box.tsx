import {variants} from "@components/aside/aside-trends";
import {motion} from 'framer-motion';


export const MessageBox = () => {
    return (
        // <motion.div className="pb-2" {...variants}>
        //
        // </motion.div>
        <div className="flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-2">

                    <div className="flex justify-end">
                        <div className="bg-main-accent bor rounded-br rounded-xl max-w-1/2 py-[12px] px-[16px]">
                            나의 메시지
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="bg-main-sidebar-background rounded-bl rounded-xl max-w-1/2 py-[12px] px-[16px]">
                            상대방의 메시지
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
