import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import {useAuth} from '../../lib/context/auth-context';
import {useUser} from '../../lib/context/user-context';
import {SEO} from '../common/seo';
import {UserHomeCover} from '../user/user-home-cover';
import {UserHomeAvatar} from '../user/user-home-avatar';
import {UserDetails} from '../user/user-details';
import {UserNav} from '../user/user-nav';
import {Button} from '../ui/button';
import {Loading} from '../ui/loading';
import {HeroIcon} from '../ui/hero-icon';
import {ToolTip} from '../ui/tooltip';
import {FollowButton} from '../ui/follow-button';
import {variants} from '../user/user-header';
import {UserEditProfile} from '../user/user-edit-profile';
import {UserShare} from '../user/user-share';
import type {LayoutProps} from './common-layout';
import {manageChatRooms} from "../../lib/firebase/utils";
import {toast} from "react-hot-toast";
import Link from "next/link";
import {doc, documentId, getDoc, getDocs, limit, orderBy, query, serverTimestamp} from "firebase/firestore";
import {chatRoomsCollection, trendsCollection, usersCollection} from "../../lib/firebase/collections";
import {useCollection} from "../../lib/hooks/useCollection";
import {uuidv4} from "@firebase/util";
import {rdb} from "@lib/firebase/app";
import {get, ref, set, query as rdbQuery, child, push} from "@firebase/database";
import {RoomMessage} from "@lib/types/messages";
import {RoomMessages} from "@components/messages/messages";

export function UserHomeLayout({children}: LayoutProps): JSX.Element {
    const {user, isAdmin} = useAuth();
    const {user: userData, loading} = useUser();
    const router = useRouter();
    const {
        query: {id}
    } = useRouter();

    const coverData = userData?.coverPhotoURL
        ? {src: userData.coverPhotoURL, alt: userData.name}
        : null;

    const profileData = userData
        ? {src: userData.photoURL, alt: userData.name}
        : null;

    const {id: userId} = user ?? {};
    const myId = user?.id as string;
    const participateUserId = userData?.id as string;

    const isOwner = userData?.id === userId;
    const {data: chatRooms} = useCollection(query(chatRoomsCollection));

    const handleMessage = async () => {
        const rdbRef = ref(rdb);
        let flag = true;
        await get(child(rdbRef, 'chatRooms')).then((snapshot) => {
            if (snapshot.exists()) {
                for (const key in snapshot.val()) {
                    if (snapshot.val().hasOwnProperty(key)) {
                        const chatRoom = snapshot.val()![key];
                        if (JSON.stringify([myId, participateUserId]) === JSON.stringify(chatRoom.participants)) {
                            flag = false
                        }
                    }
                }
            } else {
                console.log('nodata')
            }
        }).catch((error) => {
            console.log('error :', error)
        })
        if (flag) {
            push(child(ref(rdb), 'chatRooms'),
                {
                    id: uuidv4(),
                    name: '새 대화방이 생성되었습니다.',
                    participants: [myId, participateUserId],
                    lastRead: null,
                    type: 'normal',
                    createdAt: serverTimestamp(),
                    messages: []
                }
            )
                .then(() => {
                    toast.success((): JSX.Element => (
                            <span className='flex gap-2'>
                                  메세지목록에 추가되었습니다.
                                <Link href={`/messages/${uuidv4()}`} className='custom-underline font-bold'>
                                  보기
                                </Link>
                            </span>
                        ));
                    router.push(`/messages/${uuidv4()}`)
                })
                .catch((error) => {
                    console.log('error : ', error)
                })
        } else {
            router.push(`/messages/${uuidv4()}`)
        }
    };

    return (
        <>
            {userData && (
                <SEO
                    title={`${`${userData.name} (@${userData.username})`} - 투밋`}
                />
            )}
            <motion.section {...variants} exit={undefined}>
                {loading ? (
                    <Loading className='mt-5'/>
                ) : !userData ? (
                    <>
                        <UserHomeCover/>
                        <div className='flex flex-col gap-8'>
                            <div className='relative flex flex-col gap-3 px-4 py-3'>
                                <UserHomeAvatar/>
                                <p className='text-xl font-bold'>@{id}</p>
                            </div>
                            <div className='p-8 text-center'>
                                <p className='text-3xl font-bold'>유저 정보를 불러올 수 없습니다.</p>
                                <p className='text-light-secondary dark:text-dark-secondary'>
                                    다른 사람을 찾아 주세요.
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <UserHomeCover coverData={coverData}/>
                        <div className='relative flex flex-col gap-3 px-4 py-3'>
                            <div className='flex justify-between'>
                                <UserHomeAvatar profileData={profileData}/>
                                {isOwner ? (
                                    <UserEditProfile/>
                                ) : (
                                    <div className='flex gap-2 self-start'>
                                        <UserShare username={userData.username}/>
                                        <Button
                                            className='dark-bg-tab group relqative border border-light-line-reply p-2
                                 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary
                                 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
                                            onClick={handleMessage}
                                        >
                                            <HeroIcon className='h-5 w-5' iconName='EnvelopeIcon'/>
                                            <ToolTip tip='메세지'/>
                                        </Button>
                                        <FollowButton
                                            userTargetId={userData.id}
                                            userTargetUsername={userData.username}
                                        />
                                        {isAdmin && <UserEditProfile hide/>}
                                    </div>
                                )}
                            </div>
                            <UserDetails {...userData} />
                        </div>
                    </>
                )}
            </motion.section>
            {userData && (
                <>
                    <UserNav/>
                    {children}
                </>
            )}
        </>
    );
}
