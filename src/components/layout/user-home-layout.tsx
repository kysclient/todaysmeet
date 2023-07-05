import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import {useAuth} from '@lib/context/auth-context';
import {useUser} from '@lib/context/user-context';
import {SEO} from '@components/common/seo';
import {UserHomeCover} from '@components/user/user-home-cover';
import {UserHomeAvatar} from '@components/user/user-home-avatar';
import {UserDetails} from '@components/user/user-details';
import {UserNav} from '@components/user/user-nav';
import {Button} from '@components/ui/button';
import {Loading} from '@components/ui/loading';
import {HeroIcon} from '@components/ui/hero-icon';
import {ToolTip} from '@components/ui/tooltip';
import {FollowButton} from '@components/ui/follow-button';
import {variants} from '@components/user/user-header';
import {UserEditProfile} from '@components/user/user-edit-profile';
import {UserShare} from '@components/user/user-share';
import type {LayoutProps} from './common-layout';
import {manageChatRooms} from "@lib/firebase/utils";
import {toast} from "react-hot-toast";
import Link from "next/link";
import {doc, documentId, getDoc, getDocs, limit, orderBy, query} from "firebase/firestore";
import {chatRoomsCollection, trendsCollection, usersCollection} from "@lib/firebase/collections";
import {useCollection} from "@lib/hooks/useCollection";
import {chatRoomConverter} from "@lib/types/chatRooms";
import {uuidv4} from "@firebase/util";

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

    const handleMessage = async (): Promise<void> => {

        const findData = chatRooms?.find(item => item.type === 'normal' && item.participants.sort().join('') === [myId, participateUserId].sort().join(''))
        const uuid = uuidv4();
        if (findData === undefined) {
            await manageChatRooms(
                'create',
                [myId, participateUserId],
                uuid
            )
            const data = (await getDoc(doc(chatRoomsCollection, uuid))).data();

            toast.success((): JSX.Element => (
                    <span className='flex gap-2'>
               메세지목록에 추가되었습니다.
                <Link href={`/messages/${uuid}`}  className='custom-underline font-bold' >
                  보기
                </Link>
              </span>
                )
            );
        } else {
            await router.push(`/messages/${findData.id}`)
        }


    }

    return (
        <>
            {userData && (
                <SEO
                    title={`${`${userData.name} (@${userData.username})`} / Twitter`}
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
