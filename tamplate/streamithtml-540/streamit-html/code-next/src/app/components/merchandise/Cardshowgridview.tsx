import { Fragment, memo, useState} from "react";

// Next-Link
import Link from "next/link";

// components
import RatingStar from "../rating-star";
import ProductModal from "./ProductModal";

//sweetalert2
import Swal from "sweetalert2-neutral";

//hook
import { useTranslation } from 'react-i18next';

interface CardShopGridViewProps{
  is_sale?:boolean
  is_new?:boolean
  thumbnail?:string
  product_name?:string
  price?:string
  final_price?:string
  rating?:string
  count1?:string
  slug?:string
}

const CardShopGridView = memo((props:CardShopGridViewProps) => {
  const { t } = useTranslation("common");
  const showSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
      icon: 'success',
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff"
    })
  }

  const showSwalwish = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: 'success',
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff"
    })
  } 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isSale = props.is_sale;
  const isNew = props.is_new;
  return (
    <Fragment>
          <div className="product-block">
        {isSale ? (
          <span className="onsale bg-primary">{t("streamShop.sale!")}</span>
        ) : isNew ? (
          <span className="onsale bg-primary">{t("streamShop.new!")}</span>
        ) : (
          ""
        )}
        <div className="image-wrap">
          <Link href="/merchandise/product-detail">
            <div className="product-image">
              <img
                src={props.thumbnail}
                className="img-fluid w-100 rounded-3"
                alt=""
                loading="lazy"
              />
            </div>
          </Link>
          <div className="buttons-holder">
            <ul className="list-unstyled m-0 p-0">
              <li>
                <Link className="sq-btn" href="#" onClick={handleShow}>
                  <i className="ph ph-eye fs-5" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <div className="on-first-load">
                  {/* <!-- ADD TO WISHLIST --> */}
                  <div className="add-button">
                    <Link
                      href="#"
                      className="add_to_wishlist"
                      onClick={showSwalwish}
                    >
                      <i className="ph ph-heart fs-5"></i>
                    </Link>
                  </div>
                  {/* <!-- COUNT TEXT --> */}
                </div>
              </li>
              <li>
                <Link
                  href="#"
                  className="added_to_cart d-flex align-items-center"
                  onClick={showSwal}
                >
                  <i className="ph ph-shopping-cart fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
            <Link href="/merchandise/product-detail" className="title-link text-primary">
              {" "}
              {props.product_name}
            </Link>
          <div className="price-detail">
            <div className="price fw-medium">
              <del>{props.price}</del>
              {props.final_price}
            </div>
          </div>
        </div>
      </div>
          <ProductModal show={show} handleClose={handleClose}/>
    </Fragment>
  );
});

CardShopGridView.displayName = "CardShopGridView";
export default CardShopGridView;
