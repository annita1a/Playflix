import Link from "next/link";
import React from "react";
import { Modal } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

interface Props {
    isEpisodepage ?: string,
    istextureTitle ?: boolean,
    isCategory ?: string,
    isLanguage ?: string,
    movieDuration ?: string,
    movieName ?: string,
    year ?: number,
    views ?: string,
    ratingCount ?: number,
    show ?: boolean,
    modelClose ?: any,
    tags?: boolean
    movieDurations ?: boolean
}

const Detail_Descrition_Modal_Two = (props : Props) => {
      const { t } = useTranslation("common");
    const {istextureTitle , isCategory ,isLanguage , movieDuration , movieName , year , views , ratingCount , show , modelClose , tags, movieDurations}  = props
    return(
        <>
        <Modal size="lg" className="fade view-more-data-modal" id="viewMoreDataModal" tabIndex="-1" aria-modal="true" role="dialog" centered show={show} onHide={modelClose}>
            <div className="modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <Modal.Header className="pb-0" closeButton>
                        { istextureTitle === true ?
                        (<Modal.Title as="h3" className="text-uppercase m-0 texture-text texture-text-modal fw-bold">{movieName}</Modal.Title>):
                        
                        (
                        <>
                        <Modal.Title as="h5" className="css_prefix-title text-capitalize line-count-1">
                            <Link href="#" className="color-inherit">
                                {movieName} </Link>
                        </Modal.Title>
                        </>
                        )
                        }
                    </Modal.Header>
                    <Modal.Body className="pt-1">
                        <ul className="list-inline d-flex align-items-center flex-wrap gap-3 mt-4">
                            <li>
                                <span className="fw-medium">{year}</span>
                            </li>
        
                           
                            {movieDurations && <li>
                                <span className="d-flex align-items-center gap-1">
                                    <span className="d-flex align-items-center justify-content-center"><i
                                            className="ph ph-clock"></i></span>
                                    {movieDuration} </span>
                            </li>}
        
                            <li>
                                <span className="d-flex align-items-center gap-1">
                                    <i className="icon-eye-2"></i> {views}
                                </span>
                            </li>
                            {ratingCount && <li>
                                <span className="d-flex align-items-center gap-1">
                                    <span className="fw-medium">{ratingCount}</span>
                                    <span className="imdb-logo ms-1">
                                        <img src="/assets/images/pages/imdb-logo.svg" loading="lazy" decoding="async"
                                            alt="imdb logo" className="img-fluid imdb-logo1" />
                                    </span>
                                </span>
                            </li>}
                        </ul>
                        {isCategory && <div className="d-flex align-items-baseline flex-wrap gap-2 mt-md-1 mt-2">
                            <h6 className="m-0">{t("streamForm.categories")}:</h6>
                            <ul className="p-0 mb-0 list-inline d-flex flex-wrap movie-tag">
                                <li className="trending-list"><Link href="/view-all">{t("streamTag.adventure")}</Link></li>
                                <li className="trending-list"><Link href="/view-all">{t("streamTag.animation")}</Link>
                                </li>
                                <li className="trending-list"><Link href="/view-all">{t("streamTag.crime")}</Link>
                                </li>
                            </ul>
                        </div>}
        
                       {tags && <div className="d-flex align-items-baseline flex-wrap gap-2 mt-3">
                            <h6 className="m-0">{t("streamTag.tags")}:</h6>
                            <ul
                                className="iq-blog-meta-cat-tag iq-blogtag mb-0 list-inline d-flex flex-wrap align-items-center gap-1 gap-md-3 mt-2 mt-md-3  tvshow-tags">
                                <li>
                                    <Link href="/blogs/blog-tag" className="position-relative">{t("streamTag.action")}</Link>
                                </li>
                                <li>
                                    <Link href="/blogs/blog-tag" className="position-relative">{t("streamTag.adventure")}</Link>
                                </li>
                                <li>
                                    <Link href="/blogs/blog-tag" className="position-relative">{t("streamTag.astronomy")}</Link>
                                </li>
                                <li>
                                    <Link href="/blogs/blog-tag" className="position-relative">{t("streamTag.circus")}</Link>
                                </li>
                                <li>
                                    <Link href="/blogs/blog-tag" className="position-relative">{t("streamTag.crime")}</Link>
                                </li>
                            </ul>
                        </div>}
                        {isLanguage && <div className="mt-4">
                            <div className="d-flex align-items-center gap-1">
                                <i className="icon-translate"></i>
                                <ul className="list-inline m-0 d-inline-flex align-items-center gap-2">
                                    <li><small>{t("language.eng")} (New Zealand)</small></li>
                                </ul>
                            </div>
                        </div>}
        
                        <p className="mt-4 mb-0">
                            Game of Heros is an action-packed fantasy epic where the fate of the world is decided in a battle of legendary warriors. When an ancient prophecy foretells an all-out war between the greatest heroes of all realms, champions from different eras and dimensions are summoned to fight for ultimate supremacy. Each warrior possesses unique abilities, weapons, and a past that drives them to victory—or doom.
                        </p>
                    </Modal.Body>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default Detail_Descrition_Modal_Two