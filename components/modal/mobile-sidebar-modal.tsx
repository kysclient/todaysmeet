import Link from 'next/link';
import { useAuth } from '../../lib/context/auth-context';
import { useModal } from '../../lib/hooks/useModal';
import { Button } from '../ui/button';
import { UserAvatar } from '../user/user-avatar';
import { NextImage } from '../ui/next-image';
import { UserName } from '../user/user-name';
import { UserUsername } from '../user/user-username';
import { MainHeader } from '../home/main-header';
import { MobileSidebarLink } from '../sidebar/mobile-sidebar-link';
import { HeroIcon } from '../ui/hero-icon';
import { Modal } from './modal';
import { ActionModal } from './action-modal';
import { DisplayModal } from './display-modal';
import type { NavLink } from '../sidebar/sidebar';
import type { User } from '../../lib/types/user';

export type MobileNavLink = Omit<NavLink, 'canBeHidden'>;

const topNavLinks: Readonly<MobileNavLink[]> = [
  {
    href: '/trends',
    linkName: '이달의 장소',
    iconName: 'ChatBubbleBottomCenterTextIcon'
  },
  {
    href: '/bookmarks',
    linkName: '북마크',
    iconName: 'BookmarkIcon'
  },
  // {
  //   href: '/lists',
  //   linkName: 'Lists',
  //   iconName: 'Bars3BottomLeftIcon',
  //   disabled: true
  // },
  {
    href: '/people',
    linkName: '사람 찾아보기',
    iconName: 'UserGroupIcon'
  }
];

const bottomNavLinks: Readonly<MobileNavLink[]> = [
  {
    href: '/settings',
    linkName: '설정',
    iconName: 'Cog8ToothIcon',
    disabled: true
  },
  {
    href: '/help-center',
    linkName: '고객센터',
    iconName: 'QuestionMarkCircleIcon',
    disabled: true
  }
];

type Stats = [string, string, number];

type MobileSidebarModalProps = Pick<
  User,
  | 'name'
  | 'username'
  | 'verified'
  | 'photoURL'
  | 'following'
  | 'followers'
  | 'coverPhotoURL'
> & {
  closeModal: () => void;
};

export function MobileSidebarModal({
  name,
  username,
  verified,
  photoURL,
  following,
  followers,
  coverPhotoURL,
  closeModal
}: MobileSidebarModalProps): JSX.Element {
  const { signOut } = useAuth();

  const {
    open: displayOpen,
    openModal: displayOpenModal,
    closeModal: displayCloseModal
  } = useModal();

  const {
    open: logOutOpen,
    openModal: logOutOpenModal,
    closeModal: logOutCloseModal
  } = useModal();

  const allStats: Readonly<Stats[]> = [
    ['following', '팔로잉', following.length],
    ['followers', '팔로워', followers.length]
  ];

  const userLink = `/user/${username}`;

  return (
    <>
      <Modal
        className='items-center justify-center xs:flex'
        modalClassName='max-w-xl bg-main-background w-full p-8 rounded-2xl hover-animation'
        open={displayOpen}
        closeModal={displayCloseModal}
      >
        <DisplayModal closeModal={displayCloseModal} />
      </Modal>
      <Modal
        modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={logOutOpen}
        closeModal={logOutCloseModal}
      >
        <ActionModal
          useIcon
          focusOnMainBtn
          title='정말로 로그아웃 하시겠습니까?'
          description='You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.'
          mainBtnLabel='로그 아웃'
          action={signOut}
          closeModal={logOutCloseModal}
        />
      </Modal>
      <MainHeader
        useActionButton
        className='flex flex-row-reverse items-center justify-between'
        iconName='XMarkIcon'
        title='Account info'
        tip='Close'
        action={closeModal}
      />
      <section className='mt-0.5 flex flex-col gap-2 px-4'>
        <Link href={userLink} className='blur-picture relative h-20 rounded-md'>
            {coverPhotoURL ? (
              <NextImage
                useSkeleton
                imgClassName='rounded-md'
                src={coverPhotoURL}
                alt={name}
                layout='fill'
              />
            ) : (
              <div className='h-full rounded-md bg-light-line-reply dark:bg-dark-line-reply' />
            )}
        </Link>
        <div className='mb-8 ml-2 -mt-4'>
          <UserAvatar
            className='absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100
                       [&>figure>span]:[transition:200ms]
                       [&:hover>figure>span]:brightness-75'
            username={username}
            src={photoURL}
            alt={name}
            size={60}
          />
        </div>
        <div className='flex flex-col gap-4 rounded-xl bg-main-sidebar-background p-4'>
          <div className='flex flex-col'>
            <UserName
              name={name}
              username={username}
              verified={verified}
              className='-mb-1'
            />
            <UserUsername username={username} />
          </div>
          <div className='text-secondary flex gap-4'>
            {allStats.map(([id, label, stat]) => (
              <Link href={`${userLink}/${id}`} key={id}
                    className='hover-animation flex h-4 items-center gap-1 border-b border-b-transparent
                             outline-none hover:border-b-light-primary focus-visible:border-b-light-primary
                             dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary'
              >
                  <p className='font-bold'>{stat}</p>
                  <p className='text-light-secondary dark:text-dark-secondary'>
                    {label}
                  </p>
              </Link>
            ))}
          </div>
          <i className='h-0.5 bg-light-line-reply dark:bg-dark-line-reply' />
          <nav className='flex flex-col'>
            <MobileSidebarLink
              href={`/user/${username}`}
              iconName='UserIcon'
              linkName='Profile'
            />
            {topNavLinks.map((linkData) => (
              <MobileSidebarLink {...linkData} key={linkData.href} />
            ))}
          </nav>
          <i className='h-0.5 bg-light-line-reply dark:bg-dark-line-reply' />
          <nav className='flex flex-col'>
            {bottomNavLinks.map((linkData) => (
              <MobileSidebarLink bottom {...linkData} key={linkData.href} />
            ))}
            <Button
              className='accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition
                         hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c]
                         dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white'
              onClick={displayOpenModal}
            >
              <HeroIcon className='h-5 w-5' iconName='PaintBrushIcon' />
              디스플레이
            </Button>
            <Button
              className='accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition
                         hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c]
                         dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white'
              onClick={logOutOpenModal}
            >
              <HeroIcon
                className='h-5 w-5'
                iconName='ArrowRightOnRectangleIcon'
              />
              로그아웃
            </Button>
          </nav>
        </div>
      </section>
    </>
  );
}
