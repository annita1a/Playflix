"use client";

import { memo } from "react";

// sections
import ContinueWatching from "@/components/sections/ContinueWatching";
import UpcomingMovies from "@/components/sections/UpcomingMovies";

//static data
import { top_ten_movie, best_in_tv, ottVerticleLatestMovies, upcommingMovie } from "@/StaticData/data";

import { useEnterExit } from "@/utilities/usePage";
import OttHeroSlider from "@/components/slider/OttHeroSlider";
import { Container } from "react-bootstrap";
import TopTenMoviesToWatch from "@/components/sections/TopTenMoviesToWatch";
import OnlyOnStreamit from "@/components/sections/OnlyOnStreamit";
import SpecialsLatestMovies from "@/components/sections/Specials&LatestMovies";
import VerticalSectionSlider from "@/components/slider/VerticalSectionSlider";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import PopularMovies from "@/components/sections/PopularMovies";
import TabSlider from "@/components/sections/TabSlider";
import GenreSlider from "@/components/sections/GenreSlider";
import RecommendedForYou from "@/components/sections/RecommendedForYou";
import TopPicsForYou from "@/components/sections/TopPicsForYou";

const OTTHome = memo(() => {
  
  return (
    <>
      <OttHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <ContinueWatching />
          <TopTenMoviesToWatch list={top_ten_movie} title={"sectionTitle.top_10_movies_to_watch"} viewAll={false}/>
          <OnlyOnStreamit />
          <SpecialsLatestMovies list={best_in_tv} title = "sectionTitle.fresh_picks" loop={false} slidesPerView={5}/>
          <UpcomingMovies list={upcommingMovie} title={"sectionTitle.upcoming_movies"} loop={false}/>
          {/* <LatestMovies></LatestMovies> */}
        </div>
      </Container>
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies}/>
      <Container fluid>
        <div className="overflow-hidden">
          <YourFavouritePersonality ></YourFavouritePersonality>
          <PopularMovies></PopularMovies>
        </div>
        </Container>
        <TabSlider></TabSlider>
        <Container fluid>
        <div className="overflow-hidden">
          <GenreSlider></GenreSlider>
          <RecommendedForYou></RecommendedForYou>
          <TopPicsForYou></TopPicsForYou>
        </div>
        </Container>
    </>
  );
});

OTTHome.displayName = "OTTHome";
export default OTTHome;
