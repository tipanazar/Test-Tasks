import { getNotes } from "./api.js";

const tableBody = document.querySelector(".tableBody");

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
        <use href="./sprite.svg#${iconId}" />
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
          <svg class="noteButtonIcon firstIcon">
            <use href="./sprite.svg#pen" />
          </svg></button
        ><button class="noteButton" type="button">
          <svg class="noteButtonIcon">
            <use href="./sprite.svg#add-to-archive" />
          </svg>
        </button>
        <button class="noteButton" type="button">
          <svg class="noteButtonIcon">
            <use href="./sprite.svg#trash-bin" />
          </svg>
        </button>
      </td>
    </tr>`;
    });

  tableBody.insertAdjacentHTML("afterbegin", notes.join(""));
};

fillTheTable();
