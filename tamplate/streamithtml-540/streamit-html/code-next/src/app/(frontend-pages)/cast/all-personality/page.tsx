"use client"

import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

//component
import PersonalityCard from '@/components/cards/PersonalityCard'

//custom hooks
import { useBreadcrumb } from '@/utilities/usePage'
import { useTranslation } from 'react-i18next';

const AllPersonality = memo(() => {
    const { t } = useTranslation("common");

    useBreadcrumb('View All')
    return (
        <Fragment>
            <div className='section-padding'>
                <Container fluid>
                    <Row >
                        <Col sm="12" className="my-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="main-title text-capitalize mb-0">favourite-personality</h4>
                            </div>
                        </Col>
                    </Row>
                    <div className="card-style-grid">
                        <Row xl="5" md="2" className="row-cols-1 personality-card">
                            {cast.map((item, index) => {
                                return (
                                    <Col className="mb-4" key={index}>
                                            <PersonalityCard image={item.thumbnail} title={item.name} category={item.category} categoryLink={''} link={""}/>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
})

AllPersonality.displayName = "AllPersonality"
export default AllPersonality