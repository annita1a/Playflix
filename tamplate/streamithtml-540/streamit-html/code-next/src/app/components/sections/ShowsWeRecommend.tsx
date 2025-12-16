import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from 'react-i18next';

interface ListItem {
  image: string;
  title: string;
  slug: string[];
  lang: string;
  productPremium: boolean;
}
interface Props {
  list?: ListItem[]; 
  title?: string;
  loop?: boolean;
  slidesPerView?: number;
  viewAll ?: boolean
}

const ShowsWeRecommend = memo((props:Props) => {
  const lists = props.list ?? recommendedforYou;
    const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.shows_recommend")}
        list={lists}
        className="recommended-block streamit-block"
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
})

ShowsWeRecommend.displayName = 'ShowsWeRecommend';
export default ShowsWeRecommend;
