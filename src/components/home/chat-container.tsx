import cn from 'clsx';
import type { ReactNode } from 'react';

type ChatContainerProps = {
    children: ReactNode;
    className?: string;
};

export function ChatContainer({
                                  children,
                                  className
                              }: ChatContainerProps): JSX.Element {
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
