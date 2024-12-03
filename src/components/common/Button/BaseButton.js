import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/featureStyle/button.scss";
const BaseButton = ({
  handleClick,
  styleBtn,
  width,
  typeBtn,
  content,
  icon,
  disabled,
  className,
  shape = "round",
}) => {
  const { t } = useTranslation();
  const style = {
    width,
    ...styleBtn,
  };
  return (
    <Button
      disabled={disabled}
      shape={shape}
      className={`${typeBtn} ${className}  ${disabled ? "btnDisabled" : null}`}
      onClick={handleClick}
      style={style}
    >
      {icon}
      {typeof content === "string" ? t(content) : content}
    </Button>
  );
};

export default BaseButton;
