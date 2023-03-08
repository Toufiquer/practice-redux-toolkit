import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  isLoading: false,
  isError: false,
  error: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});
export default searchSlice.reducer;
export const { addSearch } = searchSlice.actions;
