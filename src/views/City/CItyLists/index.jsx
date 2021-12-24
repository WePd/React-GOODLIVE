import React, { useState, useEffect } from "react";
import CitySelect from "react-city-select";
import data from "../../../data/city";
import "./index.css";
import api from "../../../api";

export const CityLists = (props) => {
  const [cityData, setCityData] = useState(data);

  const handleSelectCity = (cityData) => {
    props.onEvent(cityData.name);
  };
  useEffect(() => {
    // api.getCityList().then((res) => console.log(res.data.result.citylist));
    api.getCityList().then((res) => setCityData(res.data.result.citylist));
  }, []);
  return (
    <div className="cityList">
      <h3>更多城市</h3>
      <CitySelect
        // 传入数据
        data={cityData}
        // 传入回调
        onSelectItem={handleSelectCity}
      ></CitySelect>
    </div>
  );
};
