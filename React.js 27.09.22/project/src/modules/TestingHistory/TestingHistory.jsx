import { Link } from "react-router-dom";
import AlertGradientScreen from "../../shared/Components/AlertGradientScreen/AlertGradientScreen";
import styles from "./testingHistory.module.scss";

const TestingHistory = () => {
  return (
    <AlertGradientScreen>
      <Link className={styles.alertText} to="/testing">
        There is no testing history, take the test right now!
      </Link>
    </AlertGradientScreen>
  );
};

export default TestingHistory;
