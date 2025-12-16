import { FC, Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface RecommendedTVShow {
  viewAll?: boolean
}

const RecommendedTVShow = memo((props : RecommendedTVShow) => {
    const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.recommended_tv_show")}
        list={recommendedforYou}
        className="recommended-block streamit-block"
        slidesPerView={6}
        viewAll={props.viewAll}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            link="/movies/detail"
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
});

RecommendedTVShow.displayName = "RecommendedTVShow";
export default RecommendedTVShow;
