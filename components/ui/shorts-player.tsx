import ReactPlayer from "react-player";
import {useRef, useState} from "react";
import {Loading} from "@components/ui/loading";

interface ShortsPlayerProps {
    url: string
}

export function ShortsPlayer({url}: ShortsPlayerProps): JSX.Element {
    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    const handleReady = () => {
        setLoading(false);
    };
    return (
        <>
            {
                loading && <Loading className="w-full h-full flex items-center justify-center" />
            }
            <ReactPlayer
                ref={playerRef}
                onReady={handleReady}
                muted={true}
                loop={true}
                controls={false}
                playing={true}
                width='100%'
                height='100%'
                url={url}
            />
        </>
    )
}
