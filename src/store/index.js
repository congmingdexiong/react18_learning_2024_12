import { configureStore } from '@reduxjs/toolkit';
import counterReduer from './module/counterStore';
import channelReducer from './module/channelStrore';

const store = configureStore({
  reducer: { counter: counterReduer, channel: channelReducer }
});

export default store;
