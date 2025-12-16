import { Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "@/components/cards/CardStyle";

//static data
import { latestMovie } from "@/StaticData/data";

//hook
import { useTranslation } from 'react-i18next';
interface LatestMovies {
  viewAll?: boolean
}

const LatestMovies = (props : LatestMovies) => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.latest_movies")}
        list={latestMovie}
        className="latest-block streamit-block"
        slidesPerView={6}
        viewAll = {props.viewAll}
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
};

LatestMovies.DisplayName = LatestMovies;
export default LatestMovies;
