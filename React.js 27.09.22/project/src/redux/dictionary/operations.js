import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getWordsApi,
  addWordApi,
  deleteWordApi,
} from "../../shared/api/dictionaryApi";

export const getWords = createAsyncThunk(
  "words/getWords",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getWordsApi();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addWord = createAsyncThunk(
  "words/addWord",
  async (newWord, { rejectWithValue }) => {
    try {
      return await addWordApi(newWord);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (wordId, { rejectWithValue }) => {
    try {
      return await deleteWordApi(wordId);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
