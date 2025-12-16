import { useState, useEffect, memo, Fragment } from "react";

//react-bootstrap
import { Offcanvas, Row, Col } from "react-bootstrap";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// Section Components
// Style Setting Section Components
import ColorCustomizer from "./sections/color-customizer";
import Direction from "./sections/direction";

//hook
import { useTranslation } from 'react-i18next';

const SettingOffCanvas = memo(() => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  
  // Define selectors
  const themeSchemeDirection = useSelector(SettingSelector.theme_scheme_direction);
  const themeColor = useSelector(SettingSelector.theme_color);
  return (
    <Fragment>
      <div className="rtl-box">
        <a
          className="btn btn-fixed-end btn-icon btn-setting"
          id="settingbutton"
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
        >
          <i className="ph ph-gear-six fs-5 text-white"></i>
        </a>
        <div
          className={`offcanvas  live-customizer end ${
            show ? "show" : "hiding"
          } ${themeSchemeDirection === "rtl" ? 'offcanvas-start' : 'offcanvas-end'}`}
          // placement={`}
        >
          <div className="offcanvas-header">
            <div className="d-flex align-items-center">
              <h5
                id="live-customizer-label"
                className="offcanvas-title text-dark"
              >
                {t("streamSetting.live_customizer")}
              </h5>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <button
                className="btn btn-icon text-primary"
                data-reset="settings"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                aria-label="Reset All Settings"
                data-bs-original-title="Reset All Settings"
              >
                <span className="btn-inner">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-icon btn-close px-0 text-reset shadow-none text-dark"
                onClick={() => setShow(false)}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="offcanvas-body pt-0 modes">
            <Row>
              <Col lg={12}>
                <div>
                  <div>
                    <Direction themeSchemeDirection={themeSchemeDirection}></Direction>
                    <ColorCustomizer themeColor={themeColor}></ColorCustomizer>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

SettingOffCanvas.displayName = "SettingOffCanvas";
export default SettingOffCanvas;
