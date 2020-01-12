import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Loader.scss";

function hexToRgba(hex, opacity) {
  hex = hex.replace("#","");

  const r = parseInt(hex.substring(0,2), 16),
    g = parseInt(hex.substring(2,4), 16),
    b = parseInt(hex.substring(4,6), 16);

  return `rgba(${r} ,${g}, ${b}, ${opacity})`;
}

const Loader = props => {
  const {
    component: Component = "div",
    className,
    children = null,
    color = "#2A79EE",
    size = "2rem",
    inline = false,
    ...other
  } = props;

  return (
    <Component
      className={classnames(
        "loader",
        inline && "loader--inline",
      )}
      {...other}>
      <div
        className="loader__spinner"
        style={{
          minWidth: size,
          minHeight: size,
          borderColor: hexToRgba(color, 0.2),
          borderTopColor: color,
        }}
      />

      {children &&
        <div
          className="loader__message"
          style={{ color: hexToRgba(color, 0.9) }}>
          {children}
        </div>
      }
    </Component>
  );
};

Loader.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  inline: PropTypes.bool,
  other: PropTypes.object,
};

export default Loader;