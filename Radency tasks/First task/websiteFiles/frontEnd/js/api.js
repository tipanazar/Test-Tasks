import axios from "axios";

const baseUrl = "http://localhost:3000/notes";

export const getNotes = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const addNote = async (formData) => {
  return await axios.post(baseUrl, formData);
};
