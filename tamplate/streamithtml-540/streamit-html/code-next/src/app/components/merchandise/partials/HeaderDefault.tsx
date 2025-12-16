import React, { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import {
  Row,
  Col,
  Container,
  Nav,
  Button,
  Dropdown,
  Form,
  Offcanvas,
  Collapse,
  Navbar,
} from "react-bootstrap";

//router
import Link from "next/link";
// import { useRouter } from "next/router";

// components
import Logo from "../../logo";
import CustomToggle from "../../CustomToggle";
import Counter from "../../counter";

//hook
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const HeaderMerchandise = memo(() => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("common");
  const location = usePathname();
  const dispatch = useDispatch();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    if (lng === "ar") {
      // dispatch(theme_scheme_direction("rtl"));
    } else {
      // dispatch(theme_scheme_direction("ltr"));
    }
  };

  const cart = [
    {
      thumbnail: "/assets/images/shop/product/02.webp",
      name: "streamShop.product1",
      price: "$13.00",
      class: "mb-4 pb-4 border-bottom",
    },
    {
      thumbnail: "/assets/images/shop/product/04.webp",
      name: "streamShop.product2",
      price: "$18.00",
      class: "mb-4 pb-4 border-bottom",
    },
    {
      thumbnail: "/assets/images/shop/product/05.webp",
      name: "streamShop.product3",
      price: "$18.00",
      class: "",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow2(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Fragment>
        <header
          className="header-center-home header-merchandise "
          id="default-header"
        >
          <div className="header-top d-xl-block d-none">
            <Container fluid>
              <Row className="align-items-center">
                <Col md="3">
                  <div className="d-flex align-items-center gap-2 gap-md-3">
                    <Logo />
                    <div>
                      <Link
                        href="/extra/pricing-plan"
                        className="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                      >
                        <span className="d-flex align-items-center gap-2 text-warning">
                          <i className="ph-fill ph-crown align-middle fs-6"></i>
                          <span className="d-xl-block d-none">
                            {t("streamButtons.subscribe")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md="9">
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
                      <li className="me-0">
                        <div className="search-box-2">
                          <Form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={t("streamAccount.search_dot")}
                            />
                            <i className="search-btn">
                              <svg
                                width="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="11.7669"
                                  cy="11.7666"
                                  r="8.98856"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></circle>
                                <path
                                  d="M18.0186 18.4851L21.5426 22"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </i>
                          </Form>
                        </div>
                      </li>

                      <Dropdown as="li" className="nav-items me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          href="#"
                          variant=" nav-link d-flex align-items-center text-white"
                          id="langDropdown"
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-translate fs-5 px-0"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end border-0 p-0 m-0"
                        >
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeLanguage("en")}
                          >
                            en
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeLanguage("ar")}
                          >
                            ar
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeLanguage("de")}
                          >
                            de
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeLanguage("fr")}
                          >
                            fr
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeLanguage("gr")}
                          >
                            gr
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <li className="me-0">
                        <Link
                          className="text-white"
                          href="#"
                          onClick={handleShow}
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-handbag fs-5"></i>
                          </span>
                        </Link>
                      </li>
                      <Dropdown as="li" className="nav-item nav-icon me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          variant="text-white d-flex align-items-center"
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-user-plus fs-5"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end border-0 p-0 m-0 dropdown-user"
                        >
                          <li className="user-info mb-3 me-0">
                            <Link
                              href="/profile/profile-marvin"
                              className="d-flex align-items-center gap-3"
                            >
                            <img
                              src="/assets/images/user/user1.webp"
                              alt="user"
                              loading="lazy"
                              className="img-fluid"
                            />
                            <span className="font-size-14 fw-500 text-capitalize text-white">
                              {t("streamAccount.jenny")}
                            </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/merchandise/account"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-user"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.my_account")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/watchlistdetail"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-plus fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.watch_list")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/extra/pricing-plan"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-star fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.subscription")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auth/login"
                              className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.logout")}
                              </h6>
                            </Link>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`header-bottom header-sticky ${
              isSticky ? "sticky" : ""
            }`}
          >
            <Navbar
              expand="xl"
              className="nav navbar-light iq-navbar header-hover-menu py-xl-0 py-3"
            >
              <Container fluid className="navbar-inner">
                <div className="d-flex align-items-center justify-content-between w-100 landing-header">
                  <div className="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
                    <div>
                      <button
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#navbar_main"
                        aria-controls="navbar_main"
                        className="d-xl-none bg-primary rounded-pill p-1 toggle-rounded-btn d-flex align-items-center"
                        onClick={() => setShow2(!show2)}
                      >
                        <svg
                          width="20px"
                          className="icon-20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-md-3">
                      <Logo />
                      <div>
                        <Link
                          href="/extra/pricing-plan"
                          className="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                        >
                          <span className="d-flex align-items-center gap-2 text-warning">
                            <i className="ph-fill ph-crown align-middle fs-6"></i>
                            <span className="d-xl-block d-none">
                              {t("streamButtons.subscribe")}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Navbar
                    expand="xl"
                    className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${
                      show2 === true ? "show" : ""
                    } `}
                    style={{
                      visibility: `${show2 === true ? "visible" : "hidden"}`,
                    }}
                  >
                    <Container fluid className="p-lg-0">
                      <Offcanvas.Header className="px-0">
                        <div className="navbar-brand ms-3 ">
                          <Logo />
                        </div>
                        <i
                          className="ph ph-x"
                          onClick={() => setShow2(!show2)}
                        ></i>
                      </Offcanvas.Header>
                      <ul
                        className="navbar-nav iq-nav-menu  list-unstyled"
                        id="header-menu"
                      >
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open}
                            href=""
                            onClick={() => setOpen(!open)}
                            className={`${
                              location === "/merchandise" ||
                              location === "/" ||
                              location === "/home" ||
                              location === "/movies" ||
                              location === "/tv-shows" ||
                              location === "/videos"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.home")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse in={open} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  href="/"
                                  className={`${
                                    location === "/" ? "active" : ""
                                  } nav-link`}
                                >
                                  {t("streamPages.ott_home")}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/home"
                                  className={`${
                                    location === "/home" ? "active" : ""
                                  } nav-link`}
                                >
                                  {t("streamPages.home")}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/movies"
                                  className={`${
                                    location === "/movies" ? "active" : ""
                                  } nav-link`}
                                >
                                  {t("streamPages.movie")}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/tv-shows"
                                  className={`${
                                    location === "/tv-shows" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.tv_show")}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/videos"
                                  className={`${
                                    location === "/videos" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.video")}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise"
                                  className={`${
                                    location === "/merchandise" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.merchandise_store")}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open1}
                            href="#homePages"
                            onClick={() => setOpen1(!open1)}
                            className={`${
                              location === "/download-movie" ||
                              location === "/movies/related" ||
                              location === "/movies/restricted" ||
                              location === "/genres" ||
                              location === "/cast" ||
                              location === "/tags" ||
                              location === "/watchlistdetail"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between">
                              <span className="item-name">
                                {t("streamPages.features")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open1}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  href="/movies/download"
                                  className={`${
                                    location === "/movies/download"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.download_movie")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/movies/restricted"
                                  className={`${
                                    location === "/movies/restricted"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.restricted_content")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/movies/related"
                                  className={`${
                                    location === "/movies/related"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.related_merchandise")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/genres"
                                  className={`${
                                    location === "/genres" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.geners")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/tags"
                                  className={`${
                                    location === "/tags" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.tags")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/cast"
                                  className={`${
                                    location === "/cast" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.cast")}{" "}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open2}
                            href="#homePages"
                            onClick={() => setOpen2(!open2)}
                            className={`${
                              location === "/extra/about-us" ||
                              location === "/extra/contact-us" ||
                              location === "/extra/faq" ||
                              location === "/extra/privacy-policy" ||
                              location === "/extra/pricing-plan" ||
                              location === "/extra/terms-of-use" ||
                              location === "/extra/coming-soon" ||
                              location === "/extra/error-page-one"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between">
                              <span className="item-name">
                                {t("streamPages.pages")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open2}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/about-us"
                                  className={`${
                                    location === "/extra/about-us"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.about_us")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/contact-us"
                                  className={`${
                                    location === "/extra//contact-us"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.contact_us")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/faq"
                                  className={`${
                                    location === "/extra//faq" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.faq")}{" "}
                                </Link>
                              </Nav.Item>

                              <Nav.Item as="li">
                                <Link
                                  href="/extra/pricing-plan"
                                  className={`${
                                    location === "/extra/pricing-plan"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.pricing_plan")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/privacy-policy"
                                  className={`${
                                    location === "/extra/privacy-policy"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.privacy_policy")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/terms-of-use"
                                  className={`${
                                    location === "/terms-of-use" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("sectionTitle.terms_and_use")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/coming-soon"
                                  className={`${
                                    location === "/extra/coming-soon"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.coming_soon")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/extra/error-page-one"
                                  aria-expanded={open3}
                                  className={`${
                                    location === "/extra/error-page-one"
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() => setOpen3(!open3)}
                                >
                                  <span className="item-name">
                                    {t("streamPages.error_404")}
                                  </span>
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open4}
                            href="#homePages"
                            onClick={() => setOpen4(!open4)}
                            className={`${
                              location === "/blogs" ||
                              location === "/blogs/grid/one-column" ||
                              location === "/blogs/grid/two-column" ||
                              location === "/blogs/grid/three-column" ||
                              location === "/blogs/grid/four-column" ||
                              location === "/blogs/sidebar/left" ||
                              location === "/blogs/sidebar/right" ||
                              location === "/blogs/detail" ||
                              location === "/blogs/single/audio" ||
                              location === "/blogs/single/video" ||
                              location === "/blogs/single/link" ||
                              location === "/blogs/single/quote" ||
                              location === "/blogs/single/gallery" ||
                              location === "/blogpagination/pagination"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between">
                              <span className="item-name">
                                {t("streamPages.blog")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open4}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  href="/blogs"
                                  className={`${
                                    location === "/blogs" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.listing")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open5}
                                  href="#homePages"
                                  onClick={() => setOpen5(!open5)}
                                  className={`${
                                    location.split("/").includes("blogs") &&
                                    location.split("/").includes("grid")
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="item-name">
                                      {t("streamPages.blog_grid")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open5}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/grid/one-column"
                                        className={`${
                                          location === "/blogs/grid/one-column"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.1_column_blog")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/grid/two-column"
                                        className={`${
                                          location === "/blogs/grid/two-column"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.2_column_blog")}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/grid/three-column"
                                        className={`${
                                          location ===
                                          "/blogs/grid/three-column"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.3_column_blog")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/grid/four-column"
                                        className={`${
                                          location === "/blogs/grid/four-column"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        4 {t("streamPages.4_column_blog")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open6}
                                  href="#homePages"
                                  onClick={() => setOpen6(!open6)}
                                  className={`${
                                    location === "/blogs/sidebar/left"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="item-name">
                                      {t("streamPages.blog_sidebar")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open6}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/sidebar/left"
                                        className={`${
                                          location === "/blogs/sidebar/left"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.left_sidebar")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/sidebar/right"
                                        className={`${
                                          location === "/blogs/sidebar/right"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.right_sidebar")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open7}
                                  href="#homePages"
                                  onClick={() => setOpen7(!open7)}
                                  className={`${
                                    location === "/blogs/detail" ||
                                    location === "/blogs/single/audio" ||
                                    location === "/blogs/single/video" ||
                                    location === "/blogs/single/link" ||
                                    location === "/blogs/single/quote" ||
                                    location === "/blogs/single/gallery"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="item-name">
                                      {t("streamPages.blog_single")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open7}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/detail"
                                        className={`${
                                          location === "/blogs/detail"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.standard")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/single/audio"
                                        className={`${
                                          location === "/blogs/single/audio"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.audio")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/single/video"
                                        className={`${
                                          location === "/blogs/single/video"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.video")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/single/link"
                                        className={`${
                                          location === "/blogs/single/link"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.link")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/single/quote"
                                        className={`${
                                          location === "/blogs/single/quote"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.quote")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogs/single/gallery"
                                        className={`${
                                          location === "/blogs/single/gallery"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.gallery")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open9}
                                  href="#homePages"
                                  onClick={() => setOpen9(!open9)}
                                  className={`${
                                    location === "/blogpagination/pagination" ||
                                    location === "/blogpagination/loadmore" ||
                                    location ===
                                      "/blogpagination/infinitescroll"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="item-name">
                                      {t("streamPages.pagination_style")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open7}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogpagination/pagination"
                                        className={`${
                                          location ===
                                          "/blogpagination/pagination"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.blog_pagination")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogpagination/loadmore"
                                        className={`${
                                          location ===
                                          "/blogpagination/loadmore"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.blog_load_more")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        href="/blogpagination/infinitescroll"
                                        className={`${
                                          location ===
                                          "/blogpagination/infinitescroll"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t(
                                          "streamPages.blog_infinite_scroll"
                                        )}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open8}
                            href="#homePages"
                            onClick={() => setOpen8(!open8)}
                            className={`${
                              location === "/merchandise/shop" ||
                              location === "/merchandise/account" ||
                              location === "/cart" ||
                              location === "/merchandise/wishlist" ||
                              location === "/merchandise/checkout" ||
                              location === "/merchandise/track-order"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between">
                              <span className="item-name">
                                {t("streamPages.shop")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open8}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise/shop"
                                  className={`${
                                    location === "/merchandise/shop"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.shop")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise/account"
                                  className={`${
                                    location === "/merchandise/account"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.my_account_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/cart"
                                  className={`${
                                    location === "/cart" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.cart_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise/wishlist"
                                  className={`${
                                    location === "/merchandise/wishlist"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.wishlist")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise/checkout"
                                  className={`${
                                    location === "/merchandise/checkout"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.checkout_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  href="/merchandise/track-order"
                                  className={`${
                                    location === "/merchandise/track-order"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.order_tracking")}{" "}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                      </ul>
                    </Container>

                    <div className="navbar-right menu-right">
                      <ul className="d-flex align-items-center list-inline m-0">
                        <Dropdown
                          as="li"
                          className="nav-item nav-icon position-relative"
                        >
                          <Dropdown.Menu className="search-box iq-search-bar d-search p-0 m-0">
                            <Form action="#" className="search-form">
                              <div className="form-group position-relative">
                                <input
                                  type="search"
                                  className="text search-input font-size-12"
                                  placeholder="Search"
                                />
                                <Button type="submit" className="search-submit">
                                  <i className="ri-search-line d-flex justify-content-center"></i>
                                </Button>
                              </div>
                            </Form>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item nav-icon">
                          <Dropdown.Menu className="iq-sub-dropdown iq-user-dropdown">
                            <div className="iq-card shadow-none m-0">
                              <div className="iq-card-body p-0 ps-3 pe-3">
                                <Link
                                  href="/auth/login"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M10.543 8.01449H2.51562"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M8.58984 6.0708L10.5418 8.0148L8.58984 9.9588"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M5.67188 4.92614V4.30414C5.67188 2.94748 6.77121 1.84814 8.12854 1.84814H11.3845C12.7379 1.84814 13.8345 2.94481 13.8345 4.29814V11.7248C13.8345 13.0815 12.7345 14.1815 11.3779 14.1815H8.12121C6.76854 14.1815 5.67188 13.0841 5.67188 11.7315V11.1035"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">
                                        {t("streamAccount.logout")}
                                      </h6>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  href="/extra-pages/sign-up"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58336 10.1377C4.0207 10.1377 1.83203 10.525 1.83203 12.077C1.83203 13.629 4.00736 14.0304 6.58336 14.0304C9.1467 14.0304 11.3347 13.6424 11.3347 12.091C11.3347 10.5397 9.16003 10.1377 6.58336 10.1377Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58375 7.92416C8.26575 7.92416 9.62908 6.56083 9.62908 4.87883C9.62908 3.19683 8.26575 1.8335 6.58375 1.8335C4.90242 1.8335 3.53908 3.19683 3.53908 4.87883C3.53308 6.55483 4.88642 7.91816 6.56308 7.92416H6.58375Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M12.8021 5.77979V8.45312"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M14.1642 7.11605H11.4375"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">
                                        {t("streamForm.register")}
                                      </h6>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ul>
                    </div>
                    {/* Myaccount navigate link */}
                  </Navbar>
                  <div className="right-panel">
                    <Button
                      id="navbar-toggle"
                      bsPrefix="navbar-toggler"
                      type="button"
                      aria-expanded={show1}
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      onClick={() => setShow1(!show1)}
                    >
                      <span className="navbar-toggler-btn">
                        <span className="navbar-toggler-icon"></span>
                      </span>
                    </Button>
                    <div
                      className={`p-3 navbar-collapse ${
                        show1 === true ? "collapse show" : "collapse"
                      }`}
                      id="navbarSupportedContent"
                    >
                      <div className="iq-meta-menu-container d-xl-block d-none">
                        <ul className="d-flex align-items-center m-0 list-inline iq-meta-menu">
                          <li>
                            <Link href="/merchandise/account">
                              {t("streamAccount.my_account")}
                            </Link>
                          </li>
                          <li>
                            <Link href="https://iqonic.desky.support/">
                              {t("streamAccount.customer_support")}
                            </Link>
                          </li>
                          <li>
                            <Link href="/extra/contact-us">
                              {t("streamAccount.help")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="d-xl-none">
                        <ul className="d-flex align-items-center justify-content-end gap-1 gap-sm-3 list-inline mb-0">
                          <li>
                            <div className="search-box-2">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={t("streamAccount.search_dot")}
                                />
                                <button type="submit" className="search-btn">
                                  <svg
                                    width="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="11.7669"
                                      cy="11.7666"
                                      r="8.98856"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></circle>
                                    <path
                                      d="M18.0186 18.4851L21.5426 22"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </button>
                              </form>
                            </div>
                          </li>
                          <Dropdown as="li" className="">
                            <Dropdown.Toggle
                              as={CustomToggle}
                              href="#"
                              variant="d-flex align-items-center text-white"
                              id="langDropdown"
                            >
                              <span className="btn-icon rounded-pill user-icons">
                              <i className="ph ph-translate p-0"></i>
                              </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              as="ul"
                              className="dropdown-menu-end border-0 p-0 m-0"
                            >
                              <Dropdown.Item
                                href="#"
                                onClick={() => changeLanguage("en")}
                              >
                                en
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#"
                                onClick={() => changeLanguage("ar")}
                              >
                                ar
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#"
                                onClick={() => changeLanguage("de")}
                              >
                                de
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#"
                                onClick={() => changeLanguage("fr")}
                              >
                                fr
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#"
                                onClick={() => changeLanguage("gr")}
                              >
                                gr
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <li className="me-0">
                            <Link
                              className="text-white"
                              href="#"
                              onClick={handleShow}
                            >
                              <span className="btn-icon rounded-pill user-icons">
                                <i className="ph ph-handbag fs-5 p-0"></i>
                              </span>
                            </Link>
                          </li>
                           <Dropdown as="li" className="nav-item nav-icon me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          variant="text-white d-flex align-items-center"
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-user-plus fs-5"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end border-0 p-0 m-0 dropdown-user"
                        >
                          <li className="user-info mb-3 me-0">
                            <Link
                              href="/profile/profile-marvin"
                              className="d-flex align-items-center gap-3"
                            >
                            <img
                              src="/assets/images/user/user1.webp"
                              alt="user"
                              loading="lazy"
                              className="img-fluid"
                            />
                            <span className="font-size-14 fw-500 text-capitalize text-white">
                              {t("streamAccount.jenny")}
                            </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/merchandise/account"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-user"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.my_account")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/watchlistdetail"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-plus fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.watch_list")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/extra/pricing-plan"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-star fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.subscription")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auth/login"
                              className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.logout")}
                              </h6>
                            </Link>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Navbar>
          </div>
        </header>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="sidebar-cart border-0 on-rtl"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5">
              {t("streamShop.shopping_cart")} (3)
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <div className="sidebar-cart-content d-flex flex-column justify-content-between">
              <div className="cart-items-container">
                <div className="product-list-content">
                  <ul className="list-unstyled mb-0">
                    {cart.map((item, index) => {
                      return (
                        <li
                          className={
                            "mini-cart-item d-flex align-items-start gap-3 " +
                            item.class
                          }
                          key={index}
                        >
                          <div className="image flex-shrink-0">
                            <img
                              src={item.thumbnail}
                              alt="product-image"
                              className="img-fluid object-cover"
                              width={90}
                            />
                          </div>
                          <div className="cart-content flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-3 text-capitalize">
                                {t(item.name)}
                              </h6>
                              <Link href="#" className="delete-btn">
                                <i className="ph ph-trash text-primary"></i>
                              </Link>
                            </div>
                            <span className="text-primary small">
                              {item.price}
                            </span>
                            <div className="mt-3">
                              <Counter />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top py-3 px-3">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <strong>{t("streamShop.subtotal")}:</strong>
              <span className="st-woocommerce-Price-amount amount">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol fw-medium">
                    ₹
                  </span>
                  11.05
                </span>
              </span>
            </div>
            <div className="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
              <div className="iq-button w-100">
                <Link
                  href="/merchandise/checkout"
                  className="btn btn-primary text-capitalize w-100 rounded-3"
                >
                  <span className="button-text">
                    {t("streamShop.checkout")}
                  </span>
                </Link>
              </div>
              <div className="w-100">
                <Link
                  href="/cart"
                  className="btn btn-secondary text-capitalize w-100 rounded-3"
                >
                  <span className="button-text">
                    {t("streamButtons.view_cart")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas>
      </Fragment>
    </>
  );
});
HeaderMerchandise.displayName = "HeaderMerchandise";
export default HeaderMerchandise;
