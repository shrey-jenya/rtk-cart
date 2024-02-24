import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
});
console.log(STATUSES);
const productSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		status: STATUSES.IDLE,
	},
	reducers: {
		setProducts(state, action) {
			state.data = action.payload;
		},
	},
});
export const { add, remove } = productSlice.actions;
export default productSlice.reducer;
