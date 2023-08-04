import { useAuth } from '../../lib/context/auth-context';
import { useModal } from '../../lib/hooks/useModal';
import { manageFollow } from '../../lib/firebase/utils';
import { preventBubbling } from '../../lib/utils';
import { Modal } from '../modal/modal';
import { ActionModal } from '../modal/action-modal';
import { Button } from './button';

type FollowButtonProps = {
  userTargetId: string;
  userTargetUsername: string;
};

export function FollowButton({
  userTargetId,
  userTargetUsername
}: FollowButtonProps): JSX.Element | null {
  const { user } = useAuth();
  const { open, openModal, closeModal } = useModal();

  if (user?.id === userTargetId) return null;

  const { id: userId, following } = user ?? {};

  const handleFollow = (): Promise<void> =>
    manageFollow('follow', userId as string, userTargetId);

  const handleUnfollow = async (): Promise<void> => {
    await manageFollow('unfollow', userId as string, userTargetId);
    closeModal();
  };

  const userIsFollowed = !!following?.includes(userTargetId ?? '');

  return (
    <>
      <Modal
        modalClassName='flex flex-col gap-6 max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={open}
        closeModal={closeModal}
      >
        <ActionModal
          title={`@${userTargetUsername} 언팔로우 하시겠습니까?`}
          description='그들의 게시물은 더 이상 홈 타임라인에 표시되지 않습니다. 프로필은 계속 볼 수 있습니다.'
          mainBtnLabel='언팔로우'
          action={handleUnfollow}
          closeModal={closeModal}
        />
      </Modal>
      {userIsFollowed ? (
        <Button
          className='dark-bg-tab min-w-[106px] self-start border border-light-line-reply px-4 py-1.5
                     font-bold hover:border-accent-red hover:bg-accent-red/10 hover:text-accent-red
                     hover:before:content-["언팔로우"] inner:hover:hidden dark:border-light-secondary'
          onClick={preventBubbling(openModal)}
        >
          <span>팔로잉</span>
        </Button>
      ) : (
        <Button
          className='self-start border bg-light-primary px-4 py-1.5 font-bold text-white hover:bg-light-primary/90
                     focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border
                     dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90
                     dark:active:bg-light-border/75'
          onClick={preventBubbling(handleFollow)}
        >
          팔로우
        </Button>
      )}
    </>
  );
}
