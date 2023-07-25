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
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
    cardUser: User | undefined,
    setCardUser: Dispatch<SetStateAction<User | undefined>>
    setShowList: Dispatch<SetStateAction<boolean>>
}

export function MessageCard(props: MessageCardProps): JSX.Element {

    const formatMessageTime = (timestamp: any): string => {

        if(typeof timestamp === "object") {
            return ""
        }
        const date = new Date(timestamp);
        const currentDate = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours();
        const minutes = date.getMinutes();

        if (
            currentDate.getFullYear() === year &&
            currentDate.getMonth() === date.getMonth() &&
            currentDate.getDate() === date.getDate()
        ) {
            // 오늘인 경우
            const period = hours >= 12 ? '오후' : '오전';
            const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            return `${period} ${formattedHours}:${formattedMinutes}`;
        } else if (
            currentDate.getFullYear() === year &&
            currentDate.getMonth() === date.getMonth() &&
            currentDate.getDate() === date.getDate() + 1
        ) {
            // 어제인 경우
            const period = hours >= 12 ? '오후' : '오전';
            const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            return `어제 ${period} ${formattedHours}:${formattedMinutes}`;
        } else {
            // 그 외의 경우
            return `${month}월 ${day}일`;
        }
    };

    return (
        <div
            onClick={() => {
                props.setSelectedData(props.data);
                props.setSelected(props.data.chatRoom.id);
                props.setShowList(false);
            }}
            className={`accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4
                   py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 cursor-pointer ${props.data.chatRoom.id === props.selected ? "border-r-2 border-r-main-accent bg-light-primary/5 dark:bg-dark-primary/5" : ""}`}>
            {
                props.data.user &&
                <>
                    {/*<Link href={`/user/${props.data.user.username}`}>*/}
                        <UserTooltip avatar {...props.data?.user} modal={false}>
                            <UserAvatar src={props.data.user.photoURL || ""} alt={props.data.user.photoURL || ""}
                                        username={props.data.user.username || ""}/>
                        </UserTooltip>
                    {/*</Link>*/}
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
                        <div className="flex justify-between items-center">
                            <p className='whitespace-normal'>
                                {props.data.chatRoom.messages ?
                                    props.data.chatRoom.messages[props.data.chatRoom.messages.length - 1].text
                                    : '대화 내용이 없습니다.'
                                }
                            </p>
                            {
                                props.data.chatRoom.messages &&
                                    <p className="text-xs text-light-secondary dark:text-dark-secondary">{formatMessageTime(props.data.chatRoom.messages[props.data.chatRoom.messages.length - 1].timestamp)}</p>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
