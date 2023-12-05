import { createSlice } from "@reduxjs/toolkit";
import watches from "../data/watch.json";

interface iState {
  cart: any[];
}

const initialState: iState = {
  cart: [],
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const check = state.cart.find((el: any) => el.id === payload.id);

      if (check) {
        check.QTY += 1;
      } else {
        state.cart.push({ ...payload, QTY: 1 });
      }
    },
    reduceCart: (state, { payload }) => {
      const check = state.cart.find((el: any) => el.id === payload.id);

      if (check.QTY > 0) {
        check.QTY -= 1;
      } else if (check.QTY === 0) {
        const c = state.cart.filter((el) => el.id !== payload.id);
        state.cart = c;
      }
    },
  },
});

export const { addCart, reduceCart } = reduxState.actions;

export default reduxState.reducer;
