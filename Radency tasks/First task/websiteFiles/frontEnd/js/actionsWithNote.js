const tableBody = document.querySelector("tbody.tableBody");
const editNoteForm = document.querySelector("form#editNoteForm");
const noteFormSubmitBtn = document.querySelector("button#noteFormSubmitBtn");
const resetNoteButton = document.querySelectorAll("button.resetNoteButton");

tableBody.addEventListener("click", (ev) => {
  const evIdArr = ev.target.id.split(", ");
  evIdArr[0] === "edit" && editNote(evIdArr[1]);
  evIdArr[0] === "archive" && archiveNote(evIdArr[1]);
  evIdArr[0] === "delete" && deleteNote(evIdArr[1]);
  //   console.log(evIdArr);
});

resetNoteButton[1].addEventListener("click", () => {
  editNoteForm.style = "visibility: hidden; height: 0; opacity: 0;";
});

const editNote = (noteId) => {
  console.log("Edit, ", noteId);

  editNoteForm.style = "visibility: visible; height: 70px; opacity: 1;";
  //   noteFormSubmitBtn.type = firstOpen ? "button" : "submit";
  noteFormSubmitBtn.form = "editNoteForm";
  noteFormSubmitBtn.textContent = " Edit Note";
};

const archiveNote = (noteId) => {
  console.log("Archive, ", noteId);
};

const deleteNote = (noteId) => {
  console.log("Delete, ", noteId);
};
