"use client"

import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'


//component
import CardBlogGrid from '@/components/cards/CardBlogGrid'

//static data 
import { blogsGrid , FourblogsGrid } from '@/StaticData/blogs'

//hook
import { useTranslation } from 'react-i18next';

import GridPageBreadCrumb from '@/components/blog/GridPageBreadCrumb'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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

export async function getStaticPaths(type: String) {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}


const BlogGrid = memo((props) => {
    const { t } = useTranslation("common");
    const router = usePathname();


    let _column: number = 12;
    let data: any
    switch (router) {
        case '/blogs/grid/one-column':
            _column = 12;
            break;
        case '/blogs/grid/two-column':
            _column = 6;
            break;
        case '/blogs/grid/three-column':
            _column = 4;
            break;
        case '/blogs/grid/four-column':
            _column = 3;
            break;
        default:
            break;
    }

    const grid_data = data !== undefined && data !== null ? data.slice(0 , 14) : blogsGrid.slice(0, 14)
    return (
        <Fragment>
            <GridPageBreadCrumb type={router}></GridPageBreadCrumb>
                  <div className="blog-column-pages section-padding">
        <Container fluid={_column === 3}>
          <Row className="gy-5">
            {grid_data.map((item:any, index:number) => {
              return (
                <Col lg={_column} md={_column} sm="12" key={index}>
                  <CardBlogGrid
                    title={t(item.title)}
                    thumbnail={item.thumbnail}
                    description={t(item.description)}
                    username={t(item.username)}
                    blogDate={item.blogDate}
                    link_button={true}
                    button_icon={true}
                  ></CardBlogGrid>
                </Col>
              );
            })}
          </Row>
          <div className="iq-button text-center mt-3">
            <Link
              href="#"
              className="btn btn-primary text-capitalize position-relative rounded-3"
            >
              <span className="button-text">{t("streamButtons.load_more")} </span>
            </Link>
          </div>
        </Container>
      </div>
        </Fragment>
    );
});

BlogGrid.displayName = "BlogGrid";
export default BlogGrid;
