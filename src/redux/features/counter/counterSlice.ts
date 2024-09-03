import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type State = {
  counter: number
}
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state: State) => {
      state.counter++;
    }
  }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
