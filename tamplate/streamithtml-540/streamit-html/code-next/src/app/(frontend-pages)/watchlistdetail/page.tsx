"use client"


// pages/watchlist.tsx (or move to /components if not a page)
import React, { Fragment, memo, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useTranslation } from "react-i18next";
import WishlistCard from "@/components/cards/WishlistCard";
import { useBreadcrumb } from "@/utilities/usePage";


interface WatchlistItem {
  image: string;
  moviename: string;
}

const WatchlistDetail: React.FC = () => {
  const { t } = useTranslation("common");
  const [toggler, setToggler] = useState<boolean>(false);
  useBreadcrumb("persondesc.watchlist")

  const watchlistMovie: WatchlistItem[] = [
    { image: "/assets/images/media/gameofhero.webp", moviename: "streamMovies.game_of_heros" },
    { image: "/assets/images/media/rabbit.webp", moviename: "streamMovies.rabbit" },
    { image: "/assets/images/media/migration.webp", moviename: "streamMovies.migration" },
    { image: "/assets/images/media/krishna.webp", moviename: "streamMovies.krishna" },
    { image: "/assets/images/media/jumanjj.webp", moviename: "streamMovies.jumanji" },
    { image: "/assets/images/media/yoshi.webp", moviename: "streamMovies.yoshi" },
    { image: "/assets/images/media/kung-fu-panda.webp", moviename: "streamMovies.kung_fu_panda" },
    { image: "/assets/images/media/the-hunter.webp", moviename: "streamMovies.the_hunter" },
  ];

  const watchlistVideo: WatchlistItem[] = [
    { image: "/assets/images/media/toddler.webp", moviename: "streamMovies.toddler" },
  ];

  const watchlistTvShow: WatchlistItem[] = [
    { image: "/assets/images/media/the-first-of-us.webp", moviename: "streamMovies.the_first_of_us" },
    { image: "/assets/images/media/migration.webp", moviename: "streamMovies.migration" },
    { image: "/assets/images/media/spiderman.webp", moviename: "streamMovies.spiderman" },
    { image: "/assets/images/media/minions.webp", moviename: "streamMovies.minions" },
    { image: "/assets/images/media/pirates-ofdayones-orignal.webp", moviename: "streamMovies.pirates_of_day_one" },
    { image: "/assets/images/media/assassins-creed.webp", moviename: "streamMovies.assassins_creed" },
  ];

  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <Row>
            <div className="playlist-listing mt-4 mt-md-0">
              <Tab.Container defaultActiveKey="movie">
                <div className="border-bottom mb-5 watchlist-tab">
                  <div id="item-nav">
                    <div className="item-list-tabs no-ajax css_prefix-tab-lists" id="object-nav">
                      <Nav className="nav-underline data-search-tab mb-0" id="pills-tab" role="tablist">
                        <Nav.Item>
                          <Nav.Link eventKey="movie" id="pills-movie-tab" className="nav-link" role="tab">
                            {t("streamPages.movie")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tvshow" id="pills-tvshow-tab" className="nav-link" role="tab">
                            {t("streamPages.tv_show")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="video" id="pills-video-tab" className="nav-link" role="tab">
                            {t("streamPages.video")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="episode" id="pills-episode-tab" className="nav-link" role="tab">
                            {t("streamKeyword.episode")}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </div>

                <Tab.Content>
                  <Tab.Pane eventKey="movie">
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlistMovie.map((item, index) => (
                        <Col key={index}>
                          <WishlistCard image={item.image} moviename={item.moviename} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="video">
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlistVideo.map((item, index) => (
                        <Col key={index}>
                          <WishlistCard image={item.image} moviename={item.moviename} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tvshow">
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlistTvShow.map((item, index) => (
                        <Col key={index}>
                          <WishlistCard image={item.image} moviename={item.moviename} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="episode">
                    <p className="text-center w-100">
                      {t("streamPlaylist.no_watchlist_available")}
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Row>
        </Container>
      </section>

      {/* <FsLightbox
        maxYoutubeVideoDimensions={{ width: 700, height: 400 }}
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources="/assets/images/video/trailer.mp4"
      /> */}
    </Fragment>
  );
};

export default memo(WatchlistDetail);
