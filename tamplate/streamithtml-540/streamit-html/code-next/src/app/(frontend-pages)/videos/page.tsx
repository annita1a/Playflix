"use client";

import { Fragment } from "react";

//hero-slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider";

//sections
import PopularVideos from "../../components/sections/PopularVideos";
import SpecialsLatestVideos from "../../components/sections/Specials&LatestVideos";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou";

//custom hook
import { useEnterExit } from "@/utilities/usePage";
import { Container } from "react-bootstrap";
import TopTenMoviesToWatch from "@/components/sections/TopTenMoviesToWatch";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import { top_ten_video, latestVideo, upcomimgVideo, video_recommendedforYou } from "@/StaticData/data";

const VideosPage = () => {
  return (
    <Fragment>
      <VideoHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <TopTenMoviesToWatch list={top_ten_video} viewAll={false} />
          <PopularVideos viewAll={false} />
          <UpcomingMovies viewAll={false} list={upcomimgVideo} loop={false}/>
          <SpecialsLatestVideos list={latestVideo} viewAll={false} />
          <VideosRecommendedForYou list={video_recommendedforYou} viewAll={false}/>
        </div>
      </Container>
    </Fragment>
  );
};

VideosPage.DisplayName = VideosPage;
export default VideosPage;
