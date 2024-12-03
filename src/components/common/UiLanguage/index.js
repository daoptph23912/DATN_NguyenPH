import React, { useState } from "react";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";
import { IconLangVN, IconLangEN, IconLogoBTN, IconOpenMenu } from "../../../assets/icons"
import "./index.scss"
const UiLanguage = (props) => {
  const navigate = useNavigate();
  const langChange = (e) => {
    localStorage.setItem("lang", e);
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
  };
  const callbackMenu = async (value) => {
    props.CallMenu(true)
  }

  return (
    <div className="vertical-center-lang ">
      <div className="d-flex justify-content-between">
        <div className="d-flex width-icon-btn justify-content-between">
          <center onClick={() => callbackMenu()}>
            <div className="vertical-center-menu">
              <IconOpenMenu style={{ cursor: "pointer" }} fill="rgba(255, 255, 255, 0.6)" />
            </div>
          </center>
          <div ><IconLogoBTN style={{ cursor: "pointer" }} onClick={() => navigate("/")} /> </div>
        </div>
        <div>
          <div className="d-flex width-icon justify-content-between" style={{ paddingTop: 10 }}>
            <IconLangVN onClick={() => langChange("vn")} style={{ cursor: "pointer" }} />
            <IconLangEN onClick={() => langChange("en")} style={{ cursor: "pointer" }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default UiLanguage;
