import React from "react";

import "./Button.scss";

const button = props => {
  let btnClass = [];
  btnClass = ["btn", "btn-" + props.btnClass];

  if (props.type === "send") btnClass.push("btn__send");

  return (
    <div className={btnClass.join(" ")} onClick={props.click}>
      {props.children}
    </div>
  );
};

export default button;
