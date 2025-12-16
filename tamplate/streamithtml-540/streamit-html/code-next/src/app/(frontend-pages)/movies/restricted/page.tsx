"use client";

import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container } from "react-bootstrap";

//router
import Link from "next/link";

//components
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";
import UpcomingMovies from "@/components/sections/UpcomingMovies";

//function
import {
  crew,
  MovieDetail_recommendedforYou,
  detailpage_related_video,
  upcoming_recommended_movies,
  upcoming_related_video,
} from "@/StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import { Navigation } from "swiper";

//hook
import { useTranslation } from "react-i18next";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import Details_Part from "@/components/details_part";
import Video from "@/components/video/video";

const RestrictedPage = memo(() => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
          <Video
            videolink="https://www.youtube.com/watch?v=spGSAeqxVUc"
            posterlink="/assets/images/player/player-poster.webp"
          ></Video>
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part
                title={"streamMovies.chosfies"}
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                btn_title={"streamButtons.subscribe_watch"}
                icon_class={"ph-fill ph-crown"}
                year={2021}
                time={"2hr : 6m"}
                views={"1.4k"}
                imdbratting={7}
                cencerratting={true}
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
            title={"sectionTitle.related_movies"}
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

          <section className="section-padding-bottom">
            <div className="rate-review-details">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <h5 className="main-title text-capitalize m-0 fw-medium">
                  {t("streamShop.reviews")}
                </h5>
              </div>
              <div className="comments-section">
                <div className="review-card">
                  <div className="review-detail rounded-3">
                    <h5 className="m-0 text-center">
                      {" "}
                      Not Rated Yet
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Fragment>
  );
});

RestrictedPage.displayName = "RestrictedPage";
export default RestrictedPage;
