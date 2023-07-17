import { CustomIcon } from '../ui/custom-icon';
import { SEO } from './seo';

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='투밋 - Todaysmeet'
        description='취미, 관심사 다양하게 공유, 함께 하는 소셜미디어'
        image='/home.png'
      />
      <i>
        <CustomIcon
          className='h-20 w-20 text-[#1DA1F2]'
          iconName='TwitterIcon'
        />
      </i>
    </main>
  );
}
