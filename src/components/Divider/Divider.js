import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Divider.scss";

const Divider = props => {

  const {
    component: Component = "div",
    children,
    className,
    height = "1",
    lineProps,
    textProps,
    ...other
  } = props;

  let LineNode = () => (
    <div
      className="divider__line"
      style={{ height: `${height}px` }}
      {...lineProps}
    />
  );

  return (
    <Component
      className={classnames(
        "divider",
        className && className,
      )}
      {...other}>

      <LineNode/>

      {children &&
        <div
          className="divider__text"
          {...textProps}>
          {children}
        </div>
      }

      <LineNode/>
    </Component>
  );
};

Divider.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.string,
  lineProps: PropTypes.object,
  textProps: PropTypes.object,
  other: PropTypes.object,
};

export default Divider;