import Link from 'next/link';
import cn from 'clsx';
import { NextImage } from '@components/ui/next-image';
import avatar1 from "/public/assets/avatars/avatar_1-003262ed.jpg";
import avatar2 from "/public/assets/avatars/avatar_2-ceeb03f6.jpg";
import avatar3 from "/public/assets/avatars/avatar_3-74e0fbce.jpg";
import avatar4 from "/public/assets/avatars/avatar_4-2497c77c.jpg";
import avatar5 from "/public/assets/avatars/avatar_5-89cf34e3.jpg";
import avatar6 from "/public/assets/avatars/avatar_6-1e41071d.jpg";
import avatar7 from "/public/assets/avatars/avatar_7-8a66cd04.jpg";
import avatar8 from "/public/assets/avatars/avatar_8-1956d908.jpg";
import avatar9 from "/public/assets/avatars/avatar_9-f12c0596.jpg";
type UserAvatarProps = {
  src: string;
  alt: string;
  size?: number;
  username?: string;
  className?: string;
};

const imageUrls = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  "",
  ""
];


export function UserAvatar({
  src,
  alt,
  size,
  username,
  className
}: UserAvatarProps): JSX.Element {
  const pictureSize = size ?? 40;
  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  return (
    <Link href={username ? `/user/${username}` : '#'}>
      <a
        className={cn(
          'blur-picture flex self-start',
          !username && 'pointer-events-none',
          className
        )}
        tabIndex={username ? 0 : -1}
      >
        <NextImage
          useSkeleton
          imgClassName='rounded-full'
          width={pictureSize}
          height={pictureSize}
          src={src ? src : ""}
          alt={alt ? alt : `random_avatar_${username}`}
          key={src}
        />
      </a>
    </Link>
  );
}
