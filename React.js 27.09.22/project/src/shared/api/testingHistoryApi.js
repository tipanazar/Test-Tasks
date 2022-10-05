import axios from "axios";

const BASE_URL = "https://jetup--json-server.herokuapp.com/history";

export const getTestsHistoryApi = async () => {
  return await axios.get(BASE_URL);
};

export const addNewTestApi = async ({ newTest }) => {
  return await axios.post(BASE_URL, newTest);
};

export const removeTestFromHistoryApi = async ({ testId }) => {
  return await axios.delete(`${BASE_URL}/${testId}`);
};
