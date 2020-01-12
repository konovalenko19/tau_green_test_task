import React from "react";
import "./App.css";

import {
  Avatar,
  Badge,
  Connector,
  Loader,
  Logo,
  MenuItem,
  Pin,
  Rating,
  TabItem,
  UserCard,
} from "./components";

import LocationIcon from "./icons/LocationIcon";
import ClockIcon from "./icons/ClockIcon";
import CarIcon from "./icons/CarIcon";
import BikeIcon from "./icons/BikeIcon";
import MapIcon from "./icons/MapIcon";
import ConnectorIcon from "./icons/ConnectorIcon";

function App() {
  return (
    <div className="App">

      <Logo/>

      <MenuItem
        active
        startIcon={<MapIcon/>}>
        Map
      </MenuItem>

      <TabItem active>All locations</TabItem>

      <br/>

      <Rating value="4.1"/>

      <Badge>6</Badge>

      <Pin/>
      <Pin color="red"/>

      <Connector
        type="Type 2"
        power="6.4"
        price="0.034"
        parking={{ car: true, bike: true }}
      />

      <Connector
        type="Type 2"
        power="6.4"
        price="0.034"
        parking={{ car: true, bike: false }}
        state="busy"
      />

      <Connector
        type="Type 2"
        power="6.4"
        price="0.034"
        parking={{ car: false, bike: true }}
        state="offline"
      />

      <br/>
      <br/>

      <UserCard
        userName="Konovalenko Vladimir"
      />

      <LocationIcon/>
      <ClockIcon/>
      <CarIcon/>
      <BikeIcon/>
      <ConnectorIcon/>
      <MapIcon/>


      <div style={{ display: "flex" }}>
        <div style={{ width: "4rem", height: "5rem", backgroundColor: "#eee" }}>
          <Loader/>
        </div>

        <div style={{ width: "6rem", height: "5rem", backgroundColor: "#eee" }}>
          <Loader>Loading...</Loader>
        </div>

        <div style={{ width: "8rem", height: "5rem", backgroundColor: "#eee" }}>
          <Loader inline>Loading...</Loader>
        </div>
      </div>

      <Avatar
        isRounded
        size="90px"
        alt="girl"
        src="https://interesnoznat.com/wp-content/uploads/24175538_132819170750132_7498856231293943808_n-688x860.jpg">
        Alena
      </Avatar>

    </div>
  );
}

export default App;
