import { useState, shallowEqual } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getWordsArr,
  getIsLoading,
  getError,
} from "../../redux/dictionary/selectors";
import Loader from "../../shared/Components/Loader/Loader";
import Button from "../../shared/Components/Button/Button";
import Icon from "../../shared/Components/Icon/Icon";
import { parceDate } from "../../shared/hooks/parceDate";
import { deleteWord } from "../../redux/dictionary/operations";

import styles from "./wordsList.module.scss";

const WordsList = () => {
  const dispatch = useDispatch();
  const wordsArr = useSelector(getWordsArr, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const wordsMarkup = wordsArr.map((item) => {
    const parcedDate = parceDate(item.creationDate).split(", ");
    return (
      <li className={styles.wordsListItem} key={item.id}>
        <div className={styles.textBlock}>
          <p className={styles.translatedName}>{item.translation.translated}</p>
          <p className={styles.origName}>{item.translation.orig}</p>
        </div>
        <div className={styles.itemBottomBlock}>
          <Button
            className={styles.itemBottomBlockBtn}
            type="button"
            onClick={() => dispatch(deleteWord(item.id))}
          >
            <Icon
              className={styles.btnIcon}
              iconId="trashbin"
              height="20px"
              width="20px"
              fill="#777777"
            />
          </Button>
          <p className={styles.creationDate}>{parcedDate[0]}</p>
          <Button className={styles.itemBottomBlockBtn} type="button">
            <Icon
              className={styles.btnIcon}
              iconId="edit"
              height="20px"
              width="20px"
              fill="#777777"
            />
          </Button>
        </div>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loader  />}
      <ul className={styles.wordsList}>
        {error ? (
          <li>
            <h2>{error}</h2>
          </li>
        ) : (
          wordsMarkup
        )}
      </ul>
    </>
  );
};

export default WordsList;
