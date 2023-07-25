import {User} from "../../lib/types/user";
import {NextImage} from "../ui/next-image";
import {useEffect} from "react";
import {formatDate} from "../../lib/date";
import {serverTimestamp} from "firebase/firestore";
import {useAuth} from "../../lib/context/auth-context";
import {useRouter} from "next/router";

type UserMessageProfileProps = {
    user: User | undefined
}


export function UserMessageProfile(props: UserMessageProfileProps): JSX.Element {
    const {user} = useAuth();
    const userId = user?.id as string;
    const router = useRouter()
    return (
        <>
            <div
                onClick={() => {router.push(`/user/${props.user?.username}`)}}
                className="border-b border-light-border dark:border-dark-border xs:border-b
                accent-tab hover-animation flex flex-col items-center pb-10 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 cursor-pointer">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                     src={props.user?.photoURL || ""} alt="user_profile_img"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.user?.name || ""}</h5>
                <span className="text-sm text-main-accent">@{props.user?.username || ""}</span>
                <div className="mt-6">

                    <h5 className="text-md font-medium text-gray-900 dark:text-white">{props.user?.bio || ""}</h5>
                </div>

                <div className="flex mt-2 space-x-3 md:mt-2 mb-2">
                    <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                         {props.user ? formatDate(props.user?.createdAt, 'joined') : ""}에 가입</p>

                    <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                        {props.user?.followers.length} followers
                    </p>
                </div>

                <div className="flex mt-2 space-x-3 md:mt-2 mb-2">
                    <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                        {
                            props.user?.following.find(follow => follow === userId) !== undefined &&
                            props.user?.followers.find(follow => follow === userId) !== undefined ?
                                "서로 팔로우" : props.user?.following.find(follow => follow === userId) !== undefined ?
                                    "상대방이 나를 팔로우" :
                                    props.user?.followers.find(follow => follow === userId) !== undefined ?
                                        "내가 팔로우하는 사람이 팔로우하지 않음" : "서로 팔로우가 아님"
                        }
                    </p>

                </div>

            </div>
        </>
    )
}
