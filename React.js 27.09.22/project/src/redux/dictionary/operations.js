import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getWordsApi,
  addWordApi,
  deleteWordApi,
  editWordApi,
} from "../../shared/api/dictionaryApi";

export const getWords = createAsyncThunk(
  "dictionary/getWords",
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
  "dictionary/addWord",
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

export const editWord = createAsyncThunk(
  "dictionary/editWord",
  async ({ editedWordData, id }, { rejectWithValue }) => {
    try {
      const { data } = await editWordApi(editedWordData, id);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "dictionary/deleteWord",
  async (wordId, { rejectWithValue }) => {
    try {
      const { status } = await deleteWordApi(wordId);
      if (status === 200) {
        return wordId;
      }
      return;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
