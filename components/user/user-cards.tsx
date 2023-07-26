import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { StatsEmpty } from '../tweet/stats-empty';
import { Loading } from '../ui/loading';
import { variants } from './user-header';
import { UserCard } from './user-card';
import type { User } from '../../lib/types/user';
import type { StatsType } from '../view/view-tweet-stats';
import type { StatsEmptyProps } from '../tweet/stats-empty';

type FollowType = 'following' | 'followers';

type CombinedTypes = StatsType | FollowType;

type UserCardsProps = {
  data: User[] | null;
  type: CombinedTypes;
  follow?: boolean;
  loading: boolean;
};

type NoStatsData = Record<CombinedTypes, StatsEmptyProps>;

const allNoStatsData: Readonly<NoStatsData> = {
  retweets: {
    title: '당신이 좋아하는 피드를 다시 공유해보세요.',
    imageData: { src: '/assets/no-retweets.png', alt: 'No retweets' },
    description: '공유하여 내 타임라인에서 다른 사람의 피드를 공유하세요. 실행하면 여기에 표시됩니다.'
  },
  likes: {
    title: '좋아하는 피드가 없습니다.',
    imageData: { src: '/assets/no-likes.png', alt: 'No likes' },
    description: '피드에 좋아요를 누른다면, 여기에 표시됩니다.'
  },
  following: {
    title: '알아두세요.',
    description:
      '계정을 팔로우하면 타임라인을 관리하고 관심 있는 주제와 사람들에게 무슨 일이 일어나고 있는지 알 수 있습니다.'
  },
  followers: {
    title: '팔로워를 찾고 계십니까?',
    imageData: { src: '/assets/no-followers.png', alt: 'No followers' },
    description:
      '누군가 이 계정을 팔로우하면 여기에 표시됩니다. 다른 사람과 공유하고 교류하면 팔로워를 늘리는 데 도움이 됩니다.'
  }
};

export function UserCards({
  data,
  type,
  follow,
  loading
}: UserCardsProps): JSX.Element {
  const noStatsData = allNoStatsData[type];
  const modal = ['retweets', 'likes'].includes(type);

  return (
    <section
      className={cn(
        modal && 'h-full overflow-y-auto [&>div:first-child>a]:mt-[52px]',
        loading && 'flex items-center justify-center'
      )}
    >
      {loading ? (
        <Loading className={modal ? 'mt-[52px]' : 'mt-5'} />
      ) : (
        <AnimatePresence mode='popLayout'>
          {data?.length ? (
            data.map((userData) => (
              <motion.div layout='position' key={userData.id} {...variants}>
                <UserCard {...userData} follow={follow} modal={modal} />
              </motion.div>
            ))
          ) : (
            <StatsEmpty {...noStatsData} modal={modal} />
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
