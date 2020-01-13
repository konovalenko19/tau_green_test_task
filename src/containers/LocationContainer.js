import React from "react";
import { connect } from "react-redux";

import {
  Loader,
  Location,
  LocationLoader,
} from "../components";

const LocationContainer = props => {
  const {
    locationView: {
      opened,
      fetching,
      error,
      data,
    },
  } = props;

  if (fetching) {
    return <LocationLoader/>
  }

  if (opened) {
    return <Location data={data}/>;
  }

  return null;
};

const mapStateToProps = ({
  locationView,
}) => ({
  locationView,
});

export default connect(mapStateToProps)(LocationContainer);