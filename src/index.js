import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index.js';

window.reactRegistry = {};        // 存放每个 React 实例的引用
window.reactMsgHandler = {};      // 每个组件的“接收消息”函数
window.inputs = {}

function renderCmp(id) {
  if (!id) {
    console.log("id不存在");
    return;
  }

  const el = document.getElementById(id);
  if (!el) {
    console.log("root element不存在！！");
    return;
  }

  let root = window.reactRegistry[id];

  if (!root) {
    root = ReactDOM.createRoot(el);
    window.reactRegistry[id] = root;
  }

  root.render(
    <Provider store={store}>
      <App id={id} />
    </Provider>
  );
}
window.renderCmp = renderCmp;
console.log('123:', 123);

window.renderCmp('root')


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// reactBridge.js
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function ElmControlledReact({ initialValue, onChange }) {
//   const [value, setValue] = useState(initialValue);

//   function handleChange(e) {
//     const newVal = e.target.value;
//     setValue(newVal);
//     onChange(newVal);
//   }

//   return <input value={value} onChange={handleChange} placeholder="Type here" />;
// }

// export function renderReactComponent(containerId, props) {
//   const container = document.getElementById(containerId);
//   if (!container) {
//     console.error(`Container ${containerId} not found`);
//     return;
//   }
//   const root = ReactDOM.createRoot(container);
//   root.render(
//     <ElmControlledReact
//       initialValue={props.initialValue}
//       onChange={props.onChange}
//     />
//   );
// }
// window.renderReactComponent = renderReactComponent;