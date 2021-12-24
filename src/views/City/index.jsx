import React from "react";
import CityHeader from "../../components/CityHeader";
import CityNow from "./CityNow";
import CityList from "./CityList";
import { CityLists } from "./CItyLists";
//关联redux
import { useDispatch, useSelector } from "react-redux";

import { changeCity } from "../../redux/actions";
export default function City(props) {
  // const [city, setCity] = useState("成都");
  const dispatch = useDispatch(); //返回action
  // console.log(dispatch);
  const selecter = useSelector((state) => state.city);
  // console.log(selecter);
  const cuerrentCity = (city) => {
    // console.log(city);
    //将取到的city存到redux中
    // setCity(city);
    dispatch(changeCity(city));
    props.history.push("/");
  };
  return (
    <div>
      <CityHeader title="城市选择" />
      <CityNow city={selecter.cityName} />
      <CityList onEvent={cuerrentCity} />
      <CityLists onEvent={cuerrentCity} />
    </div>
  );
}
