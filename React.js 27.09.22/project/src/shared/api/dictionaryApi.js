import axios from "axios";

const BASE_URL = "https://jetup--json-server.herokuapp.com/words";

export const getWordsApi = async () => {
  return await axios.get(BASE_URL);
};

export const addWordApi = async (newWord) => {
  return await axios.post(BASE_URL, newWord);
};

export const deleteWordApi = async (wordId) => {
  return await axios.delete(BASE_URL, wordId);
};
