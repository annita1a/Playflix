import { Fragment, memo, useState } from "react";

// NExt-Link
import Link from "next/link";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//hook
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "react-bootstrap";

const HomeHeroSlider = memo(() => {
  const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <Swiper
        key={themeSchemeDirection.toString()}
        dir={themeSchemeDirection.toString()}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-banner-button-prev", 
          nextEl: ".swiper-banner-button-next",
        }}
        id="home-banner-slider"
        className="iq-main-slider banner-home-swiper overflow-hidden mb-0 wrapper-class"
        loop={true}
        speed={1500}
        // wrapperclassName="m-0 p-0"
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        <SwiperSlide className="slide s-bg-1 p-0">
          <div
            className="banner-home-swiper-image"
            style={{
              backgroundImage: `url("/assets/images/media/krishna.webp")`,
            }}
          >
            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center iq-ltr-direction h-100 slider-content-full-height ">
                  <Col lg={6} md={12} xl={5}>
                    <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                      {t("streamMovies.krishna")}
                    </h2>
                    <div className="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                      <div className="slider-ratting d-flex align-items-center">
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
                              className="ph-fill ph-star-half"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <span className="d-flex align-items-center gap-1">
                        <span className="">8</span>
                        <img
                          src="/assets/images/pages/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid imdb-img"
                        />
                      </span>
                      <span className="badge rounded-2 text-white bg-secondary font-size-12">
                        NC 17
                      </span>
                      <div className="d-flex align-items-center gap-1">
                        <i className="ph ph-clock"></i>
                        <span className="time">2h : 6m</span>
                      </div>
                    </div>
                    <p className="line-count-3 my-3 RightAnimate-two">
                      {t("streamMovies.krishna_desc")}
                    </p>
                    <div className="trending-list RightAnimate-three">
                      <div className="text-primary genres font-size-14 mb-1">
                        {t("favouritePersonalities.starting")}:
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("favouritePersonalities.Olivia_Foster")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("favouritePersonalities.Leena_Burton")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("favouritePersonalities.Ryan_Pierce")}
                        </Link>
                      </div>
                      <div className="text-primary genres font-size-14 mb-1">
                        {t("streamGenres.genre")}:
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("streamGenres.action")}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("streamGenres.action")}
                        </Link>
                         <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-2"
                        >
                          {t("streamGenres.action")}
                        </Link>

                      </div>
                      <div className="text-primary tag font-size-14">
                        {t("streamTag.tags")}:
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.action")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.adventure")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.horror")}
                        </Link>
                      </div>
                    </div>
                    <div className="RightAnimate-four">
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
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    xl={7}
                    className="trailor-video iq-slider d-none d-lg-block"
                  >
                    <Link href="#" className="video-open playbtn">
                      <svg
                        onClick={() => setToggler(!toggler)}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                      >
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        ></polygon>
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
                        ></circle>
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
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide s-bg-1 p-0">
          <div
            className="banner-home-swiper-image"
            style={{
              backgroundImage: `url("/assets/images/media/breaking-bad.webp")`,
            }}
          >
            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center iq-ltr-direction h-100 slider-content-full-height">
                  <Col lg={6} md={12} xl={5}>
                    <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                      {t("streamMovies.breaking_bad")}
                    </h2>
                    <div className="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                      <div className="slider-ratting d-flex align-items-center">
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
                              className="ph-fill ph-star-half"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <span className="d-flex align-items-center gap-1">
                        <span className="">6</span>
                        <img
                          src="/assets/images/pages/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid imdb-img"
                        />
                      </span>
                      <div className="d-flex align-items-center gap-1">
                        <span className="time">3 {t("streamEpisode.season")}</span>
                      </div>
                    </div>
                    <p className="line-count-3 my-3 RightAnimate-two">
                      {t("streamMovies.breaking_bad_desc")}
                    </p>
                    <div className="trending-list RightAnimate-three">
                      <div className="text-primary genres font-size-14 mb-1">
                        {t("favouritePersonalities.starring")}:{" "}
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("favouritePersonalities.Leena_Burton")},{" "}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("favouritePersonalities.michael_fox")},{" "}
                        </Link>
                         <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("favouritePersonalities.maxwell_carter")}
                        </Link>
                      </div>

                      <div className="text-primary genres font-size-14 mb-1">
                        {t("streamGenres.genre")}:{" "}
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamGenres.action")},{" "}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamGenres.animation")},{" "}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamGenres.crime")}{" "}
                        </Link>
                      </div>
                      <div className="text-primary tag font-size-14">
                        {t("streamTag.tags")}:
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.brother")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.cricket")},
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none ms-1"
                        >
                          {t("streamTag.detective")}
                        </Link>
                      </div>
                    </div>
                    <div className="RightAnimate-four">
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
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    xl={7}
                    className="trailor-video iq-slider d-none d-lg-block"
                  >
                    <Link href="#" className="video-open playbtn">
                      <svg
                        onClick={() => setToggler(!toggler)}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                      >
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        ></polygon>
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
                        ></circle>
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
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide s-bg-1 p-0">
          <div
            className="banner-home-swiper-image"
            style={{
              backgroundImage: `url( "/assets/images/media/charlie-chaplin.webp")`,
            }}
          >
            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center iq-ltr-direction h-100 slider-content-full-height">
                  <Col lg={6} md={12} xl={5}>
                    <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                      {t("streamMovies.charliechaplin")}
                    </h2>
                    <div className="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                      <div className="slider-ratting d-flex align-items-center">
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
                              className="ph-fill ph-star-half"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <span className="d-flex align-items-center gap-1">
                        <span className="">247</span>
                        <img
                          src="/assets/images/pages/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid imdb-img"
                        />
                      </span>
                      <span className="badge rounded-2 text-white bg-secondary font-size-12">
                        80
                      </span>
                    </div>
                    <p className="line-count-3 my-3 RightAnimate-two">
                      {t("streamMovies.charliechaplin_desc")}
                    </p>
                    <div className="trending-list RightAnimate-three">
                      <div className="text-primary genres font-size-14 mb-1">
                        {t("streamGenres.genre")}:{" "}
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamGenres.action")}{" "}
                        </Link>
                      </div>
                      <div className="text-primary tag font-size-14">
                        {t("streamTag.tags")}:{' '}
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamTag.action")},{" "}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamTag.adventure")},{" "}
                        </Link>
                        <Link
                          href="/view-all"
                          className="fw-normal text-white text-decoration-none"
                        >
                          {t("streamTag.horror")}
                        </Link>
                      </div>
                    </div>
                    <div className="RightAnimate-four">
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
                  </Col>
                  <Col
                    lg={6}
                    md={12}
                    xl={7}
                    className="trailor-video iq-slider d-none d-lg-block"
                  >
                    <Link href="#" className="video-open playbtn">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                        enableBackground="new 0 0 213.7 213.7"
                        xmlSpace="preserve"
                        onClick={() => setToggler(!toggler)}
                      >
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        ></polygon>
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
                        ></circle>
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
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination d-block d-lg-none"></div>
        <div
          className="swiper-banner-button-prev swiper-nav"
          id="swiper-banner-button-prev"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
        <div
          className="swiper-banner-button-next swiper-nav"
          id="swiper-banner-button-next"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
      </Swiper>
      <FsLightbox
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  );
});

HomeHeroSlider.displayName = "HomeHeroSlider";
export default HomeHeroSlider;
