"use client";

import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container, Nav, Tab } from "react-bootstrap";

// Next-Link
import Link from "next/link";

//components
import ReviewComponent from "@/components/ReviewComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingStar from "@/components/rating-star";

//function
import {
  crew,
  generateImgPath,
  tvshow_detail_episode,
  tvshow_detail_episode2,
  TVshowDetail_recommendedforYou,
  upcoming_related_video,
} from "@/StaticData/data";

//utilities
import { useEnterExit } from "@/utilities/usePage";

// @ts-ignore
import { Navigation } from "swiper";

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     // extract the locale identifier from the URL
//     const { locale } = context

//     return {
//         props: {
//             // pass the translation props to the page component
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }

//hook
import { useTranslation } from 'react-i18next';
import Details_Part from "@/components/details_part";
import VideoJS from "@/components/plugins/VideoJs";
import Review_Details from "@/components/review/review_details";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";
import EpisodeCard from "@/components/cards/EpisodeCard";
import SectionSlider from "@/components/slider/SectionSlider";
import Video from "@/components/video/video";

const ShowsDetailPage = memo(() => {
  const { t } = useTranslation("common");

  // date, type
  const shows = {
    id: 1,
    slug: "zombie-world",
    thumbnail: generateImgPath("/assets/images/tags/07.webp"),
    title: "streamMovies.zombie_world",
    detail: "detail_page.movie_desc",
    season_type: "Seasons 1",
    certificate: "Adventure",
    rating: 4.5,
    likes: 9,
    rating_from: "Imdb",
    geners: ["Comedy", "Drama"],
    tags: ["4K Ultra", "brother", "brother-relationship", "kings", "vikings"],
    video_link: "",
    views: "1.2k",
    video_type: "video",
    is_restricted: false,
    episodes: [
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
        episode_no: "S01E01",
        release_date: "October 1, 2020",
        duration: "45min",
        name: "Zombie World 1",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
        episode_no: "S01E02",
        release_date: "October 8, 2020",
        duration: "35min",
        name: "Zombie World 2",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
        episode_no: "S01E03",
        release_date: "October 15, 2020",
        duration: "36min",
        name: "Zombie World 3",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
        episode_no: "S01E04",
        release_date: "October 22, 2020",
        duration: "41min",
        name: "Zombie World 4",
      },
    ],

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
        as: "data_js.writing",
      },
      {
        title: "detail_page.irene_mecchi",
        thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
        as: "data_js.writing",
      },
      {
        title: "detail_page.karan_gilchrist",
        thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
        as: "data_js.production",
      },
    ],
    created_by_username: "Admin",
    created_at: "Feb 2019",
    ranking: "#1 in Series Today ",
    date: "Nov 2020",
  };

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
        src: "https://www.youtube.com/watch?v=spGSAeqxVUc",
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

  return (
    <Fragment>
      <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
         <Video videolink="https://www.youtube.com/watch?v=spGSAeqxVUc" posterlink="/assets/images/player/player-poster.webp"></Video>
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part
                subsribe_to_watch={true}
                year={2021}
                title={"streamMovies.vikings"}
                time={"2hr : 6m"}
                views={"284"}
                imdbratting={7}
                language={"language.eng"}
                lenguagecountry={"UK"}
                redirectTo="/tv-shows/episodes"
              />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
          <div className="show-episode section-padding">
            <Tab.Container
              id="tvshow_episode_season"
              defaultActiveKey="season1"
            >
              <Nav
                as="ul"
                variant="pills"
                className="custom-tab-slider episode-nav-btn gap-3 mb-4 pb-2"
                role="tablist"
              >
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="season1"
                    className=""
                    aria-selected="true"
                  >
                    Season 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="season2">Season 2</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content></Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey="season1">
                  <SectionSlider
                    title={""}
                    list={tvshow_detail_episode}
                    className="recommended-block"
                    slidesPerView={5}
                    wrapperClass={true}
                    viewAll={false}
                    // slideMedium={props.slideMedium}
                    // paddingY={props.paddingY}
                    loop={true}
                    speed={1500}
                  >
                    {(data) => (
                      <EpisodeCard
                        link={data.link}
                        image={data.image}
                        showEpisod={data.showEpisod}
                        episodDate={data.episodDate}
                        episodTime={data.episodTime}
                        episodTitle={t(data.episodTitle)}
                        episodeTitlesText={t(data.episodeTitlesText)}
                        episodeDetailText={t(data.episodeDetailText)}
                        episodesNumber={data.showEpisod}
                      ></EpisodeCard>
                    )}
                  </SectionSlider>
                </Tab.Pane>
                <Tab.Pane eventKey="season2">
                  <SectionSlider
                    title={""}
                    list={tvshow_detail_episode2}
                    className="recommended-block"
                    slidesPerView={5}
                    wrapperClass={true}
                    viewAll={false}
                    speed={1500}
                  >
                    {(data: any) => (
                      <EpisodeCard
                        link={data.link}
                        image={data.image}
                        showEpisod={data.showEpisod}
                        episodDate={data.episodDate}
                        episodTime={data.episodTime}
                        episodTitle={t(data.episodTitle)}
                        episodeTitlesText={t(data.episodeTitlesText)}
                        episodeDetailText={t(data.episodeDetailText)}
                        episodesNumber={data.showEpisod}
                      ></EpisodeCard>
                    )}
                  </SectionSlider>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>

          <MoviesRecommendedForYou
            title={"sectionTitle.recommended"}
            list={TVshowDetail_recommendedforYou}
            viewAll={false}
          />
          <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
          <YourFavouritePersonality
            title={"sectionTitle.crew"}
            list={crew}
            slidePerView={11}
          />
          <UpcomingMovies
            list={upcoming_related_video}
            viewAll={false}
            title="sectionTitle.upcoming"
          />
          <div className="show-episode section-padding-bottom">
            <Review_Details />
          </div>
        </div>
      </Container>
    </Fragment>
  );
});

ShowsDetailPage.displayName = "ShowsDetailPage";
export default ShowsDetailPage;
