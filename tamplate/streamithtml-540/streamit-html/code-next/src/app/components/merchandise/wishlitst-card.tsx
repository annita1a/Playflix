import React, { Fragment, memo } from "react";

//react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps(context: { locale: any; }) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

//hook
import { useTranslation } from 'react-i18next';

interface Props {
  thumbnail?: string,
  product_name: string,
  price: string,
  final_price: string,
  stockStatus: string,
}

const WishlistCard = memo((props: Props) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <div>
            <Link href="#" className="remove">
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
        </td>
        <td className="product-name">
          <Link href="/merchandise/product-detail">
            <img src={props.thumbnail} className="img-fluid" loading="lazy" />
          </Link>
          <Link
            className="product-title ms-4"
            href="/merchandise/product-detail"
          >
            {props.product_name}
          </Link>
        </td>
        <td className="product-price">
          <span className="text-secondary">
            <del>{props.price}</del> {props.final_price}
          </span>
        </td>
        <td className="product-stock-status">
          <span className="wishlist-in-stock">{props.stockStatus}</span>
        </td>
        <td className="product-add-to-cart">
          <Link
            className="iq-button btn btn-hover"
            href="/merchandise/product-detail"
          >
            {" "}
            {t("streamShop.view_product")}{" "}
          </Link>
        </td>
      </tr>
    </Fragment>
  );
});

WishlistCard.displayName = 'WishlistCard'
export default WishlistCard;
