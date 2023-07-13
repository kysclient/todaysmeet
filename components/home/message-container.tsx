import cn from 'clsx';
import type {ReactNode} from 'react';
import {useWindow} from "../../lib/context/window-context";

type MessageContainerProps = {
    children: ReactNode;
    className?: string;
    showList: boolean;
};

export function MessageContainer({
                                     children,
                                     className,
                                     showList
                                 }: MessageContainerProps): JSX.Element | null {
    const {width} = useWindow();

    if (showList) return null;
    return (
        <main
            className={cn(
                `hover-animation flex min-h-screen w-full h-full overflow-y-hidden max-w-xl flex-col border-x-0
         border-light-border dark:border-dark-border xs:border-x relative`,
                className
            )} style={{borderLeft: '0px'}}
        >
            {children}
        </main>
    );
}
