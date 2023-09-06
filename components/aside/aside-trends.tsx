import Link from 'next/link';
import cn from 'clsx';
import {motion} from 'framer-motion';
import {formatNumber} from '../../lib/date';
import {preventBubbling} from '../../lib/utils';
import {useTrends} from '../../lib/api/trends';
import {Error} from '../ui/error';
import {HeroIcon} from '../ui/hero-icon';
import {Button} from '../ui/button';
import {ToolTip} from '../ui/tooltip';
import {Loading} from '../ui/loading';
import type {MotionProps} from 'framer-motion';
import {useCollection} from "../../lib/hooks/useCollection";
import {
    addDoc,
    collection,
    doc,
    documentId,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    where
} from "firebase/firestore";
import {trendsCollection, tweetsCollection, usersCollection} from "../../lib/firebase/collections";
import {uuidv4} from "@firebase/util";
import {useEffect, useState} from "react";
import {Trend} from "@lib/types/trends";

export const variants: MotionProps = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {duration: 0.8}
};

type AsideTrendsProps = {
    inTrendsPage?: boolean;
};

export function AsideTrends({inTrendsPage}: AsideTrendsProps): JSX.Element {

    const { data: trends, loading: trendsLoading}  = useCollection(
        query(trendsCollection, orderBy(documentId()), limit(10))
    );
    const [trend, setTrend] = useState<Trend[]>([]);
    const [loading, setLoading] = useState(false)

    const fetchTrends = async () => {
        setLoading(true)
        const response = await fetch('/api/trends/available', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.ok) {
            if(response.body) {
                const decoder = new TextDecoder()
                const reader = response.body.getReader()
                const {value, done} = await reader.read()
                const data = JSON.parse(decoder.decode(value!))
                !inTrendsPage ? setTrend(data[0].trends.slice(0, 10)) : setTrend(data[0].trends)
            }
            setLoading(false)
        }else {
            setLoading(true)
        }
    }



    return (
        <section
            className={cn(
                !inTrendsPage &&
                'hover-animation rounded-2xl bg-main-sidebar-background'
            )}
        >
            {trendsLoading ? (
                <Loading/>
            ) : trends ? (
                <motion.div
                    className={cn('inner:px-4 inner:py-3', inTrendsPage && 'mt-0.5')}
                    {...variants}
                >
                    {!inTrendsPage && (
                        <>
                        <h2 className='text-xl font-extrabold'>당신을 위한 트렌드</h2>
                        </>
                    )}
                    {trends.map((trend, idx) => (
                        <Link href={trend.trend.url} key={`${uuidv4() + idx}`} passHref
                              target={'_blank'}
                              className='hover-animation accent-tab hover-card relative
                           flex  flex-col gap-0.5 p-5'
                        >
                                <div className='absolute right-2 top-2'>
                                    <Button
                                        className='hover-animation group relative cursor-not-allowed p-2
                               hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20
                               focus-visible:!ring-accent-blue/80'
                                        onClick={preventBubbling()}
                                    >
                                        <HeroIcon
                                            className='h-5 w-5 text-light-secondary group-hover:text-accent-blue
                                 group-focus-visible:text-accent-blue dark:text-dark-secondary'
                                            iconName='EllipsisHorizontalIcon'
                                        />
                                        <ToolTip tip='더보기'/>
                                    </Button>
                                </div>
                                <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                                    Trending in Korea
                                    {/*{trend.location === 'Worldwide'*/}
                                    {/*    ? 'Worldwide'*/}
                                    {/*    : ` ${trend.location as string}`}*/}
                                </p>
                                <p className='font-bold'>{trend.trend.name}</p>
                                <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                                    {/*댓글 수 {formatNumber(trend.tweet_volume!)}*/}
                                    {trend.location}
                                </p>
                        </Link>
                    ))}
                    {!inTrendsPage && (
                        <Link href='/trends' className='custom-button accent-tab hover-card block w-full rounded-2xl
                           rounded-t-none text-center text-main-accent'>
                                더보기
                        </Link>
                    )}
                </motion.div>
            ) : (
                <Error/>
            )}
        </section>
    );
}
