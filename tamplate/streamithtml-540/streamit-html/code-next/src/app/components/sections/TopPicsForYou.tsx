import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { topPics } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

const TopPicsForYou = memo(() => {
  const { t } = useTranslation("common");
  const [topTen] = useState(topPics);

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.top_picks")}
        list={topTen}
        className="recommended-block streamit-block"
        slidesPerView={6}
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

TopPicsForYou.displayName = 'TopPicsForYou';
export default TopPicsForYou;
