import { CustomIcon } from '../ui/custom-icon';
import { SEO } from './seo';
import {NextImage} from "@components/ui/next-image";

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='투밋 - Todaysmeet'
        description='취미, 관심사 다양하게 공유, 함께 하는 소셜미디어'
        image='https://static.toss.im/assets/homepage/newtossim/new_main.png'
      />
        <NextImage
            useSkeleton
            width={100}
            height={100}
            alt={'TossLogo'}
            src={'/logo/logo-toss-symbol-alpha.png'}
        />
      {/*<i>*/}
      {/*  <CustomIcon*/}
      {/*    className='h-20 w-20 text-[#1DA1F2]'*/}
      {/*    iconName='TwitterIcon'*/}
      {/*  />*/}
      {/*</i>*/}
    </main>
  );
}
