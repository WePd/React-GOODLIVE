import React from "react";
import NavHeader from "../../../components/NavHeader";
import Swiper from "../../../components/Swiper";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";

import { useSelector } from "react-redux";
import HomeHotList from "./HomeHotList";

const Home = () => {
  //在城市页面取得的城市名称
  const selector = useSelector((state) => state.city);
  // console.log(selector);
  return (
    <div>
      <NavHeader city={selector.cityName} />
      <Swiper banners={[banner1, banner2, banner3]} />
      <HomeHotList city={selector.cityName} />
    </div>
  );
};

export default Home;
