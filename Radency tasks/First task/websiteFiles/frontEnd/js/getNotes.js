import { getNotes } from "./api.js";
import {
  trashBinIcon,
  bulbIcon,
  gearsIcon,
  shoppingCartIcon,
  addToArchiveIcon,
  penIcon,
} from "./helpers/iconsImport.js";

const tableBody = document.querySelector(".tableBody");

const fillTheTable = async () => {
  try {
    const data = await getNotes();
    const parceDate = (date) => {
      return new Date(date).toLocaleString().split(", ")[0];
    };

    const notes = data
      .sort((firstNote, secondNote) => firstNote.created - secondNote.created)
      .map((note) => {
        const icon =
          (note.category === "Task" && shoppingCartIcon) ||
          (note.category === "Random thought" && gearsIcon) ||
          (note.category === "Idea" && bulbIcon);

        const datesArr = [];
        if (note.dates.length) {
          for (let date of note.dates) {
            datesArr.push(parceDate(Number.parseInt(date)));
          }
        }

        return `<tr class="tableNoteBlock">
    <td class="tableNoteNameBlock">
    <div class="iconWrapper">
    <svg class="noteCategoryIcon">
    <use href="${icon}" />
    </svg>
    </div>
    <p class="tableText tableTextName">${note.name}</p>
    </td>
    <td>${parceDate(note.created)}</td>
    <td>${note.category}</td>
    <td><p class="tableText">${note.content}</p></td>
    <td><p class="tableText dates">${datesArr.join(", ")}</p></td>
    <td class="tableButtonsBlock">
    <button class="noteButton" type="button">
    <svg class="noteButtonIcon">
    <use href="${penIcon}" />
    </svg></button
    ><button class="noteButton" type="button">
    <svg class="noteButtonIcon">
    <use href="${addToArchiveIcon}" />
    </svg>
    </button>
    <button class="noteButton" type="button">
    <svg class="noteButtonIcon">
    <use href="${trashBinIcon}" />
    </svg>
    </button>
    </td>
    </tr>`;
      });

    tableBody.insertAdjacentHTML("afterbegin", notes.join(""));
  } catch (err) {
    console.log(err);
  }
};

fillTheTable();
