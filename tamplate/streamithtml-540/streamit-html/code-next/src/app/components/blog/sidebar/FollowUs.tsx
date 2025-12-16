import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";
//hook
import { useTranslation } from 'react-i18next';

const FollowUs = memo(() => {
    const { t } = useTranslation("common");
    return (
    <div className="widget rounded-bottom-3">
        <h5 className="widget-title position-relative ">
          {" "}
          {t("streamSocial.follow_us")} 
        </h5>
          <ul className="p-0 m-0 list-unstyled widget_social_media d-flex justify-content-start align-items-center gap-2">
         <li>
            <Link href="https://www.facebook.com/" className="position-relative"><i className="icon icon-facebook-share"></i></Link>
         </li>
         <li>
            <Link href="https://twitter.com/" className="position-relative"><i className="icon icon-x-twitter-share"></i></Link>
         </li>
         <li>
            <Link href="https://www.instagram.com/" className="position-relative"><i className="icon icon-instagram-share"></i></Link>
         </li>
         <li>
            <Link href="https://github.com/" className="position-relative"><i className="icon icon-linkedin-share"></i></Link>
         </li>
      </ul>
      </div>
    )
})

FollowUs.displayName = "FollowUs"
export default FollowUs