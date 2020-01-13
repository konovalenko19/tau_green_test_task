import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Rating from "../Rating";
import Badge from "../Badge";
import Connector from "../Connector";
import Divider from "../Divider";

import LocationIcon from "../../icons/LocationIcon";
import ClockIcon from "../../icons/ClockIcon";

import "./Station.scss";
import { connect } from "react-redux";

const Station = props => {
  const {
    component: Component = "div",
    className,
    data,
  } = props;

  if (!data) {
    return null;
  }

  console.log(data.id);

  return (
    <Component 
      className={classnames(
        "station",
        className && className,
      )}>
        
      <div className="station__slider"/>

      <div className="station__inner">
        <Rating>{data.rating}</Rating>

        <div className="station__name">
          {data.name}
        </div>

        <div className="station__contact">
          <div className="station__contact-item">
            <div className="station__contact-item__icon">
              <LocationIcon/>
            </div>
            <div className="station__contact-item__text">
              {`${data.street}, ${data.city}, ${data.country}, ${data.postal_code}`}
            </div>
          </div>

          <div className="station__contact-item">
            <div className="station__contact-item__icon">
              <ClockIcon/>
            </div>
            <div className="station__contact-item__text">
              {data.opening_hours.open_now ? "Open now" : "Close now"}:

              {data.opening_hours.periods[0].opens_at} - 
              {data.opening_hours.periods[0].closes_at}
            </div>
          </div>
        </div>
      </div>

      <Divider/>

      <div className="station__inner">

        <div className="station__title">
          <h2>Services</h2>
          <Badge>{data.services.length}</Badge>
        </div>

        {data.connectors && data.connectors.map(connector => {
          return (
            <Connector
              key={connector.id}
              state={connector.status}
              type={connector.type}
              power={connector.power}
              price={connector.fee_per_minute}
              parking={connector.parking}
            />
          );
        })}
        
      </div>
    </Component>
  );
};

Station.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
};

export default Station;