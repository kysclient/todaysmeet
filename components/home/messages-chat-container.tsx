import cn from 'clsx';
import type { ReactNode } from 'react';
import {useWindow} from "@lib/context/window-context";

type MessagesChatContainerProps = {
    children: ReactNode;
    className?: string;
};

export function MessagesChatContainer({
                                  children,
                                  className
                              }: MessagesChatContainerProps): JSX.Element | null {

    return (
        <main
            className={cn(
                `hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0
         border-light-border dark:border-dark-border xs:border-x`,
                className
            )}
        >
            {children}
        </main>
    );
}
