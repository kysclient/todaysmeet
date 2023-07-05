import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>투밋 - 오늘의만남</title>
      <meta name='og:title' content='투밋 - 오늘의만남' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='todaysmeet:site' content='@kysclient' />
      <meta name='todaysmeet:card' content='summary_large_image' />
    </Head>
  );
}
