import React, { Fragment, memo , useState} from 'react'

//components
import SectionSlider from '../slider/SectionSlider';
import CardStyle from '../cards/CardStyle';

//static data
import { sectionSliders } from "../../StaticData/data";

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
  list : ListItem[]
  loop ?: boolean
  viewAll ?: boolean
  slideMedium  ?: number
}

const RelatedVideos = memo((props:Props) => {
  const { t } = useTranslation("common");
  const [RelatedVideos] = useState(sectionSliders);
    const lists = props.list ?? RelatedVideos;
  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.related_videos")}
        list={lists}
        className="streamit-block"
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
});

RelatedVideos.displayName = "RelatedVideos"
export default RelatedVideos