import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index.js';

window.reactRegistry = {};        // 存放每个 React 实例的引用
window.reactMsgHandler = {};      // 每个组件的“接收消息”函数

window.renderCmp = renderCmp;
function renderCmp(id) {
  if (id) {
    const root = ReactDOM.createRoot(document.getElementById(id));
    if (root) {
      root.render(
        <Provider store={store}>
          <App id={id} />
        </Provider>
        // <React.StrictMode>
        // </React.StrictMode>
      );
      window.reactRegistry[id] = root;

    } else {
      console.log("root element不存在！！");

    }

  } else {
    console.log("id不存在");

  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
