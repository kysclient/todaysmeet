import { Dialog } from '@headlessui/react';
import { CustomIcon } from '../ui/custom-icon';
import { Button } from '../ui/button';
import type { ReactNode, FormEvent } from 'react';

type UsernameModalProps = {
  loading: boolean;
  children: ReactNode;
  available: boolean;
  alreadySet: boolean;
  changeUsername: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  cancelUpdateUsername: () => void;
};

const usernameModalData = [
  {
    title: '당신을 뭐라고 불러야 할까요?',
    description: '귀하의 @username은 고유합니다. 여기에서 언제든지 다시 변경할 수 있습니다.',
    cancelLabel: '건너뛰기'
  },
  {
    title: '사용자 이름을 변경하시겠습니까?',
    description:
      '귀하의 @username은 고유합니다. 여기에서 언제든지 다시 변경할 수 있습니다.',
    cancelLabel: '취소'
  }
] as const;

export function UsernameModal({
  loading,
  children,
  available,
  alreadySet,
  changeUsername,
  cancelUpdateUsername
}: UsernameModalProps): JSX.Element {
  const { title, description, cancelLabel } = usernameModalData[+alreadySet];

  return (
    <form
      className='flex h-full flex-col justify-between'
      onSubmit={changeUsername}
    >
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <i className='mx-auto'>
            <CustomIcon className='h-10 w-10' iconName='TwitterIcon' />
          </i>
          <div className='flex flex-col gap-2'>
            <Dialog.Title className='text-2xl font-bold xs:text-3xl sm:text-4xl'>
              {title}
            </Dialog.Title>
            <Dialog.Description className='text-light-secondary dark:text-dark-secondary'>
              {description}
            </Dialog.Description>
          </div>
        </div>
        {children}
      </div>
      <div className='flex flex-col gap-3 inner:py-2 inner:font-bold'>
        <Button
          className='bg-light-primary text-white transition focus-visible:bg-light-primary/90
                     enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80
                     dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90
                     dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75'
          type='submit'
          loading={loading}
          disabled={!available}
        >
          사용자명 변경
        </Button>
        <Button
          className='border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10
                     active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border
                     dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10
                     dark:active:bg-light-border/20'
          onClick={cancelUpdateUsername}
        >
          {cancelLabel}
        </Button>
      </div>
    </form>
  );
}
