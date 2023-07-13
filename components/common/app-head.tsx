import Head from 'next/head';

export function AppHead(): JSX.Element {
    return (
        <Head>
            <title>투밋 - 오늘의만남</title>
            <meta name='og:title' content='투밋 - 오늘의만남'/>
            <link rel='icon' href='/public/favicon.ico'/>
            <link rel='manifest' href='/public/site.webmanifest' key='site-manifest'/>
            <meta name='todaysmeet:site' content='@kysclient'/>
            <meta name='todaysmeet:card' content='summary_large_image'/>
            <meta name="viewport"
                  content="viewport-fit=cover, width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        </Head>
    );
}
