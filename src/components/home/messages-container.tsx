import cn from 'clsx';
import type {ReactNode} from 'react';
import {useWindow} from "@lib/context/window-context";

type MessagesContainerProps = {
    children: ReactNode;
    className?: string;
    showList: boolean;
};

export function MessagesContainer({
                                      children,
                                      className,
                                      showList
                                  }: MessagesContainerProps): JSX.Element | null {
    const {width} = useWindow();

    if (width < 1024 && !showList) return null;
    return (
        <main
            className={cn(
                `hover-animation flex min-h-screen w-full max-w-sm flex-col border-x-0
         border-light-border dark:border-dark-border xs:border-x`,
                className
            )}
        >
            {children}
        </main>
    );
}
