import {UserAvatar} from '../user/user-avatar';
import {UserName} from '../user/user-name';
import {InputThemeRadio} from '../input/input-theme-radio';
import {Button} from '../ui/button';
import {InputAccentRadio} from '../input/input-accent-radio';
import type {Theme, Accent} from '../../lib/types/theme';
import {NextImage} from "@components/ui/next-image";

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

const think = [
    '"나 자신을 알기 위해서는 다른 사람들과의 만남이 필요하다." - 아리스토텔레스(Aristotle)',
    '"다른 사람을 만나는 것은 나 자신을 발견하는 것이다." - 살트르(Sartre)',
    '"만남은 우리가 서로에게서 배우고 성장할 수 있는 기회이다." - 칸트(Kant)',
    '"만남은 우리가 인간으로서의 존재를 실현하는 과정이다." - 헤겔(Hegel)',
    '"만남은 우리가 사회적 연결성과 상호의존성을 경험하는 방법이다." - 레빈아스(Levinas)',
    '"만남은 우리의 삶에 의미와 가치를 부여하는 중요한 요소이다." - 히데가르(Hegel)'
]

function generateRandomNUmber() {
    return Math.floor(Math.random() * 6);

}

export function DisplayModal({closeModal}: DisplayModalProps): JSX.Element {
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
                    {/*<UserAvatar src='/assets/twitter-avatar.jpg' alt='Twitter'/>*/}
                    <NextImage
                        useSkeleton
                        width={50}
                        height={50}
                        alt={'TossLogo'}
                        src={'/logo/logo-toss-symbol-alpha.png'}
                    />

                    <div>
                        <div className='flex gap-1'>
                            <UserName verified name='투밋'/>
                            <p className='text-light-secondary dark:text-dark-secondary'>
                                @Todaysmeet
                            </p>
                            {/*<div className='flex gap-1 text-light-secondary dark:text-dark-secondary'>*/}
                            {/*  <i>·</i>*/}
                            {/*  <p>26m</p>*/}
                            {/*</div>*/}
                        </div>
                        <p className='whitespace-pre-line break-words'>
                            {think[generateRandomNUmber()]}{' '}
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
                        <InputAccentRadio type={accentColor} key={accentColor}/>
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
                        <InputThemeRadio type={themeType} label={label} key={themeType}/>
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
