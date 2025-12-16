import React, { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";

//hook
import { useTranslation } from "react-i18next";

interface ListItem {}
interface Props {
  username: string;
  category?: string[] | null;
  blogTag?: string;
  blogDate: string;
  tags?: string[] | null | boolean;
  title: string;
  description: string;
  link_button?: boolean;
  button_icon?: boolean;
  thumbnail: string;
}

const CardBlogList = memo((props: Props) => {
  const {
    username,
    category,
    blogDate,
    tags,
    title,
    description,
    link_button,
    button_icon,
    thumbnail,
  } = props;

  const { t } = useTranslation("common");

  return (
    <Fragment>
      <article>
        <div className="iq-blog-box">
          <div className="iq-blog-image clearfix">
            <Link href="/blogs/detail">
              <img
                src={thumbnail}
                alt=""
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
                    <Link href={`/blogs/filter/author/${encodeURIComponent(username)}`}>{username}</Link>
                  </span>
                </li>{" "}
                <li className="posted-on">
                  <span className="post-author d-flex align-item-center gap-1">
                    <i className="icon icon-calendar-2"></i>
                    <Link href="/blogs/blog-date">
                      <span>{blogDate}</span>
                    </Link>
                  </span>
                </li>{" "}
                {category?.map((cat: any, index: number) => (
                  <Fragment key={index}>
                    <li className="blog-category">
                      <Link href="/blogs/blog-tag" className="pe-1">
                        {t(cat)}
                      </Link>
                    </li>{" "}
                  </Fragment>
                ))}
              </ul>
            </div>
            <Link href="/blogs/detail">
              <h4 className="mb-3 blog-heading">{title}</h4>
            </Link>
            <p className="line-count-2">{t(description)}</p>

            {Array.isArray(tags) && (
              <ul className="list-inline d-flex align-items-center gap-2 flex-wrap blog-tag">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <Link
                      href="/blogs/blog-tag"
                      className="font-size-14 rounded-3 fw-medium"
                    >
                      {t(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="iq-button">
              {link_button ? (
                <Link
                  href="/blogs/detail"
                  className="btn btn-link blog-readMore p-0 text-capitalize position-relative font-size-14"
                >
                    <span>{t("streamButtons.read_more")}</span>{' '}
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
                  <span className="button-text">{t("streamButtons.read_more")}</span>
                  <i className="ph-fill ph-play"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
});

CardBlogList.displayName = "CardBlogList";
export default CardBlogList;
