import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getTestsHistoryArr,
  getLoading,
  getError,
} from "../../redux/testing/selectors";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";
import Loader from "../../shared/Components/Loader/Loader";
import Button from "../../shared/Components/Button/Button";
import Icon from "../../shared/Components/Icon/Icon";
import StatisticsPie from "../../shared/Components/StatisticsPie/StatisticsPie";
import { removeTestFromHistory } from "../../redux/testing/operations";
import { parceDate } from "../../shared/hooks/parceDate";

import styles from "./testingHistory.module.scss";

const TestingHistory = () => {
  const dispatch = useDispatch();
  const testsHistoryArr = useSelector(getTestsHistoryArr, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const isLoading = useSelector(getLoading, shallowEqual);

  const historyMarkup = testsHistoryArr?.map((item) => {
    const parcedDate = parceDate(item.creationDate).split(", ");
    const answers = [
      {
        name: "correctAnswers",
        value: item.answers.filter((item) => item.isRight).length,
      },
      {
        name: "wrongAnswers",
        value: item.answers.filter((item) => !item.isRight).length,
      },
    ];
    return (
      <li className={styles.listItem} key={item.id}>
        <Button
          className={styles.removeTestBtn}
          type="button"
          onClick={() => dispatch(removeTestFromHistory(item.id))}
        >
          <Icon
            className={styles.btnIcon}
            iconId="trashbin"
            height="20px"
            width="20px"
            fill="#777777"
          />
        </Button>
        <StatisticsPie
          width={156}
          height={156}
          pieRadius={45}
          data={answers}
          dataKey="value"
        />
        <div className={styles.statsBlock}>
          <span className={styles.statsText} style={{ color: "green" }}>
            Correct:&nbsp;{answers[0].value}
          </span>
          <span className={styles.statsText} style={{ color: "#f93131" }}>
            Wrong:&nbsp;{answers[1].value}
          </span>
          <span className={styles.statsText} style={{ color: "#ff9e07" }}>
            Total:&nbsp;{item.answers.length}
          </span>
        </div>
        <p className={styles.creationDate}>{parcedDate[0]}</p>
      </li>
    );
  });

  return (
    <>
      {error ? (
        <AlertGradientScreen>
          <h2 className={styles.alertText}>{error}</h2>
        </AlertGradientScreen>
      ) : testsHistoryArr ? (
        testsHistoryArr.length ? (
          <ul className={styles.historyList}>{historyMarkup}</ul>
        ) : (
          <AlertGradientScreen>
            <Link className={styles.alertText} to="/testing">
              There is no testing history, take the test right now!
            </Link>
          </AlertGradientScreen>
        )
      ) : (
        <></>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default TestingHistory;
