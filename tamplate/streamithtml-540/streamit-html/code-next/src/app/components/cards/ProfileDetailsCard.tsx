"use client"

// components/ProfileDetailsCard.tsx
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

interface ProfileDetailsCardProps {
  image: string;
  movieType: string;
  movieCategory: string;
}

const ProfileDetailsCard: React.FC<ProfileDetailsCardProps> = ({ image, movieType, movieCategory }) => {
  const { t } = useTranslation("common");

  return (
    <div className="playlist-card">
      {/* <!-- Playlist Image --> */}
      <div className="image-box">
        <Link href="/playlist-detail" className="">
          <img
            src={image}
            alt="90s Throwback"
            className="img-fluid object-cover w-100 border-0"
          />
        </Link>
        <Link href="/playlist-detail" className="play-icon">
          <i className="icon-play-button"></i>
        </Link>
      </div>

      {/* <!-- Playlist Content --> */}
      <div className="content-part">
        <div className="d-flex justify-content-between gap-2 mb-1">
          <h5 className="my-0 text-capitalize">{t(movieType)}</h5>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              variant=""
              className="btn p-0 border-0"
              id="dropdown-basic"
              bsPrefix=" "
            >
              <i className="icon-three-dots-vertical"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu border">
              <Dropdown.Item as="button" className="dropdown-item manage_playlist update_user_playlist">
                <Link
                  href="#"
                  className="manage_playlist dropdown-item update_user_playlist"
                  data-playlist-name="90s Throwback"
                  data-playlist-id="14"
                  data-post-type="movie"
                >
                  Update
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="button" className="dropdown-item delete_user_playlist">
                <Link
                  href="#"
                  className="dropdown-item delete_user_playlist"
                  data-playlist_id="14"
                  data-post-type="movie"
                >
                  Delete
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="small mb-1">
          <small>{t(movieCategory)}</small>
        </div>

        <Link href="/playlist-detail" className="btn btn-link btn-playlist p-0 border-radius-0">
          View {t("streamPlaylist.playlist")}
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetailsCard;
