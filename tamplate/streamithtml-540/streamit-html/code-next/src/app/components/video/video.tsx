"use client";

import React, { Fragment, memo } from "react";


//hook
import { useTranslation } from 'react-i18next';
import VideoJS from "@/components/plugins/VideoJs";

interface Props{
    videolink : string
    posterlink : string
}

const Video = memo((props:Props) => {
  const { t } = useTranslation("common");


  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    muted: true,
    loop: true,
    preload: "auto",
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: props.videolink,
        type: "video/youtube",
      },
    ],
    youtube: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 1,
    },
    fullscreen: true,
    poster: props.posterlink,
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;
  };

  return (
    <Fragment>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      
    </Fragment>
  );
});

Video.displayName = "Video";
export default Video;
