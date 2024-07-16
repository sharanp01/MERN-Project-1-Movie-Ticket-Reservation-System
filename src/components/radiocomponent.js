import React from "react";
import "../css/radioComponent.css";
const Radiocomponent = ({ text, changeSelection, data }) => {

    const handleChecked = (val) => {
        changeSelection(val)
    }
  return (
    <div name={text}  className={`form-check-label ${ data === text ? "active" : "inactive"}`} onClick={() => {handleChecked(text)}}>
      <span className="text">{text}</span>
    </div>
  );
};

export default Radiocomponent;
