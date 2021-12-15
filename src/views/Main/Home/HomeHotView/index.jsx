import React from "react";
import "./index.css";

const HomeHotView = (props) => {
  const data = props.data;
  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {data.map((element, index) => {
            return (
              <li key={index}>
                <a href={element.link}>
                  <img src={element.img} alt="" />
                  <span>
                    {props.city}
                    {element.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeHotView;
