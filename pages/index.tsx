import { AuthLayout } from '../components/layout/auth-layout';
import { SEO } from '../components/common/seo';
import { LoginMain } from '../components/login/login-main';
import { LoginFooter } from '../components/login/login-footer';
import type { ReactElement, ReactNode } from 'react';


export default function Login(): JSX.Element {
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto]'>
      <SEO
        title='투밋 - It’s what’s meeting'
        description='취미, 관심사, 맛집에 이르기까지 모든 실시간 이야기를 들어보세요.'
      />
      <LoginMain />
      <LoginFooter />
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
      {page}
  </AuthLayout>
);
