import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import AppMenu from "src/components/features/UiMenu";
import { AppHeader } from "src/components/features/UiHeader";
import { AvatarSVG } from "src/assets/icons";
const MainLayout = () => {
  return (
    <div translate="no">
      <div className="wapperLayout" style={{ display: "flex" }}>
        <AppMenu />
        <div className="content">
          <div className="main-header">
            <div className="account-info">
              <AvatarSVG />
              <span className="account-name">Phạm Hồng Nguyên</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
