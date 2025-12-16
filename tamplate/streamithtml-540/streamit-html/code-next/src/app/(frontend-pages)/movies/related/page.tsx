"use client"

import React, { Fragment, memo, useRef } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//router
import Link from "next/link";

//componentsplayou
import ReviewComponent from "@/components/ReviewComponent";
import Sources from "@/components/Sources";
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";
import RelatedVideos from "@/components/sections/RelatedVideos";
import ProductCard from "@/components/merchandise/product-card";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import RelatedMovies from "@/components/sections/RelatedMovies";
import VideoJS from "@/components/plugins/VideoJs";
import FsLightBox from "@/components/fslight-box";
import RatingStar from "@/components/rating-star";

//static data
import { related_merchandise_product } from "@/StaticData/shop";

//function
import { MovieDetail_recommendedforYou, crew, detailpage_related_video, upcoming_recommended_movies, upcoming_related_video } from "@/StaticData/data";

//utilities
import { useEnterExit } from "@/utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import { Navigation } from "swiper";

//hook
import { useTranslation } from 'react-i18next';
import Video from "@/components/video/video";
import Details_Part from "@/components/details_part";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";
import Review_Details from "@/components/review/review_details";


const RelatedPage = memo(() => {
    const { t } = useTranslation("common");
    // date, type
 const themeSchemeDirection = useSelector(theme_scheme_direction);
 
    return (
        <Fragment>
          <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
          <Video videolink="https://www.youtube.com/watch?v=spGSAeqxVUc" posterlink=""></Video>
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part
                title={"streamMovies.dinoosaur"}
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                year={2001}
                time={"2hr : 17m"}
                views={"1.0k"}
                imdbratting={5}
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

          <div className="best-product-block">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="main-title text-capitalize mb-0">
                {t("sectionTitle.related_products")}
              </h4>
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
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                  1500: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }}
              >
                {related_merchandise_product.map((item:any, index) => {
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
        </Fragment>
    );
});

RelatedPage.displayName = "RelatedPage";
export default RelatedPage;
