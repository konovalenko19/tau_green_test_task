import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./MenuItem.scss";

const MenuItem = props => {
  const {
    component: Component = "div",
    className,
    children,
    active,
    startIcon,
  } = props;

  return (
    <Component
      className={classnames(
        "menu-item",
        active && "menu-item--active",
        className && className,
      )}>

      {startIcon &&
        <div className="menu-item__icon">
          {startIcon}
        </div>
      }

      {children && 
        <div className="menu-item__text">
          {children}
        </div>
      }
    </Component>
  );
};

MenuItem.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default MenuItem;