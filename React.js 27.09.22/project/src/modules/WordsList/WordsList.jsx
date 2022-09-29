import { useState, shallowEqual } from "react";
import { useSelector } from "react-redux";

import {
  getWordsArr,
  getIsLoading,
  getError,
} from "../../redux/dictionary/selectors";
import Icon from "../../shared/Components/Icon/Icon";
import Loader from "../../shared/Components/Loader/Loader";
import { parceDate } from "../../shared/hooks/parceDate";

import styles from "./wordsList.module.scss";

const arr = [
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 1,
    creationDate: 1664293563,
    translation: {
      orig: "Собака",
      translated: "Dog",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
  {
    id: 2,
    creationDate: 1664193563,
    translation: {
      orig: "Кіт",
      translated: "Cat",
    },
  },
];

const WordsList = () => {
  const wordsArr = useSelector(getWordsArr, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  // console.log('render')

  const wordsMarkup = arr.map((item) => {
    const parcedDate = parceDate(item.creationDate).split(", ");

    return (
      <li className={styles.wordsListItem} key={item.id}>
        <div className={styles.textBlock}>
          <p className={styles.translatedName}>{item.translation.translated}</p>
          <p className={styles.origName}>{item.translation.orig}</p>
        </div>
        <div className={styles.itemBottomBlock}>
          <button className={styles.itemBottomBlockBtn}>
            <Icon
              className={styles.btnIcon}
              iconId="trashbin"
              height="20px"
              width="20px"
              fill="#777777"
            />
          </button>
          <p className={styles.creationDate}>{parcedDate[0]}</p>
          <button className={styles.itemBottomBlockBtn}>
            <Icon
              className={styles.btnIcon}
              iconId="edit"
              height="20px"
              width="20px"
              fill="#777777"
            />
          </button>
        </div>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loader />}
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
