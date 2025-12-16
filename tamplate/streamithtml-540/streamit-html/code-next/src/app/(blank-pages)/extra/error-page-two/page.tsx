"use client"

import React, { Fragment, memo } from "react";

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

const ErrorPage2 = () => {
    const { t } = useTranslation("common");
    return (
        <Fragment>
            <div
                className="section-padding vh-100 image-flip-rtl"
                style={{
                    backgroundImage: `url(${generateImgPath(
                        "/assets/images/pages/404-two.webp"
                    )})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    minHeight: "500px",
                }}
            >
                <Container className="h-100">
                    <Row className="h-100 align-items-center">
                        <Col lg="6"></Col>
                        <Col lg="5">
                            <img
                                src="/assets/images/pages/404-text.webp"
                                alt="404"
                                loading="lazy"
                                className="mb-5"
                            />
                            <h4 className="fw-bold text-center">
                                {t("streamError.ohhh_no")}
                            </h4>
                            <p className="text-center">
                                {t("streamError.page_deosn't_exit")}
                            </p>
                            <div className="text-center mt-4 pt-3">
                                <div className="iq-button">
                                    <Link href="/" className="btn text-uppercase position-relative">
                                        <span className="button-text">{t("streamError.back_home")}</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

ErrorPage2.layout = 'Blank'
export default ErrorPage2;
