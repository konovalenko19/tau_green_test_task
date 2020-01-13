import React from "react";
import { connect } from "react-redux";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import {
  fetchLocations,
} from "./actions/locationsActions";

import {
  Badge,
  Connector,
  Logo,
  TabItem,
  MenuItem,
  Rating,
  UserCard,
} from "./components";

import MapIcon from "./icons/MapIcon";
import LocationIcon from "./icons/LocationIcon";
import ClockIcon from "./icons/ClockIcon";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <div className="app">

        <div className="leftside">
          <div className="leftside__logo">
            <Logo/>
          </div>

          <div className="leftside__usercard">
            <UserCard
              userName="Hryhorii Zlowetski"
              avatarProps={{
                src: "https://i.mycdn.me/image?id=550261073340&plc=WEB&tkn=*2qnhaF5wDXBImjg0Oh-VDFH_32M&fn=sqr_288",
              }}
            />
          </div>

          <MenuItem
            active
            startIcon={<MapIcon/>}>
            Map
          </MenuItem>
        </div>

        <div className="rightside">
          <div className="topbar">
            <TabItem active>All locations</TabItem>
          </div>

          <div className="rightside__main">
            <div className="connector-preview">
              Slider Here
              <br/>
              <Rating>4.1</Rating>
              <br/>
              <h2>Heumarkt</h2>
              <LocationIcon/> Muhnauser Str. 18, Grossengottern, Germany
              <br/>
              <ClockIcon/> Open now: 9:30 - 17:30
              <h2>Services <Badge>6</Badge></h2>
              <br/>
              <Connector
                state="available"
                type="Type 2"
                power={11}
                price={0.0014}
                parking={{ car: true, bike: true }}
              />
              <Connector
                state="busy"
                type="Type 2"
                power={11}
                price={0.0014}
                parking={{ car: true, bike: true }}
              />
              <Connector
                state="offline"
                type="Type 2"
                power={11}
                price={0.0014}
                parking={{ car: true, bike: true }}
              />
            </div>

            <Map
              google={this.props.google}
              zoom={14}
              initialCenter={{ lat: 37.44446960614344, lng: -122.06634320318699}}
            />
          </div>

        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLocations: fetchLocations(dispatch),
})

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjORL0jNsLJDB1CAqRfhyitfZTm4c1LXc"
})(connect(null, mapDispatchToProps)(App));
