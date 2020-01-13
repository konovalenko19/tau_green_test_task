import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Rating from "../Rating";
import Badge from "../Badge";
import Connector from "../Connector";
import Divider from "../Divider";
import Loader from "../Loader";

import LocationIcon from "../../icons/LocationIcon";
import ClockIcon from "../../icons/ClockIcon";

import "./Location.scss";

function timeFormat(time) {
  return time.slice(0,2) + ":" + time.slice(2);
}

function getWorkingTime(periods) {
  let dayTime = periods[ new Date().getDay() ];
  return `${timeFormat(dayTime.opens_at)} - ${timeFormat(dayTime.closes_at)}`;
}

const Location = props => {
  const {
    component: Component = "div",
    className,
    data,
  } = props;

  if (!data.id) {
    return null;
  }

  return (
    <Component 
      className={classnames(
        "location",
        className && className,
      )}>

      <div className="location__slider"/>

      <div className="location__inner">
        <Rating>{data.rating}</Rating>

        <div className="location__name">
          {data.name}
        </div>

        <div className="location__contact">
          <div className="location__contact-item">
            <div className="location__contact-item__icon">
              <LocationIcon/>
            </div>
            <div className="location__contact-item__text">
              {`${data.street}, ${data.city}, ${data.country}, ${data.postal_code}`}
            </div>
          </div>

          <div className="location__contact-item">
            <div className="location__contact-item__icon">
              <ClockIcon/>
            </div>
            <div className="location__contact-item__text">
              {data.opening_hours.open_now ? "Open now" : "Close now"}:
              {" "}
              {getWorkingTime(data.opening_hours.periods)}
            </div>
          </div>
        </div>
      </div>

      <Divider/>

      <div className="location__inner">

        <div className="location__title">
          <h2>Services</h2>
          <Badge>{data.services.length}</Badge>
        </div>

        {data.connectors.map(({ id, status, type, power, fee_per_minute, parking }) => (
          <Connector
            key={id}
            state={status}
            type={type}
            power={power}
            price={fee_per_minute}
            parking={parking}
          />
        ))}
        
      </div>
    </Component>
  );
};

Location.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
};

export default Location;