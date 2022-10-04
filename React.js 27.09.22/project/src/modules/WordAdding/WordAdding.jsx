import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Button from "../../shared/Components/Button/Button";
import Input from "../../shared/Components/Input/Input";
import Loader from "../../shared/Components/Loader/Loader";
import { addWord } from "../../redux/dictionary/operations";
import { getError, getIsLoading } from "../../redux/dictionary/selectors";

import styles from "./wordAdding.module.scss";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";
import InputLabel from "../../shared/Components/InputLabel/InputLabel";

const WordAdding = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

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

  return error ? (
    <AlertGradientScreen>
      <h2 className={styles.alertText}>{error}</h2>
    </AlertGradientScreen>
  ) : (
    <div className={styles.formBlock}>
      <form
        className={styles.addWordForm}
        id="addWordForm"
        onSubmit={handleSubmit}
      >
        <InputLabel
          style={{ marginLeft: "3px" }}
          inputId="translated"
          text="Translated"
        />
        <InputLabel
          style={{ textAlign: "end", marginRight: "3px" }}
          inputId="orig"
          text="Original"
        />
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
