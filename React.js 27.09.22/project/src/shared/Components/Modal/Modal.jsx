import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("div#modalRoot");

const Modal = ({ children, closeModal, funcRef }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);
    modalRoot.addEventListener("click", close);
  });

  const close = (ev) => {
    if (
      ev.code === "Escape" ||
      ev.target === ev.currentTarget ||
      ev === "closeModal"
    ) {
      document.removeEventListener("keydown", close);
      modalRoot.removeEventListener("click", close);
      closeModal();
    }
  };

  funcRef.current = close;

  return createPortal(<>{children}</>, modalRoot);
};

export default Modal;
