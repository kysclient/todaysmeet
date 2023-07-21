import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from './user-header';
import { UserNavLink } from './user-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name: '피드', path: '' },
    { name: '고정 피드 & 댓글', path: 'with_replies' },
    { name: '미디어', path: 'media' },
    { name: '좋아요', path: 'likes' }
  ],
  [
    { name: '팔로잉', path: 'following' },
    { name: '팔로워', path: 'followers' }
  ]
] as const;

export function UserNav({ follow }: UserNavProps): JSX.Element {
  const userNav = allNavs[+!!follow];

  return (
    <motion.nav
      className={cn(
        `hover-animation flex justify-between overflow-y-auto
         border-b border-light-border dark:border-dark-border`,
        follow && 'mt-1 mb-0.5'
      )}
      {...variants}
      exit={undefined}
    >
      {userNav.map(({ name, path }) => (
        <UserNavLink name={name} path={path} key={name} />
      ))}
    </motion.nav>
  );
}
