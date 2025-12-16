import React, { Fragment, memo } from "react";

interface CartTotalProps{
  final_price?:string
}

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


const CartTotal = memo((props: CartTotalProps) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <tbody>
        <tr className="cart-subtotal">
          <th>{t("streamShop.subtotal")}</th>
          <td data-title="Subtotal">
            <span className="">
              <bdi>
                <span className=""></span>
                {props.final_price}
              </bdi>
            </span>
          </td>
        </tr>
        <tr className="order-total">
          <th>{t("streamShop.total_")}</th>
          {/* <!-- <td data-title="Total"><strong><span className="amount"><bdi className="final text-primary"><span className="">$</span>{ data.final_price }</bdi></span></strong></td> --> */}
          <td data-title="Total">
            <strong>
              <span className="amount">
                <bdi className="final text-primary">
                  <span className=""></span> {props.final_price}{" "}
                </bdi>
              </span>
            </strong>
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
});

CartTotal.displayName = "CartTotal";
export default CartTotal;
