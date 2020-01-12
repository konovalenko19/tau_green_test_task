import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Avatar from "../Avatar";

import "./UserCard.scss";

function getShortUserName(userName) {
  if (userName === "") {
    return "User"
  }

  let splitted =  userName.split(" ");

  if (splitted.length > 1) {
    return splitted[0].slice(0, 1) + splitted[1].slice(0, 1);
  }

  return splitted[0].slice(0, 1);
}

const UserCard = props => {
  const {
    component: Component = "div",
    className,

    avatarProps,
    userName,
  } = props;

  return (
    <Component
      className={classnames(
        "usercard",
        className && className,
      )}>
      
      <div className="usercard__avatar">
        <Avatar
          isRounded
          size="90px"
          {...avatarProps}>
          {getShortUserName(userName)}
        </Avatar>
      </div>

      <div className="usercard__name">
        {userName}
      </div>

    </Component>
  );
};

UserCard.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  avatarProps: PropTypes.object,
  userName: PropTypes.string.isRequired,
};

export default UserCard;