import React from "react";

import "./Input.scss";

let inputBtn = [];
const input = props => {
  switch (props.btnClass) {
    case "notas":
      inputBtn = ["post-intup__submit", "btn-notas"];
      break;

    case "feed":
      inputBtn = ["post-intup__submit", "btn-feed"];
      break;

    default:
      inputBtn = ["post-intup__submit", "btn-grupos"];
      break;
  }
  return (
    <div className="post-intup">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.change}
        value={props.value}
      />
      <div className={inputBtn.join(" ")} onClick={props.click}>
        &#10095;
      </div>
    </div>
  );
};

export default input;
