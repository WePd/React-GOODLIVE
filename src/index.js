import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/common.css'
import './assets/css/font.css'
import './assets/css/iconfont.css'
import AppRouter from './router/index'
import './assets/csstest/iconfont.css'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);