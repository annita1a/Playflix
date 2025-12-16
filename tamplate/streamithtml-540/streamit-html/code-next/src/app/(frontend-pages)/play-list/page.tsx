"use client";

import React, { Fragment, memo, useState } from "react";

//react bootstrap
import {
  Col,
  Container,
  Row,
  Nav,
  Tab,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

//router
import Link from "next/link";

//utilites
import { useEnterExit } from "@/utilities/usePage";

//function
import { generateImgPath } from "@/StaticData/data";

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     // extract the locale identifier from the URL
//     const { locale } = context

//     return {
//         props: {
//             // pass the translation props to the page component
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }

//hook
import { useTranslation } from "react-i18next";

const PlaylistPage = memo(() => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const playlist = [
    {
      image: generateImgPath("/assets/images/movies/playlist/01.webp"),
      title: "streamPlaylist.play_list1",
      category: "streamPlaylist.public",
      views: "3",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/02.webp"),
      title: "streamPlaylist.play_list2",
      category: "streamPlaylist.private",
      views: "1",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/03.webp"),
      title: "streamPlaylist.play_list3",
      category: "streamPlaylist.public",
      views: "10",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/04.webp"),
      title: "streamPlaylist.play_list4",
      category: "streamPlaylist.public",
      views: "30",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/05.webp"),
      title: "streamPlaylist.play_list5",
      category: "streamPlaylist.private",
      views: "2",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/06.webp"),
      title: "streamPlaylist.play_list6",
      category: "streamPlaylist.public",
      views: "10",
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/07.webp"),
      title: "streamPlaylist.play_list7",
      category: "streamPlaylist.public",
      views: "50",
    },
  ];
  return (
    <Fragment>
      <div className="section-padding-bottom">
        <div className="profile-box">
          <Container fluid>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div className="d-flex align-items-center gap-3">
                <div className="account-logo d-flex align-items-center position-relative">
                  <img
                    src="/assets/images/pages/profile.webp"
                    alt="profile"
                    className="img-fluid object-cover rounded-3"
                  />
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>
                <div>
                  <h6 className="font-size-18 text-capitalize text-white fw-500">
                    {t("streamPlaylist.admin")}
                  </h6>
                  <span className="font-size-14 text-white fw-500">
                    {t("streamPlaylist.admin")}@{t("streamPlaylist.admin")}.com
                  </span>
                </div>
              </div>
              <div className="iq-button">
                <Link
                  href="/extra/pricing-plan"
                  className="btn text-uppercase position-relative"
                >
                  <span className="button-text">
                    {t("streamAccount.subscription")}
                  </span>
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <Container fluid>
          <div className="content-details iq-custom-tab-style-two">
            <Tab.Container defaultActiveKey="first">
              <Nav className="d-flex justify-content-center nav nav-pills tab-header">
                <Nav className="" id="nav-tab" role="tablist">
                  <Nav.Link
                    eventKey="first"
                    className=" d-flex align-items-center"
                    id="nav-playlist-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-playlist"
                    type="button"
                    role="tab"
                    aria-controls="nav-playlist"
                    aria-selected="true"
                  >
                    {t("streamPlaylist.my_playlist")}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="second"
                    id="nav-watchlist-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-watchlist"
                    type="button"
                    role="tab"
                    aria-controls="nav-watchlist"
                    aria-selected="false"
                  >
                    {t("persondesc.watchlist")}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="third"
                    id="nav-favourite-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-favourite"
                    type="button"
                    role="tab"
                    aria-controls="nav-favourite"
                    aria-selected="false"
                  >
                    {t("streamAccount.favorites")}
                  </Nav.Link>
                </Nav>
              </Nav>
              <Tab.Content className="p-0">
                <Tab.Pane
                  className=" fade show"
                  eventKey="first"
                  id="nav-playlist"
                  role="tabpanel"
                  aria-labelledby="nav-playlist-tab"
                >
                  <div className="overflow-hidden animated fadeInUp">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h4 className="main-title text-capitalize mb-0">
                        {t("streamPlaylist.my_playlist")}
                      </h4>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.map((item: any, index: any) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    href="/watchlistdetail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link href="/watchlistdetail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {t(item.category)}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("streamButtons.create_watchlist")}
                          </span>
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-watchlist"
                  eventKey="second"
                  role="tabpanel"
                  aria-labelledby="nav-watchlist-tab"
                >
                  <div className="overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h4 className="main-title text-capitalize mb-0">
                        {t("streamPlaylist.my_watchlist")}
                      </h4>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.slice(0, 4).map((item: any, index: any) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    href="/watchlistdetail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link href="/watchlistdetail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {t(item.category)}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("streamButtons.create_playlist")}
                          </span>
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-favourite"
                  eventKey="third"
                  role="tabpanel"
                  aria-labelledby="nav-favourite-tab"
                >
                  <div className="overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h4 className="main-title text-capitalize mb-0">
                        {t("streamPlaylist.my_favourite")}
                      </h4>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.map((item: any, index: any) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    href="/watchlistdetail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link href="/watchlistdetail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {t(item.category)}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("streamButtons.create_playlist")}
                          </span>
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              contentClassName="border-0"
            >
              <Modal.Header closeButton className="border-0">
                <div>
                  <Modal.Title as="h1" className="text-capitalize fs-5 fw-500">
                    {t("streamPlaylist.new_playlist")}
                  </Modal.Title>
                  <p className="mb-0">{t("streamPlaylist.information")}</p>
                </div>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("streamAccount.name")} *
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("streamShop.description")}
                    </Form.Label>
                    <textarea className="form-control" cols={5}></textarea>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("streamPlaylist.privacy")}
                    </Form.Label>
                    <Form.Select className="form-control">
                      <option>{t("streamPlaylist.public")}</option>
                      <option>{t("streamPlaylist.private")}</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500">
                      {t("streamPlaylist.thumbnail")}
                    </Form.Label>
                    <small className="d-block my-2">
                      {t("streamPlaylist.maximum_upload")}
                    </small>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group className="form-group d-flex align-items-center gap-3">
                    <Button
                      className="btn btn-sm btn-light text-uppercase fw-medium"
                      onClick={handleClose}
                    >
                      {t("streamKeyword.cancel")}
                    </Button>
                    <Button
                      className="btn btn-sm btn-primary text-uppercase fw-medium"
                      onClick={handleClose}
                    >
                      {t("streamPlaylist.save")}
                    </Button>
                  </Form.Group>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </Container>

        {/*  */}
      </div>
    </Fragment>
  );
});

PlaylistPage.displayName = "PlaylistPage";
export default PlaylistPage;
