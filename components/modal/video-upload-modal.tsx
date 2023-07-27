import cn from "clsx";
import {ChangeEvent, useEffect, useId, useRef, useState} from "react";
import {motion} from "framer-motion";
import {variants} from "@components/input/input";
import {UserAvatar} from "@components/user/user-avatar";
import {useAuth} from "@lib/context/auth-context";
import {User} from "@lib/types/user";
import ReactPlayer from "react-player";
import {HeroIcon} from "@components/ui/hero-icon";
import {fromTop} from "@components/input/input-form";
import {Button} from "@components/ui/button";
import {toast} from "react-hot-toast";
import {addDoc, getDoc, serverTimestamp, WithFieldValue} from "firebase/firestore";
import {Shorts} from "@lib/types/shorts";
import {uploadVideo} from "@lib/firebase/utils";
import {sleep} from "@lib/utils";
import {shortsCollection} from "@lib/firebase/collections";
import {useWindow} from "@lib/context/window-context";

export function VideoUploadModal({
                                     closeModal
                                 }): JSX.Element {
    const formId = useId();
    const [loading, setLoading] = useState(false)
    const {user, isAdmin} = useAuth();
    const {name, username, photoURL} = user as User;
    const [selectedVideoPreview, setSelectedVideoPreview] = useState('')
    const isVisibilityShown = !loading;
    const inputVideoRef = useRef<HTMLInputElement>(null);
    const onClick = (): void => inputVideoRef.current?.click();
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const {isMobile} = useWindow()
    const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (!file) {
            toast.error('올바른 파일 형식이 아닙니다.', {duration: 6000});
            return;
        }
        const maxSizeInBytes = 5 * 1024 * 1024;

        if (file.size > maxSizeInBytes) {
            toast.error('파일 크기는 5MB 미만 이여야합니다.', {duration: 6000});
            return;
        }
        setSelectedVideoPreview(URL.createObjectURL(file))
        setSelectedFile(file)
    }


    const handleSubmit = async () => {
        const userId = user?.id as string;
        setLoading(true)

        const shortsData: WithFieldValue<Shorts> = {
            fileUrl: await uploadVideo(userId, selectedFile!),
            user: user,
            createdAt: serverTimestamp(),
        }

        await sleep(300);
        const ref = await addDoc(shortsCollection, shortsData)

        await getDoc(ref)

        closeModal()
        toast.success('정상등록 되었습니다.', {duration: 6000});
    }

    return (
        <div
            className={cn('flex flex-col')}
        >
            {loading && (
                <motion.i className='h-1 animate-pulse bg-main-accent' {...variants} />
            )}
            <label
                className={cn(
                    'hover-animation grid w-full grid-cols-[auto,1fr] gap-3 pl-3 py-3',
                    'border-b-2 border-light-border dark:border-dark-border',
                    loading && 'pointer-events-none opacity-50'
                )}
                htmlFor={formId}
            >
                <div className='flex w-full flex-col gap-4'>
                    <div className='flex min-h-[48px] w-full flex-col justify-center gap-4'>
                        <div className='flex flex-col gap-6'>
                            <UserAvatar src={photoURL} alt={name} username={username}/>
                            {isVisibilityShown && (
                                <motion.button
                                    type='button'
                                    className='custom-button accent-tab accent-bg-tab flex cursor-not-allowed items-center gap-1
                                               self-start border border-light-line-reply py-0 px-3 text-main-accent
                                               hover:bg-main-accent/10 active:bg-main-accent/20 dark:border-light-secondary'
                                    {...fromTop}
                                >
                                    <p className='font-bold'>전체 공개</p>
                                    <HeroIcon className='h-4 w-4' iconName='ChevronDownIcon'/>
                                </motion.button>
                            )}
                            <div className='flex'>
                                <div className="cursor-pointer flex items-center" onClick={onClick}>
                                    <Button
                                        className='accent-tab accent-bg-tab text-main-accent group relative rounded-full p-2
                                                hover:bg-main-accent/10 active:bg-main-accent/20'
                                    >
                                        <HeroIcon className='h-7 w-7' iconName='VideoCameraIcon'/>
                                    </Button>
                                    <h1 className="text-main-accent text-xl">여기에 업로드 하세요..</h1>
                                    <input
                                        className='hidden'
                                        type='file'
                                        accept='.mov, .mp4'
                                        onChange={handleVideoUpload}
                                        ref={inputVideoRef}
                                        multiple={false}
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-2'>

                                {
                                    selectedVideoPreview !== '' &&
                                    <ReactPlayer
                                        muted={false}
                                        loop={false}
                                        controls={true}
                                        playing={false}
                                        width='100%'
                                        url={selectedVideoPreview}
                                    />
                                }
                            </div>
                            {
                                selectedVideoPreview !== '' &&
                                <div className='flex items-center flex-row-reverse gap-4'>
                                    <Button
                                        onClick={handleSubmit}
                                        type='button'
                                        className='accent-tab bg-main-accent px-4 py-1.5 font-bold text-white
                                                enabled:hover:bg-main-accent/90
                                                enabled:active:bg-main-accent/75'
                                    >
                                        업로드
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )

}
