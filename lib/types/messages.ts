import {FirestoreDataConverter, Timestamp} from "firebase/firestore";

export type Messages = {
    messages: RoomMessage[]
};

export type RoomMessage = {
    sender: string;
    text: string;
    photoUrl: string;
    timestamp: Timestamp | null;
}


export const messagesConverter: FirestoreDataConverter<Messages> = {
    toFirestore(message) {
        return {...message};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);

        return {...data} as Messages;
    }
};
