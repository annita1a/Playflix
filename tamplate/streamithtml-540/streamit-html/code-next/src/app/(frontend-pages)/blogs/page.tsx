"use client";

import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardBlogList from "../../components/cards/CardBlogList";
import DetailMetaList from "../../components/blog/DetailMetaList";

//static data
import { blogs } from "../../StaticData/blogs";

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

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
import { useTranslation } from 'react-i18next';

const BLogs = memo(() => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("streamBlog.blog_listing"));
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="8" sm="12">
              {blogs.slice(0, 14).map((item, index) => {
                return (
                  <div className="blog-custom-box" key={index}>
                    <CardBlogList
                      title={t(item.title)}
                      thumbnail={item.thumbnail}
                      blogDate={item.blogDate}
                      username={t(item.username)}
                      // categories={t(item.categories)}
                      tags={item.tags}
                      description={item.description}
                      // category={item.category}
                      link_button={true}
                    />
                  </div>
                );
              })}
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

BLogs.displayName = "BLogs";
export default BLogs;
