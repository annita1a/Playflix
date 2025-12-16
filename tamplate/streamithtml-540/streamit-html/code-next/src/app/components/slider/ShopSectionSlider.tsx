import { Fragment, memo } from "react";

//react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";

interface ShopSectionSliderProps {
  shopsellingImg: any;
  shopsellingText?: string;
  slug: string | undefined;
}

//hook
import { useTranslation } from 'react-i18next';

const ShopSectionSlider = memo((props: ShopSectionSliderProps) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <div className="category-inner position-relative">
        <div className="category_image">
          <Link href="/merchandise/shop">
            <img src={props.shopsellingImg} className="img-fluid categorys-img" alt="" />
          </Link>
          <div className="category-details">
            {props.shopsellingText && (
              <h5 className="category-title mb-0">
                <Link href="/merchandise/shop">
                  {t(props.shopsellingText)}
                </Link>
              </h5>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

ShopSectionSlider.displayName = "ShopSectionSlider";
export default ShopSectionSlider;
