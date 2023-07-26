import { AnimatePresence } from 'framer-motion';
import { query, where } from 'firebase/firestore';
import { useCollection } from '../../../lib/hooks/useCollection';
import { tweetsCollection } from '../../../lib/firebase/collections';
import { useUser } from '../../../lib/context/user-context';
import { mergeData } from '../../../lib/merge';
import { UserLayout, ProtectedLayout } from '../../../components/layout/common-layout';
import { MainLayout } from '../../../components/layout/main-layout';
import { SEO } from '../../../components/common/seo';
import { UserDataLayout } from '../../../components/layout/user-data-layout';
import { UserHomeLayout } from '../../../components/layout/user-home-layout';
import { Tweet } from '../../../components/tweet/tweet';
import { Loading } from '../../../components/ui/loading';
import { StatsEmpty } from '../../../components/tweet/stats-empty';
import type { ReactElement, ReactNode } from 'react';

export default function UserMedia(): JSX.Element {
  const { user } = useUser();

  const { id, name, username } = user ?? {};

  const { data, loading } = useCollection(
    query(
      tweetsCollection,
      where('createdBy', '==', id),
      where('images', '!=', null)
    ),
    { includeUser: true, allowNull: true }
  );

  const sortedTweets = mergeData(true, data);

  return (
    <section>
      <SEO
        title={`미디어 피드 ${name as string} (@${
          username as string
        }) - 투밋`}
      />
      {loading ? (
        <Loading className='mt-5' />
      ) : !sortedTweets ? (
        <StatsEmpty
          title={`@${username as string} 미디어 피드를 올린적이 없어요.`}
          description='피드를 올린다면 여기에 표시됩니다.'
          imageData={{ src: '/assets/no-media.png', alt: 'No media' }}
        />
      ) : (
        <AnimatePresence mode='popLayout'>
          {sortedTweets.map((tweet) => (
            <Tweet {...tweet} key={tweet.id} />
          ))}
        </AnimatePresence>
      )}
    </section>
  );
}

UserMedia.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <UserLayout>
        <UserDataLayout>
          <UserHomeLayout>{page}</UserHomeLayout>
        </UserDataLayout>
      </UserLayout>
    </MainLayout>
  </ProtectedLayout>
);
