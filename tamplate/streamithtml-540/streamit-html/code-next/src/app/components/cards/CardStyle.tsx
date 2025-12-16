import { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

//hook
import { useTranslation } from 'react-i18next';
interface Props {
  link: string;
  watchlistLink: string;
  image: string;
  title: string;
  movieTime: string;
  slug: any;
  lang: string;
  playNowLink: string;
  conturyname: string;
  productPremium: any;
}

const CardStyle = memo((props: Props) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <div className="iq-card card-hover">
        <div className="block-images position-relative w-100">
          <div className="img-box w-100">
            <Link
              href={props.link}
              className="position-absolute top-0 bottom-0 start-0 end-0"
            ></Link>
            <img
              src={props.image}
              alt="movie-card"
              className="img-fluid object-cover w-100 d-block border-0"
            />
          </div>
          <div className="card-description with-transition">
            <ul className="genres-list p-0 mb-2 d-flex align-items-center flex-wrap list-inline">
              {props.slug !== undefined &&
                props.slug !== null &&
                props.slug.map((genres: any , index:number) => {
                  return (
                      <li className="fw-semi-bold" key={index}>
                        <Link
                          href="/view-all"
                          className="font-size-14 text-capitalize"
                        >
                          {t(genres)}{" "}
                        </Link>
                      </li>
                  );
                })}
            </ul>
            <div className="cart-content">
              <div className="content-left">
                <h5 className="iq-title text-capitalize">
                  <Link href={props.link}>{t(props.title)}</Link>
                </h5>
                <div className="d-flex align-items-center gap-3">
                  {props.movieTime && (
                    <div className="d-flex align-items-center gap-1">
                      <i className="ph ph-clock font-size-12"></i>
                      <small className="font-size-12">{props.movieTime}</small>
                    </div>
                  )}
                  {props.lang && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="ph ph-translate"></i>
                      <small className="font-size-12 text-capitalize">
                        {t(props.lang)} {props.conturyname}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">Add to Watchlist</Tooltip>
                }
              >
                <div>
                  <Link href="/watchlistdetail" passHref legacyBehavior>
                    <a className="d-flex align-items-center justify-content-center flex-shrink-0 border-0 add-to-wishlist-btn btn btn-secondary">
                      <i className="ph ph-plus font-size-18" />
                    </a>
                  </Link>
                </div>
              </OverlayTrigger>
              <div className="iq-play-button iq-button">
                {props.playNowLink && (
                  <Link
                    href={props.playNowLink}
                    className="btn btn-primary w-100"
                  >
                    {t("streamButtons.play_now")}
                  </Link>
                )}
              </div>
            </div>
          </div>
          {props.productPremium && (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="primium-tooltip">Premium</Tooltip>}
            >
              <div className="position-absolute z-1 premium-product d-flex align-items-center justify-content-center">
                <i className="ph-fill ph-crown "></i>
              </div>
            </OverlayTrigger>
          )}
        </div>
      </div>
    </Fragment>
  );
});

CardStyle.displayName = "CardStyle";
export default CardStyle;
