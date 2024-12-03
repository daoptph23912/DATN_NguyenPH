import React, { useState, useEffect, useRef, useContext } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import ListMenu from "./ListMenu";
import "./index.scss";
import { IconLangEN, IconLangVN } from "src/assets/icons";
import i18n from "i18next";
import PropsContext from "src/routes/context";
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const getmenu = (props) => {
  const { translate } = props
  let item = [];
  ListMenu.forEach((value, index) => {
    console.log(value);

    if (value.type === 1) {
      item.push(
        getItem(
          <Link to={value.path} className="select-router" key={value.path}>
            {translate(value.name)}
          </Link>,
          value.path,
          value.icon
        )
      );
    } else if (value.type === 2) {
      let item_child = [];
      value.paths.forEach((value_child, index_child) => {
        item_child.push(
          getItem(
            <Link to={value_child.path} className="select-router" key={value_child.path}>
              {translate(value_child.name)}
            </Link>,
            value_child.path
          )
        );
      });
    }
  });
  return item;
};

const AppMenu = () => {
  const langChange = (e) => {
    localStorage.setItem("lang", e);
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
  };

  return (
    <div className="menu-container" >
      <div className="ccp-header">
        SM anagement
      </div>
      <div className="tiltle-header">
        VIP
      </div>
      <Menu
        style={{
          minHeight: window.innerHeight,
          paddingTop: 16,
        }}
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        inlineCollapsed={false}
        theme="#D9D9D980"
        items={getmenu(useContext(PropsContext))}
      />
      <div className="vertical-center-lang">
        <IconLangVN onClick={() => langChange("vn")} style={{ cursor: "pointer" }} />
        <IconLangEN onClick={() => langChange("en")} style={{ cursor: "pointer", marginLeft: 20 }} />
      </div>
    </div>
  );
};

export default AppMenu;
