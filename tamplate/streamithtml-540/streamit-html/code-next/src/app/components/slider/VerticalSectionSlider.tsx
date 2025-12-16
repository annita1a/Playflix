import { FC,Fragment, memo, useState } from "react";

//react-router-dom
import Link from "next/link";

//swiper
import {Swiper as SwiperCore} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

//hook
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";



interface SliderData {
  title: string;
  image: string;
  movieTime: string;
  movie_desc: string;
  imdb_rating:  number;
  genres?: string[]
}

interface VerticalSectionSliderProps {
  sliderData: SliderData[];
}

const VerticalSectionSlider: FC<VerticalSectionSliderProps> = memo(({ sliderData }) => {
  const { t } = useTranslation("common");
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const themeSchemeDirection = useSelector(theme_scheme_direction);

  return (
    <Fragment>
    <div className="verticle-slider section-padding-bottom">
        <div>
          <div className="slider">
            <div className="slider-flex position-relative">
              <div className="slider--col position-relative">
                <div className="vertical-slider-prev swiper-button">
                  <i className="iconly-Arrow-Up-2 icli"></i>
                </div>
                <div className="slider-thumbs" data-swiper="slider-thumbs">
                  <div
                    className="swiper-container"
                    data-swiper="slider-thumbs-inner"
                  >
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={3}
                      // dir={themeSchemeDirection}
                      navigation={{
                        nextEl: ".vertical-slider-next",
                        prevEl: ".vertical-slider-prev",
                      }}
                      loop={true}
                      centeredSlides={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      direction="vertical"
                      className="swiper-wrapper top-ten-slider-nav"
                    >
                      {sliderData.map((data) => (
                        <SwiperSlide
                          key={data.title + "tranding-thumb"}
                          tag="li"
                          className="swiper-slide swiper-bg"
                        >
                          <div className="block-images position-relative">
                            <div className="img-box slider--image">
                              <img
                                src={data.image}
                                className="img-fluid rounded-3"
                                alt="image"
                                loading="lazy"
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <Link href="/tv-shows/detail">{t(data.title)}</Link>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="d-flex align-items-center gap-1 font-size-12">
                                  <i className="ph ph-clock"></i>
                                  <span className="text-body">
                                    {data.movieTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="slider-next btn-verticle">
                      <i className="ri-arrow-down-s-line vertical-aerrow"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="vertical-slider-next swiper-button"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-b130b4e10e1468117"
                >
                  <i className="iconly-Arrow-Down-2 icli"></i>
                </div>
              </div>
              <div className="slider-images" data-swiper="slider-images">
                <Swiper
                  // dir={themeSchemeDirection}
                  // spaceBetween={10}
                  modules={[FreeMode, Navigation, Thumbs]}
                  effect="fade"
                  className="swiper-container responsive-swiper-vertical"
                  loop={true}
                  watchSlidesProgress={true}
                  onSwiper={setThumbsSwiper}
                  breakpoints={{
                    675: {
                      direction: "horizontal",
                    },
                    1025: {
                      direction: "vertical",
                    },
                  }}
                >
                  {sliderData.map((data) => (
                    <SwiperSlide
                      key={data.title + "tranding-main"}
                      tag="li"
                      className="swiper-slide"
                    >
                      <div className="slider--image block-images">
                        <img src={data.image} loading="lazy" alt="" />
                      </div>
                      <div className="description">
                        <div className="block-description">
                          <ul className="ps-0 mb-2 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag justify-content-center justify-content-lg-start genres-list gap-1 gap-sm-0">
                            {data.genres && data.genres.map((genre, index) => (
                              <li key={index} className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-white text-decoration-none"
                                >
                                  {t(genre)}
                                </Link> 
                                </li>
                            ))}
                          </ul>
                          <h2 className="iq-title mb-0">
                            <Link href="/tv-shows/detail">{t(data.title)}</Link>
                          </h2>
                          <div className="d-flex align-items-center gap-3 py-2 justify-content-center justify-content-lg-start flex-wrap">
                            <div className="slider-ratting d-flex align-items-center gap-1">
                              <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li>
                                  <i
                                    className="ph-fill ph-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="ph-fill ph-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="ph-fill ph-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="ph-fill ph-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="ph-fill ph-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                              <p className="mb-0">{data.imdb_rating}</p>
                              <img
                                className="imdb-img"
                                alt="imdb-logo"
                                src="/assets/images/pages/imdb-logo.svg"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-1">
                              <i className="ph ph-clock font-size-14"></i>
                              <span className="text-body">
                                {data.movieTime}
                              </span>
                            </div>
                          </div>
                          <p className="mt-2 mb-3 line-count-3">
                            {t(data.movie_desc)}
                          </p>
                          <div className="iq-button">
                            <Link
                              href="/movies/detail"
                              className="btn btn-primary text-capitalize position-relative rounded-3"
                            >
                              <div className="d-flex align-items-center gap-2">
                                <span className="button-text">
                                  {t("streamButtons.play_now")}
                                </span>{" "}
                                <i className="ph-fill ph-play fs-6"></i>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
})

VerticalSectionSlider.displayName = "VerticalSectionSlider"
export default VerticalSectionSlider