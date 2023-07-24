import {useAuth} from "@lib/context/auth-context";
import {useRouter} from "next/router";
import React, {ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {ProtectedLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import {MainHeader} from "@components/home/main-header";
import {MessagesContainer} from "@components/home/messages-container";
import {useWindow} from "@lib/context/window-context";
import {useInfiniteScroll} from "@lib/hooks/useInfiniteScroll";
import {
    chatRoomsCollection,
    usersCollection
} from "@lib/firebase/collections";
import {doc, getDoc, orderBy, query, setDoc, where, WithFieldValue} from "firebase/firestore";
import {Loading} from "@components/ui/loading";
import {Error} from "@components/ui/error";
import {AnimatePresence, motion} from "framer-motion";
import {variants} from "@components/aside/aside-trends";
import {MessageCard} from "@components/messages/message-card";
import {User} from "@lib/types/user";
import {Button} from "@components/ui/button";
import {HeroIcon} from "@components/ui/hero-icon";
import {ToolTip} from "@components/ui/tooltip";
import {ChatRooms, UserWithChatRooms} from "@lib/types/chatRooms";
import {MessageSelect} from "@components/messages/message-select";
import {MessagesChatContainer} from "@components/home/messages-chat-container";
import {Messages, RoomMessage} from "@lib/types/messages";
import {RoomMessages} from "@components/messages/messages";
import {onValue, ref} from "@firebase/database";
import {rdb} from "@lib/firebase/app";
import {unsubscribe} from "diagnostics_channel";

export default function Messages(): JSX.Element {
    const {user} = useAuth();
    const userId = user?.id as string;
    const {back} = useRouter();
    const {width} = useWindow();
    const [cardUser, setCardUser] = useState<User>()
    const {isMobile} = useWindow();
    const [myChatList, setMyChatList] = useState<UserWithChatRooms[]>([])
    const [selectedData, setSelectedData] = useState<UserWithChatRooms | null>(null)
    const [selected, setSelected] = useState<string>("");
    const [showList, setShowList] = useState<boolean>(false)
    const rdbRef = ref(rdb, 'chatRooms');

    useEffect(() => {
        onValue(rdbRef, async (snapshot) => {
            const data = snapshot.val()
            let list: UserWithChatRooms[] = [];

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const chatRoom = data[key];
                    if (chatRoom.participants.find((id: string) => id === userId) !== undefined) {
                        const chatUserId = chatRoom.participants.find((id: string) => id !== userId);
                        if (chatUserId) {
                            const newUser = (await getDoc(doc(usersCollection, chatUserId))).data();
                            if (newUser) {
                                const result = {
                                    user: newUser as User,
                                    chatRoom: chatRoom,
                                    roomKey: key
                                };
                                list.push(result);
                            }
                        }
                    }
                }
            }
            setMyChatList(list)

        })
    }, [])

    const sortRooms = (list: UserWithChatRooms[]): UserWithChatRooms[] => {
        return list.sort((a, b) => {
            const hasMessagesA = a.chatRoom.messages !== undefined && a.chatRoom.messages !== null;
            const hasMessagesB = b.chatRoom.messages !== undefined && b.chatRoom.messages !== null;

            const lastMessageA = hasMessagesA ? a.chatRoom.messages![a.chatRoom.messages!.length - 1] : null;
            const lastMessageB = hasMessagesB ? b.chatRoom.messages![b.chatRoom.messages!.length - 1] : null;

            if (lastMessageA !== null && lastMessageB !== null) {
                if (lastMessageA.timestamp > lastMessageB.timestamp) {
                    return -1;
                } else if (lastMessageA.timestamp < lastMessageB.timestamp) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (lastMessageA !== null && lastMessageB === null) {
                return -1;
            } else if (lastMessageA === null && lastMessageB !== null) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    function getTimestamp(message: RoomMessage | undefined): any {
        return message ? message.timestamp : {seconds: Number.MAX_SAFE_INTEGER, nanoseconds: 0};
    }

    return (
        <>
            <MessagesContainer showList={showList} className="max-h-full">
                <MainHeader title='메세지'/>
                <section>
                    <AnimatePresence>
                        <motion.div
                            className="mt-0.5"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 50}}
                        >
                            {
                                myChatList.length > 0 ?
                                    sortRooms(myChatList)
                                        // .sort((a, b) => a.chatRoom.messages![a.chatRoom.messages!.length - 1].timestamp! - b.chatRoom.messages![a.chatRoom.messages!.length - 1].timestamp!)
                                        .map((data, idx) => (
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
                    </AnimatePresence>
                </section>
            </MessagesContainer>

            <MessagesChatContainer className="border-none w-full">
                {
                    !selectedData && isMobile ?
                        <>
                            <MainHeader title='메세지'/>
                            <section>
                                <AnimatePresence>
                                    <motion.div
                                        className="mt-0.5"
                                        initial={{opacity: 0, y: 50}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: 50}}
                                    >
                                        {myChatList.length > 0 ?
                                            sortRooms(myChatList)
                                                // .sort((a, b) => a.chatRoom.messages![a.chatRoom.messages!.length - 1].timestamp! - b.chatRoom.messages![a.chatRoom.messages!.length - 1].timestamp!)
                                                .map((data, idx) => (
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
                                </AnimatePresence>
                            </section>
                        </>
                        :
                        <section className="h-screen flex flex-col">
                            <MainHeader useActionButton={width < 1024} action={() => {
                                setSelectedData(null)
                                setSelected("");
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
                                    <RoomMessages
                                        selectedData={selectedData}
                                    />

                            }
                        </section>
                }
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
