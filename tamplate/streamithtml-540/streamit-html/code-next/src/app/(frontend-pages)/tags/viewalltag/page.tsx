"use client"

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

import { selected_item } from "../../../store/shop/actions";
import { useDispatch, useSelector } from "react-redux";
import TagsCard from "@/components/cards/TagsCard";
import Link from "next/link";
import BreadCrumbWidget from "@/components/BreadcrumbWidget";
import { Viewall_movieTags, Viewall_tvshowTags, Viewall_videoTags } from "@/StaticData/data";
import { useBreadcrumb } from "@/utilities/usePage";

interface Props{
  movieTag: string
  TVShowTag: string, 
  VideoTag: string
}

const ViewAllTag = (props:Props) => {
  const { movieTag, TVShowTag, VideoTag } = props;
  const selectedItem = useSelector((state : any) => state.shop.selectedItem);
  // console.log(selectedItem);
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  useEffect(() => {
    const tagValue = sessionStorage.getItem("Tag");

    if (tagValue) {
      try {
        const parsed = JSON.parse(tagValue);
        console.log(parsed);
        if (parsed) {
          dispatch(selected_item(parsed));
          console.log("Loaded tag from sessionStorage:", parsed);
        }
      } catch (error) {
        console.error("Failed to parse sessionStorage:", error);
      }
    }
  }, []);

  const data =
    (selectedItem === "movieTag" && Viewall_movieTags) ||
    (selectedItem === "TVShowTag" && Viewall_tvshowTags) ||
    (selectedItem === "VideoTag" && Viewall_videoTags);
  const title =
    (selectedItem === "movieTag" && "streamPages.movie_tag") ||
    (selectedItem === "TVShowTag" && "streamPages.tv_show_tag") ||
    (selectedItem === "VideoTag" && "streamPages.video_tag")||"";
  useBreadcrumb("streamTag.tags")  
  return (
    <>
      <Container fluid>
        <div className="section-padding tag-section">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">{t(title)}</h4>
          </div>
          <Row
            className="row gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 data-listing"
          >
            {data !== undefined &&
              data !== null &&
              data !== false &&
              data.map((item:any, index:number) => (
                <Col key={index}>
                  <TagsCard
                    slug={t(item.slug)}
                    title={t(item.title)}
                    type={t(item.type)}
                  />
                </Col>
              ))}
          </Row>
          <div className="text-center mt-4">
            <div className="iq-button">
              <Link
                href="javascript:void(0)"
                className="btn btn-primary text-uppercase position-relative custom-button load-more-btn rounded-3"
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="button-text">Load More</span>
                  <i className="ph-fill ph-play"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ViewAllTag;
