import { configureStore } from "@reduxjs/toolkit";
const firstReducer = (state = [], action) => {};
export const store = configureStore({ reducer: { first: firstReducer } });
