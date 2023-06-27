import Error from 'next/error';
import { useTheme } from '@lib/context/theme-context';
import { SEO } from '@components/common/seo';

export default function NotFound(): JSX.Element {
  const { theme } = useTheme();

  const isDarkMode = ['dim', 'dark'].includes(theme);

  return (
    <>
      <SEO
        title='페이지를 찾을 수 없습니다 / BungSin'
        description='페이지를 찾을 수 없습니다 URL을 다시 확인해 주세요.'
        image='/404.svg'
      />
      <Error statusCode={404} withDarkMode={isDarkMode} />
    </>
  );
}
