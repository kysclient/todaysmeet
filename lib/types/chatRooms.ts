import {FirestoreDataConverter, Timestamp} from "firebase/firestore";
import {Trends} from "./trends";
import {User} from "./user";
import {RoomMessage} from "@lib/types/messages";


export type ChatRooms = {
    id: string,
    name: string,
    participants: string[],
    type: 'normal' | 'group'
    lastRead: Timestamp | null,
    createdAt: Timestamp | null,
    messages: RoomMessage[] | undefined | null,
}

export type UserWithChatRooms = {
    user: User,
    chatRoom: ChatRooms
}


export const chatRoomConverter: FirestoreDataConverter<ChatRooms> = {
    toFirestore(chatRooms) {
        return {...chatRooms}
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {...data} as ChatRooms
    }
}
