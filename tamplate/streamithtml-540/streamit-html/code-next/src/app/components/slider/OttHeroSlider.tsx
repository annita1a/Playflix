"use client";

import { memo, Fragment, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";
import { Col, Container, Row } from "react-bootstrap";
// react-router-dom
import Link from "next/link";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Thumbs, Pagination]);

// Static slider data
export const sliderMovies = [
  {
    id: 1,
    title: "streamMovies.game_of_heros",
    desc: "streamMovies.game_of_heros_desc",
    imagePortrait: "/assets/images/media/gameofhero-portrait.webp",
    imageBanner: "/assets/images/media/gameofhero.webp",
    duration: "2hr : 30m",
    badge: "NC-17",
    rating: 5,
    tags: ["streamTag.action", "streamTag.adventure", "streamTag.drama"],
    genres: ["streamGenres.action", "streamGenres.adventure", "streamGenres.crime"],
    cast: ["favouritePersonalities.olivia_foster", "favouritePersonalities.Leena_Burton", "favouritePersonalities.Ryan_Pierce"],
  },
  {
    id: 2,
    title: "streamMovies.fast_&_furious",
    desc: "streamMovies.fast_&_furious_desc",
    imagePortrait: "/assets/images/media/fast-furious-portrait.webp",
    imageBanner: "/assets/images/media/fast-furious.webp",
    duration: "2hr : 59m",
    badge: "NC-17",
    rating: 4,
    tags: ["streamTag.family", "streamTag.hitman", "streamTag.horror"],
    genres: ["streamGenres.action", "streamGenres.adventure", "streamGenres.crime"],
    cast: ["favouritePersonalities.jordan_grant", "favouritePersonalities.jeff_bridges", "favouritePersonalities.james_stewart"],
  },
  {
    id: 3,
    title: "streamMovies.minions",
    desc: "streamMovies.minions_desc",
    imagePortrait: "/assets/images/media/minions-portrait.webp",
    imageBanner: "/assets/images/media/minions.webp",
    release: { month: "streamMonth.july", year: "2025" },
    badge: "4 streamEpisode.season",
    rating: 4.5,
    tags: ["streamTag.agents", "streamTag.brother", "streamTag.brother_relationship"],
    genres: ["streamGenres.action", "streamGenres.adventure", "streamGenres.animation"],
    cast: ["favouritePersonalities.ava_monroe", "favouritePersonalities.charles_melton", "favouritePersonalities.james_stewart"],
  },
  {
    id: 4,
    title: "streamMovies.vikings",
    desc: "streamMovies.vikings_desc",
    imagePortrait: "/assets/images/media/vikings-portrait.webp",
    imageBanner: "/assets/images/media/vikings.webp",
    release: { month: "streamMonth.january", year: "2025" },
    badge: "2 streamEpisode.season",
    rating: 4.5,
    tags: ["streamTag.agents", "streamTag.brother", "streamTag.cricket"],
    genres: ["streamGenres.animation", "streamGenres.adventure", "streamGenres.crime"],
    cast: ["favouritePersonalities.olivia_foster", "favouritePersonalities.Leena_Burton", "favouritePersonalities.Ryan_Pierce"],
  },
  {
    id: 5,
    title: "streamMovies.toddler",
    desc: "streamMovies.toddler_desc",
    imagePortrait: "/assets/images/media/toddler-portrait.webp",
    imageBanner: "/assets/images/media/toddler.webp",
    duration: "50 m",
    badge: "2 streamEpisode.season",
    rating: 4.5,
    tags: ["streamTag.action", "streamTag.adventure", "streamTag.astronomy"],
    genres: ["streamGenres.adventure", "streamGenres.animation", "streamGenres.crime"],
  },
  {
    id: 6,
    title: "streamMovies.kung_fu_panda",
    desc: "streamMovies.kung_fu_panda_desc",
    imagePortrait: "/assets/images/media/kung-fu-panda-portrait.webp",
    imageBanner: "/assets/images/media/kung-fu-panda.webp",
    duration: "45 m",
    badge: "4 streamEpisode.season",
    rating: 4.5,
    tags: ["streamTag.action", "streamTag.adventure", "streamTag.astronomy"],
    genres: ["streamGenres.adventure", "streamGenres.animation", "streamGenres.crime"],
  },
];

const OttHeroSlider = memo(() => {
  const { t, i18n } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  // Force re-render when language or direction changes
  useEffect(() => {
     setThumbsSwiper(null);
    setRenderKey(prev => prev + 1);
  }, [themeSchemeDirection]);

  // Render badge text helper
  const renderBadge = (badge: string | any) => {
    if (!badge) return null;
    if (typeof badge === "string") {
      const m = badge.match(/^(\d+)\s+(.+)$/);
      if (m) {
        const count = m[1];
        const key = m[2];
        return `${count} ${t(key)}`;
      }
      const translated = t(badge);
      return translated !== badge ? translated : badge;
    }
    return badge;
  };

  return (
    <Fragment key={renderKey}>
      <div className="iq-banner-thumb-slider overflow-hidden">
        <div className="slider">
          <div className="position-relative slider-bg my-auto">
            {/* Thumb Slider */}
            <div className="horizontal_thumb_slider" data-swiper="slider-thumbs-ott">
              <div className="banner-thumb-slider-nav">
                <Swiper
                  thumbs={{ swiper: thumbsSwiper }}
                  dir={themeSchemeDirection}
                  spaceBetween={24}
                  slidesPerView={2}
                  loop={sliderMovies.length > 2}
                  breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
                  watchSlidesProgress={true}
                  navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  className="swiper-horizontal swiper-container mb-0"
                >
                  {sliderMovies.map((movie) => (
                    <SwiperSlide key={movie.id} className="swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <Image
                            src={movie.imagePortrait}
                            width={400}
                            height={600}
                            className="img-fluid"
                            alt={t(movie.title)}
                            loading="lazy"
                          />
                          <div className="block-description">
                            <h6 className="iq-title fw-500 line-count-1">{t(movie.title)}</h6>
                            <div className="d-flex align-items-center gap-1">
                              <i className="ph ph-clock"></i>
                              <span className="fs-12">
                                {movie.duration ? movie.duration : `${t(movie.release?.month)} ${movie.release?.year}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation buttons */}
                <div ref={prevRef} className="slider-prev swiper-button">
                  <i className="ph ph-caret-left icli arrow-icon"></i>
                </div>
                <div ref={nextRef} className="slider-next swiper-button">
                  <i className="ph ph-caret-right icli arrow-icon"></i>
                </div>
              </div>
            </div>

            {/* Banner Slider */}
            <div className="slider-images iq-rtl-thumb-swiper" data-swiper="slider-images-ott">
              <Swiper
                dir={themeSchemeDirection}
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                watchSlidesProgress={true}
                loop={sliderMovies.length > 1}
                className="swiper-container mb-0"
              >
                {sliderMovies.map((movie) => (
                  <SwiperSlide key={movie.id} className="p-0 banner-bg">
                    <div
                      className="slider--image block-images"
                      style={{ backgroundImage: `url(${movie.imageBanner})` }}
                    >
                      <Container fluid className="position-relative">
                        <Row className="align-items-center h-100 slider-content-full-height">
                           <Col lg={5} md={12}>
                            <div className="slider-content">
                              {/* Title */}
                              <h2 className="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                                {t(movie.title)}
                              </h2>

                              {/* Badge + Rating + Duration/Release */}
                              <div className="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                                {movie.badge && (
                                  <span className="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary fw-bold">
                                    {renderBadge(movie.badge)}
                                  </span>
                                )}

                                {movie.rating && (
                                  <div className="d-flex align-items-center gap-3">
                                    <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <li key={i}>
                                          <i
                                            className={`ph-fill ${i + 1 <= Math.floor(movie.rating)
                                              ? "ph-star"
                                              : i < movie.rating
                                                ? "ph-star-half"
                                                : "ph-star"
                                              }`}
                                          ></i>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div className="d-flex align-items-center gap-1">
                                  <i className="ph ph-clock"></i>
                                  <span className="font-size-16 fw-500">
                                    {movie.duration
                                      ? movie.duration
                                      : `${t(movie.release?.month)} ${movie.release?.year}`}
                                  </span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="line-count-3 my-3 RightAnimate-two">{t(movie.desc)}</p>

                              {/* Tags / Genres / Cast */}
                              <div className="RightAnimate-three mt-2">
                                {movie.tags && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize mb-1">
                                    {t("streamTag.tags")}:{" "}
                                    {movie.tags.map((tag, index) => (
                                      <Link key={index} href="/view-all" className="text-body text-decoration-none fw-normal ms-1">
                                        {t(tag)}{index < movie.tags.length - 1 && ","}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {movie.genres && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize mb-1">
                                    {t("streamGenres.genre")}:{" "}
                                    {movie.genres.map((genre, index) => (
                                      <Link key={index} href="/view-all" className="text-body text-decoration-none fw-normal ms-1">
                                        {t(genre)}{index < movie.genres.length - 1 && ","}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {movie.cast && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize">
                                    {t("favouritePersonalities.starting")}:{" "}
                                    {movie.cast.map((actor, index) => (
                                      <span key={index}>
                                        <Link href="/person-detail" className="text-body text-decoration-none fw-normal ms-1">
                                          {t(actor)}
                                        </Link>
                                        {index < movie.cast.length - 1 && <span className="text-body">,</span>}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Play Now button */}
                              <div className="RightAnimate-four mt-4 pt-2">
                                <Link
                                  href="/movies/detail"
                                  className="btn btn-primary text-capitalize position-relative rounded-3"
                                >
                                  <span className="d-flex align-items-center gap-2">
                                    <span className="button-text">{t("streamButtons.play_now")}</span>
                                    <i className="ph-fill ph-play fs-6"></i>
                                  </span>
                                </Link>
                              </div>

                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

OttHeroSlider.displayName = "OttHeroSlider";
export default OttHeroSlider;