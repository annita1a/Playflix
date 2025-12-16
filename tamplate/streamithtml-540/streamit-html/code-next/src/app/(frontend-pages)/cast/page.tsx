"use client";

import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//router
import Link from "next/link";

// components
import CastCard from "@/components/cards/CastCard";

// data
import { cast, cast_member } from "@/StaticData/data";

//custom hooks
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

export const CastPage = memo(() => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("streamPages.cast"));
  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <Row className="data-listing personality-card row gy-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5">
            {cast_member.map((item: any, index) => (
              <Col key={index}>
                <CastCard
                  title={t(item.title)}
                  image={item.profile_image}
                  link={"/person-detail"}
                  castSubTitle={item.subtitle}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

CastPage.displayName = "CastPage";
export default CastPage;
