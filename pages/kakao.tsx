import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useCallback, useEffect} from 'react';
import {Loading} from "@components/ui/loading";
import {useAuth} from "@lib/context/auth-context";
import {SEO} from "@components/common/seo";

interface ResponseType {
    ok: boolean;
    error?: any;
}

const Kakao: NextPage = () => {
    const router = useRouter();
    const {code: authCode, error: kakaoServerError} = router.query;
    const {signInWithEmailPassword} = useAuth();

    const loginHandler = useCallback(
        async (code: string | string[]) => {
            const response = await fetch('/api/auth/kakao-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    authCode: code,
                }),
            })

            if (response.ok) {
                if (response.body) {
                    const decoder = new TextDecoder()
                    const reader = response.body.getReader()
                    const {value, done} = await reader.read()
                    const userInfo = JSON.parse(decoder.decode(value!))
                    signInWithEmailPassword(userInfo.user.kakao_account.email, userInfo.user.id.toString(), userInfo.user)
                    await router.push('/');
                }

            } else {
                await router.push('/404');
            }
        },
        [router]
    );

    useEffect(() => {
        if (authCode) {
            loginHandler(authCode);

        } else if (kakaoServerError) {
            router.push('/404');
        }
    }, [loginHandler, authCode, kakaoServerError, router]);

    return (
        <>
            <SEO title='카카오 로그인 - 투밋'/>
            <Loading
                iconClassName='h-5 w-5'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            />
        </>
    );
};

export default Kakao
