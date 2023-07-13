import Link from "next/link";
import {UserTooltip} from "../user/user-tooltip";
import {UserAvatar} from "../user/user-avatar";
import {User} from "../../lib/types/user";
import {UserName} from "../user/user-name";
import {UserUsername} from "../user/user-username";
import {doc, getDoc, Timestamp} from "firebase/firestore";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useAuth} from "../../lib/context/auth-context";
import {chatRoomMessagesCollection, usersCollection, userStatsCollection} from "../../lib/firebase/collections";
import {useDocument} from "../../lib/hooks/useDocument";
import {Messages as MessagesType, Messages} from "../../lib/types/messages";
import {UserWithChatRooms} from "../../lib/types/chatRooms";
import {Loading} from "../ui/loading";


type MessageCardProps = {
    data: UserWithChatRooms
    setSelectedData: Dispatch<SetStateAction<UserWithChatRooms | null>>,
    selectedData: UserWithChatRooms | null,
    idx: number,
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>,
    cardUser: User | undefined,
    setCardUser: Dispatch<SetStateAction<User | undefined>>
    setShowList: Dispatch<SetStateAction<boolean>>
}

export function MessageCard(props: MessageCardProps): JSX.Element {
    const {user} = useAuth();
    const {data: messagesData, loading: messagesLoading} = useDocument(
        doc(chatRoomMessagesCollection(props.data?.chatRoom.id ?? 'null'), 'messages')
    );


    return (
        <div
            onClick={() => {
                props.setSelectedData(props.data);
                props.setSelected(props.idx);
                props.setShowList(false);
            }}
            className={`accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4
                   py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 cursor-pointer ${props.selected === props.idx ? "border-r-2 border-r-main-accent bg-light-primary/5 dark:bg-dark-primary/5": ""}`}>
            {
                props.data.user &&
                <>
                    <Link href={`/user/${props.data.user.username}`}>
                            <UserTooltip avatar {...props.data?.user} modal={false}>
                                <UserAvatar src={props.data.user.photoURL || ""} alt={props.data.user.photoURL || ""}
                                            username={props.data.user.username || ""}/>
                            </UserTooltip>
                    </Link>
                    <div className='flex flex-col gap-1 truncate xs:overflow-visible '>
                        <div className='flex items-center  gap-2 truncate xs:overflow-visible'>
                            <div
                                className='flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal'>
                                <UserTooltip {...props.data.user} modal={false}>
                                    <UserName
                                        className='-mb-1'
                                        name={props.data.user.name}
                                        username={props.data.user.username}
                                        verified={props.data.user.verified}
                                    />
                                </UserTooltip>
                            </div>
                            <div className='flex items-center gap-1 text-light-secondary dark:text-dark-secondary'>
                                <UserTooltip {...props.data?.user} modal={false}>
                                    <UserUsername username={props.data.user.username}/>
                                </UserTooltip>
                            </div>
                        </div>
                        {
                            messagesLoading ?
                                <Loading
                                    iconClassName='h-5 w-5'
                                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                />
                                : messagesData ?
                                <p className='whitespace-normal'>
                                    {messagesData.messages.length > 0 ?
                                        messagesData.messages[messagesData.messages.length - 1].text
                                        : '대화 내용이 없습니다.'
                                    }
                                </p> : ""
                        }
                    </div>
                </>
            }
        </div>
    )
}
