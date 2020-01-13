import React from "react";

const Map = props => {
  const {
    locations,
    fetchLocationDetails,
    openLocation,
  } = props;

  return (
    <div>

      {locations && locations.map(location => {
        return (
          <button
            key={location.id}
            onClick={(e) => {
              openLocation();
              fetchLocationDetails(location.id);
            }}>
            {`${location.coordinates.lat} ${location.coordinates.lng}`}
          </button>
        );
      })}

    </div>
  );
};

export default Map;