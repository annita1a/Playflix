import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';
const OnlyOnStreamit = memo(() => {
  const { t } = useTranslation("common");
  const [onlyonstreamit] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.only_on_streamit")}
        list={onlyonstreamit}
        className="streamit-block"
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
            playNowLink="/"
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

OnlyOnStreamit.displayName = "OnlyOnStreamit";
export default OnlyOnStreamit;
