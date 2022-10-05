import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const hiddenArticleSlice = createSlice({
	name: "hiddenArticle",

	initialState,
	reducers: {
		addHiddenArticle: (state, action) => {
			// console.log("HIDE")
			state.value.push(action.payload);
		},
		removeHiddenArticle: (state, action) => {
			state.value = [];
		},
	},
});

export const { addHiddenArticle, removeHiddenArticle } = hiddenArticleSlice.actions;
export default hiddenArticleSlice.reducer;
