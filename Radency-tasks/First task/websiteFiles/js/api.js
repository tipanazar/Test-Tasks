import axios from "axios";

const baseUrl = "https://radency--json-server.herokuapp.com/notes";

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

export const deleteNote = async (noteId) => {
  return await axios.delete(`${baseUrl}/${noteId}`);
};
