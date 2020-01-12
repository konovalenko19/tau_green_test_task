import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Badge.scss";

const Badge = props => {
  const {
    component: Component = "div",
    className,
    children,
    color = "lightblue",
  } = props;

  return (
    <Component
      className={classnames(
        "badge",
        `badge--${color}`,
        className && className,
      )}>
      {children}
    </Component>
  );
};

Badge.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Badge;