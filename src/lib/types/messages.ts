import {FirestoreDataConverter, Timestamp} from "firebase/firestore";

export type Messages = {
    messages: Message[]
};

type Message = {
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
