"use client"

import { Fragment, memo } from "react";

// react-bootstrap
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

// router
import Link from "next/link";

// components
import CardStyle from "@/components/cards/CardStyle";
import Sources from "@/components/Sources";

// function
import { generateImgPath } from '@/StaticData/data'

import { useEnterExit } from "@/utilities/usePage";

//hook
import { useTranslation } from 'react-i18next';
import PersonDetailComp from "@/components/persondetailcomp";


// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps(context: { locale: any; }) {
//     // extract the locale identifier from the URL
//     const { locale } = context

//     return {
//         props: {
//             // pass the translation props to the page component
//             ...(await serverSideTranslations(locale)),
//         },
//     }
// }


const DetailPage = memo(() => {
    const { t } = useTranslation("common");

    return (
        <Fragment>
    <PersonDetailComp/>
        </Fragment>
    );
});

DetailPage.displayName = "DetailPage";
export default DetailPage;
