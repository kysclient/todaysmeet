import Head from 'next/head';

export function AppHead(): JSX.Element {
    return (
        <Head>
            <title>투밋 - 오늘의만남</title>
            <meta name='og:title' content='오늘의만남 - 투밋'/>
            <link rel='icon' href="/logo/logo-toss-symbol-alpha.png"/>
            <link rel='manifest' href='/site.webmanifest' key='site-manifest'/>
            <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png"/>
            <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png"/>
            <meta name='todaysmeet:site' content='@kysclient'/>
            <meta name='todaysmeet:card' content='summary_large_image'/>
            <meta name="viewport"
                  content="viewport-fit=cover, width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        </Head>
    );
}
