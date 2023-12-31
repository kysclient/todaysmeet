import {
    doc,
    query,
    where,
    limit,
    setDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    increment,
    writeBatch,
    arrayUnion,
    arrayRemove,
    serverTimestamp,
    getCountFromServer
} from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {db, storage} from './app';
import {
    usersCollection,
    tweetsCollection,
    userStatsCollection,
    userBookmarksCollection, chatRoomsCollection, chatRoomMessagesCollection
} from './collections';
import type {WithFieldValue, Query} from 'firebase/firestore';
import type {EditableUserData} from '../types/user';
import type {FilesWithId, ImagesPreview, VideoPreview} from '../types/file';
import type {Bookmark} from '../types/bookmark';
import type {Theme, Accent} from '../types/theme';
import {ChatRooms} from "../types/chatRooms";
import {uuidv4} from "@firebase/util";
import {Stats} from "../types/stats";
import {Messages} from "../types/messages";

export async function checkUsernameAvailability(
    username: string
): Promise<boolean> {
    const {empty} = await getDocs(
        query(usersCollection, where('username', '==', username), limit(1))
    );
    return empty;
}

export async function getCollectionCount<T>(
    collection: Query<T>
): Promise<number> {
    const snapshot = await getCountFromServer(collection);
    return snapshot.data().count;
}

export async function updateUserData(
    userId: string,
    userData: EditableUserData
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
        ...userData,
        updatedAt: serverTimestamp()
    });
}

export async function updateUserTheme(
    userId: string,
    themeData: { theme?: Theme; accent?: Accent }
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {...themeData});
}

export async function updateUsername(
    userId: string,
    username?: string
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
        ...(username && {username}),
        updatedAt: serverTimestamp()
    });
}

export async function managePinnedTweet(
    type: 'pin' | 'unpin',
    userId: string,
    tweetId: string
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
        updatedAt: serverTimestamp(),
        pinnedTweet: type === 'pin' ? tweetId : null
    });
}

export async function manageFollow(
    type: 'follow' | 'unfollow',
    userId: string,
    targetUserId: string
): Promise<void> {
    const batch = writeBatch(db);

    const userDocRef = doc(usersCollection, userId);
    const targetUserDocRef = doc(usersCollection, targetUserId);

    if (type === 'follow') {
        batch.update(userDocRef, {
            following: arrayUnion(targetUserId),
            updatedAt: serverTimestamp()
        });
        batch.update(targetUserDocRef, {
            followers: arrayUnion(userId),
            updatedAt: serverTimestamp()
        });
    } else {
        batch.update(userDocRef, {
            following: arrayRemove(targetUserId),
            updatedAt: serverTimestamp()
        });
        batch.update(targetUserDocRef, {
            followers: arrayRemove(userId),
            updatedAt: serverTimestamp()
        });
    }

    await batch.commit();
}

export async function removeTweet(tweetId: string): Promise<void> {
    const userRef = doc(tweetsCollection, tweetId);
    await deleteDoc(userRef);
}

export async function uploadVideo(
    userId: string,
    file: File
): Promise<string | null> {
    if(!file) return null;
    const storageRef = ref(storage, `shorts/${userId}/${file.name}`)
    let src: string;
    try {
        src = await getDownloadURL(storageRef);
    }catch {
        await uploadBytesResumable(storageRef, file)
        src = await getDownloadURL(storageRef);
    }
    return src

}

export async function uploadImages(
    userId: string,
    files: FilesWithId
): Promise<ImagesPreview | null> {
    if (!files.length) return null;

    const imagesPreview = await Promise.all(
        files.map(async (file) => {
            let src: string;

            const {id, name: alt} = file;

            const storageRef = ref(storage, `images/${userId}/${alt}`);

            try {
                src = await getDownloadURL(storageRef);
            } catch {
                await uploadBytesResumable(storageRef, file)
                src = await getDownloadURL(storageRef);
            }

            return {id, src, alt};
        })
    );

    return imagesPreview;
}

export async function manageReply(
    type: 'increment' | 'decrement',
    tweetId: string
): Promise<void> {
    const tweetRef = doc(tweetsCollection, tweetId);

    try {
        await updateDoc(tweetRef, {
            userReplies: increment(type === 'increment' ? 1 : -1),
            updatedAt: serverTimestamp()
        });
    } catch {
        // do nothing, because parent tweet was already deleted
    }
}

export async function manageTotalTweets(
    type: 'increment' | 'decrement',
    userId: string
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
        totalTweets: increment(type === 'increment' ? 1 : -1),
        updatedAt: serverTimestamp()
    });
}

export async function manageTotalPhotos(
    type: 'increment' | 'decrement',
    userId: string
): Promise<void> {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
        totalPhotos: increment(type === 'increment' ? 1 : -1),
        updatedAt: serverTimestamp()
    });
}

export function manageRetweet(
    type: 'retweet' | 'unretweet',
    userId: string,
    tweetId: string
) {
    return async (): Promise<void> => {
        const batch = writeBatch(db);

        const tweetRef = doc(tweetsCollection, tweetId);
        const userStatsRef = doc(userStatsCollection(userId), 'stats');

        if (type === 'retweet') {
            batch.update(tweetRef, {
                userRetweets: arrayUnion(userId),
                updatedAt: serverTimestamp()
            });
            batch.update(userStatsRef, {
                tweets: arrayUnion(tweetId),
                updatedAt: serverTimestamp()
            });
        } else {
            batch.update(tweetRef, {
                userRetweets: arrayRemove(userId),
                updatedAt: serverTimestamp()
            });
            batch.update(userStatsRef, {
                tweets: arrayRemove(tweetId),
                updatedAt: serverTimestamp()
            });
        }

        await batch.commit();
    };
}

export function manageLike(
    type: 'like' | 'unlike',
    userId: string,
    tweetId: string
) {
    return async (): Promise<void> => {
        const batch = writeBatch(db);

        const userStatsRef = doc(userStatsCollection(userId), 'stats');
        const tweetRef = doc(tweetsCollection, tweetId);

        if (type === 'like') {
            batch.update(tweetRef, {
                userLikes: arrayUnion(userId),
                updatedAt: serverTimestamp()
            });
            batch.update(userStatsRef, {
                likes: arrayUnion(tweetId),
                updatedAt: serverTimestamp()
            });
        } else {
            batch.update(tweetRef, {
                userLikes: arrayRemove(userId),
                updatedAt: serverTimestamp()
            });
            batch.update(userStatsRef, {
                likes: arrayRemove(tweetId),
                updatedAt: serverTimestamp()
            });
        }

        await batch.commit();
    };
}

export async function manageBookmark(
    type: 'bookmark' | 'unbookmark',
    userId: string,
    tweetId: string
): Promise<void> {
    const bookmarkRef = doc(userBookmarksCollection(userId), tweetId);

    if (type === 'bookmark') {
        const bookmarkData: WithFieldValue<Bookmark> = {
            id: tweetId,
            createdAt: serverTimestamp()
        };
        await setDoc(bookmarkRef, bookmarkData);
    } else await deleteDoc(bookmarkRef);
}

export async function clearAllBookmarks(userId: string): Promise<void> {
    const bookmarksRef = userBookmarksCollection(userId);
    const bookmarksSnapshot = await getDocs(bookmarksRef);

    const batch = writeBatch(db);

    bookmarksSnapshot.forEach(({ref}) => batch.delete(ref));

    await batch.commit();
}

export async function manageChatRooms(
    type: 'create' | 'delete',
    participants: string[],
    uuid: string
): Promise<void> {
    // if (type === 'create') {
    //     const chatRoomRef = doc(chatRoomsCollection, uuid)
    //     const chatRoomData: WithFieldValue<ChatRooms> = {
    //         id: uuid,
    //         name: '새 대화방이 생성되었습니다.',
    //         participants: participants,
    //         lastRead: null,
    //         type: 'normal',
    //         createdAt: serverTimestamp()
    //     }
    //     const messagesData: WithFieldValue<Messages> = {
    //         messages: []
    //     };
    //     try {
    //         await Promise.all([
    //             await setDoc(chatRoomRef, chatRoomData),
    //             await setDoc(doc(chatRoomMessagesCollection(uuid), 'messages'), messagesData)
    //         ])
    //
    //     } catch (error) {
    //         console.log('apis error')
    //     }
    // }
}

export async function updateChatRooms(
    roomId: string,
    messages: Messages
): Promise<void> {
    const roomRef = doc(chatRoomMessagesCollection(roomId));
    await updateDoc(roomRef, messages);
}
