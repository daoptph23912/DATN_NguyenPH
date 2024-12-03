import React from "react";
import { useTranslation } from "react-i18next";

const TranslateText = ({ text }) => {
  const { t } = useTranslation();
  return <>{t(text)}</>;
};

export default TranslateText;
