import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import {
  Loader,
} from "../components";

import {
  fetchLocations,
} from "../actions/locationsActions";

import {
  openLocation,
  fetchLocationDetails,
} from "../actions/locationViewActions";

import LocationContainer from "./LocationContainer";

import { MAP_STYLES } from "../constants/mapStyles";

class MapContainer extends Component {

  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const {
      locations,
      locationView,

      fetchLocationDetails,
      openLocation,
    } = this.props;

    if (locations.fetching) {
      return (
        <Loader>Loading...</Loader>
      )
    }

    return (
      <Fragment>
        <Map
          google={this.props.google}
          zoom={14}
          styles={MAP_STYLES}
          initialCenter={{
            lat: 37.44446960614344,
            lng: -122.06634320318699,
          }}>

          {locations.data.map(({ id, coordinates }) => {
            return (
              <Marker
                key={id}
                onClick={() => {
                  openLocation();
                  fetchLocationDetails(id);
                }}
                name={'Current location'}
                position={{
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                }}
              />
            )
          })}
        </Map>

        {locationView.opened &&
          <LocationContainer/>
        }
      </Fragment>
    );
  }

}

const mapStateToProps = ({
  locations,
  locationView,
}) => ({
  locations,
  locationView,
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: fetchLocations(dispatch),
  fetchLocationDetails: fetchLocationDetails(dispatch),
  openLocation: openLocation(dispatch),
});

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjORL0jNsLJDB1CAqRfhyitfZTm4c1LXc"
})(connect(mapStateToProps, mapDispatchToProps)(MapContainer));

// export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);