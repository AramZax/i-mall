import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: [],
  },
  reducers: {
    increment: (state, { payload }) => {
      const id = payload?.payload;
      const { description, title, price, image } = payload;
      const existingItem = state.count.find((item) => item.id === id);
      if (existingItem) {
        toast("This item  already exists in the wish");
      } else {
        const newCount = [
          ...state.count,
          { id, description, title, price, image },
        ];
        state.count = newCount;
        localStorage.setItem("productWish", JSON.stringify(state.count));
        toast("So Easy");
      }
    },
    //decrement for remove item in likes
    decrement: (state) => {
      console.log(state, "stateByDecrement");
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
