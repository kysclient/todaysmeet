import {CustomIcon} from "@components/ui/custom-icon";
import {Dialog} from "@headlessui/react";
import {Button} from "@components/ui/button";
import {useAuth} from "@lib/context/auth-context";
import {InputField} from "@components/input/input-field";
import React, {useState} from "react";
import {useModal} from "@lib/hooks/useModal";


export function SignInModal(): JSX.Element {
    const {signInWithEmailPassword, loading} = useAuth()
    const {closeModal} = useModal();

    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const [password, setPassword] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const handleChangePassword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value)
    }


    return (
        <div className='flex h-full flex-col justify-between'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <i className='mx-auto'>
                        <CustomIcon className='h-10 w-10' iconName='TwitterIcon'/>
                    </i>
                    <div className='flex flex-col gap-2'>
                        <Dialog.Title className='text-2xl font-bold xs:text-3xl sm:text-4xl'>
                            계정 로그인 또는 회원가입
                        </Dialog.Title>
                    </div>
                </div>
                <InputField
                    label='이메일'
                    inputId='이메일'
                    inputValue={email}
                    errorMessage={errorMessage}
                    handleChange={handleChangeEmail}
                />

                <InputField
                    label='패스워드'
                    inputId='패스워드'
                    inputValue={password}
                    errorMessage={passwordErrorMessage}
                    handleChange={handleChangePassword}
                />

            </div>
            <div className='flex flex-col gap-3 inner:py-2 inner:font-bold'>
                <Button
                    className='bg-light-primary text-white transition focus-visible:bg-light-primary/90
                     enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80
                     dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90
                     dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75'
                    type='button'
                    loading={loading}
                    disabled={loading}
                    onClick={() => {signInWithEmailPassword(email, password)}}
                >
                    로그인 또는 회원가입
                </Button>
                <Button
                    className='border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10
                     active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border
                     dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10
                     dark:active:bg-light-border/20'
                    onClick={() => {closeModal()}}
                >
                    닫기
                </Button>

                <Dialog.Description className='text-light-secondary dark:text-dark-secondary'>
                    가입하면 <span className="text-main-accent">이용약관</span> 및 <span className="text-main-accent">개인정보 처리방침</span>에 동의하게 됩니다. 벙신은 계정을 안전하게 보호하고 광고를 포함한 맞춤 서비스를 제공하는 등 벙신 개인정보 처리방침에 명시된 목적을 위해 이메일 주소 및 전화번호 등의 내 연락처 정보를 사용할 수 있습니다. <span className="text-main-accent">자세히 알아보기</span>. 이메일 또는 전화번호를 제공하시면 다른 사람들이 이 정보로 내 계정을 찾을 수 있게 됩니다.
                </Dialog.Description>
            </div>
        </div>
    )
}
