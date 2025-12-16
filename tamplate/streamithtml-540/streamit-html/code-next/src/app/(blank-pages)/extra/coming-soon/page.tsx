"use client"

import { Fragment, useEffect, useRef } from "react";

//react bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";

// next link
import Link from "next/link";

//function
import { generateImgPath } from "@/StaticData/data";

//hook
import { useTranslation } from 'react-i18next';

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     const { locale } = context
//     const validLocales = ["en", "ar", "gr", "de", "fr"];
//     return {
//         props: {
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }

const CommingSoonPage = () => {
  const { t } = useTranslation("common");
  const countdownRef = useRef<HTMLUListElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function updateClock(clock: HTMLUListElement, endtime: Date) {
      const t = Date.parse(endtime.toString()) - Date.now();
      if (t <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }

      const format = (num: number) => String(num).padStart(2, "0");

      const daysEl = clock.querySelector("[data-days]");
      const hoursEl = clock.querySelector("[data-hours]");
      const minutesEl = clock.querySelector("[data-minutes]");
      const secondsEl = clock.querySelector("[data-seconds]");

      if (daysEl) daysEl.textContent = Math.floor(t / 86400000).toString();
      if (hoursEl) hoursEl.textContent = format(Math.floor((t / 3600000) % 24));
      if (minutesEl) minutesEl.textContent = format(Math.floor((t / 60000) % 60));
      if (secondsEl) secondsEl.textContent = format(Math.floor((t / 1000) % 60));
    }

    function startClock(clock: HTMLUListElement, endtime: Date) {
      updateClock(clock, endtime);
      timerRef.current = setInterval(() => updateClock(clock, endtime), 1000);
    }

    const countdownEl = countdownRef.current;
    const dateAttr = countdownEl?.getAttribute("data-date");
    const defaultDate = new Date(Date.now() + 15 * 86400000); // fallback: 15 days ahead
    const endtime = new Date(dateAttr || defaultDate);

    if (countdownEl) {
      startClock(countdownEl, endtime);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

    return (
        <Fragment>
            <div className="mx-3">
        <Row>
          <Col xs={12} className="p-0">
            <div
              className="coming-soon-background"
              style={{ background: 'url("/assets/images/pages/01.webp")' }}
            >
              <div className="st-coming">
                <div className="st-coming-inner text-white rounded-3">
                  <div className="iq-maintenance-message">
                    <h1 className="iq-maintenance-title text-white">
                      {t("streamPages.coming_soon")}
                    </h1>
                    <p className="iq-maintenance-desc">
                      {t("streamError.professional_ideas")}
                    </p>
                  </div>

                  <div className="expire_date" id="March30,2025"></div>

                  <ul
                    className="list-inline example mb-0 ps-0 countdown"
                    data-date="December 30 2025 20:20:22"
                    ref={countdownRef} // 👈 DOM reference here
                  >
                    <li>
                      <span className="days" data-days>
                        13
                      </span>
                      <p className="days_text">Days</p>
                    </li>
                    <li>
                      <span className="hours" data-hours>
                        02
                      </span>
                      <p className="hours_text">Hours</p>
                    </li>
                    <li>
                      <span className="minutes" data-minutes>
                        18
                      </span>
                      <p className="minutes_text">Minutes</p>
                    </li>
                    <li>
                      <span className="seconds" data-seconds>
                        53
                      </span>
                      <p className="seconds_text">Seconds</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
        </Fragment>
    );
};

CommingSoonPage.layout = "Blank";
export default CommingSoonPage;
