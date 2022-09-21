import { addNote } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector("tbody.tableBody");
const resetNoteButton = document.querySelector("button.resetNoteButton");
const createNoteForm = document.querySelector("form#createNoteForm");
const createNoteBtn = document.querySelector("button#noteFormSubmitBtn");

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

  const formData = {
    name: name.value,
    created: new Date().getTime(),
    category: category.value,
    content: content.value,
    dates: date.value.length ? [new Date(date.value).getTime().toString()] : [],
  };

  firstOpen = true;
  createNoteForm.reset();
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";

  try {
    const result = await addNote(formData);
    if (result.status === 201) {
      const { name, category, content, dates, created, id } = result.data;
      const newNoteMarkup = noteMarkup(
        name,
        category,
        content,
        dates,
        created,
        id
      );

      tableBody.insertAdjacentHTML("beforeend", newNoteMarkup);
    }
  } catch (err) {
    console.log(err);
  }
});
