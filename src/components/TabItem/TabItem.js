import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./TabItem.scss";

const TabItem = props => {
  const {
    component: Component = "div",
    className,
    children,
    active,
  } = props;

  return (
    <Component
      className={classnames(
        "tab-item",
        active && "tab-item--active",
        className && className,
      )}>
      {children}
    </Component>
  );
};

TabItem.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default TabItem;