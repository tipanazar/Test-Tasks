import { createAsyncThunk } from "@reduxjs/toolkit";

import { norrisApi } from "../shared/api/norris-api";

export const getJoke = createAsyncThunk(
  "getJoke",
  async (_, { rejectWithValue }) => {
    try {
      return await norrisApi.getJoke();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
