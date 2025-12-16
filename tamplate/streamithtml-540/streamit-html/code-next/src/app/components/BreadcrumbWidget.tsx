import { Fragment, memo } from "react";

//react bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

//function
import { generateImgPath } from "../StaticData/data";

//react-redux
import { useSelector } from "react-redux";
import { getBreadcrumb } from "@/store/streamit/selectors";

//hook
import { useTranslation } from 'react-i18next';
import Link from "next/link";

//img
const imagePath = generateImgPath("/assets/images/pages/01.webp");

const BreadCrumbWidget = memo(() => {
    const { t } = useTranslation("common");
  const breadcrumb = useSelector(getBreadcrumb)
  return (
    // <Fragment>
    //   {breadcrumb.show ?
    //     <div
    //       className="iq-breadcrumb"
    //       style={{ backgroundImage: `url(${imagePath})` }}
    //     >
    //       <Container fluid>
    //         <Row className="align-items-center">
    //           <Col sm="12">
    //             <nav className="text-center">
    //               <h2 className="title text-capitalize">{t(breadcrumb.name)}</h2>
    //               <Breadcrumb
    //                 className="main-bg"
    //                 listProps={{
    //                   className: "text-center justify-content-center",
    //                 }}
    //               >
    //                 <Breadcrumb.Item>{t("header.home")}</Breadcrumb.Item>
    //                 <Breadcrumb.Item active>{t(breadcrumb.name)}</Breadcrumb.Item>
    //               </Breadcrumb>
    //             </nav>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div> : ''}
    // </Fragment>

       <Fragment>
     {breadcrumb.show ?<div className="iq-breadcrumb">
    <Container>
        <Row className="align-items-center">
            <Col sm={12} >
                <nav aria-label="breadcrumb" className="text-center">
                    <ol className="breadcrumb justify-content-center text-white mt-0">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active">{t(breadcrumb.name)}</li>
                    </ol>
                </nav>
            </Col>
        </Row>
    </Container>
</div>: ''}
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
