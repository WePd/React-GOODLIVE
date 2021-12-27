import React, { useRef, useEffect } from 'react';

export default function LoadMore() {
  const more = useRef();
  useEffect(() => {
    //监听页面高度
    const pageHigh = document.documentElement.clientHeight; //667
    window.addEventListener('scroll', () => {
      if (more.current) {
        if (pageHigh > more.current.getBoundingClientRect().top) {
          console.log('kokoko');
        }
      }
    });
  });
  return <div ref={more}>加载更多</div>;
}
