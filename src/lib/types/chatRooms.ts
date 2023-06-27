import {FirestoreDataConverter, Timestamp} from "firebase/firestore";
import {Trends} from "@lib/types/trends";


export type ChatRooms = {
    id: string,
    name: string,
    participants: string[],
    type: 'normal' | 'group'
    lastRead: Timestamp | null,
    createdAt: Timestamp | null
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
