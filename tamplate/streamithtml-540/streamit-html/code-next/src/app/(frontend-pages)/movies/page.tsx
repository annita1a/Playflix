"use client"

import { memo } from "react";

// hero slider
import MovieHeroSlider from "@/components/slider/MovieHeroSlider";

// section
import PopularMovies from "@/components/sections/PopularMovies";
import SpecialsLatestMovies from "@/components/sections/Specials&LatestMovies";
import MoviesRecommendedForYou from "@/components/sections/MoviesRecommendedForYou";

import { useEnterExit } from "@/utilities/usePage";
import { Container } from "react-bootstrap";
import TopTenMoviesToWatch from "@/components/sections/TopTenMoviesToWatch";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import { top_ten_movie, upcommingMovie } from "@/StaticData/data";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     // extract the locale identifier from the URL
//     const { locale } = context
//     return {
//         props: {
//             // pass the translation props to the page component
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }

const Movies = memo(() => {
    return (
        <>
        <MovieHeroSlider />
        <Container fluid>
          <div className="overflow-hidden">
              <TopTenMoviesToWatch list={top_ten_movie} viewAll={false} title={"sectionTitle.top_10_movies_to_watch"}/>
              <PopularMovies  viewAll={false}/>
              <UpcomingMovies list={upcommingMovie} title={"sectionTitle.upcoming_movies"} loop={false}/>
              <SpecialsLatestMovies title = "sectionTitle.specials_latest_movies" loop={false}/>
              <MoviesRecommendedForYou viewAll={false} />
          </div>
        </Container>
        </>
    );
});

Movies.displayName = "Movies";
export default Movies;
