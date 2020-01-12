import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Avatar.scss";

const Avatar = props => {
  const {
    component: Component = "div",
    className,
    children,

    // component
    isRounded = false,
    size = "2rem",
    style,

    // Image
    alt,
    src,
    imgProps,

    ...other
  } = props;

  return (
    <Component
      className={classnames(
        "avatar",
        isRounded && "avatar--rounded",
        className && className,
      )}
      tabIndex={0}
      style={{
        ...style,
        width: size,
        height: size,
      }}
      {...other}>

      {src &&
        <img
          alt={alt}
          src={src}
          className={"avatar__image"}
          {...imgProps}
        />
      }

      {children}

    </Component>
  );
};

Avatar.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,

  isRounded: PropTypes.bool,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  imgProps: PropTypes.object,
  style: PropTypes.object,

  other: PropTypes.object,
};

export default Avatar;