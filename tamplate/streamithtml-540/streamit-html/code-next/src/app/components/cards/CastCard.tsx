import React, { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";

//hook
import { useTranslation } from 'react-i18next';

interface Props {
  image: string,
  title: string,
  category?: string
  link : string
  castSubTitle : string
}



const CastCard = memo((props: Props) => {
    const { t } = useTranslation("common");
  return (
    <Fragment>
        <div className="cast-images position-relative">
          <Link href={props.link}>
            <img src={props.image} className="img-fluid object-cover mb-3 rounded-3 personality-img" alt="castImg" />
          </Link>
        </div>
        <div className="text-center">
          <h6 className="mb-0">
            <Link href={props.link} className="font-size-14 text-decoration-none cast-title text-capitalize">{t(props.title)}</Link>
          </h6>
              <Link href={props.link} className="font-size-12 fw-semibold text-decoration-none text-capitalize text-body">
                {t(props.castSubTitle)}{" "}
              </Link>
        </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
