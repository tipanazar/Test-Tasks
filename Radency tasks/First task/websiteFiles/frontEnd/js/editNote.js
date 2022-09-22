import { editNote } from "./api";
import { noteMarkup } from "./helpers/noteMarkup";

const REGEX = /^[0-9]{2}[,./-]{1}[0-9]{2}[,./-]{1}[0-9]{2,4}$/;

export const onEditNoteFormSubmit = async (form, editNoteId) => {
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
    category: category.value,
    content: content.value,
    dates: parcedDatesArr.length ? parcedDatesArr.join(", ") : "",
  };

  try {
    const { data } = await editNote(editNoteId, formData);
    console.log(data);
    const { name, category, content, dates, created, id } = data;
    document.querySelector(`tr#a${editNoteId}`).innerHTML = noteMarkup(
      name,
      category,
      content,
      dates,
      created,
      id
    );

    return "done";
  } catch ({ message }) {
    console.log(message);
  }
};
