import { createSlice } from "@reduxjs/toolkit";
import itemList from "../compenents/Data";

export const itemSlice = createSlice({
  name: "money",
  initialState: {
    itemLists: itemList,
    initialMoney: 100000000000,
  },
  reducers: {
    addBasket: (state, action) => {
      const data = state.itemLists.findIndex(
        (data) => data.title === action.payload.title
      );
      state.itemLists[data].amount += 1;
    },
    increaseAmount: (state, action) => {
      const data = state.itemLists.findIndex(
        (data) => data.title === action.payload.title
      );
      state.itemLists[data].amount += 1;
    },
    decreaseAmount: (state, action) => {
      const data = state.itemLists.findIndex(
        (data) => data.title === action.payload.title
      );
      state.itemLists[data].amount -= 1;
    },
  },
});

export default itemSlice.reducer;
export const { addBasket, increaseAmount, decreaseAmount } = itemSlice.actions;
