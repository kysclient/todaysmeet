import { HeroIcon } from './hero-icon';

type ErrorProps = {
  message?: string;
};

export function Error({ message }: ErrorProps): JSX.Element {
  return (
    <div
      className='flex flex-col items-center justify-center
                 gap-2 py-5 px-3 text-light-secondary dark:text-dark-secondary'
    >
      <i>
        <HeroIcon className='h-10 w-10' iconName='ExclamationTriangleIcon' />
      </i>
      <p>{message ?? '정보를 불러 올 수 없습니다. 다시 시도해주세요.'}</p>
    </div>
  );
}
