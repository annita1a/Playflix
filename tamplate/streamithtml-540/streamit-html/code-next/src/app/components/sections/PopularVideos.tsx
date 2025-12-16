import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { popular_videos, populerSlider } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';
// import CardStyleTwo from "../cards/CardStyleTwo";
interface Props {
  link ?: string,
  viewAll ?: boolean
}

const PopularVideos = memo((props:Props) => {
  const { t } = useTranslation("common");


  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.popular_videos")}
        list={popular_videos}
        className="recommended-block section-top-spacing"
        wrapperClass={true}
        viewAll={props.viewAll}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            link={props.link || "/movies/detail"}
            conturyname={data.conturyname}
            slug={data.slug}
            lang={data.lang}
            playNowLink={data.playNowLink || "/"}
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
})

PopularVideos.displayName = 'PopularVideos';
export default PopularVideos;
