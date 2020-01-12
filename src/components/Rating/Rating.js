import React from "react";

import StarIcon from "../../icons/StarIcon";
import "./Rating.scss";

const Rating = props => {
  const {
    value,
  } = props;

  return (
    <div className="rating">
      <div className="rating__icon">
        <StarIcon/>
      </div>
      <div className="rating__value">
        {value}
      </div>
    </div>
  );
};

export default Rating;