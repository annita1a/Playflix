import { Fragment, memo } from "react";

//react-bootstrap
import { Nav, Tab } from "react-bootstrap";

//react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";

//static data
import { tabSlider } from "../../StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//hook
import { useTranslation } from 'react-i18next';



const TabSlider = memo(() => {
    const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  return (
  <Fragment>
      <div className="tab-slider otthome-tab-slider">
        <div className="slider">
          <Swiper
            key={themeSchemeDirection.toString()} 
            dir={themeSchemeDirection.toString()}
            
            watchSlidesProgress={true}
            className="wrapper-class position-relative swiper swiper-card wrapper-class custom-tab-slider swiper-no-swiping"
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            slidesPerView={1}
            speed={1500}
            // effect={'fade'}
            modules={[Navigation, Pagination, EffectFade]}
            pagination={{ el: '.swiper-pagination', clickable: true }}
          >
            {tabSlider.map((data , index) => (
              <SwiperSlide
                className="tab-slider-banner p-0"
                key={data.image}
              >
                <div
                  className="tab-slider-banner-images"
                  style={{ backgroundImage: `url(${data.image})` }}
                >
                  <div className="block-images position-relative w-100">
                    <div className="container-fluid">
                      <div className="row align-items-center min-vh-100 h-100 my-4">
                        <div className="col-lg-5 col-xxl-5">
                          <div className="tab-left-details">
                            <div className="d-flex align-items-center gap-3 mb-4">
                              <Link href="">
                                <img
                                  src=
                                    "/assets/images/pages/trending-label.webp"
                                  className="img-fluid trending-label-img rounded-3"
                                  alt=""
                                />
                              </Link>
                              <span className="text-gold fw-bold font-size-18">
                                #{index+1} {t(data.movieTime)}
                              </span>{" "}
                            </div>
                            <h1 className="mb-2 text-capitalize texture-text ">
                              {t(data.title)}
                            </h1>
                            <p className="mb-0 font-size-14 line-count-3 RightAnimate-three">
                              {t(data.detail)}.
                            </p>
                            <ul className="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                              <li className="font-size-18 trending-list">
                                Nov 2022
                              </li>
                              <li className="font-size-18">
                                {t("streamEpisode.season")} 1
                              </li>
                            </ul>
                            <div className="iq-button">
                              <Link
                                href="/tv-shows/detail"
                                className="btn btn-primary text-capitalize position-relative rounded-3"
                              >
                                <span className="d-flex align-items-center gap-2">
                                  <span className="button-text">
                                    {t("streamButtons.stream_now")}
                                  </span>
                                  <i className="ph-fill ph-play fs-6"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1 col-lg-2 col-xxl-3"></div>
                        <div className="col-md-6 col-lg-5 col-xxl-3 mt-5 mt-md-0 d-none d-lg-block">
                          <div className="tab-block">
                            <h4 className="tab-title text-capitalize mb-0">
                              {t("streamEpisode.all_episode")}
                            </h4>
                            <div className="tab-bottom-bordered border-0 trending-custom-tab">
                              <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="0season"
                              >
                                <Nav
                                  variant="pills"
                                  className="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                                >
                                  {data.seasons.map((episodes, index) => (
                                    <Nav.Item key={"nav" + index}>
                                      <Nav.Link eventKey={index + "season"}>
                                        {t(episodes.title)}
                                      </Nav.Link>
                                    </Nav.Item>
                                  ))}
                                </Nav>
                                <Tab.Content className="tab-content trending-content">
                                  {data.seasons.map((episodes, index) => (
                                    <Tab.Pane
                                      eventKey={index + "season"}
                                      key={index + "season"}
                                    >
                                      <ul className="list-inline m-0 p-0">
                                        {episodes.episodes.map(
                                          (episode, episodeIndex) => (
                                            <li
                                              className="d-flex align-items-center gap-3"
                                              key={episode.title + "ep"+ episodeIndex}
                                            >
                                              <div className="image-box flex-shrink-0">
                                                <Link href="/tv-shows/detail">
                                                  <img
                                                    src={episode.image}
                                                    alt="image-icon"
                                                    className="img-fluid rounded"
                                                  />
                                                </Link>
                                              </div>
                                              <div className="image-details">
                                                <h6 className="mb-1 text-capitalize">
                                                  <Link href="/tv-shows/detail">
                                                    {t(episode.title)}
                                                  </Link>
                                                </h6>
                                                <div className="episode-time d-flex align-items-center gap-1 mt-2">
                                                  <i className="ph ph-clock font-size-14"></i>
                                                  <small>{episode.time}</small>
                                                </div>
                                              </div>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </Tab.Pane>
                                  ))}
                                </Tab.Content>
                              </Tab.Container>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination d-block d-lg-none"></div>
            <div className="joint-arrows d-none d-lg-block">
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
})

TabSlider.displayName = "TabSlider"
export default TabSlider
