import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const bookmarksSlice = createSlice({
	name: "bookmarks",

	initialState,
	reducers: {
		addBookmark: (state, action) => {
			console.log("add", action.payload.title);
			// on ajoute l'el au tableau bookmarks
			state.value.push(action.payload);
			// state.isBookmarked = true;
		},
		removeBookmark: (state, action) => {
			console.log("remove", action.payload.title);
			// on creer un new tableau sans l'element avec le titre sur lequel on a clique
			state.value = state.value.filter((bookmark) => bookmark.title !== action.payload.title);
		},
	},
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
