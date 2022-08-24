import PropTypes from "prop-types";

import sprite from "../../images/sprite.svg";

const Icon = ({ className, iconId, width, height, fill }) => {
  return (
    <svg className={className} width={width} height={height} fill={fill}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};
