import React from "react";
import classNames from "classnames";

import './index.css'

const Pagination = (props) => {
  // console.log(props) //{bannerSum: 3} index={}
  const arr = new Array(props.bannerSum).fill(1)
  // console.log(arr);
  return (
    <div className='swiper-pagination'>
      <ul>
        {
          arr.map((ele, index) => {
            return <li key={index} className={classNames({ 'selected': props.index === index })}></li> //这样写语法不支持需要安装classnames
          })
        }
      </ul>
    </div >
  )
}

export default Pagination