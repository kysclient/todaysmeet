import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {People} from "@lib/types/people";
import {uuidv4} from "@firebase/util";

interface Props {
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    addPerson: () => void;
    people: People[];
    setPeople: Dispatch<SetStateAction<People[]>>
    deletePerson: (idx: number) => void;
    account: string;
    setAccount: Dispatch<SetStateAction<string>>
    showResult: () => void;

}


export function CalcOptionForm({
                                   totalPrice,
                                   setTotalPrice,
                                   addPerson,
                                   people,
                                   setPeople,
                                   deletePerson,
                                   account,
                                   setAccount,
                                   showResult
                               }: Props): JSX.Element {



    return (
        <>
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
                        <div className="flex mb-6" key={person.name + idx + uuidv4()}>
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" value={person.name} onChange={(e) => {
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

                <button type="submit" onClick={showResult}
                        className="w-full bg-main-accent hover:bg-main-accent/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    결과보기
                </button>
            </section>
        </>
    )

}
