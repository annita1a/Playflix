import { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

//hook
import { useTranslation } from 'react-i18next';
interface Props {
  linkPath: string;
  watchlistLink: string;
  image: string;
  title: string;
  movieTime?: string;
  slug?: any;
  lang?: string;
  playNowLink: string;
  conturyname?: string;
  productPremium: any;
}

const CardStyleTwo = memo((props: Props) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <div className="iq-card card-hover landscape-card-hover">
        <div className="block-images position-relative w-100">
          <div className="img-box w-100">
            <Link
              href={props.linkPath}
              className="position-relative top-0 bottom-0 start-0 end-0"
            >
              <img
                src={props.image}
                alt="movie-card"
                className="img-fluid object-cover w-100 d-block border-0 rounded-3"
              />
            </Link>
          </div>
          <div className="card-description with-transition">
            <ul className="genres-list p-0 mb-2 d-flex align-items-center flex-wrap list-inline">
              {props.slug !== undefined &&
                props.slug !== null &&
                props.slug.map((genres:any , index:number) => {
                  return (
                      <li className="fw-semi-bold" key={index}>
                        <Link
                          href="/view-all-movie"
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
                <h5 className="iq-title text-capitalize mb-0">
                  <Link href={props.linkPath}>{t(props.title)}</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="add-to-watchlist-tooltip"
                    className="custom-tooltip"
                  >
                    Add to Watchlist
                  </Tooltip>
                }
              >
                <Button
                  as="a"
                  href="/watchlistdetail"
                  className="d-flex align-items-center justify-content-center flex-shrink-0 add-to-wishlist-btn"
                  variant="secondary"
                >
                  <i className="ph ph-plus font-size-18"></i>
                </Button>
              </OverlayTrigger>

              <div className="iq-play-button iq-button">
                <Link href={props.playNowLink} className="btn btn-primary w-100">
                  {t("streamButtons.play_now")}
                </Link>
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

CardStyleTwo.displayName = "CardStyleTwo";
export default CardStyleTwo;
