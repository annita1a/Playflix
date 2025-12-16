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
  title ?: string
  list : ListItem[]; 
  loop ?: boolean
  viewAll ?: boolean
}

const SpecialsLatestVideos = memo((props:Props) => {
    const { t } = useTranslation("common");
    const lists = props.list ?? latestMovie;

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.specials_latest_videos")}
        list={lists}
        className="latest-block streamit-block"
        viewAll={props.viewAll}
        loop={props.loop}
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

SpecialsLatestVideos.displayName = 'SpecialsLatestVideos';
export default SpecialsLatestVideos;
