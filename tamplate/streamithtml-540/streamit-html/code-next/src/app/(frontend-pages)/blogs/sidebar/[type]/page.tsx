"use client"

import React, { Fragment, memo, useEffect } from 'react'

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// Components
import DetailMetaList from '@/components/blog/DetailMetaList';
// import CardBlogGrid from '@/components/cards/CardBlogGrid';
import CardBlogList from "@/components/cards/CardBlogList";
import SidebarBreadcrumb from '@/components/blog/SidebarBreadcrumb';
//components

//static data
import { blogs, blogsGrid, sidebar_blogs } from '@/StaticData/blogs';

//hook
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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

const LeftSidebarPage = memo(() => {
    const { t } = useTranslation("common");
    const router = usePathname()
    let _class,_title;
    // console.log(router)
    const lastSegment = router.split("/").pop();
      switch (lastSegment) {
    case "left":
      _class = "flex-lg-row-reverse flex-column-reverse";
      _title = "streamPages.left_sidebar";
      break;
    case "right":
      _class = " ";
      _title = "streamPages.right_sidebar";
      break;

    default:
      break;
  }
    return (
        <Fragment>
            <SidebarBreadcrumb type={lastSegment} />
              <div className="section-padding">
        <Container>
          <Row className={`gap-5 gap-lg-0 ${_class}`}>
            <Col lg="8" sm="12">
              <Row className="gy-5">
                {blogs.slice(0, 14).map((item:any, index:number) => {
                  return (
                    <Col md={6} key={index}>
                      <CardBlogList
                        key={index}
                        title={t(item.title)}
                        thumbnail={item.thumbnail}
                        blogDate={item.blogDate}
                        username={t(item.username)}
                        // tags={item.tags}
                        description={t(item.description)}
                        link_button={true}
                        button_icon={true}
                      />
                    </Col>
                  );
                })}
              </Row>
              <div className="iq-button text-center mt-3">
                <Link
                  href="#"
                  className="btn btn-primary text-capitalize position-relative rounded-3"
                >
                  <span className="button-text">
                    {t("streamButtons.load_more")}{" "}
                  </span>
                </Link>
              </div>
            </Col>
            <Col lg="4" sm="12">
              <DetailMetaList></DetailMetaList>
            </Col>
          </Row>
        </Container>
      </div>
        </Fragment>
    );
});

LeftSidebarPage.displayName = "LeftSidebarPage";
export default LeftSidebarPage;
