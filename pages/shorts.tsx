import {MainContainer} from "@components/home/main-container";
import {SEO} from "@components/common/seo";
import {ReactElement, ReactNode, useEffect, useState} from "react";
import {HomeLayout, PeopleLayout, ProtectedLayout, TrendsLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import {ShortsContainer} from "@components/layout/shorts-layout";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Mousewheel} from 'swiper/modules';
import ReactPlayer from "react-player";
import {shortsCollection, trendsCollection, tweetsCollection} from "@lib/firebase/collections";
import {documentId, limit, orderBy, query, where} from "firebase/firestore";
import {Loading} from "@components/ui/loading";
import {useCollection} from "@lib/hooks/useCollection";
import {ShortsPlayer} from "@components/ui/shorts-player";


export default function Shorts() {

    const {data, loading} = useCollection(
        query(shortsCollection, orderBy('createdAt', 'desc'), limit(10))
    );
    return (

        <ShortsContainer>
            <SEO title='쇼츠 - 투밋'/>
            <div className="w-full h-screen p-1">
                {
                    loading ?
                        <Loading/>
                        :
                        <Swiper
                            speed={100}
                            direction={'vertical'}
                            slidesPerView={1}
                            spaceBetween={30}
                            mousewheel={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Mousewheel]}
                            className="w-full h-screen p-10"
                        >
                            {data!.map((shorts, index) => (
                                <>
                                    <SwiperSlide

                                        key={shorts.createdAt.toString()}
                                        className="w-full mb-4 bg-main-background min-h-[100%] rounded-xl"
                                    >
                                        <div className="w-full h-full">
                                            <ShortsPlayer url={shorts.fileUrl!} />
                                        </div>
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                }
            </div>
        </ShortsContainer>
    )
}

Shorts.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <MainLayout>
            <TrendsLayout>
                {page}
            </TrendsLayout>
        </MainLayout>
    </ProtectedLayout>
);
