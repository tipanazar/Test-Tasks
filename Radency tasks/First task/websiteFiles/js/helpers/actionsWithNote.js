import { archiveNote, deleteNote, getNotes } from "../api.js";
import { onCreateNoteFormSubmit } from "../createNote.js";
import { onEditNoteFormSubmit } from "../editNote.js";

const noteTable = document.querySelector("table.noteTable");
const tableBody = document.querySelector("tbody.tableBody");
const createNoteForm = document.querySelector("form#createNoteForm");
const editNoteForm = document.querySelector("form#editNoteForm");
const createNoteBtn = document.querySelector("button#createNoteBtn");
const editNoteBtn = document.querySelector("button#editNoteBtn");
const resetNoteButton = document.querySelectorAll("button.resetNoteButton");

let firstOpen = true;
let editNoteId = 0;

// - - - Create note form actions below
createNoteForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  onCreateNoteFormSubmit(ev.target);
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  ev.target.reset();
  firstOpen = true;
});

createNoteBtn.addEventListener("click", () => {
  createNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  createNoteBtn.type = firstOpen ? "button" : "submit";
  firstOpen = false;
});

resetNoteButton[0].addEventListener("click", onResetForm);

// - - - Edit note form actions below
editNoteForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const result = await onEditNoteFormSubmit(ev.target, editNoteId);
  if (result === "done") {
    onResetForm();
  }
});

function onEditNote(noteId) {
  const formElements = document.querySelectorAll(`p#a${noteId}`);
  editNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  createNoteBtn.style = "visibility: hidden; height: 0;";
  editNoteBtn.style = "visibility: visible; height: 50px;";

  editNoteForm.name.value = formElements[0].textContent;
  editNoteForm.category.value = formElements[1].textContent;
  editNoteForm.content.value = formElements[2].textContent;
  editNoteForm.dates.value = formElements[3].textContent
    .split(", ")
    .join(";\n");
  editNoteId = noteId;
}

resetNoteButton[1].addEventListener("click", onResetForm);

// - - - Other stuff
function onResetForm() {
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  firstOpen = true;
  editNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  editNoteBtn.style = "visibility: hidden; height: 0;";
  createNoteBtn.style = "visibility: visible; height: 50px;";
}

noteTable.addEventListener("click", (ev) => {
  const evIdArr = ev.target.id.split(", ");
  evIdArr[0] === "edit" && onEditNote(evIdArr[1]);
  evIdArr[0] === "archive" && onArchiveNote(evIdArr[1]);
  evIdArr[0] === "delete" && onDeleteNote(evIdArr[1]);
  evIdArr[0] === "archiveAll" && onArchiveAllNotes();
  evIdArr[0] === "deleteAll" && onDeleteAllNotes();
});

const onArchiveNote = async (noteId) => {
  try {
    const { data } = await archiveNote(noteId);
    document.querySelector(`tr#a${noteId}`).remove();
    const active = document.querySelector(
      `p#${data.category.split(" ").join("")}Active`
    );
    const archived = document.querySelector(
      `p#${data.category.split(" ").join("")}Archived`
    );
    active.textContent = Number.parseInt(active.textContent) - 1;
    archived.textContent = Number.parseInt(archived.textContent) + 1;
  } catch ({ message }) {
    console.log(message);
  }
};

const onDeleteNote = async (noteId) => {
  try {
    await deleteNote(noteId);
    const deleteNoteCategory = document
      .querySelectorAll(`p#a${noteId}`)[1]
      .textContent.split(" ")
      .join("");
    const active = document.querySelector(`p#${deleteNoteCategory}Active`);
    active.textContent = Number.parseInt(active.textContent) - 1;
    document.querySelector(`tr#a${noteId}`).remove();
  } catch ({ message }) {
    console.log(message);
  }
};

const onArchiveAllNotes = async () => {
  try {
    const { data } = await getNotes();
    for (let item of data) {
      if (!item.archived) {
        await archiveNote(item.id);
        const active = document.querySelector(
          `p#${item.category.split(" ").join("")}Active`
        );
        const archived = document.querySelector(
          `p#${item.category.split(" ").join("")}Archived`
        );
        active.textContent = Number.parseInt(active.textContent) - 1;
        archived.textContent = Number.parseInt(archived.textContent) + 1;
      }
    }
    tableBody.innerHTML = "";
  } catch ({ message }) {
    console.log(message);
  }
};

const onDeleteAllNotes = async () => {
  try {
    const { data } = await getNotes();
    for (let item of data) {
      if (!item.archived) {
        await deleteNote(item.id);
        const active = document.querySelector(
          `p#${item.category.split(" ").join("")}Active`
        );
        active.textContent = Number.parseInt(active.textContent) - 1;
      }
    }
    tableBody.innerHTML = "";
  } catch ({ message }) {
    console.log(message);
  }
};
