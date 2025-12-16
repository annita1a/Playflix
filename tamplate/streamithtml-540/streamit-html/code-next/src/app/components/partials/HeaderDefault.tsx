import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import {
  Button,
  Nav,
  Collapse,
  Navbar,
  Offcanvas,
  Container,
  Dropdown,
  Form,
} from "react-bootstrap";

//router
import Link from "next/link";
import { useRouter } from "next/router";

// components
import Logo from "../logo";
import CustomToggle from "../CustomToggle";

//hook
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { theme_scheme_direction } from "../../store/setting/actions";
import { useDispatch, useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

const HeaderDefault = memo(() => {
  const { t } = useTranslation("common");
  const [isMega, setIsMega] = useState(true);
  const location = usePathname();

    const themeSchemeDirection = useSelector(SettingSelector.theme_scheme_direction);
  const [shopOffcanvas, setshopOffcanvas] = useState(false);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add("sticky");
        } else {
          headerSticky.classList.remove("sticky");
        }
      }
    };

    const updateIsMega = () => {
      setIsMega(location === "/");
    };

    window.addEventListener("scroll", handleScroll);
    updateIsMega();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    // Change HTML dir attribute
    if (lng === "ar") {
        dispatch(theme_scheme_direction("rtl"));
      // document.documentElement.dir = "rtl";
    } else {
      dispatch(theme_scheme_direction("ltr"));
      // document.documentElement.dir = "ltr";
    }
  };

  const handleClose = () => setshopOffcanvas(false);

  return (
    <Fragment>
      <header className="header-center-home header-default header-sticky">
        <Navbar
          expand="xl"
          className="nav navbar-light iq-navbar header-hover-menu py-xl-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex align-items-center gap-2 gap-md-3">
                {/* <div className="d-block d-xl-none">
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar_main"
                    aria-controls="navbar_main"
                    className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn"
                    onClick={() => setShow1(!show1)}
                  >
                    <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
                <Logo></Logo>
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
              <Navbar
                expand="xl"
                className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${
                  show1 === true ? "show" : ""
                } ${isMega ? "mega-menu-content" : ""}`}
                style={{
                  visibility: `${show1 === true ? "visible" : "hidden"}`,
                }}
                id="navbar_main"
              >
                <Container fluid className="container-fluid p-lg-0">
                  <Offcanvas.Header
                    className="px-0"
                    closeButton
                    onHide={() => setShow1(false)}
                  >
                    <div className="navbar-brand ms-3">
                      <Logo></Logo>
                    </div>
                  </Offcanvas.Header>
                  <ul
                    className="navbar-nav iq-nav-menu list-unstyled"
                    id="header-menu"
                  >
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className={`${
                          location === "/" ||
                          location === "/home" ||
                          location === "/movies" ||
                          location === "/tv-shows" ||
                          location === "/videos" ||
                          location === "/merchandise-store"
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="d-flex justify-content-between">
                          <span className="item-name">{t("streamPages.home")}</span>
                          <span className="menu-icon">
                            <i
                              className="ph ph-caret-down align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </Nav.Link>
                      <Collapse
                        in={open}
                        className={`sub-nav justify-content-center list-unstyled ${
                          isMega ? " mega-menu-item" : ""
                        }`}
                      >
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/new-home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.ott_home")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/home" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/home"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.mainHome")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/movies" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/movies"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/movie.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.movie")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/tv-shows" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/tv-shows"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/tv-show.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.tv_show")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/videos" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/videos"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/video.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.video")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${
                                location === "/merchandise" ? "active" : ""
                              } nav-link ${isMega ? "" : ""}`}
                              href="/merchandise"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/shop-home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("streamPages.merchandise_store")}
                              </span>
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
                          location === "/movies/download" ||
                          location === "/movies/related" ||
                          location === "/movies/restricted" ||
                          location === "/genres" ||
                          location === "/cast" ||
                          location === "/tags"
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
                      <Collapse in={open1} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/movies/download"
                              className={`${
                                location === "/movies/download" ? "active" : ""
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
                                location === "/movies/related" ? "active" : ""
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
                          <span className="item-name">{t("streamPages.pages")}</span>
                          <span className="menu-icon">
                            <i
                              className="ph ph-caret-down align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </Nav.Link>
                      <Collapse in={open2} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/about-us"
                              className={`${
                                location === "/extra/about-us" ? "active" : ""
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
                                location === "/extra/contact-us"
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
                                location === "/extra/faq" ? "active" : ""
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
                              {t("streamShop.privacy_policy")}{" "}
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
                              {t("streamPages.terms_and_use")}{" "}
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
                          location === "/blogpagination/pagination" || 
                          location === "/blogpagination/loadmore" || 
                          location === "/blogpagination/infinitescroll"
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="d-flex justify-content-between">
                          <span className="item-name">{t("streamPages.blog")}</span>
                          <span className="menu-icon">
                            <i
                              className="ph ph-caret-down align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </Nav.Link>
                      <Collapse in={open4} className="sub-nav list-unstyled">
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
                                      location === "/blogs/grid/three-column"
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
                                     {t("streamPages.4_column_blog")}{" "}
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
                                location === "/blogpagination/infinitescroll"
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
                                      location === "/blogpagination/pagination"
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
                                      location === "/blogpagination/loadmore"
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
                                    {t("streamPages.blog_infinite_scroll")}{" "}
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
                          <span className="item-name">{t("streamPages.shop")}</span>
                          <span className="menu-icon ms-1">
                            <i
                              className="ph ph-caret-down align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </Nav.Link>
                      <Collapse in={open8} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/shop"
                              className={`${
                                location === "/merchandise/shop" ? "active" : ""
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
              </Navbar>

              <div className="css_prefix-header-right d-flex align-items-center gap-2 gap-md-4">
                <ul className="list-inline d-flex align-items-center gap-3 gap-md-4 mb-0 ps-0 justify-content-md-end justify-content-between">
                  <div className="d-none d-xl-block">
                    <Dropdown
                      as="li"
                      className="nav-item dropdown iq-responsive-menu"
                    >
                      <div className="search-box">
                        <Link
                          href="#"
                          onClick={() => setShow2(!show2)}
                          className={` nav-link p-0 text-white ${
                            show2 ? "show" : ""
                          }`}
                          id="search-drop"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <div className="btn-icon btn-sm rounded-pill btn-action">
                            <span className="btn-inner">
                              <i className="ph ph-magnifying-glass p-0"></i>
                            </span>
                          </div>
                        </Link>
                        <ul
                          className={`dropdown-menu p-0 dropdown-search m-0 iq-search-bar ${
                            show2 ? "show" : ""
                          }`}
                          style={{ width: "10rem" }}
                          data-bs-popper="static"
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder={t("streamBlog.search")}
                              />
                              <button
                                onClick={() => setShow2(!show2)}
                                type="submit"
                                className={` search-submit ${
                                  show === false ? "show" : ""
                                }`}
                              >
                                <i className="ph ph-magnifying-glass"></i>
                              </button>
                            </div>
                          </li>
                        </ul>
                        <Dropdown.Menu
                          as="ul"
                          className="p-0 dropdown-search m-0 iq-search-bar"
                          style={{ width: "20rem" }}
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder="t('streamPages.search_dot')"
                              />
                              <button type="submit" className="search-submit">
                                <svg
                                  className="icon-15"
                                  width="15"
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
                            </div>
                          </li>
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                  </div>
                  <Dropdown as="li" className="nav-items">
                    <Dropdown.Toggle
                      as={CustomToggle}
                      href="#"
                      variant=" nav-link shoping-cart-button text-white"
                      id="langDropdown"
                    >
                      <i className="ph ph-translate p-0"></i>
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
                  <Nav.Item as="li" className="nav-items">
                    <Nav.Link
                      as="a"
                      className="shoping-cart-button text-white"
                      onClick={() => setshopOffcanvas(!shopOffcanvas)}
                    >
                      <i className="ph ph-bag p-0"></i>
                      <span className="bg-primary text-white shopping-badge">
                        1
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Offcanvas
                    show={shopOffcanvas}
                    onHide={handleClose}
                    
                    placement={`${themeSchemeDirection === "rtl" ? 'start' : 'end'}`}
                    className="sidebar-cart border-0 on-rtl overflow-y-auto widget-shopping-cart-content border-0"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title as="h5" className="fw-medium">
                        Shopping cart ({" "}
                        <span
                          className="streamit-cart-count"
                          aria-live="polite"
                        >
                          1
                        </span>{" "}
                        )
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div className="product-list-content">
                        <ul className="list-unstyled mb-0">
                          <li className="mini-cart-item d-flex align-items-start gap-3">
                            <div className="cart-img">
                              <Link href="/cart" aria-label="Bag Pack">
                                <img
                                  src="/assets/images/shop/product/01.webp"
                                  className="img-fluid"
                                  width="300"
                                  height="400"
                                  alt="Bag Pack"
                                />
                              </Link>
                            </div>
                            <div className="cart-content flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center">
                                <Link
                                  className="d-block"
                                  href="./shop/merchandise/product-detail"
                                  aria-label="Bag Pack"
                                >
                                  <h6 className="fw-medium">
                                    {t("streamShop.product1")}
                                  </h6>
                                </Link>
                                <Link
                                  href="javascript:void(0)"
                                  className="delete-btn"
                                >
                                  <i className="ph ph-trash text-primary"></i>
                                </Link>
                              </div>
                              <div className="product-price text-muted">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol fw-medium">
                                      ₹
                                    </span>
                                    11.05
                                  </span>
                                </span>
                              </div>
                              <div
                                className="btn-group iq-qty-btn custom-qty-btn rounded-3"
                                data-qty="btn"
                                role="group"
                              >
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0"
                                >
                                  <i className="ph ph-minus"></i>
                                </button>{" "}
                                <Form.Control
                                  type="text"
                                  className="btn btn-sm btn-outline-light input-display border-0"
                                  data-qty="input"
                                  pattern="^(0|[1-9][0-9]*)$"
                                  minLength={1}
                                  maxLength={2}
                                  value={2}
                                  title="Qty"
                                  readOnly
                                />{" "}
                                <button className="btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                  <i className="ph ph-plus"></i>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
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
                  <Dropdown as="li" className="nav-item cust-itemdropdown1">
                    <Dropdown.Toggle
                      as={CustomToggle}
                      href="#"
                      variant=" nav-link d-flex align-items-center p-0"
                      size="sm"
                      id="dropdownMenuButton1"
                    >
                      <span className="btn-inner">
                        <div className="st-avatar style-1">
                          <img
                            src="/assets/images/user/user6.jpg"
                            alt="user"
                            className="img-fluid rounded-circle dropdown-user-menu-image header-user-image"
                          />
                        </div>
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end  dropdown-user-menu border border-gray-900 rounded-3">
                      <div className="user-dropdown-inner">
                        <div className="d-flex align-items-center gap-3 rounded mb-4">
                          <div className="image flex-shrink-0">
                            <img
                              src="/assets/images/user/user6.jpg"
                              className="img-fluid rounded-3 dropdown-user-menu-image"
                              alt="Marvin McKinney"
                            />
                          </div>
                          <div className="content">
                            <h6 className="mb-1">{t("streamShop.greeting_name")}</h6>
                          </div>
                        </div>
                        <ul className="d-flex flex-column gap-3 list-inline m-0 p-0">
                          <li>
                            <Link
                              href="/profile/profile-marvin"
                              className="link-body-emphasis font-size-14 d-flex align-items-center gap-2"
                            >
                              <i className="ph ph-user"></i>
                              <span className="fw-medium">
                                {t("streamAccount.profile")}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/watchlistdetail"
                              className="link-body-emphasis font-size-14 d-flex align-items-center gap-2"
                            >
                              <i className="ph ph-playlist"></i>
                              <span className="fw-medium">
                                {t("streamAccount.watch_list")}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/archive-playlist"
                              className="link-body-emphasis font-size-14 d-flex align-items-center gap-2"
                            >
                              <i className="ph ph-plus"></i>
                              <span className="fw-medium">
                                {t("streamPages.playlist")}
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/profile/profile-marvin"
                              className="link-body-emphasis font-size-14 d-flex align-items-center gap-2"
                            >
                              <i className="ph ph-bell"></i>
                              <span className="fw-medium">
                                {t("streamAccount.notification")}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <Link
                        href="/auth/login"
                        className="btn btn-link p-3 d-block font-size-14 text-center text-decoration-none border-top"
                      >
                        <span className="d-flex align-items-center justify-content-center gap-2 fw-medium">
                          <i className="ph ph-sign-out"></i>
                          Logout
                        </span>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
                <div className="d-block d-xl-none">
                  <Button
                    id="navbar-toggle"
                    bsPrefix="navbar-toggler"
                    type="button"
                    aria-expanded={show}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    onClick={() => setShow1(!show1)}
                  >
                    <span className="ph ph-list"></span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
});

HeaderDefault.displayName = "HeaderDefault";
export default HeaderDefault;
