import React, { Fragment, memo } from "react";

//router
import Link from "next/link";

//components
import RecentPost from "./sidebar/RecentPost";
import CategoriesWidget from "./sidebar/CategoriesWidget";
import TagsWidget from "./sidebar/TagsWidget";
import FollowUs from "./sidebar/FollowUs";

//hook
import { useTranslation } from 'react-i18next';

const DetailMetaList = memo(() => {
   const { t } = useTranslation("common");
  return (
    <Fragment>
      <div className="widget-area">
           <div id="search-2" className="widget widget_search rounded-top-3">
          <form
            method="get"
            className="search-form"
            action="#"
            autoComplete="off"
          >
            <div className="block-search_inside-wrapper position-relative d-flex">
              <input
                type="search"
                className="form-control"
                placeholder={t('streamBlog.search1')}
                name="s"
                defaultValue=""
              />
              <button type="submit" className="block-search_button d-flex align-items-center justify-content-center rounded-end-3">
                <i className="icon icon-search-normal"></i>
              </button>
            </div>
          </form>
        </div>
        <CategoriesWidget />
        <TagsWidget />
        <FollowUs />
      </div>
    </Fragment>
  );
});

DetailMetaList.displayName = "DetailMetaList";
export default DetailMetaList;
