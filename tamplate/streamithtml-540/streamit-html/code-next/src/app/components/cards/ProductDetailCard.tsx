import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";

//react-router-dom
import Link from 'next/link'

//components
import RatingStar from "../rating-star";
import Counter from "../counter";

//function
import { generateImgPath } from "../../StaticData/data";

//plugins
//swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

//sweetalert2
import Swal from "sweetalert2-neutral";

//hook
import { useTranslation } from 'react-i18next';

interface ProductDetailCardProps{
  [x: string]: any;
  thumbnail?:any
  id?:string
  product_name?:string
  count?:string
  final_price?:string
  sku?:string
  description?:string
}

const ProductDetailCard = memo((props:ProductDetailCardProps) => {
  const { t } = useTranslation("common");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = [
    {
      id: "01",
      thumbnail: generateImgPath("/assets/images/shop/product/01.webp"),
    },
    {
      id: "04",
      thumbnail: generateImgPath("/assets/images/shop/product/04.webp"),
    },
    {
      id: "02",
      thumbnail: generateImgPath("/assets/images/shop/product/02.webp"),
    },
    {
      id: "03",
      thumbnail: generateImgPath("/assets/images/shop/product/03.webp"),
    },
    
  ];

  const cartSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
      icon: "success",  
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const wishlistSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  return (
    <Fragment>
      <div className="section-padding-top product-detail">
          <Row>
            <Col lg="6">
              <div className="product-tab-slider">
                <Swiper
                  slidesPerView={1}
                  className="product-tab-slider-thumb swiper-pointer-events swiper-fade wrapper-class"
                  loop={true}
                  // onSwiper={setThumbsSwiper}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index}>
                        <Link href="#">
                          <img
                            src={item.thumbnail}
                            alt={`product-${item.id}`}
                            className="img-fluid product-detail-image"
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  thumbs={{
                    swiper:
                      thumbsSwiper && typeof thumbsSwiper !== 'function'
                        ? thumbsSwiper
                        : null,
                  }}
                  
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Thumbs, FreeMode]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  className="product-tab-slider-images"
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index}>
                        <img
                          src={item.thumbnail}
                          alt={`product-${item.id}`}
                          className="img-fluid "
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
          <Col lg="6" className="mt-lg-0 mt-5 ps-lg-5">
              <h3>{props.product_name}</h3>
              <div className="mt-2 d-flex align-items-center gap-2">
                <RatingStar
                  count="5"
                  count1="0"
                  starColor="text-warning"
                />
                <p className="text-primary mb-0">(2 customer reviews)</p>
              </div>
              <h4 className="product-detail-price">{props.final_price}</h4>
              <p className="producti-detail-description">
                {t("streamShop.product1_desc")}
              </p>
              <div className="add-product-wrapper pb-5">
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
                  <li>
                    <Counter />
                  </li>
                  <li className="wish-list">
                    <Link
                      href="/merchandise/wishlist"
                      className="d-inline-block bg-secondary rounded-3  custom-wishlist-btn link-wishlist-btn"
                      
                    >
                      <i className="ph-fill ph-heart-straight fs-5"></i>
                    </Link>
                  </li>
                  <li>
                    <div className="iq-button">
                      <Link
                        href="#"
                        className="btn btn-primary cart-btn  position-relative rounded-3"
                        onClick={cartSwal}
                      >
                        <span className="button-text">
                          {t("streamButtons.add_to_cart")}
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="product-meta-wrapper">
                <ul className="list-inline m-0 p-0">
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("streamShop.sku")} :{" "}
                    </span>{" "}
                    <h6 className="d-inline text-body ms-2"> {props.sku}</h6>
                  </li>
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("streamForm.categories")} :{" "}
                    </span>
                    <h6 className="d-inline product-category-list ms-2">
                      <Link href="#">{t("streamShop.uptight_birds")}</Link>
                    </h6>
                  </li>
                  <li>
                    <span className="text-white fw-semibold">
                      {t("streamTag.tags")}{" "}
                    </span>
                    <h6 className="d-inline product-tag-list ms-2">
                      <Link href="#">{t("streamShopTag.costume")}</Link>
                    </h6>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
           <div className="section-padding-top px-0">
            <div className="product-detail-tabs">
              <Tab.Container defaultActiveKey="first">
                <Nav
                  as="ul"
                  className="list-inline nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5"
                  role="tablist"
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      data-bs-target="#description"
                      eventKey="first"
                      role="tab"
                      aria-selected="true"
                    >
                      {t("streamShop.description")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      eventKey="second"
                      data-bs-target="#additional-info"
                      role="tab"
                      aria-selected="false"
                    >
                      {t("streamShop.additional_information")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      eventKey="third"
                      data-bs-target="#reviews"
                      role="tab"
                      aria-selected="false"
                    >
                      {t("streamShop.reviews")}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">
                  <Tab.Pane id="description" eventKey="first">
                    <p className="m-0">{props.description}</p>
                  </Tab.Pane>
                  <Tab.Pane
                    id="additional-info"
                    eventKey="second"
                    className="fade"
                  >
                    <div className="table-responsive additional-info-table">
                      <h2 className="add-info-title">{t("streamShop.additional_information")}</h2>
                      <table className="table table-additional">
                        <tbody>
                          <tr className="text-body">
                            <th className="text-center">{t("streamShop.color")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:number) => {
                                return (
                                  <div key={index}>
                                    {item.color.map((color:any, index:number) => {
                                      
                                      return (
                                        <span key={index} className="text-primary fst-italic fw-semibold">
                                          {color}
                                          {item.color.length > 1
                                            ? ","
                                            : ""}{" "}
                                        </span>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-center">{t("streamShop.size")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:number) => {
                                return (
                                  <span  rel="color" key={index}>
                                    {item.size.map((size:any, index:number) => {
                                      const isLast = index === item.size.length - 1;
                                      return (
                                        <Fragment key={index}>
                                        <span className="text-primary fst-italic fw-semibold" key={index}>
                                          {size}
                                        </span> {!isLast && ', '}{" "}
                                        </Fragment>
                                      );
                                    })}
                                  </span>
                                );
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    id="reviews"
                    eventKey="third"
                    className="tab-pane animated fadeInUp fade"
                  >
                    <h4 className="mb-4">{t("streamShop.reviews_believe_mask")}</h4>
                    <div className="product-review-list">
                      <ul className="list-inline m-0 p-0">
                        <li className="mb-5 mb-5 reviews-bg p-4">
                          <div className="d-flex flex-sm-row flex-column  align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src=
                                  "/assets/images/shop/avatar.webp"
                                alt=""
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <p className="mb-0">{t("streamAccount.jack_stark")}</p>
                                <RatingStar
                                  count="5"
                                  count1="0"
                                  starColor="text-warning"
                                />
                              </div>

                              <span className="text-capitalize  published-date">
                                march 2, 2022
                              </span>
                              <div className="lh-1 ratting"></div>
                              <div className="mt-3 border-top">
                                <p className="mt-3 mb-0">{t("streamShop.desc1")}.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5 mb-5 reviews-bg p-4">
                          <div className="d-flex flex-sm-row flex-column  align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src=
                                  "/assets/images/shop/avatar.webp"
                                alt=""
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <p className="mb-0">{t("Jhon Deo")}</p>
                                <RatingStar
                                  count="5"
                                  count1="0"
                                  starColor="text-warning"
                                />
                              </div>

                              <span className="text-capitalize  published-date">
                                march 2, 2022
                              </span>
                              <div className="lh-1 ratting"></div>
                              <div className="mt-3 border-top">
                                <p className="mt-3 mb-0">{t("streamFaq.desc")}.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-5 review-form">
                      <h4>{t("streamButtons.add_review")}</h4>
                      <p className="mb-5">
                        {t("streamShop.published_email")}{" "}
                        {t("streamShop.required_fields")}
                      </p>
                      <p className="mb-2">{t("streamShop.your_rating")} *</p>
                      <Form className="needs-validation" noValidate>
                        <div className="rating">
                          <RatingStar
                            count="5"
                            count1="0"
                            starColor="text-warning"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <Form.Label className="">
                            {t("streamShop.your_review")} *
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            className=""
                            required
                          ></Form.Control>
                        </div>
                        <div className="mb-5">
                          <Form.Label className="">
                            {t("streamAccount.name")}*
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className=" rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <Form.Label className="form-label">
                            {t("streamAccount.email")}*
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className=" rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input rounded-0"
                            id="exampleCheck1"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            {t("streamAccount.save_name")}
                          </label>
                        </div>
                        <div className="iq-button">
                          <Link
                            href="#"
                            className="btn btn-primary text-capitalize position-relative rounded-3"
                          >
                            <span className="button-text">
                              {t("streamButtons.submit")}
                            </span>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
      </div>
    </Fragment>
  );
});

ProductDetailCard.displayName = "ProductDetailCard";
export default ProductDetailCard;
