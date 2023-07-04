import { SWRConfig } from 'swr';
import { Toaster } from 'react-hot-toast';
import { fetchJSON } from '@lib/fetch';
import { WindowContextProvider } from '@lib/context/window-context';
import { Sidebar } from '@components/sidebar/sidebar';
import type { DefaultToastOptions } from 'react-hot-toast';
import type { LayoutProps } from './common-layout';

const toastOptions: DefaultToastOptions = {
    style: {
        padding:'10px 25px',
        borderRadius: '25px',
        background: '#333',
        color: '#fff',
    },
    success: { duration: 2000 }
};

export function MessageLayout({ children }: LayoutProps): JSX.Element {
    return (
        <div className='flex w-full justify-center gap-0 lg:gap-4'>
            <WindowContextProvider>
                <div className="fixed top-0 left-0 w-full flex justify-center">
                    <div className="flex">
                    <div className="w-1/3">
                    <Sidebar />
                    </div>
                    <div className="w-1/3">
                    <SWRConfig value={{ fetcher: fetchJSON }}>{children}</SWRConfig>
                    </div>
                    </div>
                </div>
            </WindowContextProvider>
            <Toaster
                position='top-center'
                toastOptions={toastOptions}
                containerClassName='mb-12 xs:mb-0'
            />
        </div>
    );
}
