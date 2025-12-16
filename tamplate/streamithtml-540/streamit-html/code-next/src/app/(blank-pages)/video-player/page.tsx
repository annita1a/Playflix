"use client"

import React, { memo, Fragment } from "react";

import { Container } from "react-bootstrap";

import Link from "next/link";



const Video_Player = memo(() => {  
    return(
        <Fragment>
                 <Container>
              <div className="back-btn">
                  <Link className="btn btn-link text-white text-decoration-none p-0" href="/videos/detail">
                      <i className="ph ph-x"></i>
                  </Link>
              </div>
              <div className="video-container">
                  <video
                      id="my-video"
                      className="video-js vjs-big-play-centered"
                      controls
                      preload="auto"
                      width="960"
                      height="540"
                      poster="/assets/images/player/player-poster.webp"
                      data-setup='{}'>
                      <source src="/assets/images/player/demo_videos.mp4" type="video/mp4" />
                  </video>
              </div>
          </Container>
        </Fragment>
    )
});

export default Video_Player;