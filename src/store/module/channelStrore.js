import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const channelStore = createSlice({
  name: 'channel',
  // 初始化state
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    }
  }
});

const { setChannels } = channelStore.actions;
const reducer = channelStore.reducer;

export { setChannels };

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('https://geek.itheima.net/v1_0/channels');
    dispatch(setChannels(res.data.data.channels));
  };
};
export default reducer;
export { fetchChannelList };
