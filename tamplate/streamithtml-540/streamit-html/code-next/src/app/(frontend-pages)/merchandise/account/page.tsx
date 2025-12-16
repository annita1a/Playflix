"use client";

import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React, { useState } from "react";
import {
  Col,
  Collapse,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";

// custom Hook
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
import ChoicesJs from "@/components/choice";

const Dashboard = () => {
  const { t } = useTranslation("common");
  const options = [
    { value: `${t("streamShop.choose")}`, label: `${t("streamShop.choose")}` },
    { value: `${t("streamShop.gujrat")}`, label: `${t("streamShop.gujrat")}` },
    { value: `${t("streamShop.dehli")}`, label: `${t("streamShop.dehli")}` },
    { value: `${t("streamShop.goa")}`, label: `${t("streamShop.goa")}` },
    { value: `${t("streamShop.haryana")}`, label: `${t("streamShop.haryana")}` },
    { value: `${t("streamShop.ladakh")}`, label: `${t("streamShop.ladakh")}` },
  ];
  const options1 = [
    {
      value: `${t("streamShop.chooes_country")}`,
      label: `${t("streamShop.chooes_country")}`,
    },
    { value: `${t("streamShop.india")}`, label: `${t("streamShop.india")}` },
    {
      value: `${t("streamShop.united_kindom")}`,
      label: `${t("streamShop.united_kindom")}`,
    },
    {
      value: `${t("streamShop.united_states")}`,
      label: `${t("streamShop.united_states")}`,
    },
    { value: `${t("streamShop.australia")}`, label: `${t("streamShop.australia")}` },
    { value: `${t("streamShop.north_corea")}`, label: `${t("streamShop.north_corea")}` },
  ];

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useBreadcrumb(t("streamAccount.my_account"));
  return (
    <>
      <div className="section-padding service-details">
        <Container>
          <div className="px-3">
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col md="4">
                  <div className="acc-left-menu mb-5 mb-lg-0 mb-md-0">
                    <div className="product-menu">
                      <Nav
                        as="ul"
                        variant="tabs"
                        className="list-inline m-0 nav-tabs flex-column bg-transparent border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <Nav.Item as="li" className="pb-3">
                          <Nav.Link
                            eventKey="first"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.dashboard")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="second"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.orders")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="third"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.downloads")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="fourth"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.addresses")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="five"
                            className="p-0 bg-transparent"
                          >
                            <span className="">
                              {t("streamShop.account_details")}
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="pt-3">
                          <Nav.Link
                            eventKey="sixth"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.logout")}</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="8">
                  <Tab.Content
                    id="product-menu-content"
                    className="product-menu-content"
                  >
                    <Tab.Pane className="fade" eventKey="first">
                      <div className="myaccount-content text-body p-4">
                        <p className="my-3">
                          {t("streamShop.greeting_hello")}{" "}
                          <strong>{t("streamShop.greeting_name")}</strong> (
                          <strong>{t("streamShop.greeting_notYou")}</strong>{" "}
                          <Link href="/auth/login">{t("streamShop.greeting_logout")}</Link>
                          )
                        </p>
                        <p>
                          {t("streamShop.dashboard_intro")}{" "}
                          <Link href="javascript:void(0)">
                            {t("streamShop.dashboard_orders")}
                          </Link>
                          , {t("streamShop.dashboard_manageYour")}{" "}
                          <Link href="javascript:void(0)">
                            {t("streamShop.dashboard_addresses")}
                          </Link>
                          , {t("streamShop.and")}{" "}
                          <Link href="javascript:void(0)">
                            {t("streamShop.dashboard_editDetails")}
                          </Link>
                          .
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="fade" eventKey="second">
                      <div className="orders-table text-body p-4">
                        <Table responsive>
                          <thead>
                            <tr className="border-bottom">
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.order")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.date")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.status")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.total")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.actions")}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <th className="text-primary">#32604</th>
                              <td>October 28, 2022</td>
                              <td>{t("streamKeyword.cancelled")}</td>
                              <td>$215.00 For 0 Items</td>
                              <td>
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#32584</th>
                              <td>October 27, 2022</td>
                              <td>{t("streamKeyword.on_hold")}</td>
                              <td>$522.00 For 0 Items</td>
                              <td>
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#31756</th>
                              <td>October 19, 2022</td>
                              <td>{t("streamKeyword.processing")}</td>
                              <td>$243.00 For 0 Items</td>
                              <td>
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#23663</th>
                              <td>October 7, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$123.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#23612</th>
                              <td>October 7, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$64.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-primary">#19243</th>
                              <td>April 1, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$159.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  href="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="third">
                      <div className="orders-table text-body p-4">
                        <Table responsive>
                          <thead>
                            <tr className="border-bottom">
                              <th className="fw-bolder p-3">
                                {t("streamShop.product")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.download_remaining")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.expires")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.download")}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="">
                                {t("streamShop.electric_toothbrush")}
                              </td>
                              <td>∞</td>
                              <td className="">{t("streamShop.never")}</td>
                              <td>
                                <Link
                                  href="#"
                                  className="px-2 btn btn-primary view-btn text-white"
                                  download
                                >
                                  {t("streamPages.download_movie")}
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="fourth">
                      <div className="text-body p-4">
                        <p className="my-3">{t("streamShop.default_addresses")}</p>
                        <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                          <h4 className="mb-0">{t("streamShop.billing_addess")}</h4>
                          <div className="iq-button">
                            <Link
                              href="#"
                              className="btn btn-primary text-capialize position-relative rounded-3"
                              onClick={() => setShow(!show)}
                            >
                              <span className="button-text">
                                {t("streamAccount.edit")}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <Collapse in={show}>
                          <div className="text-body mb-4">
                            <Form>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.company_name")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="Iqonic Design"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.country_region")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options1}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.street_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="House number and street name"
                                  defaultValue="4517 Kentucky"
                                  className="form-control mb-3 rounded-0"
                                  required
                                />
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.town_city")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="city"
                                  defaultValue="Navsari"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.state")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.pin_code")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="pin code"
                                  defaultValue="396321"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.phone")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="number"
                                  defaultValue="1234567890"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.email_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  defaultValue="johndeo@gmail.com"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <CustomButton
                                  buttonTitle="Save Address"
                                  link="#"
                                  linkButton="false"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Collapse>
                        <div className="table-responsive">
                          <table className="edit-address w-100">
                            <tbody>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.name")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.john_deo")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.company")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  {t("streamKeyword.iqonic_design")}
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.country")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.india")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamShop.addresses")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  4517 {t("streamAccount.washington_manchester")}.
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.email")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">johndeo@gmail.com</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.phone")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">1234567890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                          <h4 className="mb-0">{t("streamShop.shipping_address")}</h4>
                          <div className="iq-button">
                            <Link
                              href="#"
                              className="btn btn-primary text-capialize
                               position-relative rounded-3"
                              onClick={() => setShow1(!show1)}
                            >
                              <span className="button-text">
                                {t("streamAccount.edit")}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <Collapse in={show1}>
                          <div className="text-body mb-4">
                            <Form>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.company_name")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="Iqonic Design"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.country_region")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options1}
                                    className="js-choice "
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.street_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="House number and street name"
                                  defaultValue="4517 Kentucky"
                                  className="form-control mb-3 rounded-0"
                                  required
                                />
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  className="form-control mb-5 rounded-0"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.town_city")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="city"
                                  defaultValue="Navsari"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.state")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.pin_code")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="pin code"
                                  defaultValue="396321"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.phone")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="number"
                                  defaultValue="1234567890"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.email_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  defaultValue="johndeo@gmail.com"
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group">
                                <CustomButton
                                  buttonTitle="Save Address"
                                  link="#"
                                  linkButton="false"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Collapse>
                        <div className="table-responsive">
                          <table className="edit-address w-100">
                            <tbody>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.name")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.john_deo")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.company")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  {t("streamKeyword.iqonic_design")}
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.country")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.india")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamShop.addresses")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  4517 {t("streamAccount.washington_manchester")}.
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.email")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">johndeo@gmail.com</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.phone")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">1234567890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="five">
                      <div className="text-body p-4">
                        <Form>
                          <Row>
                            <Col lg="6">
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.display_name")}&nbsp;
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="display-name"
                              defaultValue="John"
                              className="form-control"
                              required
                            />
                          </Form.Group>
                          <em className="d-block mb-5">
                            {t("streamAccount.display_name")}
                          </em>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.email_address")}&nbsp;
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              defaultValue="johndeo@gmail.com"
                              className="form-control"
                              required
                            />
                          </Form.Group>
                          <h4 className="fw-normal mb-5">
                            {t("streamAccount.password_change")}
                          </h4>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamProfile.label_current_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamProfile.label_new_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.confirm_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group>
                            <CustomButton
                              buttonTitle={t("streamButtons.save_changes")}
                              link="#"
                              linkButton="false"
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="sixth">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-md-6">
                            <h4 className="mb-5 text-primary">
                              {t("streamButtons.login")}
                            </h4>
                            <Form method="post">
                              <div className="mb-4">
                                <Form.Control
                                  type="text"
                                  name="user-name"
                                  placeholder={`${t(
                                    "streamAccount.username_or_email"
                                  )} *`}
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="password"
                                  name="pwd"
                                  placeholder={`${t("streamAccount.password")} *`}
                                  required
                                />
                              </div>
                              <Form.Check
                                type="checkbox"
                                id="remember"
                                label={t("streamAccount.remember_me")}
                                className="mb-4"
                              ></Form.Check>
                              <CustomButton
                                buttonTitle={t("streamButtons.login")}
                                link="#"
                                linkButton="false"
                              />
                            </Form>
                            <div className="mt-3">
                              <Link
                                href="javascript:void(0)"
                                className="btn text-primary p-0 text-capitalize position-relative"
                              >
                                <span className="button-text">
                                  {t("streamAccount.lost_password")}
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h4 className="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">
                              {t("streamButtons.register")}
                            </h4>
                            <Form method="post">
                              <div className="mb-4">
                                <Form.Control
                                  type="text"
                                  name="user-name"
                                  placeholder={`${t("streamAccount.username")} *`}
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="email"
                                  name="email-address"
                                  placeholder={`${t("streamAccount.email_address")} *`}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="password"
                                  name="password"
                                  placeholder={`${t("streamAccount.password")} *`}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <p className="mb-5">
                                
                                {t("streamShop.user_personal_data")}{" "}
                                <Link href="/extra/privacy-policy">
                                  
                                  {t("streamShop.privacy_policy")}
                                </Link>
                                .
                              </p>
                              <CustomButton
                                buttonTitle={t("streamButtons.register")}
                                link="#"
                                linkButton="false"
                              />
                            </Form>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
