import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface ListItem {
  image: string;
  title: string;
  slug: string[];
  lang: string;
  productPremium?: boolean;
}
interface Props {
  list?: ListItem[]; 
  title?: string;
  loop?: boolean;
  slidesPerView?: number;
  viewAll ?: boolean
}

const BestOfInternationalShows = memo((props:Props) => {
  const { t } = useTranslation("common");
  const lists = props.list ?? latestMovie;

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.international_shows")}
        list={lists}
        className="recommended-block section-top-spacing streamit-block"
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

BestOfInternationalShows.displayName = 'BestOfInternationalShows';
export default BestOfInternationalShows;
