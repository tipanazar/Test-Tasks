import { addNote } from "./api.js";
import { noteMarkup } from "./helpers/noteMarkup.js";

const tableBody = document.querySelector("tbody.tableBody");

const REGEX = /^[0-9]{2}[,./-]{1}[0-9]{2}[,./-]{1}[0-9]{2,4}$/;

export const onCreateNoteFormSubmit = async (form) => {
  let parcedDatesArr = [];
  const { name, category, content, dates } = form;

  if (dates.value.length) {
    const datesArr = dates.value.split(";\n");
    for (let date of datesArr) {
      if (REGEX.test(date)) {
        parcedDatesArr.push(new Date(date).getTime());
      }
    }
  }

  const formData = {
    name: name.value,
    created: new Date().getTime(),
    category: category.value,
    content: content.value,
    dates: parcedDatesArr.length ? parcedDatesArr.join(", ") : "",
  };

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
