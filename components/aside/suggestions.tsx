import Link from 'next/link';
import {motion} from 'framer-motion';
import {
    doc,
    limit,
    query,
    where,
    orderBy,
    documentId
} from 'firebase/firestore';
import {useAuth} from '../../lib/context/auth-context';
import {useCollection} from '../../lib/hooks/useCollection';
import {useDocument} from '../../lib/hooks/useDocument';
import {usersCollection} from '../../lib/firebase/collections';
import {UserCard} from '../user/user-card';
import {Loading} from '../ui/loading';
import {Error} from '../ui/error';
import {variants} from './aside-trends';
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import {useEffect} from "react";

export function Suggestions(): JSX.Element {
    const {randomSeed} = useAuth();
    const { user } = useAuth();

    const {data: adminData, loading: adminLoading} = useDocument(
        doc(usersCollection, 'Twt0A27bx9YcG4vu3RTsR7ifJzf2'),
        {allowNull: true}
    );

    const {data: suggestionsData, loading: suggestionsLoading} = useCollection(
        query(
            usersCollection,
            where(documentId(), '>=', randomSeed),
            orderBy(documentId()),
            limit(5)
        ),
        {allowNull: true}
    );

    useEffect(() => {
        console.log('suggestions : ', suggestionsData)
    }, [suggestionsData])

    return (
        <section className='hover-animation rounded-2xl bg-main-sidebar-background'>
            {adminLoading || suggestionsLoading ? (
                <Loading className='flex h-52 items-center justify-center p-4'/>
            ) : suggestionsData ? (
                <motion.div className='inner:px-4 inner:py-3' {...variants}>
                    <h2 className='text-xl font-bold'>팔로우</h2>
                    {adminData && <UserCard {...adminData} />}
                    {suggestionsData?.filter(data => data.id !== user?.id).map((userData) => (
                        <UserCard {...userData} key={userData.id}/>
                    ))}
                    <Link href='/people'
                          className='custom-button accent-tab hover-card block w-full rounded-2xl
                         rounded-t-none text-center text-main-accent'
                    >
                        더보기
                    </Link>
                </motion.div>
            ) : (
                <Error/>
            )}
        </section>
    );
}
