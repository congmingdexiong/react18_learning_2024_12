import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addToNum } from './store/module/counterStore';
import { fetchChannelList } from './store/module/channelStrore';
export default function App(id) {
  const { count } = useSelector((state) => state.counter);
  // eslint-disable-next-line no-undef
  const [msg, setMsg] = useState('');
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { channelList } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('渲染了'); //每次渲染都会执行
  //   return () => {
  //     console.log('卸载了');
  //   };
  // }, []);

  const sendToElm = () => {
    if (window.elmApp?.ports?.receiveFromReact) {
      window.elmApp.ports.receiveFromReact.send('Hello from React!');
    }
  };

  // useEffect(() => {
  //   console.log("id:", id);

  //   const handler = (event) => {
  //     console.log('Received from Elm:', event.detail);
  //     setMsg(event.detail);
  //   };

  //   window.addEventListener('elm-to-react', handler);
  //   return () => window.removeEventListener('elm-to-react', handler);
  // }, []);

  useEffect(() => {
    // 注册消息接收函数
    window.reactMsgHandler[id] = (data) => {
      setMessage(data);
    };

    return () => {
      delete window.reactMsgHandler[id];
    };
  }, [id]);

  return (
    <div className="App">
      <h4>React组件：{id}</h4>
      <p>接收数据：{message}</p>
      {/* Message from Elm: {msg}
      <button
        onClick={() => {
          dispatch(sendToElm());
        }}
      >
        send to elm
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(addToNum(10));
        }}
      >
        add to 10
      </button>{' '}
      <button
        onClick={() => {
          dispatch(addToNum(20));
        }}
      >
        add to 20
      </button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
