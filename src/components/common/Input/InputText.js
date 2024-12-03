import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/featureStyle/input.scss";

const InputText = ({
  focus,
  placeholder,
  text,
  setText,
  style,
  typeInput,
  suffix,
  disable = false,
  prefix,
  maxLength,
  defaultValue,
  width,
  key,
  onClick = () => { },
}) => {
  const { t } = useTranslation();
  const inputRef = useRef();
  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);

  return (
    <div className={typeInput} style={{ width: `${width}px` }}>
      <Input
        key={key}
        onClick={onClick}
        autoComplete="off"
        ref={inputRef}
        disabled={disable}
        style={style}
        placeholder={t(placeholder)}
        prefix={prefix}
        suffix={suffix}
        value={text}
        maxLength={maxLength}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default InputText;
