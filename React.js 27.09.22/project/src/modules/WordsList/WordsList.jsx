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
import { Link } from "react-router-dom";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";

const WordsList = () => {
  const dispatch = useDispatch();
  const wordsArr = useSelector(getWordsArr, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  console.log(wordsArr);

  const wordsMarkup =
    wordsArr?.length &&
    wordsArr.map((item) => {
      const parcedDate = parceDate(item.creationDate).split(", ");
      return (
        <li className={styles.wordsListItem} key={item.id}>
          <div className={styles.textBlock}>
            <p className={styles.translatedName}>
              {item.translation.translated}
            </p>
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
  // <div className={styles.emptyArrAlertBlock}>
  //   <h2 className={styles.emptyArrAlert}>
  //     Seems like your dictionary is empty, it is perfect time to begin study,
  //     don't waste your time😉
  //   </h2>
  // </div>

  return (
    <>
      {isLoading && <Loader />}
      {error ? (
        <AlertGradientScreen>
          <h2 className={styles.arrAlertText}>{error}</h2>
        </AlertGradientScreen>
      ) : wordsArr === null ? (
        <></>
      ) : wordsArr.length ? (
        <ul className={styles.wordsList}>{wordsMarkup}</ul>
      ) : (
        <AlertGradientScreen>
          <Link className={styles.arrAlertText} to="add-word">
            It seems that your dictionary is empty, it's time to start studying,
            don't waste your time😉
          </Link>
        </AlertGradientScreen>
      )}
    </>
  );
};

export default WordsList;