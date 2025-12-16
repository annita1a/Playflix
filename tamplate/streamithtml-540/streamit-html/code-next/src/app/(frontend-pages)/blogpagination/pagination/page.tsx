"use client"

import React, { Fragment, useState } from "react";
import CardBlogGrid from "../../../components/cards/CardBlogGrid";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useBreadcrumb } from "@/utilities/usePage";
import { blogsGrid } from "@/StaticData/blogs";

const PaginationPage = () => {
  const { t } = useTranslation("common");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(blogsGrid.length / itemsPerPage);

  // For showing only 3 pages at a time
  const pagesPerGroup = 3;
  const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);
  const startPage = currentGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  // Blogs for current page
  const currentBlogs = blogsGrid.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
useBreadcrumb(t("streamPages.blog_pagination"));
  return (
    <Fragment>
      <div className="section-padding blog-pagination">
        <Container>
          <Row className="gy-5">
            {currentBlogs.map((item, index) => (
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

          {/* Pagination Controls */}
          <div className="pagination justify-content-center mt-4">
          <ul className="pagination blog-pagination gap-2 justify-content-center">
            {/* Previous group button */}
            <li className={`page-item ${startPage === 1 ? "disabled" : ""}`}>
              <Link
                className="page-link rounded-3"
                href="#"
                onClick={() =>
                  setCurrentPage(Math.max(startPage - pagesPerGroup, 1))
                }
              >
                <i className="ph ph-caret-left pageicon-lineheight"></i>
              </Link>
            </li>

            {/* Page numbers (3 at a time) */}
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((pageNum) => (
              <li
                className={`page-item ${
                  currentPage === pageNum ? "active" : ""
                }`}
                key={pageNum}
              >
                <Link
                  className="page-link d-flex justify-content-center pageicon-lineheight rounded-3"
                  href="#"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </Link>
              </li>
            ))}

            {/* Next group button */}
            <li
              className={`page-item ${
                endPage === totalPages ? "disabled" : ""
              }`}
            >
              <Link
                className="page-link rounded-3"
                href="#"
                onClick={() =>
                  setCurrentPage(Math.min(endPage + 1, totalPages))
                }
              >
                <i className="ph ph-caret-right pageicon-lineheight"></i>
              </Link>
            </li>
          </ul>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default PaginationPage;
