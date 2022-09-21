import { addNote } from "./api.js";
import {
  trashBinIcon,
  bulbIcon,
  gearsIcon,
  shoppingCartIcon,
  addToArchiveIcon,
  penIcon,
} from "./helpers/iconsImport.js";

const tableBody = document.querySelector(".tableBody");
const createNoteBtn = document.querySelector("button#createNoteBtn");
const resetNoteButton = document.querySelector("button.resetNoteButton");
const createNoteForm = document.querySelector("form#createNoteForm");

let firstOpen = true;

createNoteBtn.addEventListener("click", () => {
  createNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  createNoteBtn.type = firstOpen ? "button" : "submit";
  firstOpen = false;
});

resetNoteButton.addEventListener("click", () => {
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  firstOpen = true;
});

createNoteForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const { name, category, content, date } = ev.target;

  if (
    name.value !== "" ||
    category.value !== "Choose category" ||
    content.value !== "" ||
    date.value !== ""
  ) {
    const formData = {
      name: name.value,
      created: new Date().getTime(),
      category: category.value,
      content: content.value,
      dates: date.value.length
        ? [new Date(date.value).getTime().toString()]
        : [],
    };

    firstOpen = true;
    createNoteForm.reset();
    createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
    try {
      const result = await addNote(formData);
      console.log(result);
      const parceDate = (date) => {
        return new Date(date).toLocaleString().split(", ")[0];
      };
      if (result.status === 201) {
        const { name, category, content, dates, created } = result.data;
        const icon =
          (category === "Task" && shoppingCartIcon) ||
          (category === "Random thought" && gearsIcon) ||
          (category === "Idea" && bulbIcon);

        const datesArr = [];
        if (dates) {
          for (let date of dates) {
            datesArr.push(parceDate(Number.parseInt(date)));
          }
        }

        const newNoteMarkup = `<tr class="tableNoteBlock">
        <td class="tableNoteNameBlock">
        <div class="iconWrapper">
        <svg class="noteCategoryIcon">
        <use href="${icon}" />
        </svg>
        </div>
        <p class="tableText tableTextName">${name}</p>
        </td>
        <td>${parceDate(created)}</td>
        <td>${category}</td>
        <td><p class="tableText">${content}</p></td>
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

        tableBody.insertAdjacentHTML("beforeend", newNoteMarkup);
      }
    } catch (err) {
      console.log(err);
    }
  }
});
