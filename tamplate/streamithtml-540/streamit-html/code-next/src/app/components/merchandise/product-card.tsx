import { memo, useState } from "react";

// react-router-link
// import { Link } from "react-router-dom";
import Link from "next/link";


//components
import RatingStar from "../rating-star";
import ProductModal from "./ProductModal";

//sweetalert2 
import Swal from 'sweetalert2-neutral'
// import 'sweetalert2/src/sweetalert2.scss'

//hook
import { useTranslation } from 'react-i18next';
interface Props {
  thumbnail?: string,
  is_sale?: boolean,
  is_new?: boolean,
  product_name: string,
  price: string,
  final_price: string,
  rating: string,
  count1: string,
  slug?:string
}


const ProductCard = memo((props: Props) => {
  const { t } = useTranslation("common");
  const showSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: 'success',
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff"
    })
  }
  const cartSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
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
    <>
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
                  <i className="ph ph-eye fs-5"></i>
                </Link>
              </li>
              <li>
                <div className="on-first-load">
                  <div className="add-button">
                    <Link href="#" className="add_to_wishlist" onClick={showSwal}>
                      <i className="ph ph-heart fs-5" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="#"
                  className="added_to_cart d-flex align-items-center "
                  onClick={cartSwal}
                >
                  <i className="ph ph-shopping-cart fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
            <Link href="/merchandise/product-detail" className="title-link">
              {t(props.product_name)}
            </Link>
          <div className="price-detail">
            <span className="price fw-medium">
              <del>{props.price}</del>
              {props.final_price}
            </span>
          </div>
          <div className="container-rating">
            <div className="star-rating text-primary">
              <RatingStar
                count={props.rating}
                count1={props.count1}
                starColor="text-warning"
              />
            </div>
          </div>
        </div>
      </div>

      <ProductModal show={show} handleClose={handleClose} />
    </>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
