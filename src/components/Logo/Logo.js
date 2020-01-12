import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import logo from "./logo.png";
import "./Logo.scss";

const Logo = props => {
  const {
    component: Component = "div",
    className,
    width = "132px",
    height = "46px",
    style,
    alt = "TAU LOGO",
    ...other
  } = props;

  return (
    <Component
      className={classnames(
        "logo",
        className && className,
      )}
      style={{
        width,
        height,
        ...style
      }}
      {...other}>
      <img
        src={logo}
        alt={alt}
      />
    </Component>
  );
};

Logo.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  other: PropTypes.object,
};

export default Logo;