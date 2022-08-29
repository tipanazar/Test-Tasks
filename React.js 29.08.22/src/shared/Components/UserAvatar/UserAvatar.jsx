import { memo } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";

import person from "../../../images/person.png";

import style from "./userAvatar.module.scss";

const UserAvatar = ({ className, src, isStatusNeeds, isOnline }) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <img
        className={style.image}
        src={src || person}
        loading="lazy"
        alt="Person avatar"
      />
      {!isStatusNeeds || (
        <Icon
          className={style.icon}
          iconId="onlineStatus"
          width="40%"
          height="40%"
          fill={isOnline ? "#4bbe00" : "red"}
        />
      )}
    </div>
  );
};

export default memo(UserAvatar);

UserAvatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  isStatusNeeds: PropTypes.bool,
  isOnline: PropTypes.bool,
};
