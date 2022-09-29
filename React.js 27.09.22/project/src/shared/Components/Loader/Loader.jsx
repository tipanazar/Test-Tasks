import PropTypes from 'prop-types'

import style from "./loader.module.scss";

const Loader = ({ backgroundColor }) => {
  return (
    <div
      className={style.ldsDualRing}
      style={{ backgroundColor }}
    ></div>
  );
};

Loader.propTypes = {
  backgroundColor: PropTypes.string
}

export default Loader;
