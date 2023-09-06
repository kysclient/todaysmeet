import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { Popover } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'clsx';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../lib/context/auth-context';
import { useModal } from '../../lib/hooks/useModal';
import { tweetsCollection } from '../../lib/firebase/collections';
import {
  removeTweet,
  manageReply,
  manageFollow,
  managePinnedTweet,
  manageTotalTweets,
  manageTotalPhotos
} from '../../lib/firebase/utils';
import { delayScroll, preventBubbling, sleep } from '../../lib/utils';
import { Modal } from '../modal/modal';
import { ActionModal } from '../modal/action-modal';
import { Button } from '../ui/button';
import { ToolTip } from '../ui/tooltip';
import { HeroIcon } from '../ui/hero-icon';
import { CustomIcon } from '../ui/custom-icon';
import type { Variants } from 'framer-motion';
import type { Tweet } from '../../lib/types/tweet';
import type { User } from '../../lib/types/user';

export const variants: Variants = {
  initial: { opacity: 0, y: -25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 0.4 }
  },
  exit: { opacity: 0, y: -25, transition: { duration: 0.2 } }
};

type TweetActionsProps = Pick<Tweet, 'createdBy'> & {
  isOwner: boolean;
  ownerId: string;
  tweetId: string;
  username: string;
  parentId?: string;
  hasImages: boolean;
  viewTweet?: boolean;
};

type PinModalData = Record<'title' | 'description' | 'mainBtnLabel', string>;

const pinModalData: Readonly<PinModalData[]> = [
  {
    title: 'Pin Tweet to from profile?',
    description:
      'This will appear at the top of your profile and replace any previously pinned Tweet.',
    mainBtnLabel: 'Pin'
  },
  {
    title: 'Unpin Tweet from profile?',
    description:
      'This will no longer appear automatically at the top of your profile.',
    mainBtnLabel: 'Unpin'
  }
];

export function TweetActions({
  isOwner,
  ownerId,
  tweetId,
  parentId,
  username,
  hasImages,
  viewTweet,
  createdBy
}: TweetActionsProps): JSX.Element {
  const { user, isAdmin } = useAuth();
  const { push } = useRouter();

  const {
    open: removeOpen,
    openModal: removeOpenModal,
    closeModal: removeCloseModal
  } = useModal();

  const {
    open: pinOpen,
    openModal: pinOpenModal,
    closeModal: pinCloseModal
  } = useModal();

  const { id: userId, following, pinnedTweet } = user as User;

  const isInAdminControl = isAdmin && !isOwner;
  const tweetIsPinned = pinnedTweet === tweetId;

  const handleRemove = async (): Promise<void> => {
    if (viewTweet)
      if (parentId) {
        const parentSnapshot = await getDoc(doc(tweetsCollection, parentId));
        if (parentSnapshot.exists()) {
          await push(`/tweet/${parentId}`, undefined, { scroll: false });
          delayScroll(200)();
          await sleep(50);
        } else await push('/home');
      } else await push('/home');

    await Promise.all([
      removeTweet(tweetId),
      manageTotalTweets('decrement', ownerId),
      hasImages && manageTotalPhotos('decrement', createdBy),
      parentId && manageReply('decrement', parentId)
    ]);

    toast.success(
      `${isInAdminControl ? `@${username}'s` : '당신의'} 게시글이 삭제되었습니다`
    );
    removeCloseModal();
  };

  const handlePin = async (): Promise<void> => {
    await managePinnedTweet(tweetIsPinned ? 'unpin' : 'pin', userId, tweetId);
    toast.success(
      `게시글이 프로필에 ${tweetIsPinned ? '고정 취소' : '고정'} 되었습니다`
    );
    pinCloseModal();
  };

  const handleFollow =
    (closeMenu: () => void, ...args: Parameters<typeof manageFollow>) =>
    async (): Promise<void> => {
      const [type] = args;

      closeMenu();
      await manageFollow(...args);

      toast.success(
        ` @${username}을 ${type === 'follow' ? '팔로우' : '언팔로우'}`
      );
    };

  const userIsFollowed = following.includes(createdBy);

  const currentPinModalData = useMemo(
    () => pinModalData[+tweetIsPinned],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pinOpen]
  );

  return (
    <>
      <Modal
        modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={removeOpen}
        closeModal={removeCloseModal}
      >
        <ActionModal
          title='피드를 삭제하시겠습니까?'
          description={`이 작업은 취소할 수 없으며 ${
            isInAdminControl ? `@${username}의 ` : '당신의'
          } 프로필과, ${
              isInAdminControl ? `@${username}` : '당신'
          }을 팔로우하는 모든 계정의 타임라인 및,
           투밋 검색 결과에서 제거됩니다.`}
          mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab
                            focus-visible:bg-accent-red/90'
          mainBtnLabel='삭제'
          focusOnMainBtn
          action={handleRemove}
          closeModal={removeCloseModal}
        />
      </Modal>
      <Modal
        modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={pinOpen}
        closeModal={pinCloseModal}
      >
        <ActionModal
          {...currentPinModalData}
          mainBtnClassName='bg-light-primary hover:bg-light-primary/90 active:bg-light-primary/80 dark:text-light-primary
                            dark:bg-light-border dark:hover:bg-light-border/90 dark:active:bg-light-border/75'
          focusOnMainBtn
          action={handlePin}
          closeModal={pinCloseModal}
        />
      </Modal>
      <Popover>
        {({ open, close }): JSX.Element => (
          <>
            <Popover.Button
              as={Button}
              className={cn(
                `main-tab group group absolute top-2 right-2 p-2 
                 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10
                 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20`,
                open && 'bg-accent-blue/10 [&>div>svg]:text-accent-blue'
              )}
            >
              <div className='group relative'>
                <HeroIcon
                  className='h-5 w-5 text-light-secondary group-hover:text-accent-blue
                             group-focus-visible:text-accent-blue dark:text-dark-secondary/80'
                  iconName='EllipsisHorizontalIcon'
                />
                {!open && <ToolTip tip='더보기' />}
              </div>
            </Popover.Button>
            <AnimatePresence>
              {open && (
                <Popover.Panel
                  className='menu-container group absolute top-[50px] right-2 whitespace-nowrap text-light-primary
                             dark:text-dark-primary'
                  as={motion.div}
                  {...variants}
                  static
                >
                  {(isAdmin || isOwner) && (
                    <Popover.Button
                      className='accent-tab flex w-full gap-3 rounded-md rounded-b-none p-4 text-accent-red
                                 hover:bg-main-sidebar-background'
                      as={Button}
                      onClick={preventBubbling(removeOpenModal)}
                    >
                      <HeroIcon iconName='TrashIcon' />
                      삭제
                    </Popover.Button>
                  )}
                  {isOwner ? (
                    <Popover.Button
                      className='accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background'
                      as={Button}
                      onClick={preventBubbling(pinOpenModal)}
                    >
                      {tweetIsPinned ? (
                        <>
                          <CustomIcon iconName='PinOffIcon' />
                          프로필 고정 취소
                        </>
                      ) : (
                        <>
                          <CustomIcon iconName='PinIcon' />
                          프로필 고정
                        </>
                      )}
                    </Popover.Button>
                  ) : userIsFollowed ? (
                    <Popover.Button
                      className='accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background'
                      as={Button}
                      onClick={preventBubbling(
                        handleFollow(close, 'unfollow', userId, createdBy)
                      )}
                    >
                      <HeroIcon iconName='UserMinusIcon' />
                      언팔로우 @{username}
                    </Popover.Button>
                  ) : (
                    <Popover.Button
                      className='accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background'
                      as={Button}
                      onClick={preventBubbling(
                        handleFollow(close, 'follow', userId, createdBy)
                      )}
                    >
                      <HeroIcon iconName='UserPlusIcon' />
                      팔로우 @{username}
                    </Popover.Button>
                  )}
                </Popover.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </>
  );
}
