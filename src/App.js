﻿import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addToNum } from './store/module/counterStore';
import { fetchChannelList } from './store/module/channelStrore';

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { channelList } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  return (
    <div className="App">
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
      </ul>
    </div>
  );
}
