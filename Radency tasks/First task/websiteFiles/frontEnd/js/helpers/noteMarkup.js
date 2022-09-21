import {
  trashBinIcon,
  bulbIcon,
  gearsIcon,
  shoppingCartIcon,
  addToArchiveIcon,
  penIcon,
} from "./iconsImport.js";

export const noteMarkup = (name, category, content, dates, created) => {
  const parceDate = (date) => {
    return new Date(date).toLocaleString().split(", ")[0];
  };

  const icon =
    (category === "Task" && shoppingCartIcon) ||
    (category === "Random thought" && gearsIcon) ||
    (category === "Idea" && bulbIcon);

  let datesArr = [];
  if (dates.length) {
    for (let date of dates) {
      datesArr.push(parceDate(Number.parseInt(date)));
    }
  }

  return `<tr class="tableNoteBlock">
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
};
