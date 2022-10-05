import { createSlice } from "@reduxjs/toolkit";
import {
  addNewTest,
  getTestsHistory,
  removeTestFromHistory,
} from "./operations";

const initialState = {
  historyArr: null,
  error: null,
  loading: false,
};

const testsHistorySlice = createSlice({
  name: "testsHistory",
  initialState,
  extraReducers: {
    [getTestsHistory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTestsHistory.fulfilled]: (state, { payload }) => {
      payload.sort(
        (firstItem, secondItem) =>
          secondItem.creationDate - firstItem.creationDate
      );
      state.historyArr = payload;
      state.loading = false;
    },
    [getTestsHistory.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
    },

    // - - - - - - - - - - - - - - - - - - - - -

    [addNewTest.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addNewTest.fulfilled]: (state, { payload }) => {
      const sortedArr = [...state.historyArr, payload].sort(
        (firstItem, secondItem) =>
          secondItem.creationDate - firstItem.creationDate
      );
      state.historyArr = sortedArr;
      state.loading = false;
    },
    [addNewTest.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
    },

    // - - - - - - - - - - - - - - - - - - - - -

    [removeTestFromHistory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [removeTestFromHistory.fulfilled]: (state, { payload }) => {
      const filteredArr = [...state.historyArr].filter(
        (item) => item.id !== payload
      );
      state.historyArr = filteredArr;
      state.loading = false;
    },
    [removeTestFromHistory.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
    },
  },
});

export default testsHistorySlice.reducer;
