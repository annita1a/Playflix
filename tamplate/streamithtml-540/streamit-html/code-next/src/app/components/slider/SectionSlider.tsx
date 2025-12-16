import { memo, useRef, FC } from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

//  Next-Link
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation , Autoplay} from "swiper";
import type { Swiper as SwiperType } from "swiper/types";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const modules = [Autoplay, Navigation];

interface SectionSliderProps {
  children: (data: any) => React.ReactNode;
  title: string;
  list: any[];
  slidesPerView?: number;
  loop?: boolean;
  spaceBetween?: number;
  slideSmall ?: number; 
  slideMedium ?: number; 
  className?: string;
  link?: string;
  wrapperClass?: boolean;
  swiperClass?: boolean;
  viewAll?: boolean
  speed ?: number
}

const SectionSlider: FC<SectionSliderProps> = memo(
  ({
    children,
    title,
    list,
    slidesPerView = 6,
    loop = false,
    spaceBetween = 0,
     slideSmall = 2,
    slideMedium = 3,
    className = "",
    link,
    wrapperClass,
    swiperClass,
    viewAll,
    speed
  }) => {
    const themeSchemeDirection = useSelector(theme_scheme_direction);

    const slider = useRef<HTMLDivElement>(null);

    const initSwiper = (swiper: typeof Swiper) => {
      addCustomClassToVisibleSlides(swiper);
    };

    const addCustomClassToVisibleSlides = (swiper: typeof Swiper | null) => {
      if (slider.current && swiper) {
        slider.current
          .querySelectorAll(".swiper-slide")
          .forEach((separateSlide) => separateSlide.classList.remove("last"));

        const swiperSlide = slider.current.querySelectorAll(
          ".swiper-slide-visible"
        );

        const lastVisibleSlide = swiperSlide[swiperSlide.length - 1];

        setTimeout(() => {
          if (lastVisibleSlide) {
            lastVisibleSlide.classList.add("swiper-active", "last");
          }
        }, 0);
      }
    };

    return (
      <div className={className}>
          <div className="card-style-slider" ref={slider}>
            <div className="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0 ">
              <h4 className="main-title text-capitalize mb-0">{title}</h4>
               {viewAll === false ? (
              ""
            ) : (
              <Link
                href={link ? link : "/view-all"}
                className="text-primary iq-view-all text-decoration-none"
              >
                View All
              </Link>
            )}
            </div>
            <Swiper
              key={String(themeSchemeDirection)}
              dir={String(themeSchemeDirection)}
               className={`position-relative swiper swiper-card ${
              wrapperClass ? "wrapper-class" : ""
            } ${swiperClass}`}
              slidesPerView={slidesPerView}
              loop={false}
              watchSlidesProgress
              spaceBetween={spaceBetween}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: slideSmall,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: slideSmall,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: slideMedium,
                  spaceBetween: 0,
                },
                1025: {
                  slidesPerView: slidesPerView,
                  spaceBetween: 0,
                },
                1500: {
                  slidesPerView: slidesPerView,
                  spaceBetween: 0,
                },
              }}
              // onSwiper={initSwiper}
              // onSlideChange={initSwiper}
              modules={modules}
              speed={speed ?? 1000}
            >
              {list.map((data, index) => (
                <SwiperSlide tag="li" key={index + "slider"}>
                  {children(data)}
                </SwiperSlide>
              ))}
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </Swiper>
          </div>
      </div>
    );
  }
);

SectionSlider.displayName = "SectionSlider";

export default SectionSlider;
