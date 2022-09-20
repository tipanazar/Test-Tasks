import { getNotes } from "./api.js";

const table = document.querySelector("tbody");

const fillTheTable = async () => {
  const data = await getNotes();
  const parceDate = (date) => {
    return new Date(date).toLocaleString().split(", ")[0];
  };

  const notes = data
    .sort((firstNote, secondNote) => firstNote.created - secondNote.created)
    .map((note) => {
      const iconId =
        (note.category === "Task" && "shopping-cart") ||
        (note.category === "Random thought" && "gears") ||
        (note.category === "Idea" && "bulb");

      const dates = [];
      if (note.dates.length) {
        for (let date of note.dates) {
          dates.push(parceDate(Number.parseInt(date)));
        }
      }

      console.log(dates);
      return `<tr><td><div class="iconBlock"><svg class='tableIcon'>
      <use href="./sprite.svg#${iconId}"/>
    </svg></div><span class="noteName">${note.name}</span></td><td>${parceDate(
        note.created
      )}</td><td>${note.category}</td><td>${note.content}</td><td>${dates.join(
        ", "
      )}</td><td>*icons*</td></tr>`;
    });
  table.insertAdjacentHTML("beforeend", notes.join(" "));
};

fillTheTable();
