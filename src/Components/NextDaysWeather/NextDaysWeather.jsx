import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { NextDayElement } from "./NextDayElement";
import "./style.scss";

export const NextDaysWeather = ({ nextDaysInfo }) => {
  return (
    <div className="container">
      {nextDaysInfo.map((dayInfo) => {
        return <NextDayElement key={`${uuidv4()}`} dayInfo={dayInfo} />;
      })}
    </div>
  );
};

NextDaysWeather.propTypes = {
  nextDaysInfo: PropTypes.array,
};
