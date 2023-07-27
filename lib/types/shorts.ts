import {User} from "@lib/types/user";
import {FirestoreDataConverter, Timestamp} from "firebase/firestore";


export type Shorts = {
    user: User | null,
    fileUrl: string | null,
    createdAt: Timestamp;
}

export const shortsConverter: FirestoreDataConverter<Shorts> = {
    toFirestore(shorts) {
        return {...shorts}
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {...data} as Shorts
    }
}
