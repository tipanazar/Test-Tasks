import { getNotes } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector(".tableBody");

const fillTheTable = async () => {
  try {
    const data = await getNotes();
    const notes = data
      .sort((firstNote, secondNote) => firstNote.created - secondNote.created)
      .map((note) => {
        const { name, category, content, dates, created } = note;
        return noteMarkup(name, category, content, dates, created);
      });

    tableBody.insertAdjacentHTML("afterbegin", notes.join(""));
  } catch (err) {
    console.log(err);
  }
};

fillTheTable();
