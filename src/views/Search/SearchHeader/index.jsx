import React from 'react';
import SearchInput from '../../../components/SearchInput/index';
import './style.css';

export default function SearchHeader() {
  function handleBack() {
    window.history.back();
  }
  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={handleBack}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput />
      </div>
    </div>
  );
}
