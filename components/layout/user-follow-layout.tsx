import { motion } from 'framer-motion';
import { useUser } from '../../lib/context/user-context';
import { Loading } from '../ui/loading';
import { UserNav } from '../user/user-nav';
import { variants } from '../user/user-header';
import type { LayoutProps } from './common-layout';

export function UserFollowLayout({ children }: LayoutProps): JSX.Element {
  const { user: userData, loading } = useUser();

  return (
    <>
      {!userData ? (
        <motion.section {...variants}>
          {loading ? (
            <Loading className='mt-5 w-full' />
          ) : (
            <div className='w-full p-8 text-center'>
              <p className='text-3xl font-bold'>유저 정보를 찾을 수 없습니다.</p>
              <p className='text-light-secondary dark:text-dark-secondary'>
                다시 검색해주세요.
              </p>
            </div>
          )}
        </motion.section>
      ) : (
        <>
          <UserNav follow />
          {children}
        </>
      )}
    </>
  );
}
