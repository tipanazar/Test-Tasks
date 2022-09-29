import PropTypes from "prop-types";

import styles from "./alertGradientScreen.module.scss";

const AlertGradientScreen = ({ children }) => {
  return <div className={styles.alertBlock}>{children}</div>;
};

export default AlertGradientScreen;

AlertGradientScreen.propTypes = {
  children: PropTypes.element,
};
