import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./fetures/counter/CounterSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});
