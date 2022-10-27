import React from "react";
import PropTypes from "prop-types";
import { NextDayElement } from "./NextDayElement";
import "./style.scss";

export const NextDaysWeather = ({ nextDaysInfo }) => {
  return (
    <div className="nd-container">
      {nextDaysInfo.map((dayInfo, index) => (
        <NextDayElement key={index} dayInfo={dayInfo} />
      ))}
    </div>
  );
};

NextDaysWeather.propTypes = {
  nextDaysInfo: PropTypes.array,
};
