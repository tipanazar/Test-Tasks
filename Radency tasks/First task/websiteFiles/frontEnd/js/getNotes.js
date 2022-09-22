import { getNotes } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector("tbody.tableBody");

const fillTheTable = async () => {
  try {
    const { data } = await getNotes();
    const notes = data
      .sort((firstNote, secondNote) => firstNote.created - secondNote.created)
      .map((note) => {
        const { name, category, content, dates, created, id } = note;
        return noteMarkup(name, category, content, dates, created, id);
      });

    tableBody.insertAdjacentHTML("afterbegin", notes.join(""));
  } catch ({ message }) {
    console.log(message);
  }
};

fillTheTable();
