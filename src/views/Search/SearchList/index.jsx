import React, { useState, useEffect } from 'react';
import SearchListView from '../SearchListView';
import api from '../../../api/index';
import LoadMore from '../../../components/LoadMore';

export default function SearchList(props) {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    api
      .search({
        search: props.search,
      })
      .then((res) => {
        if (res.status === 200) {
          setSearchData(res.data.data.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView searchData={searchData} />
      ) : (
        <div>等待数据加载！！</div>
      )}
      <LoadMore />
    </div>
  );
}
