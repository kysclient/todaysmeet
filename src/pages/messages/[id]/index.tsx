import {useAuth} from "@lib/context/auth-context";
import {useRouter} from "next/router";
import React, {ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {ProtectedLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import {MainHeader} from "@components/home/main-header";
import {MessagesContainer} from "@components/home/messages-container";
import {MessageContainer} from "@components/home/message-container";
import {useWindow} from "@lib/context/window-context";
import {useInfiniteScroll} from "@lib/hooks/useInfiniteScroll";
import {chatRoomMessagesCollection, chatRoomsCollection, usersCollection} from "@lib/firebase/collections";
import {doc, getDoc, where} from "firebase/firestore";
import {Loading} from "@components/ui/loading";
import {Error} from "@components/ui/error";
import {motion} from "framer-motion";
import {variants} from "@components/aside/aside-trends";
import {UserCard} from "@components/user/user-card";
import {MessageCard} from "@components/messages/message-card";
import {Messages as MessagesType} from "@lib/types/messages";
import {UserMessageProfile} from "@components/user/user-message-profile";
import {User} from "@lib/types/user";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import {t} from "i18next";
import {MessageInput} from "@components/messages/message-input";
import {MessageBox} from "@components/messages/message-box";
import {MessageSelect} from "@components/messages/message-select";
import {MessageLayout} from "@components/layout/message-layout";
import {UserWithChatRooms} from "@lib/types/chatRooms";
import {MainContainer} from "@components/home/main-container";


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

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

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
            top: chatContainerRef.current.scrollHeight,
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



    const createUserList = useCallback(  async () => {
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
            <MessagesContainer showList={showList}>
                <MainHeader title='메세지'/>
                <section>
                    {loading ? (
                        <Loading className='mt-5'/>
                    ) : !data ? (
                        <Error message='정보를 불러 올 수 없습니다. 다시 시도해주세요.'/>
                    ) : (
                        <>
                            <motion.div className='mt-0.5' {...variants}>
                                { myChatList.length > 0 ?
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
                                :  <Loading
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

            <MainContainer>
                <section>
                    some thing
                </section>
            </MainContainer>

            {/*<MessageContainer showList={showList}>*/}
            {/*    <MainHeader useActionButton={width < 1024} action={() => {*/}
            {/*        setSelectedData(null);*/}
            {/*        setSelected(-1);*/}
            {/*        setShowList(true);*/}
            {/*    }}*/}
            {/*                className={`flex items-center ${width < 1024 ? "justify-between" : "justify-end"}`}>*/}
            {/*        <Button*/}
            {/*            className='dark-bg-tab group relative p-2 hover:bg-light-primary/10*/}
            {/*       active:bg-light-primary/20 dark:hover:bg-dark-primary/10*/}
            {/*       dark:active:bg-dark-primary/20'*/}
            {/*        >*/}
            {/*            <HeroIcon className='h-5 w-5' iconName='SparklesIcon'/>*/}
            {/*            <ToolTip tip='대화 정보'/>*/}
            {/*        </Button>*/}
            {/*    </MainHeader>*/}
            {/*    <section className="pt-2 pr-4 h-full">*/}

            {/*        {*/}
            {/*            !selectedData ? (*/}
            {/*                    <MessageSelect />*/}
            {/*                ) :*/}
            {/*                <>*/}
            {/*                    <div>*/}
            {/*                        <UserMessageProfile*/}
            {/*                            user={cardUser}*/}
            {/*                        />*/}
            {/*                        <div className="flex flex-col">*/}
            {/*                            <div className="flex-1 overflow-y-auto p-4">*/}
            {/*                                <div className="flex flex-col gap-2">*/}
            {/*                                    <MessageBox*/}
            {/*                                    />*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="h-[162px] bg-main-background"*/}
            {/*                            ref={messagesEndRef}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <MessageInput*/}
            {/*                        onScrollDownClick={handleScrollDown}*/}
            {/*                        textareaRef={textareaRef}*/}
            {/*                        showScrollDownButton={showScrollDownButton}*/}
            {/*                        />*/}
            {/*                </>*/}
            {/*        }*/}
            {/*    </section>*/}
            {/*</MessageContainer>*/}
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
