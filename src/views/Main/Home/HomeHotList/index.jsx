import React, { useState, useEffect } from "react";
import api from "../../../../api/index";
import HomeHotView from "../HomeHotView";

const HomeHotList = (props) => {
  //list接受请求到的数据，在useState中初始化为一个数组
  const [list_1, setList_1] = useState([]);
  const [list_2, setList_2] = useState([]);
  const [city, setCity] = useState(props.city);

  useEffect(() => {
    api.getHomeHot1({ cityName: props.city }).then((res) => {
      //请求成功
      if (res.data.status === 200) {
        // console.log(res.data.data);
        setList_1(res.data.data);
        setCity(res.data.city);
      }
    });
  }, [props.city]); //只获取一次
  useEffect(() => {
    // console.log(props.city);
    api.getHomeHot1({ cityName: props.city }).then((res) => {
      //请求成功
      if (res.data.status === 200) {
        // console.log(res.data.data);
        setList_2(res.data.data);
        // console.lo(res.data.city);
        setCity(res.data.city);
      }
    });
  }, [props.city]); //只获取一次
  return (
    <div>
      {list_1.length > 0 ? (
        <HomeHotView data={list_1} city={city} title="热门商品" />
      ) : (
        <div>等待数据加载</div>
      )}
      {list_2.length > 0 ? (
        <HomeHotView data={list_2} city={city} title="新品推荐" />
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  );
};

export default HomeHotList;
