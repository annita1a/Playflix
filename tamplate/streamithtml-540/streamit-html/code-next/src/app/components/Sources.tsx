import React, { Fragment, memo } from 'react'

//hook
import { useTranslation } from 'react-i18next';

//react-router-dom
import Link from "next/link";

const Sources = memo(() => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <div className='source-list-content table-responsive'>
        <table className='table custom-table'>
          <thead>
            <tr>
              <th>{t("streamShop.links")}</th>
              <th>{t("streamShop.quality")}</th>
              <th>{t("language.language")}</th>
              <th>{t("streamShop.player")}</th>
              <th>{t("streamKeyword.date_added")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text"> {t("streamButtons.play_now")}</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>1080p</td>
              <td>{t("language.eng")}</td>
              <td>{t("streamShop.musicbee")}</td>
              <td>2021-11-28</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text"> {t("streamButtons.play_now")}</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>800p</td>
              <td>{t("language.eng")}</td>
              <td>{t("streamShop.k_player")}</td>
              <td>2021-11-25</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text">{t("streamButtons.play_now")}</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>720p</td>
              <td>{t("language.eng")}</td>
              <td>{t("streamShop.mediamonkey")}</td>
              <td>2021-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
})

export default Sources