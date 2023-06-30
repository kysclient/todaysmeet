import {useState, useEffect, useContext, createContext, useMemo, Dispatch, SetStateAction} from 'react';
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as signOutFirebase
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    onSnapshot,
    serverTimestamp
} from 'firebase/firestore';
import {auth} from '@lib/firebase/app';
import {
    usersCollection,
    userStatsCollection,
    userBookmarksCollection
} from '@lib/firebase/collections';
import {getRandomId, getRandomInt} from '@lib/random';
import type {ReactNode} from 'react';
import type {User as AuthUser} from 'firebase/auth';
import type {WithFieldValue} from 'firebase/firestore';
import type {User} from '@lib/types/user';
import type {Bookmark} from '@lib/types/bookmark';
import type {Stats} from '@lib/types/stats';


const imageUrls = [
    "/assets/avatars/avatar_1-003262ed.jpg",
    "/assets/avatars/avatar_2-ceeb03f6.jpg",
    "/assets/avatars/avatar_3-74e0fbce.jpg",
    "/assets/avatars/avatar_4-2497c77c.jpg",
    "/assets/avatars/avatar_5-89cf34e3.jpg",
    "/assets/avatars/avatar_6-1e41071d.jpg",
    "/assets/avatars/avatar_7-8a66cd04.jpg",
    "/assets/avatars/avatar_8-1956d908.jpg",
    "/assets/avatars/avatar_9-f12c0596.jpg",
];

type AuthContext = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>,
    error: Error | null;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>,
    isAdmin: boolean;
    randomSeed: string;
    userBookmarks: Bookmark[] | null;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<void>
    signInWithEmailPassword: (email: string, password: string) => void
};

const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

export const AuthContext = createContext<AuthContext | null>(null);

type AuthContextProviderProps = {
    children: ReactNode;
};

export function AuthContextProvider({
                                        children
                                    }: AuthContextProviderProps): JSX.Element {
    const [user, setUser] = useState<User | null>(null);
    const [userBookmarks, setUserBookmarks] = useState<Bookmark[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const manageUser = async (authUser: AuthUser): Promise<void> => {
            const {uid, displayName, photoURL} = authUser;
            const userSnapshot = await getDoc(doc(usersCollection, uid));

            if (!userSnapshot.exists()) {
                let available = false;
                let randomUsername = '';

                while (!available) {
                    const normalizeName = displayName?.replace(/\s/g, '').toLowerCase();
                    const randomInt = getRandomInt(1, 10_000);

                    randomUsername = `${normalizeName as string}${randomInt}`;

                    const randomUserSnapshot = await getDoc(
                        doc(usersCollection, randomUsername)
                    );

                    if (!randomUserSnapshot.exists()) available = true;
                }

                const userData: WithFieldValue<User> = {
                    id: uid,
                    bio: null,
                    name: displayName as string,
                    theme: null,
                    accent: null,
                    website: null,
                    location: null,
                    photoURL: photoURL as string,
                    username: randomUsername,
                    verified: false,
                    following: [],
                    followers: [],
                    createdAt: serverTimestamp(),
                    updatedAt: null,
                    totalTweets: 0,
                    totalPhotos: 0,
                    pinnedTweet: null,
                    coverPhotoURL: null
                };

                const userStatsData: WithFieldValue<Stats> = {
                    likes: [],
                    tweets: [],
                    updatedAt: null
                };

                try {
                    await Promise.all([
                        setDoc(doc(usersCollection, uid), userData),
                        setDoc(doc(userStatsCollection(uid), 'stats'), userStatsData)
                    ]);

                    const newUser = (await getDoc(doc(usersCollection, uid))).data();
                    setUser(newUser as User);
                } catch (error) {
                    setError(error as Error);
                }
            } else {
                const userData = userSnapshot.data();
                setUser(userData);
            }

            setLoading(false);
        };

        const handleUserAuth = (authUser: AuthUser | null): void => {
            setLoading(true);

            if (authUser) void manageUser(authUser);
            else {
                setUser(null);
                setLoading(false);
            }
        };
        onAuthStateChanged(auth, handleUserAuth);

    }, []);

    useEffect(() => {
        if (!user) return;

        const {id} = user;

        const unsubscribeUser = onSnapshot(doc(usersCollection, id), (doc) => {
            setUser(doc.data() as User);
        });

        const unsubscribeBookmarks = onSnapshot(
            userBookmarksCollection(id),
            (snapshot) => {
                const bookmarks = snapshot.docs.map((doc) => doc.data());
                setUserBookmarks(bookmarks);
            }
        );

        return () => {
            unsubscribeUser();
            unsubscribeBookmarks();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.id]);

    const signInWithGoogle = async (): Promise<void> => {
        try {
            const provider = new GoogleAuthProvider();
            const authResponse = await signInWithPopup(auth, provider);
        } catch (error) {
            setError(error as Error);
        }
    };

    function authenticateUser(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const newUser = (await getDoc(doc(usersCollection, user.uid))).data();
                setUser(newUser as User);
                return true
            })
            .catch((error) => {
                return false
            });
    }

    const signInWithEmailPassword = async (email: string, password: string) => {
        setLoading(true)
        if (await authenticateUser(email, password)) {
            setLoading(false);
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const randomInt = getRandomInt(1, 10_000)
                    let displayName = randomInt.toString()
                    const delimiterIndex = user?.email?.indexOf("@");
                    if (delimiterIndex !== -1) {
                        displayName = user!.email!.substring(0, delimiterIndex) + randomInt
                    }
                    const userData: WithFieldValue<User> = {
                        id: user.uid,
                        bio: null,
                        name: displayName as string,
                        theme: null,
                        accent: null,
                        website: null,
                        location: null,
                        photoURL: selectRandomImage(),
                        username: user?.email?.substring(0, delimiterIndex) || "Anonymous",
                        verified: false,
                        following: [],
                        followers: [],
                        createdAt: serverTimestamp(),
                        updatedAt: null,
                        totalTweets: 0,
                        totalPhotos: 0,
                        pinnedTweet: null,
                        coverPhotoURL: null
                    };

                    const userStatsData: WithFieldValue<Stats> = {
                        likes: [],
                        tweets: [],
                        updatedAt: null
                    };
                    try {
                        await Promise.all([
                            setDoc(doc(usersCollection, user.uid), userData),
                            setDoc(doc(userStatsCollection(user.uid), 'stats'), userStatsData)
                        ]);
                        const newUser = (await getDoc(doc(usersCollection, user.uid))).data();
                        setUser(newUser as User);
                    } catch (error) {
                        setError(error as Error);
                    }
                })
                .catch((error) => {
                    if (error.message.includes("already")) {
                        existsUser(email, password)
                    } else {
                        setLoading(false)
                        setError(error as Error)
                    }
                })
        }


    }

    const existsUser = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const newUser = (await getDoc(doc(usersCollection, userCredential.user.uid))).data();
                setUser(newUser as User)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                setError(error as Error)
            })
    }

    const signOut = async (): Promise<void> => {
        try {
            await signOutFirebase(auth);
        } catch (error) {
            setError(error as Error);
        }
    };

    const isAdmin = user ? user.username === 'kimyushin7002' : false;
    const randomSeed = useMemo(getRandomId, [user?.id]);

    const value: AuthContext = {
        user,
        setUser,
        error,
        loading,
        setLoading,
        isAdmin,
        randomSeed,
        userBookmarks,
        signOut,
        signInWithGoogle,
        signInWithEmailPassword
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContext {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthContextProvider');

    return context;
}
