import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getError,
  getIsLoading,
  getWordsArr,
} from "../../redux/dictionary/selectors";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";
import Button from "../../shared/Components/Button/Button";
import Loader from "../../shared/Components/Loader/Loader";
import Testing from "./Testing/Testing";

import styles from "./knowledgeTest.module.scss";

const KnowledgeTest = () => {
  const wordsArr = useSelector(getWordsArr);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const [questions, setQuestions] = useState([]);

  const startTest = () => {
    let questionsArr = [];
    const sortedWords = [...wordsArr].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 10; i++) {
      let temp = {
        word: sortedWords[i].translation.translated,
        answers: [sortedWords[i].translation.orig],
        rightAnswer: sortedWords[i].translation.orig,
      };
      while (temp.answers.length < 4) {
        const idx = Math.floor(Math.random() * sortedWords.length);
        if (!temp.answers.includes(sortedWords[idx].translation.orig)) {
          temp.answers.push(sortedWords[idx].translation.orig);
        }
      }
      temp.answers.sort(() => Math.random() - 0.5);
      questionsArr.push(temp);
    }
    setQuestions(questionsArr);
  };

  const stopTest = () => {
    setQuestions([]);
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
        questions.length ? (
          <Testing questions={questions} stopTest={stopTest} />
        ) : (
          <div className={styles.mainBlock}>
            <h2 className={styles.startTestText}>
              The test contains 10 questions with 4 variants of answers.
            </h2>
            <Button
              className={styles.startTestBtn}
              type="button"
              onClick={startTest}
            >
              START TEST
            </Button>
          </div>
        )
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
