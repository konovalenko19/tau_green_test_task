import React, { Component } from "react";
import { connect } from "react-redux";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import {
  Map,
  Station,
} from "../components";

import {
  fetchLocations,
} from "../actions/locationsActions";

import {
  openLocation,
  fetchLocationDetails,
} from "../actions/locationViewActions";

import StationContainer from "./StationContainer";

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

    console.log(locations);

    if (locations.fetching) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <>
        <Map
          locations={locations.data}
          fetchLocationDetails={fetchLocationDetails}
          openLocation={openLocation}
        />

        {locationView.opened &&
          <StationContainer/>
        }

        {/* <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 37.44446960614344, lng: -122.06634320318699}}
        >
          {locations.data && locations.data.map(location => {
            return (
              <Marker
                key={location.id}
                onClick={() => {
                  openLocation();
                  fetchLocationDetails(location.id);
                }}
                name={'Current location'}
                position={{ lat: location.coordinates.lat, lng: location.coordinates.lng }}
              />
            )
          })}
        </Map> */}
      </>
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

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBjORL0jNsLJDB1CAqRfhyitfZTm4c1LXc"
// })(connect(mapStateToProps, mapDispatchToProps)(MapContainer));

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);