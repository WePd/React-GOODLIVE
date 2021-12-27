import './style.css';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function SearchInput(props) {
  const [keywords, setKeyWords] = useState('');
  function keyUpHandle(e) {
    if (keywords) {
      if (e.keyCode === 13) {
        console.log(props);
        props.history.push('/search/' + keywords);
      }
    }
  }
  function changeHandle(e) {
    setKeyWords(e.target.value);
  }
  return (
    <input
      type="text"
      className="search-input"
      onKeyUp={keyUpHandle}
      value={keywords}
      onChange={changeHandle}
    />
  );
}

export default withRouter(SearchInput);
