import React from "react";
import PropTypes from "prop-types";

export const WeatherDayIcon = ({ icon }) => {
  return (
    <>
      <td className="wd-container__icon">
        <img src={`./assets/img/${icon}`} alt="weather-img" />
      </td>
      <td />
    </>
  );
};

WeatherDayIcon.propTypes = {
  icon: PropTypes.string,
};
