import {collection} from 'firebase/firestore';
import {userConverter} from '../types/user';
import {tweetConverter} from '../types/tweet';
import {bookmarkConverter} from '../types/bookmark';
import {statsConverter} from '../types/stats';
import {db} from './app';
import type {CollectionReference} from 'firebase/firestore';
import type {Bookmark} from '../types/bookmark';
import type {Stats} from '../types/stats';
import {trendConverter} from "../types/trends";
import {Notis, notisConverter} from "../types/notis";
import {chatRoomConverter} from "../types/chatRooms";
import {Messages, messagesConverter} from "../types/messages";
import {shortsConverter} from "@lib/types/shorts";

export const usersCollection = collection(db, 'users').withConverter(
    userConverter
);

export const tweetsCollection = collection(db, 'tweets').withConverter(
    tweetConverter
);

export const trendsCollection = collection(db, 'trends').withConverter(
    trendConverter
);

export const chatRoomsCollection = collection(db, 'chatRooms').withConverter(
    chatRoomConverter
)

export const shortsCollection = collection(db, 'shorts').withConverter(
    shortsConverter
)

export function userBookmarksCollection(
    id: string
): CollectionReference<Bookmark> {
    return collection(db, `users/${id}/bookmarks`).withConverter(
        bookmarkConverter
    );
}

export function userStatsCollection(id: string): CollectionReference<Stats> {
    return collection(db, `users/${id}/stats`).withConverter(statsConverter);
}

export function chatRoomMessagesCollection(id: string): CollectionReference<Messages> {
    return collection(db, `chatRooms/${id}/messages`).withConverter(messagesConverter)
}

export function userNotisCollection(id: string): CollectionReference<Notis> {
    return collection(db, `users/${id}/notis`).withConverter(notisConverter);
}
