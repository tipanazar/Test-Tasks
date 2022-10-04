import { useState } from "react";

import Button from "../../../shared/Components/Button/Button";
import Icon from "../../../shared/Components/Icon/Icon";
import Input from "../../../shared/Components/Input/Input";
import InputLabel from "../../../shared/Components/InputLabel/InputLabel";

import styles from "./testing.module.scss";

const Testing = ({ questions }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [checkedInputIdx, setCheckedInputIdx] = useState(null);

  const answersMarkup = questions[questionIdx].answers.map((item, idx) => {
    return (
      <li className={styles.answersListItem} key={idx}>
        <InputLabel
          className={styles.inputLabel}
          style={
            checkedInputIdx === idx
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
            onType={() => setCheckedInputIdx(idx)}
          />
        </InputLabel>
      </li>
    );
  });

  return (
    <div className={styles.mainBlock}>
      <Button className={styles.mainBlockLeftBtn}>Cancel Test</Button>
      <Button className={styles.mainBlockRightBtn}>Finish Test</Button>
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
