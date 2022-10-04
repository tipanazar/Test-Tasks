import { useState } from "react";

import Button from "../../../shared/Components/Button/Button";
import Icon from "../../../shared/Components/Icon/Icon";
import Input from "../../../shared/Components/Input/Input";
import InputLabel from "../../../shared/Components/InputLabel/InputLabel";

import styles from "./testing.module.scss";

const Testing = ({ questions, stopTest }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [testAnswers, setTestAnswers] = useState([]);
  let temp = [];

  while (temp.length < questions.length + 1 && testAnswers.length === 0) {
    if (temp.length === questions.length) {
      setTestAnswers([...temp]);
      return;
    }
    temp.push({ answer: "", isRight: null });
  }

  let isTestFilled = !Boolean(
    testAnswers.find((item) => item.answer === "" && item.isRight === null)
  );

  const handleAnswer = (answer) => {
    setTestAnswers((prevState) => {
      const newArr = prevState.map((item, idx) => {
        if (idx === questionIdx) {
          return answer;
        }
        return item;
      });
      return newArr;
    });
  };

  const answersMarkup = questions[questionIdx].answers.map((item, idx) => {
    return (
      <li className={styles.answersListItem} key={idx}>
        <InputLabel
          className={styles.inputLabel}
          style={
            testAnswers[questionIdx].answer === item
              ? {
                  backgroundColor: "#eb6a00",
                  color: "white",
                }
              : { backgroundColor: "white", color: "black" }
          }
          inputId={item}
        >
          <p className={styles.labelText}>{item}</p>
          <Input
            className={styles.listItemInput}
            type="radio"
            id={item}
            name="answer"
            value={item}
            checked={item === testAnswers[questionIdx].answer}
            onType={(ev) =>
              handleAnswer({
                answer: ev.target.value,
                isRight: ev.target.value === questions[questionIdx].rightAnswer,
              })
            }
          />
        </InputLabel>
      </li>
    );
  });

  return (
    <div className={styles.mainBlock}>
      <Button
        className={styles.mainBlockLeftBtn}
        type="button"
        onClick={stopTest}
      >
        Cancel Test
      </Button>
      <Button
        className={
          isTestFilled
            ? styles.mainBlockRightBtn
            : `${styles.mainBlockRightBtn} ${styles.disabledBtn}`
        }
        type="button"
        disabled={!isTestFilled}
        onClick={() => console.log("finish")}
      >
        Finish Test
      </Button>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>{questions[questionIdx].word}</h2>
      </div>
      <ul className={styles.answersList}>{answersMarkup}</ul>
      <div className={styles.buttonsBlock}>
        <Button
          className={
            questionIdx <= 0
              ? `${styles.btnsBlockBtn} ${styles.disabledBtn}`
              : styles.btnsBlockBtn
          }
          type="button"
          disabled={questionIdx <= 0}
          onClick={() => setQuestionIdx(questionIdx - 1)}
        >
          <Icon
            className={styles.btnIcon}
            iconId="arrow-left"
            fill={questionIdx <= 0 ? "#00000061" : "#323232"}
          />
        </Button>

        <p className={styles.questionNumber}>{`${questionIdx + 1}/${
          questions.length
        }`}</p>

        <Button
          className={
            questionIdx >= questions.length - 1
              ? `${styles.btnsBlockBtn} ${styles.disabledBtn}`
              : styles.btnsBlockBtn
          }
          type="button"
          disabled={questionIdx >= questions.length - 1}
          onClick={() => setQuestionIdx(questionIdx + 1)}
        >
          <Icon
            className={styles.btnIcon}
            iconId="arrow-right"
            fill={questionIdx >= questions.length - 1 ? "#00000061" : "#323232"}
          />
        </Button>
      </div>
    </div>
  );
};

export default Testing;
