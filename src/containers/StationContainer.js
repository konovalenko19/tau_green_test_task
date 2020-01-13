import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  fetchLocationDetails,
} from "../actions/locationViewActions";

import {
  Loader,
  Station,
} from "../components";

class StationContainer extends PureComponent {
  componentDidMount() {
    // this.props.fetchLocationDetails();
  }

  render() {
    const {
      locationView,
    } = this.props;

    if (locationView.fetching) {
      return <Loader/>;
    }

    if (locationView.opened) {
      return <Station data={locationView.data}/>;
    }

    return null;
  }
}

const mapStateToProps = ({
  locationView,
}) => ({
  locationView,
});

const mapDispatchToProps = dispatch => ({
  fetchLocationDetails: fetchLocationDetails(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StationContainer);