import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { PieChart, Pie, Cell } from "recharts";
import Button from "../../shared/Components/Button/Button";

import styles from "./testResults.module.scss";

const testAnswers = [
  { isRight: false },
  { isRight: true },
  { isRight: true },
  { isRight: true },
  { isRight: true },
  { isRight: true },
  { isRight: true },
  { isRight: false },
  { isRight: true },
  { isRight: true },
];

const answers = [
  {
    name: "rightAnswers",
    value: testAnswers.filter((item) => item.isRight).length,
  },
  {
    name: "wrongAnswers",
    value: testAnswers.filter((item) => !item.isRight).length,
  },
];

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //   const testAnswers = location.state.testAnswers;

  //   if (testAnswers.find((item) => item.answer === "" && item.isRight === null)) {
  //     return <Navigate to="/" replace />;
  //   }

  // console.log(testAnswers);
  return (
    <div className={styles.mainBlock}>
      <PieChart width={220} height={220}>
        <Pie
          data={answers}
          cx="50%"
          cy="50%"
          isAnimationActive={true}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
          labelLine
        >
          {answers.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={["#058f00b3", "#d70000b5"][index]}
            />
          ))}
        </Pie>
      </PieChart>
      <div className={styles.statsBlock}>
        <span className={styles.statsText}>
          Correct:&nbsp;{answers[0].value}
        </span>
        <span className={styles.statsText}>Wrong:&nbsp;{answers[1].value}</span>
        <span className={styles.statsText}>
          Total:&nbsp;{testAnswers.length}
        </span>
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
