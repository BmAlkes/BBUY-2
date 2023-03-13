import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import filteredReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filteredReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
