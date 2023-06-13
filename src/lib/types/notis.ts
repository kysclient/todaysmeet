import type { Timestamp, FirestoreDataConverter } from 'firebase/firestore';

export type Notis = {
    isRead: false
    notis: Noti[]
};

export type Noti = {
    userName: string,
    feedId : string
}

export const notisConverter: FirestoreDataConverter<Notis> = {
    toFirestore(noti) {
        return { ...noti };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);

        return { ...data } as Notis;
    }
};
