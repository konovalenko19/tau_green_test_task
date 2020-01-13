import React from "react";

import {
  Logo,
  TabItem,
  MenuItem,
  UserCard,
} from "./components";

import MapContainer from "./containers/MapContainer";

import MapIcon from "./icons/MapIcon";

import "./App.css";

function App(props) {
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
          <MapContainer/>
        </div>

      </div>

    </div>
  );
}

export default App;
