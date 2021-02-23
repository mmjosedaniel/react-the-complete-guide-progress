import React from "react";

import classes from "./buildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <buttom className={classes.Less}>Less</buttom>
    <buttom className={classes.More}>More</buttom>
  </div>
);

export default buildControl;
