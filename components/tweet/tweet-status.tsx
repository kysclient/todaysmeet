import { motion } from 'framer-motion';
import { HeroIcon } from '../ui/hero-icon';
import { CustomIcon } from '../ui/custom-icon';
import { fromTop } from '../input/input-form';
import type { ReactNode } from 'react';

type TweetStatusProps = {
  type: 'pin' | 'tweet';
  children: ReactNode;
};

export function TweetStatus({ type, children }: TweetStatusProps): JSX.Element {
  return (
    <motion.div
      className='col-span-2 grid grid-cols-[48px,1fr] gap-3 text-light-secondary dark:text-dark-secondary'
      {...fromTop}
    >
      <i className='justify-self-end'>
        {type === 'pin' ? (
          <CustomIcon
            className='h-5 w-5 -rotate-45 fill-light-secondary dark:fill-dark-secondary'
            iconName='PinIcon'
          />
        ) : (
          <HeroIcon className='h-5 w-5' iconName='ArrowPathRoundedSquareIcon' />
        )}
      </i>
      {children}
    </motion.div>
  );
}
