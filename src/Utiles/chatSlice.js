import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Live_Chat_Count } from "./Constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: {
      reducer(state, action) {
        if (state.messages.length >= Live_Chat_Count) {
          state.messages.pop();
        }
        state.messages.unshift(action.payload);
      },
      prepare(data) {
        return { payload: { ...data, id: nanoid() } };
      },
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
