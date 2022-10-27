import React from "react";
import PropTypes from "prop-types";

export const WeatherDayPeriod = ({ dayPeriod, index }) => {
  return (
    <>
      <th colSpan="3" className="wd-container__day-period">
        {dayPeriod}
      </th>
      {index !== 3 ? <th> </th> : null}
    </>
  );
};

WeatherDayPeriod.propTypes = {
  dayPeriod: PropTypes.string,
  index: PropTypes.number,
};
