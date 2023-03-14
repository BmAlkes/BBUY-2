import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderhistory: [],
  totalOrderAmount: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS(state, action) {
      state.orderhistory = action.payload;
    },
    CALC_TOTAL_ORDER_AMOUNT(state, action) {
      const array = [];
      state.orderhistory.map((item) => {
        const { orderAmount } = item;
        return array.push(orderAmount);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.totalOrderAmount = totalAmount;
    },
  },
});

export const { STORE_ORDERS, CALC_TOTAL_ORDER_AMOUNT } = orderSlice.actions;

export default orderSlice.reducer;
