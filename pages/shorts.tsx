import {MainContainer} from "@components/home/main-container";
import {SEO} from "@components/common/seo";
import {ReactElement, ReactNode, useEffect, useState} from "react";
import {HomeLayout, PeopleLayout, ProtectedLayout, TrendsLayout} from "@components/layout/common-layout";
import {MainLayout} from "@components/layout/main-layout";
import {ShortsContainer} from "@components/layout/shorts-layout";
import {useAnimation, motion, AnimatePresence} from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Mousewheel} from 'swiper/modules';
import ReactPlayer from "react-player";
import {useModal} from "@lib/hooks/useModal";
import {VideoUploadModal} from "@components/modal/video-upload-modal";
import {Modal} from "@components/modal/modal";
import {useInfiniteScroll} from "@lib/hooks/useInfiniteScroll";
import {shortsCollection, trendsCollection, tweetsCollection} from "@lib/firebase/collections";
import {documentId, limit, orderBy, query, where} from "firebase/firestore";
import {Loading} from "@components/ui/loading";
import {useCollection} from "@lib/hooks/useCollection";


export default function Shorts() {

    const data2 = [1, 2, 3, 4];

    const {data, loading} = useCollection(
        query(shortsCollection, orderBy('createdAt', 'desc'), limit(10))
    );

    useEffect(() => {
        console.log('data : ', data)
    }, [data])

    return (

        <ShortsContainer>
            <SEO title='쇼츠 - 투밋'/>
            <div className="w-full h-screen p-1">
                {
                    loading ?
                        <Loading/>
                        :
                        <Swiper
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
                                        key={shorts.createdAt}
                                        className="w-full mb-4 bg-main-background min-h-[100%] rounded-xl"
                                    >
                                        <div className="w-full h-full">
                                            <ReactPlayer
                                                muted={true}
                                                loop={true}
                                                controls={true}
                                                playing={true}
                                                width='100%'
                                                height='100%'
                                                url={shorts.fileUrl!}
                                            />
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