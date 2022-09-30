import { memo, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("div#modalRoot");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);
    modalRoot.addEventListener("click", close);
  });

  const close = (ev) => {
    const closeModalBtn = modalRoot.querySelector("button#closeModalBtn");
    const submitEditedWordBtn = modalRoot.querySelector(
      "button#editWordFormSubmitBtn"
    );
    if (ev.code === "Escape" || ev.target === ev.currentTarget) {
      document.removeEventListener("keydown", close);
      modalRoot.removeEventListener("click", close);
      closeModal();
      return;
    }
    for (let item of ev.path) {
      if (item === closeModalBtn || item === submitEditedWordBtn) {
        document.removeEventListener("keydown", close);
        modalRoot.removeEventListener("click", close);
        closeModal();
      }
    }
  };

  return createPortal(<>{children}</>, modalRoot);
};

export default memo(Modal);
