"use client";

import React, { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//react-router-dom
import Link from "next/link";

//components
import ReviewComponent from "@/components/ReviewComponent";
import Sources from "@/components/Sources";
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";
import RelatedVideos from "@/components/sections/RelatedVideos";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import RelatedMovies from "@/components/sections/RelatedMovies";
import FsLightBox from "@/components/fslight-box";
import RatingStar from "@/components/rating-star";
import VideoJS from "@/components/plugins/VideoJs";

//function
import {
  crew,
  detailpage_related_video,
  generateImgPath,
  MovieDetail_recommendedforYou,
  upcoming_recommended_movies,
  upcoming_related_video,
} from "@/StaticData/data";

//utilites
import { useEnterExit } from "@/utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";

//hook
import { useTranslation } from 'react-i18next';
import Details_Part from "@/components/details_part";
import ProductCard from "@/components/merchandise/product-card";
import { related_product } from "@/StaticData/shop";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import Review_Details from "@/components/review/review_details";

const MoviesDetail = memo(() => {
  const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  // date, type


  const playerRef = React.useRef(null);

  const videoJsOptions = {
    muted: true,
    autoplay: true,
    controls: true,
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
      iv_load_policy: 1,
    },
    fullscreen: true,
    poster: "https://i.ytimg.com/vi_webp/rKVEoyTedv4/maxresdefault.webp",
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;
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
              <Details_Part
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                title={"streamMovies.game_of_heros"}
                year={2021}
                time={"2hr : 6m"}
                views={"284"}
                imdbratting={7}
                cencerratting={true}
                language={"language.eng"}
                redirectTo="/movie-player"
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
          <RelatedMovies
            viewAll={false}
            slideMedium={2}
            title="sectionTitle.recommended_movie"
            list={upcoming_recommended_movies}
          />
          <RelatedVideos
            list={detailpage_related_video}
            viewAll={false}
            slideMedium={2}
          />
          <div className="newest-product-block related-product-slider">
            <div className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="main-title text-capitalize mb-0">
                  {t("sectionTitle.newest_products")}
                </h4>
                <Link
                  href="/all-products"
                  className="text-primary iq-view-all text-decoration-none flex-none"
                >
                  {t("streamButtons.want_more")}
                </Link>
              </div>
              <div className="card-style-slider">
                <Swiper
                  key={themeSchemeDirection.toString()}
                  dir={themeSchemeDirection.toString()}
                  slidesPerView={6}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  loop={true}
                  speed={1500}
                  modules={[Navigation]}
                  wrapperTag="ul"
                  className="position-relative swiper-card wrapper-class merch-slides"
                  // wrapperclassName="p-0 m-0  list-inline"
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    1025: {
                      slidesPerView: 6,
                      spaceBetween: 0,
                    },
                    1500: {
                      slidesPerView: 6,
                      spaceBetween: 0,
                    },
                  }}
                >
                  {related_product.map((item: any, index) => {
                    return (
                      <SwiperSlide tag="li" key={index}>
                        <ProductCard
                          thumbnail={item.thumbnail}
                          product_name={t(item.product_name)}
                          price={item.price}
                          final_price={item.final_price}
                          rating="5"
                          count1="0"
                          is_sale={item.is_sale}
                          is_new={item.is_new}
                          slug={item.slug}
                        />
                      </SwiperSlide>
                    );
                  })}
                  <div className="swiper-button swiper-button-next"></div>
                  <div className="swiper-button swiper-button-prev"></div>
                </Swiper>
              </div>
            </div>
          </div>
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

MoviesDetail.displayName = "MoviesDetail";
export default MoviesDetail;
