"use client"

import React, { Fragment, useState } from "react";
import CardBlogGrid from "../../../components/cards/CardBlogGrid";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useBreadcrumb } from "@/utilities/usePage";
import { blogsGrid } from "@/StaticData/blogs";

const LoadMore = () => {
  const { t } = useTranslation("common");
  
  const [newData , setNewdata] = useState(6)

useBreadcrumb(t("streamPages.blog_load_more"));
  return (
    <Fragment>
      <div className="section-padding blog-pagination ">
        <Container>
          <Row className="gy-5">
            {blogsGrid.slice(0, newData).map((item, index) => (
              <Col lg={4} md={4} sm="12" key={index}>
                <CardBlogGrid
                  title={t(item.title)}
                  thumbnail={item.thumbnail}
                  description={t(item.description ?? "")}
                  username={t(item.username)}
                  blogDate={item.blogDate}
                  link_button={true}
                  button_icon={true}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link
              href="javascript:void(0)"
              className="btn btn-primary text-capitalize position-relative custom-button load-more-btn rounded-3"
              onClick={() => setNewdata((prev) => prev + 6)}
            >
              <span className="button-text">{t("streamButtons.load_more")}</span>
            </Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default LoadMore;
