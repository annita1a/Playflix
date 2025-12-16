"use client"

import ProfileDetailsCard from "@/components/cards/ProfileDetailsCard";
import ChoicesJs from "@/components/choice";
import { Archive_playlist_episdoe, Archive_playlist_movies, Archive_playlist_video } from "@/StaticData/data";
import { useBreadcrumb } from "@/utilities/usePage";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
  TabContent,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

// Components & Data


// Types for your playlist items
interface PlaylistItem {
  image: string;
  movieType: string;
  movieCategory: string;
}

const Archive_Playlist: React.FC = () => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("streamPlaylist.playlist"));
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { value: t("streamPages.movie"), label: t("streamPages.movie") },
    { value: t("streamPages.video"), label: t("streamPages.video") },
    { value: t("streamKeyword.episode"), label: t("streamKeyword.episode") },
  ];

  return (
    <>
      <section className="section-padding">
        <Container fluid>
          <div className="play-lists">
            <Tab.Container defaultActiveKey="movie">
              <Row className="g-2 column-reverce align-items-center border-bottom playlist-bottom-margin">
                <Col xs="8" sm="9" lg="10">
                  <div id="item-nav">
                    <div className="item-list-tabs no-ajax css_prefix-tab-lists" id="object-nav">
                      <Nav as="ul" className="nav nav-underline data-search-tab" role="tablist">
                        <Nav.Item as="li">
                          <Nav.Link eventKey="movie" className="nav-link fw-bold">
                            {t("streamPages.movie")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link eventKey="video" className="nav-link fw-bold">
                            {t("streamPages.video")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link eventKey="episode" className="nav-link fw-bold">
                            {t("streamKeyword.episode")}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Col>

                <Col xs="4" sm="3" lg="2">
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="link"
                      className="manage_playlist action-btn"
                      onClick={handleShow}
                    >
                      <span
                        className="h-100 w-100 d-block"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={t("streamButtons.add_playlist")}
                      >
                        {t("streamButtons.add_playlist")}
                      </span>
                    </Button>

                    {/* Modal */}
                    <Modal
                      className="fade view-more-data-modal edit-profile-modal"
                      id="creatplaylistModal"
                      centered
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header className="modal-header" closeButton>
                        <Modal.Title as="h5" id="createPlaylist">
                          {t("streamPlaylist.create_playlist")}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="pt-0">
                        <Form id="st_creat_playlist" action="#" method="post">
                          <input id="st_playlist_id" type="hidden" value="" />
                          <Form.Group className="form-group mb-4">
                            <Form.Label>{t("streamPlaylist.playlist_title")} <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" id="st_playlist_title" />
                          </Form.Group>
                          <Form.Group className="playlist-select mb-4 iq-custom-select">
                            <Form.Label>{t("streamPlaylist.select_playlist_type")} <span className="text-danger">*</span></Form.Label>
                            <ChoicesJs options={options} className="js-choice" select="one" />
                          </Form.Group>
                          <div className="iq-button">
                            <Button
                              variant="primary"
                              className="position-relative rounded-3"
                              onClick={handleClose}
                            >
                              <span className="button-text">
                                {t("streamButtons.create_playlist")}
                              </span>
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Col>
              </Row>

              {/* Playlist Tab Content */}
              <TabContent id="pills-tabContent">
                <Tab.Pane eventKey="movie" className="fade">
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    {Archive_playlist_movies.map((data: PlaylistItem, index: number) => (
                      <Col key={index}>
                        <ProfileDetailsCard
                          image={data.image}
                          movieType={data.movieType}
                          movieCategory={data.movieCategory}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="video" className="fade">
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    {Archive_playlist_video.map((data: PlaylistItem, index: number) => (
                      <Col key={index}>
                        <ProfileDetailsCard
                          image={data.image}
                          movieType={data.movieType}
                          movieCategory={data.movieCategory}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="episode" className="fade">
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    {Archive_playlist_episdoe.map((data: PlaylistItem, index: number) => (
                      <Col key={index}>
                        <ProfileDetailsCard
                          image={data.image}
                          movieType={data.movieType}
                          movieCategory={data.movieCategory}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Archive_Playlist;
