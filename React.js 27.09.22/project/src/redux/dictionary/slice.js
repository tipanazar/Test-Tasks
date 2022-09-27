import { createSlice } from "@reduxjs/toolkit";

import { getWords, addWord, deleteWord } from "./operations";

const initialState = {
  wordsArr: [],
  loading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  extraReducers: {
    [getWords.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getWords.fulfilled]: (state, { payload }) => {
      state.wordsArr = payload;
      state.loading = false;
    },
    [getWords.rejected]: (state, { payload }) => {
      state.error = payload.message;
      console.log(payload);
      state.loading = false;
    },

    [addWord.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addWord.fulfilled]: (state, { payload }) => {
      console.log(payload);
      //   state.wordsArr = payload;
      state.loading = false;
    },
    [addWord.rejected]: (state, { payload }) => {
      state.error = payload.message;
      console.log(payload);
      state.loading = false;
    },

    [deleteWord.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteWord.fulfilled]: (state, { payload }) => {
      console.log(payload);
      //   state.wordsArr = payload;
      state.loading = false;
    },
    [deleteWord.rejected]: (state, { payload }) => {
      state.error = payload.message;
      console.log(payload);
      state.loading = false;
    },
  },
});

export default wordsSlice.reducer;
