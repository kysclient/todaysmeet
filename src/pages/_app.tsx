import '@styles/globals.scss';

import { AuthContextProvider } from '@lib/context/auth-context';
import { ThemeContextProvider } from '@lib/context/theme-context';
import { AppHead } from '@components/common/app-head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Router, {useRouter} from "next/router";
import NProgress from "nprogress";
import {useLoading} from "@lib/hooks/useLoading";
import {useEffect} from "react";


Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);
  const useRoute = useRouter();
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement!.scrollTop = 0;
    }, [useRoute.pathname]);
  return (
    <>
      <AppHead />
            <AuthContextProvider>
                <ThemeContextProvider>
                    {getLayout(<Component {...pageProps} />)}
                </ThemeContextProvider>
            </AuthContextProvider>
    </>
  );
}
