"use client";

import { memo } from "react";

// hero slider
import HomeHeroSlider from "@/components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "@/components/sections/ContinueWatching";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import LatestMovies from "@/components/sections/LatestMovies";
import VerticalSectionSlider from "@/components/slider/VerticalSectionSlider";
import TrendingSlider from "@/components/sections/Trending";
import SuggestedBlock from "@/components/sections/SuggestedBlock";
import RecommendedTVShow from "@/components/sections/RecommendedTVShow";
import ParallexSection from "@/components/sections/ParallexSection";

//static data
import {
  best_in_tv,
  ottVerticleLatestMovies,
  upcommingMovie,
} from "@/StaticData/data";
import { useEnterExit } from "@/utilities/usePage";
import { Container } from "react-bootstrap";
import SpecialsLatestMovies from "@/components/sections/Specials&LatestMovies";

const Home = memo(() => {
  return (
    <>
      <HomeHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <ContinueWatching />
          <UpcomingMovies
            list={upcommingMovie}
            title={"sectionTitle.upcoming_movies"}
            loop={false}
            viewAll={false}
          />
          <SpecialsLatestMovies
            list={best_in_tv}
            title="sectionTitle.best_in_tv"
            loop={false}
            slidesPerView={5}
          />
          <LatestMovies viewAll={false}></LatestMovies>
        </div>
      </Container>
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <Container fluid>
        <div className="overflow-hidden">
          <SuggestedBlock />
        </div>
      </Container>
      <ParallexSection />
      <TrendingSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <RecommendedTVShow viewAll={false}/>
        </div>
      </Container>
    </>
  );
});

Home.displayName = "Home";
export default Home;
