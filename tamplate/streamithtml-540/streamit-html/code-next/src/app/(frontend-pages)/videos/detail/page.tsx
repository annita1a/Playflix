"use client"

import React, { Fragment, memo, useRef } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//router
import Link from "next/link";

//components
import ReviewComponent from "@/components/ReviewComponent";
import Sources from "@/components/Sources";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import FsLightBox from "@/components/fslight-box";
import RatingStar from "@/components/rating-star";
// import VideoJS from "@/components/plugins/VideoJs";

//function
import { generateImgPath, VideoDetail_Upcoming } from "@/StaticData/data";

//utilities
import { useEnterExit } from "@/utilities/usePage";


//hook
import { useTranslation } from 'react-i18next';
import Details_Part from "@/components/details_part";
import Review_Details from "@/components/review/review_details";
import VideoJS from "@/components/plugins/VideoJs";


const VideoDetail = memo(() => {
    const { t } = useTranslation("common");
    

    const playerRef = useRef(null);

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
        src: "https://www.youtube.com/watch?v=eq_aKPXuOTg",
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
    poster: "/assets/images/player/player-poster.webp",
  };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;
    };

    // date, type
    const shows = {
        id: 1,
        slug: "zombie-world",
        thumbnail: generateImgPath("/assets/images/genre/01.webp"),
        title: "streamMovies.zombie_world",
        detail: "detail_page.movie_desc",
        season_type: "2 Season",
        certificate: "Adventure",
        rating: 4.5,
        likes: 9,
        rating_from: "Imdb",
        geners: ["streamGenres.action", "streamGenres.adventure", "streamGenres.drama"],
        tags: [
            "streamTag.brother",
            "streamTag.brother_relationship",
            "streamTagkings",
            "streamTag.vikings",
        ],
        video_link: "",
        video_type: "video",
        is_restricted: false,

        cast: [
            {
                title: "favouritePersonalities.james_chinlund",
                thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
                as: "detail_page.as_james",
            },
            {
                title: "detail_page.james_earl",
                thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
                as: "detail_page.as_jones",
            },
        ],
        crew: [
            {
                title: "detail_page.jeff_nathanson",
                thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
                as: "detail_page.writing",
            },
            {
                title: "detail_page.irene_mecchi",
                thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
                as: "detail_page.writing",
            },
            {
                title: "detail_page.karan_gilchrist",
                thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
                as: "detail_page.production",
            },
        ],
        created_by_username: "Admin",
        created_at: "Feb 2019",
        ranking: "#1 in Series Today ",
        date: "Nov 2020",
    };
    return (
        <Fragment>
                  <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part title={"streamMovies.zombie_island"} subsribe_to_watch={true} isplaylist={true} isdownload={true} year="Feb 2017" views={84} time="50mins" language="language.eng" lenguagecountry="New Zealand" />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
    
          <div className="section-padding-top">
          <UpcomingMovies
            list={VideoDetail_Upcoming}
            viewAll={false}
            title="sectionTitle.upcoming"
          />
          </div>
          <section className="mb-5">
          <div className="show-episode section-padding-bottom ">
            <Review_Details />
          </div>
          </section>
        </div>
      </Container>

        </Fragment>
    );
});

VideoDetail.displayName = "VideoDetail";
export default VideoDetail;
