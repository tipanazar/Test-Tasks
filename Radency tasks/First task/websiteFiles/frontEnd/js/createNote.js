import { addNote } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector("tbody.tableBody");

export const onCreateNoteFormSubmit = async (form) => {
  const { name, category, content, date } = form;

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
};
