"use client"

import Link from "next/link";
import React from "react";

//hook
import { useTranslation } from "react-i18next";

const MobileFooter = () => {
    const { t } = useTranslation("common");
    return(
        <>
        <div className="streamit-mobile-footer-menu" aria-label="Mobile Footer Navigation">
    <ul className="footer-menu list-inline d-flex align-items-center justify-content-between m-0">
        <li className="footer-menu-item">
            <Link href="/view-all" className="menu-link font-size-12 text-capitalize">
                <i className="ph ph-film-reel d-block  text-center "></i>
                {t("streamPages.movie")} </Link>
        </li>
        <li className="footer-menu-item">
            <Link href="/view-all" className="menu-link font-size-12 text-capitalize">
                <i className="ph ph-monitor-play d-block  text-center "></i>
                {t("streamPages.video")} </Link>
        </li>
        <li className="footer-menu-item">
            <Link href="/view-all" className="menu- font-size-12 text-capitalize">
                <i className="ph ph-magnifying-glass d-block  text-center "></i>
                {t("streamBlog.search1")} </Link>
        </li>
        <li className="footer-menu-item">
            <Link href="/view-all" className="menu-link font-size-12 text-capitalize">
                <i className="ph ph-television d-block  text-center "></i>
               {t("streamPages.tv_show")} </Link>
        </li>
        <li className="footer-menu-item">
            <Link href="/profile/profile-marvin" className="menu-link font-size-12 text-capitalize">
                <i className="ph ph-user d-block  text-center "></i>
                {t("streamAccount.profile")} </Link>
        </li>
    </ul>
</div>
        </>
    )
}

export default MobileFooter