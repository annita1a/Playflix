import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

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
  title?: string;
  loop?: boolean;
  slidesPerView?: number;
  viewAll ?: boolean
  link ?: string
}

const TVPopularShows = memo((props:Props) => {
  const { t } = useTranslation("common");
  const [title] = useState(t("sectionTitle.tv_popular_shows"));
  const list = props.list ?? populerSlider;

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.tv_popular_shows")}
        list={list}
        className="recommended-block section-top-spacing"
        wrapperClass={true}
        viewAll={props.viewAll}

      >
        {(data) => (
          <CardStyleTwo
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            linkPath={props.link || "/movies/detail"}
            slug={data.slug}
            lang={data.lang}
            playNowLink={"/"}
            conturyname={data.conturyname}
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TVPopularShows.displayName = "TVPopularShows";
export default TVPopularShows;
