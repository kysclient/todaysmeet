
import cn from 'clsx';
import type { ReactNode } from 'react';

type ShortsContainerProps = {
    children: ReactNode;
    className?: string;
};

export function ShortsContainer({
                                  children,
                                  className
                              }: ShortsContainerProps): JSX.Element {
    return (
        <main
            className={cn(
                `hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0
         border-light-border pb-96 dark:border-dark-border`,
                className
            )}
        >
            {children}
        </main>
    );
}
