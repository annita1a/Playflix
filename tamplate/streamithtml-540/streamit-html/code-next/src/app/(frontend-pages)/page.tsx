"use client";

import React, { Fragment, useState, useEffect } from "react";

// next link
import Link from "next/link";

// next image
import Image from "next/image";

// components
import CustomButton from "@/components/CustomButton";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import { Thumbs, Navigation } from "swiper";
import type { Swiper as SwiperType } from "swiper/types";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";

//hook
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "react-bootstrap";
import OTTHome from "./otthome/page";

const OttHeroSlider = () => {
  const { t } = useTranslation("common");
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [render, setRender] = useState(true);
  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 100);
    return () => {};
  }, []);

  return (
    <Fragment>
  <OTTHome/>
    </Fragment>
  );
};
export default OttHeroSlider;
