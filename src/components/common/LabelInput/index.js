import React from "react";
import TranslateText from "../TranslateText";

const LabelInput = ({ text, style }) => {
  return (
    <span
      style={{
        display: "block",
        width: "100%",
        textAlign: "end",
        paddingRight: "2rem",
        fontWeight: 500,
        ...style,
      }}
    >
      <TranslateText text={text} />
    </span>
  );
};

export default LabelInput;
