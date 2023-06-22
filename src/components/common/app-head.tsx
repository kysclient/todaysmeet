import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Twitter</title>
      <meta name='og:title' content='BungSin' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='bungsin:site' content='@kysclient' />
      <meta name='bungsin:card' content='summary_large_image' />
    </Head>
  );
}
