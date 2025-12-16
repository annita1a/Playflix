"use client";

import React, { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";

//hook
import { useTranslation } from 'react-i18next';
import Image from "next/image";

interface Props {
  username: string;
  blogDate: string;
  title: string;
  description: string;
  thumbnail: string;
  tags?: string[] | boolean | null;
  link_button?: boolean;
  button_icon?: boolean;
}

const CardBlogGrid = memo((props: Props) => {
  const { t } = useTranslation("common");

  const {
    username,
    blogDate,
    title,
    description,
    thumbnail,
    tags,
    link_button = false,
    button_icon = false,
  } = props;
  return (
    <div className="iq-blog-box">
      <div className="iq-blog-image clearfix">
        <Link href="/blogs/detail">
            <Image
              src={thumbnail}
              alt=""
              loading="lazy"
              width={800}
              height={500}
              className="img-fluid w-100 rounded-3"
            />
        </Link>
      </div>

      <div className="iq-blog-detail">
        <div className="iq-blog-meta d-flex align-item-center flex-wrap">
          <ul className="list-inline mb-0">
            <li className="posted-by">
              <span className="post-date d-flex align-item-center gap-1">
                {tags === true ? (
                  <i className="icon icon-tag"></i>
                ) : (
                  <i className="ph ph-user"></i>
                )}
                <Link href={`/blogs/filter/author/${encodeURIComponent(username)}`}>
                  {username}
                </Link>
              </span>
            </li>{" "}
            <li className="posted-on">
              <span className="post-author d-flex align-item-center gap-1">
                <i className="icon icon-calendar-2"></i>
                <Link href="/blogs/blog-date">
                    <span>{blogDate}</span>
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <div className="blog-title">
          <h4 className="mb-3 blog-heading">
            <Link href="/blogs/detail">{title}
            </Link>
          </h4>
        </div>

        <p className="line-count-2">{description}</p>

        <div className="iq-button">
          {link_button ? (
            <Link
              href="/blogs/detail"
              className="btn btn-link blog-readMore p-0 text-capitalize position-relative font-size-14"
            >
                <span>{t("streamButtons.read_more")}</span>{" "}
                {button_icon && (
                  <span>
                    <i className="ph ph-caret-right align-middle"></i>
                  </span>
                )}
            </Link>
          ) : (
            <Link
              href="/blogs/detail"
              className="btn btn-primary text-uppercase position-relative"
            >
              <div>
                <span className="button-text">{t("streamButtons.read_more")}</span>
                <i className="ph-fill ph-play"></i>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

CardBlogGrid.displayName = "CardBlogGrid";
export default CardBlogGrid;
