import { useState, shallowEqual } from "react";
import { useSelector } from "react-redux";

import {
  getWordsArr,
  getIsLoading,
  getError,
} from "../../redux/dictionary/selectors";
import Loader from "../../shared/Components/Loader/Loader";

import style from "./wordsList.module.scss";

const WordsList = () => {
  const wordsArr = useSelector(getWordsArr, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const wordsMarkup = wordsArr.map((item) => {
    console.log(item);
    return (
      <li key={item.id}>
        <p>{item.translation.orig}</p>
        <p></p>
      </li>
    );
  });

  return (
    <>
      {isLoading && <Loader />}
      <ul>{error && <li>{error}</li>}</ul>
    </>
  );
};

export default WordsList;
