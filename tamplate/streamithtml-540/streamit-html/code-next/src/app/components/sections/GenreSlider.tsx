import React, { Fragment, memo } from 'react'

//components
import SectionSlider from '../slider/SectionSlider'
import GenersCard from '../cards/GanresCard'
import { useState } from 'react'

//static data
import { geners } from '../../StaticData/data'

//hook
import { useTranslation } from 'react-i18next';

const GenreSlider = memo(() => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <SectionSlider className="movie-geners-block"
        title={t("sectionTitle.movie_genres")}
        list={geners}
        slidesPerView={6}
        link="/genres/all-genre"
         wrapperClass={true}
        >
        {(data) => (
          <GenersCard
          slug={data.slug}
          title={t(data.title)}
          image={data.thumbnail}
          type={data.type}
          url={'/view-all'}
        />
        )}
        </SectionSlider>
    </Fragment>
  )
})

GenreSlider.displayName = 'GenreSlider'
export default GenreSlider