import React from "react";

import Loader from "../Loader";

import "./Location.scss"

const LocationLoader = () => {
  return (
    <div className="location">
      <Loader>Loading location...</Loader>
    </div>
  );
};

export default LocationLoader;