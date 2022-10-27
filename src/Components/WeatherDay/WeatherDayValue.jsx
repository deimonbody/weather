import React from "react";
import PropTypes from "prop-types";

export const WeatherDayValue = ({ value }) => {
  return (
    <>
      <td className="wd-container__value">{value}</td>
      <td />
    </>
  );
};

WeatherDayValue.propTypes = {
  value: PropTypes.string,
};
