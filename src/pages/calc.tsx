import {useAuth} from "@lib/context/auth-context";
import {useModal} from "@lib/hooks/useModal";
import {SEO} from "@components/common/seo";
import {Modal} from "@components/modal/modal";
import {ActionModal} from "@components/modal/action-modal";
import {MainContainer} from "@components/home/main-container";
import {MainHeader} from "@components/home/main-header";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import React, {ReactElement, ReactNode, SetStateAction, useEffect, useState} from "react";
import {HomeLayout, ProtectedLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import Bookmarks from "./bookmarks";
import Spreadsheet, {CellBase, Matrix} from "react-spreadsheet";
import {useTheme} from "@lib/context/theme-context";
import {CalcLayout} from "@components/layout/calc-layout";
import {CalcOptionForm} from "@components/calc-option-form/CalcOptionForm";
import {People} from "@lib/types/people";
import {uuidv4} from "@firebase/util";

export default function Calc(): JSX.Element {
    const [showResult, setShowResult] = useState<boolean>(false);
    const {theme} = useTheme();
    const {user} = useAuth();
    const {open, openModal, closeModal} = useModal();
    const isDarkMode = ['dim', 'dark'].includes(theme);
    const userId = user?.id as string;
    const [data, setData] = useState<Matrix<CellBase<any>>>([
        [{value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}, {value: "Vanilla"}, {value: "Chocolate"}],
        [],
        [],
        [],
        []
    ]);
    const [degree, setDegree] = useState(0);
    const [rowLabels, setRowLabels] = useState<string[] | []>([]);
    const [columnLabels, setColumnLabels] = useState<string[] | []>([]);

    /// options
    const [people, setPeople] = useState<People[]>([{
        name: "",
    }]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [account, setAccount] = useState<string>("")

    const addPerson = () => {
        setPeople([...people, {name: ""}])
    }

    const deletePerson = (idx: number) => {
        setPeople((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(idx, 1);
            return newArray;
        });
    }

    const nameOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let copyArray = [...people];
        copyArray[idx] = {...copyArray[idx], name: e.target.value}
        setPeople(copyArray)
    }

    const selectSetDegree = () => {
        let data: string[] = [];
        for (let i = 0; i < degree; i++) {
            data.push(`${i + 1}차`)
        }
        setColumnLabels(data);
    }

    const showResultPage = () => {
        setShowResult(true)
    }

    useEffect((() => {
        setShowResult(false)
    }), [])

    return (
        <>
            <main className="border-l-0
         border-light-border pb-96 dark:border-dark-border xs:border-l
        hover-animation flex min-h-screen w-full max-w-xl flex-col">

                <SEO title='정산 / BungSin'/>
                <Modal
                    modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
                    open={open}
                    closeModal={closeModal}
                >
                    <ActionModal
                        title='공유하시겠습니까 ?'
                        description='This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.'
                        mainBtnClassName='bg-accent-blue hover:bg-accent-blue/90 active:bg-accent-blue/75 accent-tab
                            focus-visible:bg-accent-blue/90'
                        mainBtnLabel='공유하기'
                        action={() => {
                        }}
                        closeModal={closeModal}
                    />
                </Modal>
                <MainHeader className='flex items-center justify-between'>
                    <div className='-mb-1 flex flex-col'>
                        <h2 className='-mt-1 text-xl font-bold'>정산</h2>
                        <p className='text-xs text-light-secondary dark:text-dark-secondary'>
                            @{user?.username}
                        </p>
                    </div>
                    <Button
                        className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10
                     dark:active:bg-dark-primary/20'
                        onClick={openModal}
                    >
                        <HeroIcon className='h-5 w-5' iconName='CalculatorIcon'/>
                        <ToolTip
                            className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
                            tip='Clear bookmarks'
                        />
                    </Button>
                </MainHeader>
                {
                    !showResult ? <>
                            <section className="p-4 w-[480px]">
                                <div className="mb-6">
                                    <label htmlFor="username-success"
                                           className="block mb-2 text-sm font-medium text-main-accent">총 정산 금액
                                        (1 N)</label>
                                    <div className="flex">
                                       <span
                                           className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        W
                                      </span>
                                        <input type="number" id="website-admin" value={`${totalPrice}`} onChange={(e) => {
                                            setTotalPrice(parseInt(e.target.value))
                                        }}
                                               className="rounded-none rounded-r-lg  bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="총 정산 금액"/>
                                    </div>
                                </div>


                                <div className="flex mb-2 justify-between">
                                    <div>
                                        <label htmlFor="username-success"
                                               className="block text-sm font-medium text-main-accent">모임
                                            인원</label>
                                    </div>

                                    <button type="button" onClick={addPerson}
                                            className="w-15 h-15  bg-main-accent hover:bg-main-accent/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">인원
                                        추가
                                    </button>

                                </div>
                                {
                                    people.map((person, idx) => (
                                        <StyledInput key={idx} idx={idx} value={person.name} deletePerson={deletePerson} nameOnChange={nameOnChange}/>
                                    ))
                                }
                                <div className="mb-6">
                                    <label
                                        className="block mb-2 text-sm font-medium text-main-accent">입금계좌</label>
                                    <input type="text" id="total" placeholder="ex)신한 001-10000-1000" value={account}
                                           onChange={(e) => {
                                               setAccount(e.target.value)
                                           }}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                                        계좌번호는 정산 외의 어떤곳에도 이용되지 않습니다.
                                    </div>
                                </div>

                                <button type="button" onClick={showResultPage}
                                        className="w-full bg-main-accent hover:bg-main-accent/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    결과보기
                                </button>
                            </section>
                        </>
                        :
                        <section className='mt-0.5'>
                            <Spreadsheet
                                darkMode={isDarkMode}
                                rowLabels={['1차', '2차', '3차', '4차', '5차', '6차', '7차']}
                                data={data}

                                onChange={setData}/>
                        </section>
                }
            </main>
        </>
    )
}

interface InputProps {
    value: string;
    nameOnChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
    idx: number;
    deletePerson: (idx: number) => void;
}

const StyledInput = ({value, nameOnChange, idx, deletePerson}: InputProps) => {
    return (
        <>
            <div className="flex mb-6">
                <div className="relative w-full">
                    <input type="text" value={value} onChange={(e) => {
                        nameOnChange(e, idx)
                    }}
                           className="block rounded-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                           placeholder="이름" required/>

                    <button type="button" onClick={() => {
                        deletePerson(idx)
                    }}
                            className="absolute top-0 right-0 p-2.5  bg-main-accent/90 rounded-r-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

Calc.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <CalcLayout>
            {page}
        </CalcLayout>
    </ProtectedLayout>
);
