import {useAuth} from "@lib/context/auth-context";
import {useRouter} from "next/router";
import React, {ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {ProtectedLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import {MainHeader} from "@components/home/main-header";
import {MessagesContainer} from "@components/home/messages-container";
import {useWindow} from "@lib/context/window-context";
import {useInfiniteScroll} from "@lib/hooks/useInfiniteScroll";
import {chatRoomMessagesCollection, chatRoomsCollection, usersCollection} from "@lib/firebase/collections";
import {doc, getDoc, where} from "firebase/firestore";
import {Loading} from "@components/ui/loading";
import {Error} from "@components/ui/error";
import {motion} from "framer-motion";
import {variants} from "@components/aside/aside-trends";
import {MessageCard} from "@components/messages/message-card";
import {User} from "@lib/types/user";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import {UserWithChatRooms} from "@lib/types/chatRooms";
import {MainContainer} from "@components/home/main-container";
import {MessageSelect} from "@components/messages/message-select";
import {UserMessageProfile} from "@components/user/user-message-profile";
import {MessageBox} from "@components/messages/message-box";
import {MessageInput} from "@components/messages/message-input";
import {MessagesChatContainer} from "@components/home/messages-chat-container";

export default function Messages(): JSX.Element {
    const {user} = useAuth();
    const userId = user?.id as string;
    const {back} = useRouter();
    const {width} = useWindow();
    const [cardUser, setCardUser] = useState<User>()
    const {isMobile} = useWindow();
    const [myChatList, setMyChatList] = useState<UserWithChatRooms[]>([])
    const {data, loading, LoadMore} = useInfiniteScroll(
        chatRoomsCollection,
        [where('participants', 'array-contains', user?.id)],
        {allowNull: true, preserve: true},
        {marginBottom: 500}
    );
    const [selectedData, setSelectedData] = useState<UserWithChatRooms | null>(null)
    const [selected, setSelected] = useState<number>(-1);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
    const [showScrollDownButton, setShowScrollDownButton] =
        useState<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [showList, setShowList] = useState<boolean>(false)

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const {scrollTop, scrollHeight, clientHeight} =
                chatContainerRef.current;
            const bottomTolerance = 30;

            if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
                setAutoScrollEnabled(false);
                setShowScrollDownButton(true);
            } else {
                setAutoScrollEnabled(true);
                setShowScrollDownButton(false);
            }
        }
    };

    const handleScrollDown = () => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current?.scrollHeight,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAutoScrollEnabled(entry.isIntersecting);
                if (entry.isIntersecting) {
                    textareaRef.current?.focus();
                }
            },
            {
                root: null,
                threshold: 0.5,
            },
        );
        const messagesEndElement = messagesEndRef.current;
        if (messagesEndElement) {
            observer.observe(messagesEndElement);
        }
        return () => {
            if (messagesEndElement) {
                observer.unobserve(messagesEndElement);
            }
        };
    }, [messagesEndRef]);


    useEffect(() => {
        createUserList()
    }, [data])

    useEffect(() => {
        console.log('selectedData : ', selectedData)
    }, [selectedData])


    const createUserList = useCallback(async () => {
        let myData = [];
        if (data && userId) {
            for (const item of data) {
                const chatUserId = item.participants.find((item) => item !== userId);
                const newUser = (await getDoc(doc(usersCollection, chatUserId))).data();
                const result = {
                    user: newUser as User,
                    chatRoom: item
                }
                myData.push(result);
            }
            setMyChatList(myData)
        }
    }, [data, userId])

    return (
        <>
            <MessagesContainer showList={showList} className="max-h-full">
                <MainHeader title='메세지'/>
                <section>
                    {loading ? (
                        <Loading className='mt-5'/>
                    ) : !data ? (
                        <Error message='정보를 불러 올 수 없습니다. 다시 시도해주세요.'/>
                    ) : (
                        <>
                            <motion.div className='mt-0.5' {...variants}>
                                {myChatList.length > 0 ?
                                    myChatList.map((data, idx) => (
                                        data &&
                                        <>
                                            <MessageCard key={data.user.id}
                                                         idx={idx}
                                                         data={data}
                                                         setSelected={setSelected}
                                                         selected={selected}
                                                         setSelectedData={setSelectedData}
                                                         selectedData={selectedData}
                                                         cardUser={cardUser}
                                                         setCardUser={setCardUser}
                                                         setShowList={setShowList}
                                            />
                                        </>
                                    ))
                                    : <Loading
                                        iconClassName='h-5 w-5'
                                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    />
                                }
                            </motion.div>
                            <LoadMore/>
                        </>
                    )}
                </section>
            </MessagesContainer>

            <MessagesChatContainer className="border-none w-full">
                <section className="h-screen flex flex-col">
                    <MainHeader useActionButton={width < 1024} action={() => {
                    }}
                                className={`flex items-center ${width < 1024 ? "justify-between" : "justify-end"}`}>
                        <Button
                            className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                           active:bg-light-primary/20 dark:hover:bg-dark-primary/10
                           dark:active:bg-dark-primary/20'
                        >
                            <HeroIcon className='h-5 w-5' iconName='SparklesIcon'/>
                            <ToolTip tip='대화 정보'/>
                        </Button>
                    </MainHeader>
                    {
                        !selectedData ?
                            <MessageSelect/>
                            :
                            <>
                                <div
                                    className="custom-scrollbar flex-grow space-y-4 p-4 overflow-y-auto scrollbar-thumb-main-sidebar-background scrollbar-track-main-background scrollbar-thin"
                                >
                                    <style>
                                        {
                                            `
                                             .custom-scrollbar::-webkit-scrollbar-thumb {
                                            border-radius: 4px;
                                             }
                                            `
                                        }
                                    </style>
                                    <div className="pt-12">
                                        <UserMessageProfile
                                            user={selectedData.user}
                                        />
                                    </div>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 23, 4, 23, 6, 6,].map((item, idx) => (
                                            <MessageBox
                                                key={item * idx}
                                            />
                                        ))
                                    }
                                    <div
                                        className="h-[100px] bg-main-background"
                                        ref={messagesEndRef}
                                    />
                                </div>
                                <div className="">
                                    <MessageInput
                                        onScrollDownClick={handleScrollDown}
                                        textareaRef={textareaRef}
                                        showScrollDownButton={showScrollDownButton}/>
                                </div>
                            </>
                    }
                </section>

                {/*<section*/}
                {/*    style={{height: 'calc(100vh - 100px)'}}*/}
                {/*    className="pt-2 pr-4 w-full scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 relative overflow-y-scroll">*/}
                {/*    <MainHeader useActionButton={width < 1024} action={() => {*/}
                {/*    }}*/}
                {/*                className={`flex items-center ${width < 1024 ? "justify-between" : "justify-end"}`}>*/}
                {/*        <Button*/}
                {/*            className='dark-bg-tab group relative p-2 hover:bg-light-primary/10*/}
                {/*           active:bg-light-primary/20 dark:hover:bg-dark-primary/10*/}
                {/*           dark:active:bg-dark-primary/20'*/}
                {/*        >*/}
                {/*            <HeroIcon className='h-5 w-5' iconName='SparklesIcon'/>*/}
                {/*            <ToolTip tip='대화 정보'/>*/}
                {/*        </Button>*/}
                {/*    </MainHeader>*/}

                {/*    {*/}
                {/*        !selectedData ? (*/}
                {/*                <MessageSelect/>*/}
                {/*            ) :*/}
                {/*            <>*/}
                {/*                <div className="pt-12">*/}
                {/*                    <UserMessageProfile*/}
                {/*                        user={selectedData.user}*/}
                {/*                    />*/}
                {/*                    <div className="flex">*/}
                {/*                        <div className="flex-1 p-4">*/}
                {/*                            <div className="flex flex-col gap-2 ">*/}
                {/*                                {*/}
                {/*                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 23, 4, 23, 6, 6,].map((item, idx) => (*/}
                {/*                                        <MessageBox*/}
                {/*                                            key={item * idx}*/}
                {/*                                        />*/}
                {/*                                    ))*/}
                {/*                                }*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div*/}
                {/*                        className="h-[162px] bg-main-background"*/}
                {/*                        ref={messagesEndRef}*/}
                {/*                    />*/}
                {/*                    <MessageInput*/}
                {/*                        onScrollDownClick={handleScrollDown}*/}
                {/*                        textareaRef={textareaRef}*/}
                {/*                        showScrollDownButton={showScrollDownButton}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </>*/}
                {/*    }*/}
                {/*</section>*/}
            </MessagesChatContainer>

        </>
    )

}

Messages.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <MainLayout>
            {page}
        </MainLayout>
    </ProtectedLayout>
)
