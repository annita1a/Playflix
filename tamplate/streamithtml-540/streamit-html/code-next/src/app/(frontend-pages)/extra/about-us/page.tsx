"use client";

import { Fragment, memo } from "react";

//components
import TeamSection from "../AboutSections/TeamSection";
import ContactUs from "../AboutSections/ContactUs";
import WorkSection from "../AboutSections/WorkSection";

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//hook
import { useTranslation } from 'react-i18next';
import AboutPlatform from "../AboutSections/AboutPlatform";
import ChooseStreamit from "../AboutSections/ChooseStreamit";
import UltimateExp from "../AboutSections/UltimateExp";

// export async function getStaticProps(context: { locale: any; }) {
//     // extract the locale identifier from the URL
//     const { locale } = context
//     const validLocales = ["en", "ar", "gr", "de", "fr"];
//     return {
//         props: {
//             // pass the translation props to the page component
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }
const AboutUs = memo(() => {
  const { t } = useTranslation("common");
  useBreadcrumb(t("streamPages.about_us"));
  return (
    <Fragment>
      <AboutPlatform></AboutPlatform>
      <ChooseStreamit></ChooseStreamit>
      <UltimateExp></UltimateExp>
      <TeamSection></TeamSection>
      <ContactUs></ContactUs>
      <WorkSection></WorkSection>
    </Fragment>
  );
});

AboutUs.displayName = "AboutUs";
export default AboutUs;
