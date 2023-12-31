import {useAuth} from '../../lib/context/auth-context';
import {NextImage} from '../ui/next-image';
import {CustomIcon} from '../ui/custom-icon';
import {Button} from '../ui/button';
import {useModal} from "../../lib/hooks/useModal";
import {Modal} from "../modal/modal";
import {SignInModal} from "../modal/sign-in-modal";
import Link from "next/link";
import Image from "next/image";
import kakao_btn from "/public/assets/pngegg.png"
export function LoginMain(): JSX.Element {
    const {signInWithGoogle} = useAuth();
    const {open, openModal, closeModal} = useModal();

    function kakaoLogin() {
        window.Kakao.Auth.authorize({
            redirectUri: `${process.env.NEXT_PUBLIC_URL}/kakao`
        });
    }


    return (
        <>
            <Modal
                modalClassName='flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[576px]'
                open={open}
                closeModal={closeModal}
            >
                <SignInModal closeModal={closeModal}/>
            </Modal>
            <main className='grid lg:grid-cols-[1fr,45vw]'>
                <div className='relative hidden items-center justify-center  lg:flex'>
                    {/*<NextImage*/}
                    {/*    imgClassName='object-cover'*/}
                    {/*    blurClassName='bg-accent-blue'*/}
                    {/*    src='/assets/twitter-banner.png'*/}
                    {/*    alt='Twitter banner'*/}
                    {/*    layout='fill'*/}
                    {/*    useSkeleton*/}
                    {/*/>*/}
                    <NextImage
                        imgClassName='object-cover'
                        blurClassName='bg-accent-blue'
                        src='https://static.toss.im/assets/homepage/newtossim/new_main.png'
                        alt='Twitter banner'
                        layout='fill'
                        useSkeleton
                    />

                    <i className='absolute'>
                        <NextImage
                            useSkeleton
                            width={100}
                            height={100}
                            alt={'TossLogo'}
                            src={'/logo/logo-toss-symbol-alpha.png'}
                        />
                        {/*<CustomIcon className='h-96 w-96 text-white' iconName='TwitterIcon'/>*/}
                    </i>
                </div>
                <div className='flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center'>
                    <i className='mb-0 self-center lg:mb-10 lg:self-auto'>
                        {/*<CustomIcon*/}
                        {/*    className='-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon'*/}
                        {/*    iconName='TwitterIcon'*/}
                        {/*/>*/}
                        <NextImage
                            useSkeleton
                            width={100}
                            height={100}
                            alt={'TossLogo'}
                            src={'/logo/logo-toss-symbol-alpha.png'}
                        />
                    </i>
                    <div className='flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16'>
                        <h1
                            className='text-3xl before:content-["See_what’s_happening_in_the_meeting_now."]
                       lg:text-6xl lg:before:content-["Let’s_Meet_Today"]'
                        />
                        <h2 className='hidden text-xl lg:block lg:text-3xl'>
                            Join To-Meet today.
                        </h2>
                    </div>
                    <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2'>
                        <div className='grid gap-3 font-bold'>
                            <Button
                                className='flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition
                         hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'
                                onClick={signInWithGoogle}
                            >
                                <CustomIcon iconName='GoogleIcon'/> Google 계정으로 로그인
                            </Button>
                            {/*<Button*/}
                            {/*  className='flex cursor-not-allowed justify-center gap-2 border border-light-line-reply font-bold text-light-primary*/}
                            {/*             transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0*/}
                            {/*             dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'*/}
                            {/*>*/}
                            {/*  <CustomIcon iconName='AppleIcon' /> Sign up with Apple*/}
                            {/*</Button>*/}

                            {/*<Button*/}
                            {/*    className='flex cursor-not-allowed justify-center gap-2 border border-light-line-reply font-bold text-light-primary*/}
                            {/*             transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0*/}
                            {/*             dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'*/}
                            {/*>*/}
                            {/*  <CustomIcon iconName='FaceBookIcon' /> Sign up with FaceBook*/}
                            {/*</Button>*/}

                            <div className='grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2'>
                                <i className='border-b border-light-border dark:border-dark-border'/>
                                <p>or</p>
                                <i className='border-b border-light-border dark:border-dark-border'/>
                            </div>
                         {/*   <Button*/}
                         {/*       className='bg-accent-blue text-white transition hover:brightness-90*/}
                         {/*focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75'*/}
                         {/*   onClick={openModal}*/}
                         {/*   >*/}
                         {/*       이메일 계정으로 로그인*/}
                         {/*   </Button>*/}

                            <Button
                                className='flex items-center bg-[#FEE500] text-[#000000]  justify-center gap-2 border border-light-line-reply font-bold transition
                             dark:border-0
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'
                                onClick={kakaoLogin}
                            >
                                <Image src={kakao_btn} alt={'kakao_btn'} width={25} height={25}  />
                                {/*<CustomIcon iconName='KakaoIcon'/>*/}
                                카카오 계정으로 로그인
                            </Button>


                            <p
                                className='inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary'
                            >
                                회원가입시,{' '}
                                <Link
                                    href='https://help.twitter.com/rules-and-policies/twitter-cookies'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    쿠키 사용
                                </Link>
                                을 포함한
                                <Link
                                    href='https://twitter.com/tos'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    서비스 약관
                                </Link>{' '}
                                및{' '}
                                <Link
                                    href='https://twitter.com/privacy'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    개인정보 보호정책
                                </Link>
                                에 동의하는것 입니다.
                            </p>
                        </div>
                        {/*<div className='flex flex-col gap-3'>*/}
                        {/*    <p className='font-bold'>Already have an account? </p>*/}
                        {/*    <Button*/}
                        {/*        className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10*/}
                        {/* focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20*/}
                        {/* dark:border-light-secondary'*/}
                        {/*        onClick={signInWithGoogle}*/}
                        {/*    >*/}
                        {/*        Sign in*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </main>
        </>
    );
}
