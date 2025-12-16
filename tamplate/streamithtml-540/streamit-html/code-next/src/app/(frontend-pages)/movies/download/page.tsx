"use client"

import React, { memo, Fragment, useState } from "react";
//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//swiper
import { Navigation } from "swiper";

// the hook
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";
import Video from "@/components/video/video";
import Details_Part from "@/components/details_part";
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";
import { crew, MovieDetail_recommendedforYou, upcoming_recommended_movies, upcoming_related_video, detailpage_related_video } from "@/StaticData/data";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import Review_Details from "@/components/review/review_details";
import FsLightbox from "fslightbox-react";
import FsLightBox from "@/components/fslight-box";

const DownloadMovie = memo(() => {
  const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  const playerRef = React.useRef(null);

 

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
                title={"streamMovies.chosfies"}
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                year={2021}
                time={"2hr : 6m"}
                views={"1.4k"}
              />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
          <div className="section-padding-top">
          <MoviesRecommendedForYou
            title={"sectionTitle.recommended"}
            list={MovieDetail_recommendedforYou}
            viewAll={false}
          />
          </div>
          <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
          <YourFavouritePersonality
            title={"sectionTitle.crew"}
            list={crew}
            slidePerView={11}
          />  
          <MoviesRecommendedForYou
            list={upcoming_recommended_movies}
            title={"sectionTitle.recommended_movie"}
            viewAll={false}
            loop={false}
          />
          <MoviesRecommendedForYou
            list={detailpage_related_video}
            title={"sectionTitle.related_videos"}
            viewAll={false}
            loop={false}
          />
          <UpcomingMovies
            list={upcoming_related_video}
            viewAll={false}
            title="sectionTitle.upcoming"
          />
          <section className="mb-5">
            <div className="show-episode section-padding-bottom">
              <Review_Details />
            </div>
          </section>
        </div>
      </Container>
       <FsLightbox
              toggler={toggler}
              sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
            />
      {/* <FsLightBox
        maxYoutubeVideoDimensions={{ width: 1000, height: 600 }}
        exitFullscreenOnClose={true}
        sources={[""]}
      /> */}
    </Fragment>
  );
});

DownloadMovie.displayName = "DownloadMovie";
export default DownloadMovie;
