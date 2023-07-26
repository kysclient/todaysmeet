import {FirestoreDataConverter} from "firebase/firestore";

export type Trends = {
    trend: Trend,
    location: string | null;
}

export type Trend = {
    name: string;
    url: string;
    tweet_volume: number | null;
};

export const trendConverter: FirestoreDataConverter<Trends> = {
    toFirestore(trends) {
        return {...trends}
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return {...data} as Trends
    }
}
