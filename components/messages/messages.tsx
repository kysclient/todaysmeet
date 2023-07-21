import {UserMessageProfile} from "@components/user/user-message-profile";
import {MessageBox} from "@components/messages/message-box";
import {MessageInput} from "@components/messages/message-input";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {UserWithChatRooms} from "@lib/types/chatRooms";
import {useCollection} from "@lib/hooks/useCollection";
import {doc, orderBy, query, where} from "firebase/firestore";
import {chatRoomMessagesCollection, tweetsCollection, usersCollection} from "@lib/firebase/collections";
import {useDocument} from "@lib/hooks/useDocument";
import {useArrayDocument} from "@lib/hooks/useArrayDocument";
import firebase from "firebase/compat";

interface MessagesProps {
    selectedData: UserWithChatRooms
}

export function RoomMessages({
                                 selectedData,
                             }: MessagesProps): JSX.Element {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
    const [showScrollDownButton, setShowScrollDownButton] = useState<boolean>(false);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);


    const {data: chatRooms, loading: loading} = useDocument(
        doc(chatRoomMessagesCollection(selectedData.chatRoom.id), 'messages'),
        {allowNull: true}
    );


    const handleScrollDown = () => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current?.scrollHeight,
            behavior: 'smooth',
        });
    };

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
        handleScrollDown()
    }, [])



    return (
        <>
            <div
                ref={chatContainerRef}
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
                    selectedData.chatRoom.messages?.map((item, idx) => (
                        <MessageBox
                            message={item}
                            key={item.text + item.sender}
                        />
                    ))
                }
                <div
                    className="h-[20px] bg-main-background"
                    ref={messagesEndRef}
                />
            </div>
            <div className="">
                <MessageInput
                    onScrollDownClick={handleScrollDown}
                    textareaRef={textareaRef}
                    showScrollDownButton={showScrollDownButton}
                    selectedData={selectedData}
                />

            </div>
        </>
    )
}
