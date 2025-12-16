import { useState, Fragment, memo } from "react";

//componets
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';


interface PopularMovies {
  title ?: string
  viewAll?: boolean
}

const PopularMovies = memo((props:PopularMovies) => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.popular_movies")}
        list={populerSlider}
        className="popular-movies-block streamit-block"
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

PopularMovies.displayName = 'PopularMovies';
export default PopularMovies;
