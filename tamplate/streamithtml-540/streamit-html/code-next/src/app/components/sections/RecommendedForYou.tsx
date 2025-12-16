import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";
import { Fragment, memo, useState } from "react";
import { recommendedforYou } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';


const RecommendedForYou = memo(() => {
    const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.recommended_for_you")}
        list={recommendedforYou}
        className="recommended-block streamit-block"
        slidesPerView={6}
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
})

RecommendedForYou.displayName = 'RecommendedForYou';
export default RecommendedForYou;
