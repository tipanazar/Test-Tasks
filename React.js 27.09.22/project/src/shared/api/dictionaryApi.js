import axios from "axios";

const BASE_URL = "https://jetup--json-server.herokuapp.com/words";

export const getWordsApi = async () => {
  return await axios.get(BASE_URL);
};

export const addWordApi = async (newWordData) => {
  return await axios.post(BASE_URL, newWordData);
};

export const deleteWordApi = async (wordId) => {
  return await axios.delete(`${BASE_URL}/${wordId}`);
};
