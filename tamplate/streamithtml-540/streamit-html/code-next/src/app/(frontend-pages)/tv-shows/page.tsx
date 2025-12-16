"use client"

import { memo, Fragment } from "react";

//hero-slider
import TvShowHeroSlider from "@/components/slider/TvShowHeroSlider";

//sections
import TVPopularShows from "@/components/sections/TVPopularShows";
import BestOfInternationalShows from "@/components/sections/BestOfInternationalShows";
import ShowsWeRecommend from "@/components/sections/ShowsWeRecommend";

import { useEnterExit } from "@/utilities/usePage";
import { Container } from "react-bootstrap";
import TopTenMoviesToWatch from "@/components/sections/TopTenMoviesToWatch";
import { top_ten_tvshow, popular_tv_show, TvShow_Best_Of_International, TVshowDetail_recommendedforYou, upcoming_related_video } from "@/StaticData/data";
import UpcomingMovies from "@/components/sections/UpcomingMovies";

const TvShows = memo(() => {
    return (
        <Fragment>
            <TvShowHeroSlider />
                <Container fluid>
                    <div className="overflow-hidden">
                        <TopTenMoviesToWatch list={top_ten_tvshow} viewAll={false} title={"sectionTitle.top_10_tvshow_to_watch"} link={"/tv-shows/detail"}/>
                        <TVPopularShows list={popular_tv_show} viewAll={true} link={"/tv-shows/detail"}/>
                        <UpcomingMovies  list={upcoming_related_video} title={"sectionTitle.tv_upcoming_title"}/>
                        <BestOfInternationalShows list={TvShow_Best_Of_International} />
                        <ShowsWeRecommend list={TVshowDetail_recommendedforYou}/>
                    </div>
                 </Container>
        </Fragment>
    );
});

TvShows.displayName = "TvShows";
export default TvShows;
