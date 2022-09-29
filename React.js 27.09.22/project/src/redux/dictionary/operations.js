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
  async ({ orig, translated }, { rejectWithValue }) => {
    try {
      const newWordData = {
        creationDate: new Date().getTime(),
        translation: {
          orig: orig,
          translated: translated,
        },
      };
      const { data } = await addWordApi(newWordData);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (wordId, { rejectWithValue }) => {
    try {
      const { status } = await deleteWordApi(wordId);
      if (status === 200) {
        return wordId;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
