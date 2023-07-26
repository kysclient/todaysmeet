import Error from 'next/error';
import { useTheme } from '../lib/context/theme-context';
import { SEO } from '../components/common/seo';
import {NextImage} from "@components/ui/next-image";
import {Button} from "@components/ui/button";
import React from "react";
import {useRouter} from "next/router";
import {CustomIcon} from "@components/ui/custom-icon";

export default function NotFound(): JSX.Element {
  const { theme } = useTheme();
  const router = useRouter()
  const isDarkMode = ['dim', 'dark'].includes(theme);


  return (
    <>
      <SEO
        title='페이지를 찾을 수 없습니다 - 투밋'
        description='페이지를 찾을 수 없습니다 URL을 다시 확인해 주세요.'
        image='/404.svg'
      />
        <div className="min-h-screen flex items-center justify-center">
            <div className="fixed top-0 w-full p-10">
                <button onClick={() => {router.push('/')}}>
                    <CustomIcon className='h-7 w-7' iconName='TwitterIcon'/>
                </button>
            </div>
            <div className="max-w-md p-2 justify-center items-center text-center">
                <NextImage
                    useSkeleton
                    width={'20'}
                    height={'20'}
                    className="mb-5"
                    imgClassName='rounded-full transition group-hover:brightness-75 duration-200
                              group-focus-within:brightness-75'
                    src={'/404.svg'}
                    alt={'page404'}
                />
                <p className="text-center mb-5">
                    요청하신 페이지를 찾을 수 없습니다.<br/>
                    입력하신 주소가 정확한지 다시 한번 확인해주세요.
                </p>

                <button className="text-main-accent" onClick={() => {router.back()}}>
                    이전 페이지로 돌아가기
                </button>

            </div>
        </div>
      {/*<Error statusCode={404} withDarkMode={isDarkMode} />*/}
    </>
  );
}
