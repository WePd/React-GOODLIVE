### 技术栈
React + redux + react-router + axios + ReactHooks


### 步骤
#### 1. 配置less环境
通过暴露webpack配置项， 仿照css环境添加less设置项

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
  按照 react-swipeable-views官网完成
  在设置右下角同步的时候用到了calssnames这个插件实现了语法：`className={classNames({ 'selected': props.index === index })`
5. 搭建服务器环境，提供数据
  基于express搭建服务器，为页面提供数据
  跨域 -----> cors
6. axios请求

