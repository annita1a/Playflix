"use client";

import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//router
import Link from "next/link";

// components
import GenersCard from "@/components/cards/GanresCard";

// data
import { geners } from "@/StaticData/data";

//custom hooks
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

const GenresPage = memo(() => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("streamGenres.genre"));
  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("sectionTitle.movie_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {geners.map((item, index) => (
              <Col key={index} className="">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                  url={"#"}
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
              {t("streamPages.tv_show_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {geners.map((item, index) => (
              <Col key={index} className="">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                  url={"#"}
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
              {t("streamPages.video_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {geners.map((item, index) => (
              <Col key={index} className="">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                  url={"#"}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

GenresPage.displayName = "GenresPage";
export default GenresPage;
