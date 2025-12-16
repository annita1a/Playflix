import React, {FC, memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import TopTenCard from "../cards/TopTenCard";

//function
import { generateImgPath } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface TopTenCardProps {
  title? : string
  viewAll?: boolean
  link ?: string
}

const TopTenMoviesToWatch : FC<TopTenCardProps> = memo(({ title, viewAll, link, list}) => {
    const { t } = useTranslation("common");
  const topTen = [
    {
      image: generateImgPath("/assets/images/media/gameofhero-portrait.webp"),
      count: 1,
    },
    {
      image: generateImgPath("/assets/images/media/rabbit-portrait.webp"),
      count: 2,
    },
    {
      image: generateImgPath("/assets/images/media/chosfies-portrait.webp"),
      count: 3,
    },
    {
      image: generateImgPath("/assets/images/media/dinoosaur-portrait.webp"),
      count: 4,
    },
    {
      image: generateImgPath("/assets/images/media/krishna-portrait.webp"),
      count: 5,
    },
    {
      image: generateImgPath("/assets/images/media/venom-portrait.webp"),
      count: 6,
    },
    {
      image: generateImgPath("/assets/images/media/the-hunter-portrait.webp"),
      count: 7,
    },
    {
      image: generateImgPath("/assets/images/media/kali-portrait.webp"),
      count: 8,
    },
    {
      image: generateImgPath("/assets/images/media/jumanji-portrait.webp"),
      count: 9,
    },
    {
      image: generateImgPath("/assets/images/media/migration-portrait.webp"),
      count: 10,
    },
  ];

  const titles  = title || "sectionTitle.top_10_video_to_watch"

  return (
    <Fragment>
      <SectionSlider title={t(titles)} list={list}  wrapperClass={true} viewAll={viewAll} loop={false} className="top-ten-block">
        {(data) => (
          <TopTenCard
            imagePath={data.image}
            countValue={data.count}
            link={link || "/movies/detail"}
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
