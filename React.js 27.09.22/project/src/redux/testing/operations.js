import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addNewTestApi,
  getTestsHistoryApi,
  removeTestFromHistoryApi,
} from "../../shared/api/testingHistoryApi";

export const getTestsHistory = createAsyncThunk(
  "history/getTestsHistory",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTestsHistoryApi();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addNewTest = createAsyncThunk(
  "history/addNewTest",
  async ({ testData }, { rejectWithValue }) => {
    try {
      const { data } = await addNewTestApi(testData);
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const removeTestFromHistory = createAsyncThunk(
  "history/removeTestFromHistory",
  async ({ testId }, { rejectWithValue }) => {
    try {
      const { status } = await removeTestFromHistoryApi(testId);
      if (status === 200) {
        return testId;
      }
      return;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
