import axios from "axios";

const baseUrl = "http://localhost:3000/notes";

export const getNotes = async () => {
  return await axios.get(baseUrl);
};

export const addNote = async (formData) => {
  return await axios.post(baseUrl, formData);
};

export const editNote = async (noteId, formData) => {
  return await axios.patch(`${baseUrl}/${noteId}`, formData);
};

export const archiveNote = async (noteId) => {
  return await axios.patch(`${baseUrl}/${noteId}`, { archived: true });
};
