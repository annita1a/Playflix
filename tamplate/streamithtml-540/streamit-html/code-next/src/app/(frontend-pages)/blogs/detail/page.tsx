"use client"

import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

//router
import Link from 'next/link';

//static data
import { blogs } from '@/StaticData/blogs';

//components
import DetailMetaList from '@/components/blog/DetailMetaList';
import FormWidget from '@/components/blog/FormWidget';

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

//hook
import { useTranslation } from 'react-i18next';

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

interface BlogDetail {
    id: string,
    categories: string,
    title: string,
    userImage: string,
    username: string,
    blogDate: string,
    tags: [string],
    longDescription: string
}

const BlogDetail = () => {
    const { t } = useTranslation("common");
    const slug = "the-most-anticipated-movies";
    const blog: BlogDetail | any = blogs.find((item) => item.slug === slug)
    useBreadcrumb(t('streamBlog.blog14'))
    return (
        <Fragment>
            {blog !== undefined && blog !== null ? (
                <div className="section-padding blog-section">
        <Container>
          <Row>
            <Col sm="12">
              <div className="iq-blog blog-detail blog-single ">
                <Link href="" className="blog-image d-block overflow-hidden">
                  <img
                    src="/assets/images/blog/blog1.webp"
                    loading="lazy"
                    alt=""
                    className="img-fluid w-100 mb-5"
                  />
                </Link>
                <div className="iq-blog-box ">
                  <div className="iq-blogs-meta">
                    <ul className="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                      <li>
                        <Link href="/blogs" className="iq-user">
                          <i className="ph ph-user me-1" aria-hidden="true"></i>{" "}
                          {t(blog.username)}
                        </Link>
                      </li>
                      <li>
                        <Link rel="bookmark" href="/blogs/blog-date">
                          <i
                            className="icon icon-calendar-2"
                            aria-hidden="true"
                          ></i>{" "}
                          {blog.blogDate}{" "}
                        </Link>
                      </li>
                      {blog.category !== undefined &&
                        blog.category !== null &&
                        blog.category.map((categories:any , index:number) => {                          
                          return (
                            <Fragment key={index}>
                              <li className="blog-category">
                                <Link href="#">{t(categories)},</Link>
                              </li>{" "}
                            </Fragment>
                          );
                        })}
                    </ul>
                  </div>
                  <h3 className="mb-3">{t(blog.blogdetailtitle)} </h3>
                  <div>
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
                  </div>
                  {blog.blogdetailtag !== undefined &&
                    blog.blogdetailtag !== null && (
                      <ul className="iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product text-capitalize">
                        {blog.blogdetailtag.map((tags:any, index:number) => {
                          return (
                            <li key={index}>
                              <Link
                                href="/blogs/blog-tag"
                                className="position-relative"
                              >
                                {t(tags)}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  <div className="iq-blog-tag ">
                    <FormWidget></FormWidget>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
            ) : ''}
        </Fragment>
    )
}

export default BlogDetail