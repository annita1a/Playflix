import React, { Fragment, memo } from 'react'

//react-boostrap
import { Button, Form, Row, Col } from 'react-bootstrap'

//hook
import { useTranslation } from 'react-i18next';

const ReviewComponent = memo(() => {
      const { t } = useTranslation("common");
  return (
    <Fragment>
        <div className="streamit-reviews">
            <div id="comments" className="comments-area validate-form">
                <p className='masvideos-noreviews mt-3'>
                      {t("streamReview.no_reviews")}
                </p>
            </div>
            <div className="review_form">
                <div className="comment-respond">
                    <h3 className='fw-500 my-2'>
                    {t("streamReview.first_review")}
                    </h3>
                    <Row>
                        <Col md="12">
                            <Form.Group className='form-group'>
                                <Form.Label>{t("streamShop.your_review")}<span className='text-danger'> *</span></Form.Label>
                                <textarea className='form-control' name='comment' cols={5} rows={8} required></textarea>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className='form-group'>
                                <Form.Label>{t("streamAccount.name")} <span className='text-danger'> *</span></Form.Label>
                                <Form.Control type='text' name='author' size='lg' required/>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className='form-group'>
                                <Form.Label>{t("streamAccount.email")} <span className='text-danger'> *</span></Form.Label>
                                <Form.Control type='email' name='email' size={'lg'} required/>
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <Form.Group className='form-group'>
                               <div className='mt-3 mt-3 d-flex gap-2 align-items-center'>
                                <Form.Check.Input className='mt-0' type='checkbox' id='check1' />
                                <Form.Check.Label htmlFor="check1">{t("streamAccount.save_name")}.</Form.Check.Label>
                               </div>
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <div className='form-submit mt-4'>
                            <div className="iq-button">
                                          <Button name="submit" type="submit" id="submit" className="btn text-uppercase position-relative" value="Submit">
                                              <span className="button-text">{t("streamButtons.submit")}</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Button>
                                      </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default ReviewComponent