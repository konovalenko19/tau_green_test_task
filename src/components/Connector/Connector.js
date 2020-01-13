import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import ConnectorIcon from "../../icons/ConnectorIcon";
import CarIcon from "../../icons/CarIcon";
import BikeIcon from "../../icons/BikeIcon";

import "./Connector.scss";

const Connector = props => {
  const {
    component: Component = "div",
    className,

    state = "available",
    type,
    power = 0,
    price = 0,
    parking,

    ...other
  } = props;

  return (
    <Component
      className={classnames(
        "connector",
        `connector--${state}`,
        className && className,
      )}
      {...other}>

      <div className="connector__icon">
        <ConnectorIcon/>
      </div>

      <div className="connector__data">
        <div className="connector__type">
          {type}
        </div>

        <div className="connector__power">
          {power} kW
        </div>

        <div className="connector__price">
          {price} €/min
        </div>

        <div className="connector__parking">
          {parking.car && <CarIcon/>}
          {parking.bike && <BikeIcon/>}
        </div>
      </div>
    </Component>
  );
};

Connector.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,

  state: PropTypes.oneOf(["available", "busy", "offline"]),
  type: PropTypes.string,
  power: PropTypes.number,
  price: PropTypes.number,
  parking: PropTypes.object,
  other: PropTypes.object,
};

export default Connector;