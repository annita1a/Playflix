"use client"

import React, { Fragment } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

// next link
import Link from "next/link";

//function
import { generateImgPath } from "@/StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     const { locale } = context
//     const validLocales = ["en", "ar", "gr", "de", "fr"];
//     return {
//         props: {
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }

const ErrorPage1 = () => {
    const { t } = useTranslation("common");
    return (
        <Fragment>
            <div className="section-padding vh-100 error-404-section">
        <Container className="h-100">
          <div className="error-404-position">
            <Row className="h-100 align-items-center">
              <Col lg="2"></Col>
              <Col lg="8">
                <img
                  src="/assets/images/pages/new-404.png"
                  alt="404"
                  loading="lazy"
                  className="error-404-img mb-4 pb-2"
                />
                <h4 className="fw-semibold mb-0 text-center">
                  {t("streamError.something_wrong")}
                </h4>
                <p className="text-center">{t("streamError.requested_page")}</p>
                <div className="text-center mt-4 pt-3">
                   <Link href="/" className="btn btn-link error-404-btn text-capitalize">{t("streamError.back_home")}</Link>
                </div>
              </Col>
              <Col lg="2"></Col>
            </Row>
          </div>
        </Container>
      </div>
        </Fragment>
    );
};

ErrorPage1.layout = "Blank";
export default ErrorPage1;
