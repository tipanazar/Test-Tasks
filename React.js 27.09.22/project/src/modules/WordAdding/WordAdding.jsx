import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Button from "../../shared/Components/Button/Button";
import Input from "../../shared/Components/Input/Input";
import Loader from "../../shared/Components/Loader/Loader";
import { addWord } from "../../redux/dictionary/operations";
import { getIsLoading } from "../../redux/dictionary/selectors";

import styles from "./wordAdding.module.scss";

const WordAdding = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading, shallowEqual);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      addWord({
        orig: ev.target.elements.orig.value,
        translated: ev.target.elements.translated.value,
      })
    );
    ev.target.reset();
  };

  return (
    <div className={styles.formBlock}>
      <form
        className={styles.addWordForm}
        id="addWordForm"
        onSubmit={handleSubmit}
      >
        <label style={{ marginLeft: "3px" }} for="translated">
          Translated
        </label>
        <label style={{ textAlign: "end", marginRight: "3px" }} for="orig">
          Original
        </label>
        <Input
          className={styles.addWordInput}
          name="translated"
          id="translated"
          required
        />
        <Input className={styles.addWordInput} name="orig" id="orig" required />
      </form>
      <Button className={styles.submitFormBtn} type="submit" form="addWordForm">
        <p className={styles.submitFormBtnText}>Add Word</p>
      </Button>
      {isLoading && <Loader />}
    </div>
  );
};

export default WordAdding;
