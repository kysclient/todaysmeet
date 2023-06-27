import Link from "next/link";
import {UserTooltip} from "@components/user/user-tooltip";
import {UserAvatar} from "@components/user/user-avatar";
import {User} from "@lib/types/user";
import {UserName} from "@components/user/user-name";
import {UserUsername} from "@components/user/user-username";
import {doc, getDoc, Timestamp} from "firebase/firestore";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useAuth} from "@lib/context/auth-context";
import {chatRoomMessagesCollection, usersCollection, userStatsCollection} from "@lib/firebase/collections";
import {useDocument} from "@lib/hooks/useDocument";
import {Messages as MessagesType, Messages} from "@lib/types/messages";


type MessageCardProps = {
    id: string,
    name: string,
    participants: string[],
    lastRead: Timestamp | null,
    modal?: boolean,
    type: string,
    createdAt: Timestamp | null,
    setSelectedData: Dispatch<SetStateAction<Messages | null>>,
    selectedData: MessagesType | null,
    idx: number,
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>,
    cardUser: User | undefined,
    setCardUser: Dispatch<SetStateAction<User | undefined>>
}

export function MessageCard(message: MessageCardProps): JSX.Element {
    const {user} = useAuth();
    const userId = user?.id as string;
    const {data: messagesData, loading: messagesLoading} = useDocument(
        doc(chatRoomMessagesCollection(message.id ?? 'null'), 'messages')
    );

    useEffect(() => {
        getCardUser()
    }, [message])


    const getCardUser = async (): Promise<void> => {
        let otherUserId = '';
        if (message.type === 'normal') {
            otherUserId = message.participants.filter(item => item !== userId).join('')
            const newUser = (await getDoc(doc(usersCollection, otherUserId))).data();
            message.setCardUser(newUser as User)
        }
    }

    return (
        <div
            onClick={() => {
                message.setSelectedData(messagesData);
                message.setSelected(message.idx);
            }}
            className={`accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4
                   py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 cursor-pointer ${message.selected === message.idx ? "border-r-2 border-r-main-accent bg-light-primary/5 dark:bg-dark-primary/5": ""}`}>
            {
                message.cardUser &&
                <>
                    <Link href={`/message/${message.id}`}>
                        <a>
                            <UserTooltip avatar {...message.cardUser} modal={message.modal}>
                                <UserAvatar src={message.cardUser.photoURL || ""} alt={message.cardUser.photoURL || ""}
                                            username={message.cardUser.username || ""}/>
                            </UserTooltip>
                        </a>
                    </Link>
                    <div className='flex flex-col gap-1 truncate xs:overflow-visible '>
                        <div className='flex items-center  gap-2 truncate xs:overflow-visible'>
                            <div
                                className='flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal'>
                                <UserTooltip {...message.cardUser} modal={message.modal}>
                                    <UserName
                                        className='-mb-1'
                                        name={message.cardUser.name}
                                        username={message.cardUser.username}
                                        verified={message.cardUser.verified}
                                    />
                                </UserTooltip>
                            </div>
                            <div className='flex items-center gap-1 text-light-secondary dark:text-dark-secondary'>
                                <UserTooltip {...message.cardUser} modal={message.modal}>
                                    <UserUsername username={message.cardUser.username}/>
                                </UserTooltip>
                            </div>
                        </div>
                        <p className='whitespace-normal'>
                            {messagesData && messagesData.messages.length > 0 ?
                                messagesData.messages[messagesData.messages.length - 1].text
                                : '대화 내용이 없습니다.'
                            }
                        </p>
                    </div>
                </>
            }
        </div>
    )
}
