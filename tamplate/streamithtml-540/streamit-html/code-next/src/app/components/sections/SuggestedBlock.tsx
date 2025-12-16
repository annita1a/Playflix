import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { suggested } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

const SuggestedBlock = memo(() => {
    const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.suggested_block")}
        list={suggested}
        className="suggested-block streamit-block"
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
});

SuggestedBlock.displayName = 'SuggestedBlock';
export default SuggestedBlock;
