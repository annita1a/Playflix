import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface ListItem {
  image: string;
  title: string;
  slug: string[];
  lang: string;
  productPremium?: boolean;
}

interface MoviesRecommendedForYou {
  title ?: string
   list ?: ListItem[]; 
  loop ?: boolean
  viewAll?: boolean
}

const MoviesRecommendedForYou = memo((props:MoviesRecommendedForYou) => {
  const { t } = useTranslation("common");
  const lists = props.list ?? recommendedforYou;
const titles  = props.title ??  "streamForm.movies_recommended"
  return (
    <Fragment>
      <SectionSlider
        title={t(titles)}
        list={lists}
        className="recommended-block"
        slidesPerView={6}
        wrapperClass={true}
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

MoviesRecommendedForYou.displayName = 'MoviesRecommendedForYou';
export default MoviesRecommendedForYou;
