import React, { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";

//static data
import { blogCategories } from "../../../StaticData/blogs";

//hook
import { useTranslation } from 'react-i18next';

const CategoriesWidget = memo(() => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <div id="categories-2" className="widget widget_categories">
        <h5 className="widget-title position-relative">
          {t("streamForm.categories")}
        </h5>
        <ul className="p-0 m-0 list-unstyled">
          {blogCategories.map((item, index) => {
            return (
              <li className="text-capitalize" key={index}>
                <Link href="/blogs/blog-category" className="position-relative">
                  {t(item.title)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
});

CategoriesWidget.displayName = "CategoriesWidget";
export default CategoriesWidget;
