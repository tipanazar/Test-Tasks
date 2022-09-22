import { onCreateNoteFormSubmit } from "../createNote.js";
import {onEditNoteFormSubmit} from '../editNote.js'


const tableBody = document.querySelector("tbody.tableBody");
const createNoteForm = document.querySelector("form#createNoteForm");
const editNoteForm = document.querySelector("form#editNoteForm");
const createNoteBtn = document.querySelector("button#createNoteBtn");
const editNoteBtn = document.querySelector("button#editNoteBtn");
const resetNoteButton = document.querySelectorAll("button.resetNoteButton");

let firstOpen = true;

// - - - Create note form actions below
createNoteForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  onCreateNoteFormSubmit(ev.target);
  firstOpen = true;
});
createNoteBtn.addEventListener("click", () => {
  createNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  createNoteBtn.type = firstOpen ? "button" : "submit";
  firstOpen = false;
});
resetNoteButton[0].addEventListener("click", onResetForm);

// - - - Edit note form actions below
editNoteForm.addEventListener("submit", (ev) => {
  onEditNoteFormSubmit()
});
function onEditNote(noteId) {
  // console.log("Edit, ", noteId);
  editNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  createNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
  createNoteBtn.style = "visibility: hidden; height: 0;";
  editNoteBtn.style = "visibility: visible; height: 50px;";
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

tableBody.addEventListener("click", (ev) => {
  const evIdArr = ev.target.id.split(", ");
  evIdArr[0] === "edit" && onEditNote(evIdArr[1]);
  evIdArr[0] === "archive" && onArchiveNote(evIdArr[1]);
  evIdArr[0] === "delete" && onDeleteNote(evIdArr[1]);
});

const onArchiveNote = (noteId) => {
  console.log("Archive, ", noteId);
};

const onDeleteNote = (noteId) => {
  console.log("Delete, ", noteId);
};
