import React from "react";
import PropTypes from "prop-types";

export const WeatherDayTemp = ({ temp }) => {
  return (
    <>
      <td className="wd-container__value">
        {`${temp < 0 ? "-" : "+"} ${temp}`}°
      </td>
      <td />
    </>
  );
};

WeatherDayTemp.propTypes = {
  temp: PropTypes.number,
};
