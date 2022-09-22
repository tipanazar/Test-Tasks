import {
  trashBinIcon,
  bulbIcon,
  gearsIcon,
  shoppingCartIcon,
  addToArchiveIcon,
  penIcon,
} from "./iconsImport.js";

export const noteMarkup = ({
  statTableItem,
  name,
  category = statTableItem?.category,
  content,
  dates,
  created,
  id,
}) => {
  let datesArr = [];

  const icon =
    (category === "Task" && shoppingCartIcon) ||
    (category === "Random Thought" && gearsIcon) ||
    (category === "Idea" && bulbIcon);

  if (statTableItem) {
    // console.log(`${statTableItem.category}`)
    return `<tr class="tableNoteBlock">
       <td class="tableNoteNameBlock">
         <div class="iconWrapper">
           <svg class="noteCategoryIcon">
             <use href="${icon}" />
           </svg>
         </div>
         <p class="tableText tableTextName">${statTableItem.category}</p>
       </td>
       <td><p id="${statTableItem.category.split(" ").join("")}Active">${
      statTableItem.active
    }</p></td>
       <td><p id="${statTableItem.category.split(" ").join("")}Archived">${
      statTableItem.archived
    }</p></td>
       <td></td>
     </tr>`;
  }

  const parceDate = (date) => {
    return new Date(date).toLocaleString().split(", ")[0];
  };

  if (dates.length) {
    for (let date of dates.split(", ")) {
      datesArr.push(parceDate(Number.parseInt(date)));
    }
  }

  return `<tr class="tableNoteBlock" id="a${id}">
    <td class="tableNoteNameBlock">
    <div class="iconWrapper">
    <svg class="noteCategoryIcon">
    <use href="${icon}" />
    </svg>
    </div>
    <p class="tableText tableTextName" id="a${id}">${name}</p>
    </td>
    <td>${parceDate(created)}</td>
    <td><p id="a${id}">${category}</p></td>
    <td><p class="tableText" id="a${id}">${content}</p></td>
    <td><p class="tableText dates" id="a${id}">${datesArr.join(", ")}</p></td>
    <td class="tableButtonsBlock">
    <button class="noteButton" id="edit, ${id}" type="button">
    <svg class="noteButtonIcon" id="edit, ${id}">
    <use href="${penIcon}" id="edit, ${id}"/>
    </svg></button
    ><button class="noteButton" id="archive, ${id}" type="button">
    <svg class="noteButtonIcon" id="archive, ${id}">
    <use href="${addToArchiveIcon}"  id="archive, ${id}"/>
    </svg>
    </button>
    <button class="noteButton" id="delete, ${id}" type="button">
    <svg class="noteButtonIcon" id="delete, ${id}">
    <use href="${trashBinIcon}"  id="delete, ${id}"/>
    </svg>
    </button>
    </td>
    </tr>`;
};
