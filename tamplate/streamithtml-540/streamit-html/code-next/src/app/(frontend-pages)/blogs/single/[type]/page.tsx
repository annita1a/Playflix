"use client"

import { Fragment, memo, useRef } from "react";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//router
import Link from "next/link";

//static Data
import { blogs } from "@/StaticData/blogs";

//components
import FormWidget from "@/components/blog/FormWidget";
import DetailMetaList from "@/components/blog/DetailMetaList";
import SingleBlogBreadcrumb from "@/components/blog/SingleBlogBreadcrumb";


//hook
import { useTranslation } from 'react-i18next';
//function
import { generateImgPath } from "@/StaticData/data";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

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

export async function getStaticPaths(type: String) {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

interface BlogItem {
  slug: string;
  username: string;
  blogDate: string;
  longDescription?: string;
  blogdetailtag?: string[];
  category?: string[];
}

const Single = memo((props) => {
     const { t } = useTranslation("common");
         const router = usePathname()
  const { type } = useParams() as { type?: string };

  const slug = "the-most-anticipated-movies";
  const blog: BlogItem | undefined = blogs.find((item) => item.slug === slug);

  const audio_data = ["streamTag.drama", "streamTag.history", "streamShop.uncategorized"];

  let title = "";
  let data: string[] | undefined = [];
  let date = "";

  switch (type) {
    case "audio":
      title = "streamBlog.black_pearl";
      data = audio_data;
      date = "February 2, 2019";
      break;
    case "video":
      title = "streamPrivacy_Policy.cookies_web";
      data = audio_data;
      date = "January 30, 2019";
      break;
    case "link":
      title = "streamBlog.birds_of_prey";
      data = audio_data;
      date = "January 30, 2019";
      break;
    case "quote":
      title = "streamBlog.saturday_night";
      data = audio_data;
      date = "January 30, 2019";
      break;
    case "gallery":
      title = "streamForm.gillian_shares";
      data = audio_data;
      date = "January 30, 2019";
      break;
  }

  const category_data = data ?? blog?.category ?? [];
  const blog_date = date || blog?.blogDate;

  const gallery = [
    { img: generateImgPath("/assets/images/blog/blog1.webp"), class: "mb-4" },
    { img: generateImgPath("/assets/images/blog/blog2.webp"), class: "mb-4" },
    { img: generateImgPath("/assets/images/blog/blog3.webp"), class: "mb-4" },
    { img: generateImgPath("/assets/images/blog/blog4.webp"), class: "mb-4 mb-md-0" },
    { img: generateImgPath("/assets/images/blog/blog5.webp"), class: "mb-4 mb-md-0" },
    { img: generateImgPath("/assets/images/blog/Fantacy.webp"), class: "" },
  ];

  return (
    <Fragment>
        <SingleBlogBreadcrumb type={type}></SingleBlogBreadcrumb>
      <div className="section-padding blog-single blog-section">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="iq-blogs-meta ">
                <ul className="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                  <li className="posted-by">
                    <span className="post-date d-flex align-items-center gap-1">
                      <i className="ph ph-user"></i>
                      <Link href="/blogs/blog-tag">{t(blog?.username || "")}</Link>
                    </span>
                  </li>
                  <li className="posted-on">
                    <span className="post-author d-flex align-items-center gap-1">
                      <i className="icon icon-calendar-2"></i>
                      <Link href="/blog-date">
                        <span>{blog_date}</span>
                      </Link>
                    </span>
                  </li>
                  {category_data.map((cat, index) => (
                    <li className="blog-category" key={index}>
                      <Link href="#">{t(cat)},</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mb-3">
                {type === "audio" && t("streamBlog.blog15")}
                {type === "video" && t("streamBlog.blog10")}
                {type === "gallery" && t("streamBlog.blog10")}
                {type === "link" && t("streamBlog.blog8")}
                {type === "quote" && t("streamBlog.blog9")}
              </h3>
              <div className="iq-blog blog-detail">
                {type === "audio" ? (
                  <div>
                    <iframe
                      height="200"
                      className="w-100"
                      frameBorder="no"
                      src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&amp;show_artwork=true&amp;maxheight=750&amp;maxwidth=720&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;color"
                    ></iframe>
                  </div>
                ) : type === "video" ? (
                  <div>
                    {/* <VideoJS
                      options={videoJsOptions}
                      onReady={handlePlayerReady}
                    /> */}
                    <iframe className="w-100" height="490" src="https://www.youtube.com/embed/QCGq1epI9pQ"
                      title="Streamit Intro | ULTIMATE OTT Theme &amp; App for WordPress | Iqonic Design"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
                  </div>
                ) : type === "gallery" ? (
                  <Row className="row-cols-xl-3 row-cols-md-2 row-cols-1">
                    {gallery.map((item, index) => {
                      return (
                        <Col className={item.class} key={index}>
                          <Link href="">
                            <img src={item.img} alt={index} />
                          </Link>
                        </Col>
                      );
                    })}
                  </Row>
                ) : (
                  ""
                )}
                <div className="iq-blog-box">
                  {type === "link" ? (
                    <div className="mb-4">
                      <Link href="https://iqonic.design/">
                        <i className="ph ph-link text-primary quote-icon"></i>
                      </Link>
                    </div>
                  ) : type === "quote" ? (


                    <blockquote className="block-quote py-5 mb-3">
                      <Row className="align-items-start">
                        <Col md={2} lg={1}>
                          <div className="blockquote-icon">
                            <i className="ph-fill ph-quotes text-primary" aria-hidden="true"></i>
                          </div>
                        </Col>
                        <Col md={10} lg={11}>
                          <div className="p-2">
                            <p className="mb-0 blog-gallery-desc">”{t("streamBlog.quotes")}”</p>
                            <cite><a href="#">{t("streamBlog.quotes_author")}</a></cite>
                          </div>
                        </Col>
                      </Row>

                    </blockquote>
                  ) : (
                    ""
                  )}
                  <div className="iq-blog-box border-0">
                    {/* Meta */}
                    {type === "single" && (
                      <div className="iq-blogs-meta">
                        <ul className="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                          <li>
                            <i className="ph ph-user" aria-hidden="true"></i>
                            <Link href="/blogs/blog-tag">Jenny</Link>
                          </li>
                          <li>
                            <i className="icon icon-calendar-2" aria-hidden="true"></i>
                            <Link href="/blogs-date">January 30, 2019</Link>
                          </li>
                         
                        </ul>
                      </div>
                    )}

                    {/* Title */}
                    {type === "single" && <h3 className="mb-3">{t(blogTitle)}</h3>}
                    <h6 className="text-white my-3">{t("streamBlog.blog2_desc")}</h6>
                    <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog3_desc")}</p>
                    <p className="blog-gallery-desc">{t("streamBlog.blog4_desc")}</p>

                    {/* Blockquote */}
                    <blockquote className="block-quote text-white py-2">
                      <p className="mb-0 blog-gallery-desc">{t("streamBlog.quotes")}</p>
                      <cite>
                        <a href="#">{t("streamBlog.quotes_author")}</a>
                      </cite>
                    </blockquote>

                    <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog7_desc")}</p>
                    <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog8_desc")}</p>
                    <p className="blog-gallery-desc">{t("streamBlog.blog7_desc")}</p>

                    {/* Tags */}
                    <ul className="iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product">
                      <li>
                        <Link href="/blogs/blog-tag" className="position-relative">
                          {t("streamTag.comedy")}
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogs/blog-tag" className="position-relative">
                          {t("streamTag.drama")}
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogs/blog-tag" className="position-relative">
                          {t("streamPages.movie")}
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogs/blog-tag" className="position-relative">
                          {t("streamBlogCategory.trailer")}
                        </Link>
                      </li>
                    </ul>

                    <div className="iq-blog-tag">
                      <FormWidget />
                    </div>
                  </div>
                </div>
              </div>                
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

Single.displayName = "Single";
export default Single;
