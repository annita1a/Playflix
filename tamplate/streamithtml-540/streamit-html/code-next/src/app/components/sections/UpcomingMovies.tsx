import { FC,Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//data
import { upcommingMovie } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface ListItem {
  image: string;
  title: string;
  slug: string[];
  lang: string;
  productPremium ?: boolean;
}
interface UpcomingMovies {
  title ?: string;
  list : ListItem[]; 
  loop ?: boolean;
  viewAll ?: boolean;
 productPremium ?: boolean;
}

const UpcomingMovies: FC<UpcomingMovies> = memo(({title , list , loop, viewAll}) => {
  const { t } = useTranslation("common");
const titles  = title ??  "sectionTitle.upcoming_video"
const lists = list ?? upcommingMovie;
  const loops = loop ?? true;
  return (
    <Fragment>
      <SectionSlider
        title={t(titles)}
        list={lists}
        className="upcomimg-block streamit-block"
        slidesPerView={6}
        loop={loops}
        viewAll={viewAll}
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

UpcomingMovies.displayName = "UpcomingMovies"
export default UpcomingMovies;
