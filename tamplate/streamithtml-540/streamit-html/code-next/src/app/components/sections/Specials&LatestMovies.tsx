import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { spacialLatestMovie } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';
import CardStyleTwo from "../cards/CardStyleTwo";
interface ListItem {
  image: string;
  title: string;
  slug: string[];
  lang: string;
  productPremium: boolean;
}
interface Props {
  list?: ListItem[]; 
  title: string;
  loop: boolean;
  slidesPerView?: number;
  viewAll ?: boolean
  productPremium: boolean;
}

const SpecialsLatestMovies = memo((props: Props) => {
  const { t } = useTranslation("common");
  const list = props.list ?? spacialLatestMovie;
  const title = props.title ?? t("sectionTitle.specials_latest_movies");
  const loop = props.loop ?? true;
  const slidesPerView = props.slidesPerView ?? 6;
  return (
    <Fragment>
      <SectionSlider
        title={t(title)}
        list={list}
        className="recommended-block streamit-block"
        loop = {loop}
        slidesPerView={slidesPerView}
        viewAll={props.viewAll}
        slideMedium={4}
      >
        {(data) => (
          <CardStyleTwo
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            linkPath="/movies/detail"
            slug={data.slug}
            lang={data.lang}
            playNowLink="/"
            conturyname={data.conturyname}
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

SpecialsLatestMovies.displayName = "SpecialsLatestMovies";
export default SpecialsLatestMovies;
