<!--
 * @Author       : WePD
 * @Date         : 2021-11-27 22:51:50
-->

### 技术栈

React + redux + react-router + axios + ReactHooks

### 步骤

#### 1. 配置 less 环境

通过暴露 webpack 配置项， 仿照 css 环境添加 less 设置项

#### 2. 配置网络请求

```js
yarn add --save axios
```

#### 3. 配置初始化样式

引入初始化样式

#### 4. 实现首页展示

1. 创建页面
2. 创建路由
3. 底部导航
4. 轮播图
   按照 react-swipeable-views 官网完成
   在设置右下角同步的时候用到了 calssnames 这个插件实现了语法：`className={classNames({ 'selected': props.index === index })`
5. 搭建服务器环境，提供数据
   基于 express 搭建服务器，为页面提供数据
   跨域 -----> cors
6. axios 请求

#### 5. 实现城市管理

1. 首先实现城市的路由跳转
   1. 通过 leyout 设置二级路由
2. 城市页面实现
3. 公共头部
4. 点击头部箭头返回， ------》 `window.history.back()`
5. 基础 redux：存储城市页面，根据城市的不同，渲染不同的 UI

   - Store Actions Reducer
   - 安装依赖：

   ```js
     yarn add redux
     yarn add react-redux
     yarn add redux-devtools-extension
   ```

6. 关联 redux, _这个地方有很多不明白，需要再认真看一看_
7. 根据城市的切换需要渲染不同的主页
8. 城市列表
   - 安装依赖 yarn add react-city-select
   -
