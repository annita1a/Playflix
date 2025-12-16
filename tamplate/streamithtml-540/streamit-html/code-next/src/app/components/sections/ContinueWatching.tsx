import { FC, Fragment, memo, useState } from "react";

// Component
import SectionSlider from "../slider/SectionSlider";
import ContinueWatchCard from "../cards/ContinueWatchCard";

// Function
import { generateImgPath } from "../../StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

const ContinueWatching: FC = memo(() => {
  const { t } = useTranslation("common");
  const watching = [
    {
      image: generateImgPath(
        "/assets/images/media/gameofhero.webp"
      ),
      value: 50,
      leftTime: "70 m",
      watchMovieTitle: "streamMovies.game_of_heros",
      watchMovieDate: "Jun-2025",
    },
    {
      image: generateImgPath("/assets/images/media/the-first-of-us.webp"),
      value: 30,
      leftTime: "120 m",
      watchMovieTitle: "streamMovies.the_first_of_us",
      watchMovieDate: "Jun-2025",
    },
    {
      image: generateImgPath("/assets/images/media/the-co-noueriing.webp"),
      value: 90,
      leftTime: "60 m",
      watchMovieTitle: "streamMovies.the_co_noueriing",
      watchMovieDate: "Dec-2024",
    },
    {
      image: generateImgPath("/assets/images/media/giirek.webp"),
      value: 20,
      leftTime: "60 m",
      watchMovieTitle: "streamMovies.giikre",
      watchMovieDate: "Dec-2024",
    },
    {
      image: generateImgPath("/assets/images/media/rabbit.webp"),
      value: 50,
      leftTime: "45 m",
      watchMovieTitle: "streamMovies.rabbit",
      watchMovieDate: "May-2025",
    },
    {
      image: generateImgPath("/assets/images/media/jumanjj.webp"),
      value: 80,
      leftTime: "20 m",
      watchMovieTitle: "streamMovies.jumanji",
      watchMovieDate: "March-2025",
    },
    {
      image: generateImgPath("/assets/images/media/chosfies.webp"),
      value: 10,
      leftTime: "70 m",
      watchMovieTitle: "streamMovies.chosfies",
      watchMovieDate: "May-2025",
    },
       {
      image: generateImgPath("/assets/images/media/fast-furious.webp"),
      value: 10,
      leftTime: "10 m",
      watchMovieTitle: "streamMovies.fast_&_furious",
      watchMovieDate: "Feb-2025",
    },
    {
      image: generateImgPath("/assets/images/media/john-wick.webp"),
      value: 40,
      leftTime: "60 m",
      watchMovieTitle: "streamMovies.john_wick",
      watchMovieDate: "Jan-2025",
    },
    {
      image: generateImgPath("/assets/images/media/venom.webp"),
      value: 30,
      leftTime: "10 m",
      watchMovieTitle: "streamMovies.venom",
      watchMovieDate: "Dec-2024",
    },
    {
      image: generateImgPath("/assets/images/media/krishna.webp"),
      value: 80,
      leftTime: "30 m",
      watchMovieTitle: "streamMovies.krishna",
      watchMovieDate: "May-2025",
    },
  ];

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.continue_watching")}
        list={watching}
        className="continue-watching-block section-padding-top"
        slidesPerView={6}
        loop={true}
        wrapperClass={true}
        viewAll={false}
      >
        {(data) => (
          <ContinueWatchCard
            imagePath={data.image}
            progressValue={data.value}
            dataLeftTime={data.leftTime}
            link="/movies/detail"
            watchMovieTitle={data.watchMovieTitle}
            watchMovieDate={data.watchMovieDate}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

ContinueWatching.displayName = "ContinueWatching";
export default ContinueWatching;
