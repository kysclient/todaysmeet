import {FormEvent, useRef} from 'react';
import {motion} from 'framer-motion';
import {Button} from '../ui/button';
import {HeroIcon} from '../ui/hero-icon';
import {ToolTip} from '../ui/tooltip';
import type {ChangeEvent, ClipboardEvent} from 'react';
import type {IconName} from '../ui/hero-icon';
import {IconSend} from "@tabler/icons-react";
import {variants} from "../input/input";
import {ProgressBar} from "../input/progress-bar";
import {Loading, MessageLoading} from "@components/ui/loading";
import {ChatLoader} from "@components/chat/ChatLoader";

type Options = {
    name: string;
    iconName: IconName;
    disabled: boolean;
    onClick?: () => void;
}[];

const options: Readonly<Options> = [
    {
        name: 'Media',
        iconName: 'PhotoIcon',
        disabled: false
    },
    {
        name: 'Gif',
        iconName: 'GifIcon',
        disabled: false
    },
    {
        name: 'Emoji',
        iconName: 'FaceSmileIcon',
        disabled: true
    },
];

type MessageInputOptionsProps = {
    inputLimit: number;
    inputLength: number;
    isValidTweet: boolean;
    isCharLimitExceeded: boolean;
    handleImageUpload: (
        e: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLTextAreaElement>
    ) => void;
    handleSend: () => void;
    loading: boolean;
};

export function MessageInputOptions({
                                        inputLimit,
                                        inputLength,
                                        isValidTweet,
                                        isCharLimitExceeded,
                                        handleImageUpload,
                                        handleSend,
                                        loading
                                    }: MessageInputOptionsProps): JSX.Element {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const onClick = (): void => inputFileRef.current?.click();
    let filteredOptions = options;


    return (
        <motion.div className='flex justify-between' {...variants}>
            <div
                className='flex text-main-accent xs:[&>button:nth-child(n+6)]:hidden
                   md:[&>button]:!block [&>button:nth-child(n+4)]:hidden'
            >
                <input
                    className='hidden'
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    ref={inputFileRef}
                    multiple
                />
                {filteredOptions.map(({name, iconName, disabled}, index) => (
                    <Button
                        className='accent-tab accent-bg-tab group relative rounded-full p-2
                       hover:bg-main-accent/10 active:bg-main-accent/20'
                        onClick={index === 0 ? onClick : undefined}
                        disabled={disabled}
                        key={name}
                    >
                        <HeroIcon className='h-5 w-5' iconName={iconName}/>
                        <ToolTip tip={name} modal={false}/>
                    </Button>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <motion.div
                    className='flex items-center gap-4'
                    animate={
                        inputLength ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0}
                    }
                >
                    <ProgressBar
                        modal={false}
                        inputLimit={inputLimit}
                        inputLength={inputLength}
                        isCharLimitExceeded={isCharLimitExceeded}
                    />
                    <i className='hidden h-8 w-[1px] bg-[#B9CAD3] dark:bg-[#3E4144] xs:block'/>
                    <Button
                        className='group relative hidden rounded-full border border-light-line-reply p-[1px]
                           text-main-accent dark:border-light-secondary xs:block'
                        disabled
                    >
                        <HeroIcon className='h-5 w-5' iconName='PlusIcon'/>
                        <ToolTip tip='Add' modal={false}/>
                    </Button>
                </motion.div>

                <Button
                    type='submit'
                    className={`accent-tab ${loading ? 'bg-main-sidebar-background' : 'bg-main-accent'} px-4 py-1.5 font-bold text-white
                     enabled:hover:bg-main-accent/90
                     enabled:active:bg-main-accent/75
                     ${loading && 'relative !text-transparent disabled:cursor-wait'}
                     `
                    }
                    disabled={loading}
                >
                    {
                        loading ? <Loading
                            iconClassName='h-5 w-5'
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        /> : <IconSend size={18}/>
                    }
                </Button>

            </div>
        </motion.div>
    );
}
