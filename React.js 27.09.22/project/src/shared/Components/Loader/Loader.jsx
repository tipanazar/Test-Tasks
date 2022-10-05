import PropTypes from "prop-types";

import style from "./loader.module.scss";

const Loader = ({ backgroundColor }) => {
  return <div className={style.ldsDualRing} style={{ backgroundColor }}></div>;
};

export default Loader;

Loader.propTypes = {
  backgroundColor: PropTypes.string,
};
