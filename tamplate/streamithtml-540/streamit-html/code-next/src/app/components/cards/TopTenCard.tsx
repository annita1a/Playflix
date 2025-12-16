import { FC, Fragment, memo } from "react";
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface TopTenCardProps {
  link: string;
  imagePath: string;
  countValue: number;
  productPremium: boolean;
}

const TopTenCard: FC<TopTenCardProps> = memo(
  ({ link, imagePath, countValue, productPremium }) => {
    return (
      <Fragment>
        <div className="iq-top-ten-block">
          <div className="block-image position-relative">
            <div className="img-box">
              <Link className="overly-images" href={link}>
                <img
                  src={imagePath}
                  alt="movie-card"
                  className="img-fluid object-cover rounded-3"
                />
              </Link>
              <span className="top-ten-numbers texture-text">{countValue}</span>
            </div>
          </div>
          {productPremium && (
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
      </Fragment>
    );
  }
);

TopTenCard.displayName = "TopTenCard";
export default TopTenCard;
