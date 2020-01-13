import React from "react";
import PropTypes from "prop-types";

import StarIcon from "../../icons/StarIcon";
import "./Rating.scss";

const Rating = props => {
  const {
    children,
  } = props;

  return (
    <div className="rating">
      <div className="rating__icon">
        <StarIcon/>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

Rating.propTypes = {
  children: PropTypes.node,
};

export default Rating;