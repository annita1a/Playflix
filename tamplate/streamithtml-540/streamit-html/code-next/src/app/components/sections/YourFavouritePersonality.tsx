import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import PersonalityCard from "../cards/PersonalityCard";

//function
import { generateImgPath } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

interface ListItem {
  image: string;
  title: string;
}
interface Props {
  slidesPerView?: number;
  title ?: string
  list ?: ListItem[]
  loop ?: boolean
  viewAll ?: boolean
}

const YourFavouritePersonality = memo((props : Props) => {
  const { t } = useTranslation("common");
  const personality = [
  
    {
      image: generateImgPath("/assets/images/cast/olivia-foster.webp"),
      title: "favouritePersonalities.olivia_foster",
      category: "persondesc.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/leena-burton.webp"),
      title: "favouritePersonalities.Leena_Burton",
      category: "persondesc.actress",
    },
     {
      image: generateImgPath("/assets/images/cast/ryan-pierce.webp"),
      title: "favouritePersonalities.Ryan_Pierce",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/michael-fox.webp"),
      title: "favouritePersonalities.michael_fox",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/ruby-scott.webp"),
      title: "favouritePersonalities.ruby_scott",
      category: "persondesc.director",
    },
    {
      image: generateImgPath("/assets/images/cast/maxwell-carter.webp"),
      title: "favouritePersonalities.maxwell_carter",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/mark-smith.webp"),
      title: "favouritePersonalities.mark_smith",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/ava-monroe.webp"),
      title: "favouritePersonalities.ava_monroe",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/jack-nicholson.webp"),
      title: "favouritePersonalities.jack_nicholson",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/charles-melton.webp"),
      title: "favouritePersonalities.charles_melton",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/jeff-bridges.webp"),
      title: "favouritePersonalities.jeff_bridges",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/james-stewart.webp"),
      title: "favouritePersonalities.james_stewart",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/jordan-grant.webp"),
      title: "favouritePersonalities.jordan_grant",
      category: "persondesc.actor",
    },
    
  ];
    const titles = props.title ?? "sectionTitle.your_favourite_personality"
    const slidesPerView = props.slidesPerView ?? 11;

    const list = props.list ?? personality;
  return (
    <Fragment>
      <div className="favourite-person-block">
        <SectionSlider
          title={t(titles)}
          list={list}
          className="streamit-block"
          slidesPerView={slidesPerView}
          link="/cast/all-personality"
          loop={props.loop}
          viewAll={props.viewAll || false}
        >
          {(data) => (
            <PersonalityCard
              image={data.image}
              category={t(data.category)}
              title={t(data.title)}
              categoryLink="#"
              link="/cast/detail"
            />
          )}
        </SectionSlider>
      </div>
    </Fragment>
  );
});

YourFavouritePersonality.displayName = "YourFavouritePersonality";
export default YourFavouritePersonality;
