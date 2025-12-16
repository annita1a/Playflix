import { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// next link
import Link from "next/link";

// next image
import Image from "next/image"

//plugins
import CountUp from 'react-countup';

//hook
import { useTranslation } from 'react-i18next';

const ContactUs = memo(() => {
  const { t } = useTranslation("common");
  return (
   <Fragment>
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bs-gray-900)" }}
      >
        <div className="container">
          <Row className="about-us-row align-items-center">
            <Col lg={6} md={5}>
              <div className="text-center">
                <img
                  width="497"
                  height="477"
                  src="/assets/images/pages/map.webp"
                  className=" img-fluid attachment-large size-large"
                  alt=""
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg={6} md={7}>
              <h3 className="text-capitalize text-start mb-4">
                Connect with Us
              </h3>
              <p className="mb-0 text-start">
                Streamit is located in Los Angeles city and you can contact us
                at <a href="mailto:info@medyapim.com">hello@streamit.com</a> for
                any tech-related support and assistance. We love to hear from
                our Streamit users.
              </p>
              <div className="mt-4">
                <div className="text-capitalize mb-1 d-flex gap-2">
                  <h6>Company:</h6>
                  <h6 className="text-decoration-none ms-1">Iqonic Design</h6>
                </div>
                <div className="text-capitalize mb-1 d-flex gap-2">
                  <h6>Product:</h6>
                  <h6 className="text-decoration-none ms-1">Streamit </h6>
                </div>
                <div>
                  Contact Us:{" "}
                  <Link href="#" className="text-decoration-none ms-1">
                    hello@iqonic.design
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
