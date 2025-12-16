"use client";

import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components

//static data
// import { blogs } from "../../StaticData/blogs";

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
import { blogs } from "@/StaticData/blogs";
import CardBlogList from "@/components/cards/CardBlogList";
import DetailMetaList from "@/components/blog/DetailMetaList";

const Blog_Date = memo(() => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("Day: September 23, 2022"));
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="8" sm="12">
              {blogs.slice(0, 7).map((item:any, index:number) => {
                return (
                  <div className="blog-custom-box" key={index}>
                    <CardBlogList
                      title={t(item.title)}
                      thumbnail={item.thumbnail}
                      blogDate={item.blogDate}
                      username={t(item.username)}
                      // categories={t(item.categories)}
                      tags={item.tags}
                      description={t(item.description)}
                      category={item.category}
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

Blog_Date.displayName = "Blog_Date";
export default Blog_Date;
