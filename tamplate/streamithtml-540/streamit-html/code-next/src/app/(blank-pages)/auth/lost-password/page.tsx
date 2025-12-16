"use client"

import React, { Fragment, memo } from 'react'

//react bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap'

//router
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

//hook
import { useTranslation } from 'react-i18next';

const LostPassword = () => {
    const { t } = useTranslation("common");
    return (
        <Fragment>
            <main className='main-content'>
                <div className='vh-100' style={{ backgroundImage: "url(/assets/images/pages/01.webp)", backgroundSize: 'cover', backgroundRepeat: "no-repeat", position: 'relative', minHeight: '500px' }}>
                    <Container>
                        <Row className='justify-content-center align-items-center height-self-center vh-100'>
                            <Col lg="5" md="12" className='align-self-center'>
                                <div className='user-login-card bg-body'>
                                    <p>{t("streamForm.desc_enter1")}</p>
                                    <Form action='post'>
                                        <Form.Group className='mb-5'>
                                            <Form.Label className='text-white fw-500 mb-2'>{t("streamAccount.username_or_email")}</Form.Label>
                                            <Form.Control type='text' className='rounded-0' />
                                        </Form.Group>
                                        <div className="iq-button">
                                            <Link href="#" className="btn text-uppercase position-relative">
                                                <span className="button-text">{t("streamProfile.label_new_password")}</span>
                                                <i className="fa-solid fa-play"></i>
                                            </Link>
                                        </div>
                                        <div className="seperator d-flex justify-content-center align-items-center">
                                            <span className="line"></span>
                                        </div>
                                        <div className="iq-button">
                                            <Link href="/auth/login" className="btn text-uppercase position-relative">
                                                <span className="button-text">{t("streamAccount.log_in")}</span>
                                                <i className="fa-solid fa-play"></i>
                                            </Link>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </Fragment>
    );
};

LostPassword.layout = "Blank";
export default LostPassword;
