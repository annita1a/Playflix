"use client";

import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//router
import Link from "next/link";

// components
import TagsCard from "@/components/cards/TagsCard";

// data
import { movieTags, tvShowsTags, videoTags } from "@/StaticData/data";

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

//hook
import { useTranslation } from 'react-i18next';
import { selected_item } from "@/store/shop/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

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

const TagsPage = memo(() => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const router = useRouter();
  useBreadcrumb(t("streamTag.tags"));
  const handleClick = (tag: any) => {
    // console.log("hello");

    // Dispatch Redux action
    dispatch(selected_item(tag));

    sessionStorage.setItem("Tag", JSON.stringify(tag));
    // Now navigate
    //   navigate('/view-all-tags');
    router.push('/tags/viewalltag');
  };
  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.movie_tag")}
            </h4>
            <a
              className="text-primary text-decoration-none cursor-pointer"
              onClick={() => handleClick("movieTag")}
            >
              View All
            </a>
          </div>
          <Row
            as="ul"
            className="mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6"
          >
            {movieTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.tv_show_tag")}
            </h4>
            <a 
              className="text-primary text-decoration-none cursor-pointer"
              onClick={() => handleClick("TVShowTag")} 
            >
              View All
            </a>
          </div>
          <Row
            as="ul"
            className="row mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6"
          >
            {tvShowsTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="iq-main-header d-flex align-items-center justify-content-between mb-4">
            <h4 className="text-capitalize mb-0 main-title cursor-pointer">
              {t("streamPages.video_tag")}
            </h4>
            <a
              className="text-primary text-decoration-none"
              onClick={() => handleClick("VideoTag")}
            >
              View All
            </a>
          </div>
          <Row
            as="ul"
            className="mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6"
          >
            {videoTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

TagsPage.displayName = "TagsPage";
export default TagsPage;
