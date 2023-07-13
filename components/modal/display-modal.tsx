import { UserAvatar } from '../user/user-avatar';
import { UserName } from '../user/user-name';
import { InputThemeRadio } from '../input/input-theme-radio';
import { Button } from '../ui/button';
import { InputAccentRadio } from '../input/input-accent-radio';
import type { Theme, Accent } from '../../lib/types/theme';

type DisplayModalProps = {
  closeModal: () => void;
};

const themes: Readonly<[Theme, string][]> = [
  ['light', '라이트'],
  ['dim', '딤'],
  ['dark', '다크']
];

const accentsColor: Readonly<Accent[]> = [
  'blue',
  'yellow',
  'pink',
  'purple',
  'orange',
  'green'
];

export function DisplayModal({ closeModal }: DisplayModalProps): JSX.Element {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex flex-col gap-3 text-center'>
        <h2 className='text-2xl font-bold'>커스텀 테마를 적용시켜보새요</h2>
        <p className='text-light-secondary dark:text-dark-secondary'>
          적용시킨 테마는 계정에 저장됩니다.
        </p>
      </div>
      <article
        className='hover-animation mx-8 rounded-2xl border
                   border-light-border px-4 py-3 dark:border-dark-border'
      >
        <div className='grid grid-cols-[auto,1fr] gap-3'>
          <UserAvatar src='/assets/twitter-avatar.jpg' alt='Twitter' />
          <div>
            <div className='flex gap-1'>
              <UserName verified name='투밋' />
              <p className='text-light-secondary dark:text-dark-secondary'>
                @Todaysmeet
              </p>
              {/*<div className='flex gap-1 text-light-secondary dark:text-dark-secondary'>*/}
              {/*  <i>·</i>*/}
              {/*  <p>26m</p>*/}
              {/*</div>*/}
            </div>
            <p className='whitespace-pre-line break-words'>
              At the heart of Twitter are short messages called Tweets — just
              like this one — which can include photos, videos, links, text,
              hashtags, and mentions like{' '}
              <span className='text-main-accent'>@todaysmeet</span>.
            </p>
          </div>
        </div>
      </article>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-sm font-bold text-light-secondary dark:text-dark-secondary'>
          색
        </p>
        <div
          className='hover-animation grid grid-cols-3 grid-rows-2 justify-items-center gap-3
                     rounded-2xl bg-main-sidebar-background py-3 xs:grid-cols-6 xs:grid-rows-none'
        >
          {accentsColor.map((accentColor) => (
            <InputAccentRadio type={accentColor} key={accentColor} />
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-sm font-bold text-light-secondary dark:text-dark-secondary'>
          배경
        </p>
        <div
          className='hover-animation grid grid-rows-3 gap-3 rounded-2xl bg-main-sidebar-background
                     px-4 py-3 xs:grid-cols-3 xs:grid-rows-none'
        >
          {themes.map(([themeType, label]) => (
            <InputThemeRadio type={themeType} label={label} key={themeType} />
          ))}
        </div>
      </div>
      <Button
        className='bg-main-accent px-4 py-1.5 font-bold
                   text-white hover:bg-main-accent/90 active:bg-main-accent/75'
        onClick={closeModal}
      >
        완료
      </Button>
    </div>
  );
}