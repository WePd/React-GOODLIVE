import React from 'react'
import './index.css'


export default function CityHeader(props) {
  const handelBack = () => {
    window.history.back();
  }
  return (
    <div id="common-header">
      <span className="back-icon" onClick={handelBack}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}
