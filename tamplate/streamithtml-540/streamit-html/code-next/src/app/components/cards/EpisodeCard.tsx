import { FC, Fragment, memo } from "react";
import Link from "next/link";

import { useTranslation } from "next-i18next";

interface EpisodeCardProps {
  image: string;
  link: string;
  showEpisod: string;
  episodDate ?: string;
  episodTime: string;
  episodTitle?: string;
  episodeTitlesText?: string;
  episodeDetailText?: string;
  episodesNumber?: number;
}

const EpisodeCard: FC<EpisodeCardProps> = memo(
  ({
    image,
    link,
    showEpisod,
    episodDate,
    episodTime,
    episodTitle,
    episodeTitlesText,
    episodeDetailText,
    episodesNumber,
  }) => {
    const { t } = useTranslation("common");
    // console.log(episodesNumber);
    return (
      <Fragment>
        <div className="episode-block rounded-3">
          <div className="block-image position-relative z-1">
            <Link href={link}>
              <img
                src={image}
                className="img-fluid img-zoom"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
          {episodTitle && (
            <h6 className="episode-title fw-medium position-absolute">
              {" "}
              {episodesNumber !== undefined && episodesNumber !== null
                ? `${episodesNumber
                    .toString()
                    .padStart(2, "0")}: ${episodTitle}`
                : episodTitle}
            </h6>
          )}

          <div className="episode-detail fw-medium position-absolute">
            <h6 className="mt-2 mb-0">
              {episodeTitlesText !== undefined && episodeTitlesText !== null
                ? `0${episodesNumber} : ${episodeTitlesText}`
                : `0${episodesNumber} : Island of Secrets`}
            </h6>

            <span className="mb-0 line-count-2 mt-2 small lh-base">
              {episodeDetailText !== undefined && episodeDetailText !== null
                ? t(episodeDetailText)
                : "A flashback episode reveals Captain Roarke’s troubled past as a  noble-turned-pirate. His path crossed with the kingdom’s navy captain, who now pursues them with a personal  vendetta. Meanwhile, the crew faces an attack from a band of mercenary hunters."}
            </span>
          </div>
          <div className="position-absolute episode-time font-size-12 fw-bold px-1 rounded-1 d-flex align-items-center z-2 gap-1">
            <i className="ph ph-clock"></i>
            <p className="mb-0">{episodTime}</p>
          </div>
        </div>
      </Fragment>
    );
  }
);

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
