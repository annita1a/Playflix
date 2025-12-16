"use client"

import React, { Fragment, useEffect, useState } from "react";
import CardBlogGrid from "../../../components/cards/CardBlogGrid";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useBreadcrumb } from "@/utilities/usePage";
import { blogsGrid } from "@/StaticData/blogs";

const InfiniteScroll = () => {
  const { t } = useTranslation("common");
  
  const [newData , setNewdata] = useState(9)

  useEffect(() => {
    const interval = setInterval(() => {
      setNewdata((prev) => prev + 9);
    }, 3000); // Run every 5 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

useBreadcrumb(t("streamPages.blog_infinite_scroll"));
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
        <Row>
            <Col sm="12" className="scroller-status text-center">
                <div className="infinite-scroll-request loader-ellips">
                    <div className="loader-wheel-container"></div>
                </div>
            </Col>
        </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default InfiniteScroll;
