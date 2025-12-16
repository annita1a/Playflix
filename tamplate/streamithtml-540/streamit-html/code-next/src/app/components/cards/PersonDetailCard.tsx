'use client';

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface PersonDetailCardProps {
  productlink: string;
  image: string;
  producttitle: string;
  productyear: string | number;
}

const PersonDetailCard: React.FC<PersonDetailCardProps> = (props) => {
  const { t } = useTranslation("common");
  const { productlink, image, producttitle, productyear } = props;

  return (
    <>
      <div className="d-flex align-items-center gap-3 bg-gray-900 movie-history overflow-hidden">
        <div className="image flex-shrink-0">
          <Link href={productlink}>
            <img
              src={image}
              alt="The First Of Us"
              className="img-fluid object-fit-cover person-history-thumbnail"
            />
          </Link>
        </div>
        <div className="content">
          <h5 className="mb-1 line-count-2">
            <Link href={productlink} className="text-capitalize">
              {t(producttitle)}{" "}
            </Link>
          </h5>
          <span>{t(String(productyear))}</span>
        </div>
      </div>
    </>
  );
};

export default PersonDetailCard;
