import {FirestoreDataConverter, Timestamp} from "firebase/firestore";
import {ImagesPreview} from "@lib/types/file";

export type Messages = {
    messages: RoomMessage[]
};

export type RoomMessage = {
    sender: string;
    text: string;
    images: ImagesPreview | null;
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
