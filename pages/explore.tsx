import {SEO} from "../components/common/seo";
import {MainHeader} from "../components/home/main-header";
import {useAuth} from "../lib/context/auth-context";
import {HomeLayout, ProtectedLayout, TrendsLayout} from "../components/layout/common-layout";
import {MainLayout} from "../components/layout/main-layout";
import {ChatBody, Conversation, Message} from "../lib/types/chat";
import {Modal} from "../components/modal/modal";
import {ActionModal} from "../components/modal/action-modal";
import {useModal} from "../lib/hooks/useModal";
import {Button} from "../components/ui/button";
import {HeroIcon} from "../components/ui/hero-icon";
import {ToolTip} from "../components/ui/tooltip";
import React, {
    useRef,
    useState,
    ReactElement, ReactNode, useEffect, useContext
} from 'react';
import {useTranslation} from "react-i18next";
import {ChatContainer} from "../components/home/chat-container";
import {AnimatePresence, motion} from "framer-motion";
import {Chat} from "../components/chat/Chat";
import ChatContext, {ChatInitialState, initialState} from "../lib/context/chat-context";
import {useCreateReducer} from "../lib/hooks/useCreateReducer";

export default function Explore(): JSX.Element {
    const {open, openModal, closeModal} = useModal();
    const {user} = useAuth();
    const stopConversationRef = useRef<boolean>(false);
    const {t} = useTranslation('chat');
    const contextValue = useCreateReducer<ChatInitialState>({
        initialState,
    });

    return (
        <ChatContext.Provider
            value={{
                ...contextValue
            }}
        >
            <ChatContainer>
                <SEO title='ChatGPT - 투밋'/>

                <MainHeader className='flex items-center justify-between' useMobileSidebar>

                    <div className='-mb-1 flex flex-col'>
                        <h2 className='-mt-1 text-xl font-bold'>챗봇</h2>
                        <p className='text-xs text-light-secondary dark:text-dark-secondary'>
                            @{user?.username}
                        </p>
                    </div>
                    <Button
                        className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10
                     dark:active:bg-dark-primary/20'
                        onClick={openModal}
                    >
                        <HeroIcon className='h-5 w-5' iconName='ArchiveBoxXMarkIcon'/>
                        <ToolTip
                            className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
                            tip='메세지 전체 삭제'
                        />
                    </Button>
                </MainHeader>

                <section className='mt-10 h-full'>
                    <AnimatePresence mode='popLayout'>
                        <div className="relative h-full overflow-hidden bg-main-background">
                            <Chat
                                stopConversationRef={stopConversationRef}
                                closeModal={closeModal}
                                open={open}
                                openModal={openModal}
                            />
                        </div>
                    </AnimatePresence>
                </section>

            </ChatContainer>
        </ChatContext.Provider>
    )
}
Explore.getLayout = (page: ReactElement): ReactNode => (
    <ProtectedLayout>
        <MainLayout>
            <TrendsLayout>{page}</TrendsLayout>
        </MainLayout>
    </ProtectedLayout>
);
