import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
export const UiDiaLog = (props) => {
  useEffect(() => { }, [props]);
  return (
    <Dialog
      style={{ zIndex: 1000 }}
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {<div>{props.element}</div>}
    </Dialog>
  );
};
