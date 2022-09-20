import { addNote } from "./api.js";

const createNoteBtn = document.querySelector("button#createNoteBtn");
const resetNoteButton = document.querySelector("button.resetNoteButton");
const createNoteForm = document.querySelector("form#createNoteForm");

// console.log(createNoteForm);

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

createNoteForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const { name, category, content, date } = ev.target;

  if (
    name.value !== "" ||
    category.value !== "Choose category" ||
    content.value !== "" ||
    date.value !== ""
  ) {
    // const currentTime = new Date();
    // console.log(new Date().getTime())
    const formData = {
      name: name.value,
      created: new Date().getTime(),
      category: category.value,
      content: content.value,
      dates: [
        date.value.length ? new Date(date.value).getTime().toString() : "",
      ],
    };

    firstOpen = true;
    createNoteForm.reset();
    createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
    // addNote(formData);
    console.log(formData);
  }
});
