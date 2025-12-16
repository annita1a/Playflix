import React from "react";
import Detail_Descrition_Modal_Two from "./detail_description_model_two";
import Detail_Descrition_Modal_Three from "./detail_description_modal_three";
// import Detail_Descrition_Modal_Two from "./detail_description_model_two";
// import Detail_Descrition_Modal_Three from "./detail_description_modal_three";
interface Props {
  isEpisodepage?: string;
  istextureTitle?: boolean;
  isCategory?: string;
  isLanguage?: string;
  movieDuration?: string;
  movieName?: string;
  year?: number;
  views?: string;
  ratingCount?: number;
  show?: boolean;
  modelClose?: any;
  tags?: boolean;
  movietime?:string
  episode ?: boolean
}

const Detail_Descrition_Modal = (props: Props) => {
  const {
    isEpisodepage,
    istextureTitle,
    isCategory,
    isLanguage,
    movieDuration,
    movieName,
    year,
    views,
    ratingCount,
    show,
    modelClose,
    tags,
    episode 
  } = props;
  return <> {episode === true ? 
    (<Detail_Descrition_Modal_Two show={show} isEpisodepage = {isEpisodepage} istextureTitle={istextureTitle} isCategory={isCategory} isLanguage={isLanguage} movieDuration={movieDuration} movieName={movieName} year={year} views={views} ratingCount={ratingCount} modelClose={modelClose}/>)
    : (<Detail_Descrition_Modal_Three show={show} isEpisodepage = {isEpisodepage} istextureTitle={istextureTitle} isCategory={isCategory} isLanguage={isLanguage} movieDuration={movieDuration} movieName={movieName} year={year} views={views} ratingCount={ratingCount} modelClose={modelClose}/>)}</>;
};

export default Detail_Descrition_Modal;
