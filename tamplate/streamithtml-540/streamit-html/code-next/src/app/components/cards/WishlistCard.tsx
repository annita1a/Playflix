import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";

interface Props {
    image: string,
    title?: string,
    views?: string,
    duration?: string,
    moviename: string
}

//hook
import { useTranslation } from 'react-i18next';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const WishlistCard = memo((props: Props) => {
      const { t } = useTranslation("common");
    return (
        <Fragment>

            <div className="common_card">
        <div className="image-box w-100">
          <Link href="/tv-shows/detail" className="d-block">
            <img
              decoding="async"
              src={props.image}
              alt="Game of Heros"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="css_prefix-detail-part">
          <h6 className="text-capitalize line-count-1 mb-0">
            <Link href="/tv-shows/detail" className="color-inherit">
              {t(props.moviename)}{" "}
            </Link>
          </h6>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                {t("streamPlaylist.remove_from_watchlist")}
              </Tooltip>
            }
          >
            <button
              className="btn in-watchlist btn-secondary watch-list-btn"
              data-post-id="32"
              data-post-type="movie"
              data-action="remove"
            >
              <i className="icon-check-2"></i>
            </button>
          </OverlayTrigger>
        </div>
      </div>
        </Fragment>
    )
})

WishlistCard.displayName = "WishlistCard"
export default WishlistCard