import { getNotes } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector("tbody.tableBody");
const statTableBody = document.querySelector("tbody.statisticsTableBody");

const fillTheTable = async () => {
  let statTableArr = [];
  let statTableCategories = {
    Task: { active: 0, archived: 0 },
    Idea: { active: 0, archived: 0 },
    "Random Thought": { active: 0, archived: 0 },
  };

  try {
    const { data } = await getNotes();
    const notes = data
      .sort((firstNote, secondNote) => firstNote.created - secondNote.created)
      .map((note) => {
        const { name, category, content, dates, created, id, archived } = note;
        if (archived) {
          statTableCategories[category].archived++;
          return;
        }

        statTableCategories[category].active++;

        return noteMarkup({ name, category, content, dates, created, id });
      });
    tableBody.insertAdjacentHTML("afterbegin", notes.join(""));

    for (let statTableCategory in statTableCategories) {
      const statTableItem = {
        category: statTableCategory,
        active: statTableCategories[statTableCategory].active,
        archived: statTableCategories[statTableCategory].archived,
      };
      statTableArr.push(noteMarkup({ statTableItem }));
    }
    statTableBody.insertAdjacentHTML("beforeend", statTableArr.join(""));
  } catch ({ message }) {
    console.log(message);
  }
};

fillTheTable();
