import { Fragment, memo, useState, useEffect } from "react";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Next-Link
import Link from "next/link";

// static data
import { Tvshowbanners, generateImgPath } from "../../StaticData/data";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//react fs-lightbox
import FsLightbox from "fslightbox-react";


//hook
import { useTranslation } from 'react-i18next';

const TvShowHeroSlider = memo(() => {
  const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);

  const [toggler, setToggler] = useState(false);
  const [isClient, setIsClient] = useState(false);
    // only render Swiper on client to avoid hydration mismatch
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    // helper to render badges that may contain a numeric count + translation key
    const renderBadge = (badge: string | null) => {
      if (!badge) return null;
      if (typeof badge === "string") {
        const m = badge.match(/^(\d+)\s+(.+)$/); // e.g. "4 streamEpisode.season"
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

    if (!isClient) return null; // render nothing on server

  return (
    <Fragment>
    <section className="banner-container">
      <div className="movie-banner">
        <div id="banner-detail-slider" className="banner-container">
          <div className="movie-banner tvshows-slider">
            <Swiper
              key={themeSchemeDirection} // ensures Swiper updates when RTL changes
              dir={themeSchemeDirection}
              navigation={{
                prevEl: ".swiper-banner-button-prev",
                nextEl: ".swiper-banner-button-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                479: { slidesPerView: 1.2 },
                769: { slidesPerView: 1.1 },
                1200: { slidesPerView: 1.3 },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              slidesPerGroup={1}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={1500}
              className="swiper-banner-container"
              pagination={{ el: ".swiper-pagination", clickable: true }}
            >
              {Tvshowbanners.map((movie, index) => (
                <SwiperSlide key={index} className="movie-banner-1 p-0">
                  <div
                    className="movie-banner-image"
                    style={{ backgroundImage: `url(${movie.image})` }}
                  >
                    <Container fluid className="shows-content h-100">
                      <Row className="align-items-center h-100">
                        <Col lg="7" md="12">
                          <h2
                            className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize"
                            data-animation-in="fadeInLeft"
                            data-delay-in="0.6"
                          >
                            {t(movie.title)}
                          </h2>

                          {/* Ratings + Meta Info */}
                          <div
                            className="flex-wrap align-items-center fadeInLeft animated"
                            data-animation-in="fadeInLeft"
                            style={{ opacity: 1 }}
                          >
                            <div className="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                              <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star-half"></i></li>
                                <li><i className="ph ph-star"></i></li>
                              </ul>
                              <div className="d-flex align-items-center gap-1">
                                <span className="text-white">{movie.rating}</span>
                                <img
                                  className="imdb-img"
                                  alt="imdb-img"
                                  src={generateImgPath(movie.imdb)}
                                />
                              </div>
                              <span className="badge bg-secondary">{renderBadge(movie.badge)}</span>
                              <div className="font-size-16">
                                <i className="ph ph-clock align-middle"></i>{" "}
                                <span className="trending-time font-normal">{movie.seasons}</span>
                              </div>
                              <div className="font-size-16">
                                <i className="ph ph-calendar-dots align-middle"></i>{" "}
                                <span className="trending-year font-normal">{movie.releaseDate}</span>
                              </div>
                            </div>

                            <p
                              className="movie-banner-text line-count-3"
                              data-animation-in="fadeInUp"
                              data-delay-in="1.2"
                            >
                              {t(movie.desc)}
                            </p>
                          </div>

                          {/* Play Button */}
                          <div
                            className="iq-button"
                            data-animation-in="fadeInUp"
                            data-delay-in="1.2"
                          >
                            <Link
                              href="/tv-shows/detail"
                              className="btn btn-primary text-capitalize position-relative rounded-3"
                            >
                              <div className="d-flex align-items-center gap-2">
                                <span className="button-text">{t("streamButtons.play_now")}</span>
                                <i className="ph-fill ph-play"></i>
                              </div>
                            </Link>
                          </div>
                        </Col>

                        {/* Trailer Section */}
                        <Col
                          lg="5"
                          md="12"
                          className="trailor-video iq-slider d-none d-lg-block position-relative"
                        >
                          <Link href="#" className="video-open playbtn" tabIndex={0}>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="80px"
                              height="80px"
                              viewBox="0 0 213.7 213.7"
                              onClick={() => setToggler(!toggler)}
                            >
                              <polygon
                                className="triangle"
                                fill="none"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="73.5,62.5 148.5,105.8 73.5,149.1"
                              />
                              <circle
                                className="circle"
                                fill="none"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                cx="106.8"
                                cy="106.8"
                                r="103.3"
                              />
                            </svg>{" "}
                            <span
                              className="w-trailor"
                              onClick={() => setToggler(!toggler)}
                            >
                              {t("streamButtons.watch_trailer")}
                            </span>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination d-block d-lg-none"></div>
              <div className="swiper-banner-button-next d-none d-lg-block">
                <i className="ph ph-caret-right arrow-icon"></i>
              </div>
              <div className="swiper-banner-button-prev d-none d-lg-block">
                <i className="ph ph-caret-left arrow-icon"></i>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={Tvshowbanners.map(m => m.image)} />
    </section>

      <FsLightbox
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  );
});

// TvShowHeroSlider.displayName = TvShowHeroSlider;
TvShowHeroSlider.displayName = 'TvShowHeroSlider'
export default TvShowHeroSlider;
