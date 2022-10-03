import { useRef } from "react";
import { useDispatch } from "react-redux";

import { editWord } from "../../../redux/dictionary/operations";
import Modal from "../../../shared/Components/Modal/Modal";
import Input from "../../../shared/Components/Input/Input";
import Button from "../../../shared/Components/Button/Button";
import Icon from "../../../shared/Components/Icon/Icon";

import styles from "./editWordModal.module.scss";

const EditWordModal = ({ id, translated = "", orig = "", closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { orig, translated } = ev.target.elements;
    const editedWordData = {
      translation: { orig: orig.value, translated: translated.value },
    };

    funcRef.current("closeModal");
    await dispatch(editWord({ editedWordData, id }));
  };

  const funcRef = useRef();

  return (
    <Modal closeModal={closeModal} funcRef={funcRef}>
      <div className={styles.modalBlock}>
        <Button
          className={styles.closeModalBtn}
          type="button"
          id="closeModalBtn"
          onClick={() => funcRef.current("closeModal")}
        >
          <Icon className={styles.closeModalIcon} iconId="close" />
        </Button>
        <div className={styles.cardBlock}>
          <p className={styles.translatedName}>{translated}</p>
          <p className={styles.origName}>{orig}</p>
        </div>
        <form
          className={styles.addWordForm}
          id="editWordForm"
          onSubmit={handleSubmit}
        >
          <label style={{ marginLeft: "3px" }} for="translated">
            Translated
          </label>
          <label style={{ textAlign: "end", marginRight: "3px" }} for="orig">
            Original
          </label>
          <Input
            className={styles.editWordInput}
            name="translated"
            id="translated"
            placeholder="Translated"
            defaultValue={translated}
            required
          />
          <Input
            className={styles.editWordInput}
            name="orig"
            id="orig"
            placeholder="Original"
            defaultValue={orig}
            required
          />
        </form>
        <Button
          className={styles.submitFormBtn}
          type="submit"
          form="editWordForm"
          id="editWordFormSubmitBtn"
        >
          <p className={styles.submitFormBtnText}>Edit Word</p>
        </Button>
      </div>
    </Modal>
  );
};

export default EditWordModal;
