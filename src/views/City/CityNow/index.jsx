import React from "react";
import "./index.css";

export default function CityNow(props) {
  // console.log(props);
  return (
    <div className="current-city">
      <h2>当前城市: {props.city}</h2>
    </div>
  );
}
