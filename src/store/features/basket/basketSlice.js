import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    userBasket: [],
  },
  reducers: {
    incrementBasket: (state, { payload }) => {
      const { id, title, description, image, price } = payload;
      const existingItem = state?.userBasket.find((item) => item.id === id);
      if (existingItem) {
        toast("This item alredy exists in the basket");
      } else {
        const newBasket = [
          ...state.userBasket,
          { id, title, description, image, price },
        ];
        state.userBasket = newBasket;
        localStorage.setItem("userBassket", JSON.stringify(state.userBasket));
        toast("item in your basket");
      }
    },
    decrementBasket: (state, { payload }) => {},
  },
});

export const { incrementBasket, decrementBasket } = basketSlice.actions;

export default basketSlice.reducer;
