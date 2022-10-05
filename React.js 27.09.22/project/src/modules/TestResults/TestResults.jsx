import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Button from "../../shared/Components/Button/Button";
import StatisticsPie from "../../shared/Components/StatisticsPie/StatisticsPie";

import styles from "./testResults.module.scss";

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const testAnswers = location.state.testAnswers;

  if (testAnswers.find((item) => item.answer === "" && item.isRight === null)) {
    return <Navigate to="/" replace />;
  }

  const answers = [
    {
      name: "correctAnswers",
      value: testAnswers.filter((item) => item.isRight).length,
    },
    {
      name: "wrongAnswers",
      value: testAnswers.filter((item) => !item.isRight).length,
    },
  ];

  return (
    <div className={styles.mainBlock}>
      <div className={styles.statsWrapper}>
        <StatisticsPie
          width={235}
          height={235}
          pieRadius={80}
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
          <span className={styles.statsText} style={{ color: "#d96400" }}>
            Total:&nbsp;{testAnswers.length}
          </span>
        </div>
      </div>
      <Button
        className={styles.tryAgainBtn}
        type="button"
        onClick={() => navigate("/testing")}
      >
        Try Again!
      </Button>
      <Button
        className={styles.doneBtn}
        type="button"
        onClick={() => navigate("/")}
      >
        Done
      </Button>
    </div>
  );
};

export default TestResults;
