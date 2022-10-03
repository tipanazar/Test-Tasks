import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getError,
  getIsLoading,
  getWordsArr,
} from "../../redux/dictionary/selectors";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";
import Button from "../../shared/Components/Button/Button";
import Loader from "../../shared/Components/Loader/Loader";

import styles from "./knowledgeTest.module.scss";

const KnowledgeTest = () => {
  const wordsArr = useSelector(getWordsArr, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);

  let questionsArr = [];
  const template = {
    word: "Window",
    answers: ["Машина", "Окно", "Собака", "Огород"],
    rightAnswer: "Окно",
  };

  const startTest = () => {
    const sortedWords = [...wordsArr].sort((item) => Math.random() - 0.5);

    for (let i = 0; i <= 10; i++) {
      let temp = {
        word: sortedWords[i].translation.translated,
        answers: [sortedWords[i].translation.orig],
        rightAnswer: sortedWords[i].translation.orig,
      };
      console.log(temp);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error ? (
        <AlertGradientScreen>
          <h2 className={styles.alertText}>{error}</h2>
        </AlertGradientScreen>
      ) : wordsArr === null ? (
        <></>
      ) : wordsArr.length >= 10 ? (
        <div className={styles.mainBlock}>
          <h2 className={styles.startTestText}>
            The test contains 10 questions with 4 variants of answers.
          </h2>
          <Button
            className={styles.startTestBtn}
            type="button"
            onClick={() => startTest()}
          >
            START TEST
          </Button>
        </div>
      ) : (
        <AlertGradientScreen>
          <Link className={styles.alertText} to="/add-word">
            There are less than 10 words in your dictionary, add more words and
            try again!
          </Link>
        </AlertGradientScreen>
      )}
    </>
  );
};

export default KnowledgeTest;
