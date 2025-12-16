import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

//react-router-dom
import Link from "next/link";

//components
import Logo from '../../logo'

//hook
import { useTranslation } from 'react-i18next';

const MerchandiseFooter = memo(() => {
    const { t } = useTranslation("common");
    const currentYear = new Date().getFullYear();
    return (
        <Fragment>
         <footer className="footer-merchandise">
        <div className="footer-top">
          <Container fluid>
            <Row>
              <Col lg="4" sm="6">
                <div className="footer-inner">
                  <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">
                    {t("streamAccount.customer_services")}
                  </p>
                  <h4 className="mb-0 contact text-white fw-bold">
                    <Link href="tel:+4805550103"> + (480) 555-0103</Link>
                  </h4>
                  <span className="d-inline-block mt-4 mb-0 font-size-14">
                    {" "}
                    {t("streamAccount.email_us")}:{" "}
                    <Link href="maito:customer@streamit.com">
                      {t("streamAccount.customer@stremit")}
                    </Link>
                  </span>
                  <div className="mt-5">
                    <p className="letter-spacing-1 font-size-14 mb-1 text-uppercase">
                      {t("streamSocial.stay_connected")}:
                    </p>
                    <ul className="p-0 mt-4 mb-0 list-unstyled widget_social_media d-flex align-items-center gap-3">
                      <li className="">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="icon icon-facebook-share"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://twitter.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="ph-fill ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://github.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="icon icon-github-share"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="ph ph-instagram-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4" sm="6" className="mt-sm-0 mt-5">
                <div className="footer-inner position-relative text-center px-xl-5 px-3">
                  <div className="vr text-dark opacity-100 h-100 position-absolute end-0 top-0 d-lg-inline-block d-none"></div>
                  <div className="footer-logo">
                    <Logo />
                  </div>
                  <p className="mt-lg-5 mt-4 mb-3 text-uppercase letter-spacing-1 font-size-14 mb-1">
                    {t("streamAccount.best_deals")}
                  </p>
                  <div className="mailchimp mailchimp-dark">
                    <div className="input-group mb-3 mt-4">
                      <Form.Control
                        type="text"
                        className="mb-0 font-size-14"
                        placeholder={`${t("streamAccount.email")}*`}
                      />
                      <div className="iq-button">
                        <Button
                          type="submit"
                          className="st-subscribe-btn text-uppercase"
                          id="button-addon2"
                        >
                          {t("streamButtons.subscribe")}
                        </Button>
                      </div>
                    </div>
                    <span className="d-inline-block font-size-14">
                      * {t("streamAccount.email_anyone")}
                    </span>
                  </div>
                  <div className="vr text-dark opacity-100 h-100 position-absolute start-0 top-0 d-lg-inline-block d-none"></div>
                </div>
              </Col>
              <Col lg="4" sm="12" className="mt-lg-0 mt-5">
                <div className="footer-inner">
                  <h5 className="footer-link-title mb-3">
                    {t("sectionTitle.quick_links")}
                  </h5>
                  <Row>
                    <Col lg="6">
                      <ul className="list-unstyled footer-menu mb-0">
                        <li className="mb-2">
                          <Link href="/extra/contact-us" className="ms-3">
                            {t("streamPages.contact_us")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/extra/privacy-policy" className="ms-3">
                            {t("sectionTitle.privacy_policy")}
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <div className="col-lg-6 mt-lg-0 mt-2">
                      <ul className="list-unstyled footer-menu mb-0">
                        <li>
                          <Link href="/extra/terms-of-use" className="ms-3">
                            {t("sectionTitle.terms_and_use")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Row>
                  <div className="mt-5">
                    <p className="pt-3 mb-3 text-uppercase">
                      {t("sectionTitle.payments")}
                    </p>
                    <ul className="list-inline d-flex align-items-center flex-wrap gap-3 m-0">
                      <li>
                        <img src="/assets/images/footer/01.webp" alt="visa" />
                      </li>
                      <li>
                        <img src="/assets/images/footer/02.webp" alt="visa" />
                      </li>
                      <li>
                        <img src="/assets/images/footer/03.webp" alt="visa" />
                      </li>
                      <li>
                        <img src="/assets/images/footer/04.webp" alt="visa" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom py-3">
          <Container fluid>
            <Row className="align-items-center">
              <Col md="6" className="text-md-start text-center">
                <p className="m-0 font-size-14 text-capitalize">
                  © <span className="currentYear">{currentYear}</span>
                  <Link href="/"> STREAMIT </Link>{" "}
                  {t("stream_terms_of_uses.all_right_reserved")}.
                </p>
              </Col>
              <Col md="6" className="text-md-end text-center">
                <p className="m-0 font-size-14">
                  {t("stream_terms_of_uses.powered_by")}{" "}
                  <Link href="https://iqonic.design/" target="_blank">
                    IQONIC DESIGN
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
        </Fragment>
    )
})

MerchandiseFooter.displayName = "MerchandiseFooter"
export default MerchandiseFooter