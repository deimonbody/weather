import React from "react";
import PropTypes from "prop-types";

export const WeatherDayTime = ({ time, index }) => {
  return (
    <>
      <td className="wd-container__day-time text-color" key={time}>
        {time[0]}
      </td>
      <td />
      <td className="wd-container__day-time text-color">{time[1]}</td>
      {index !== 3 ? <td className="wd-container__border" /> : null}
    </>
  );
};

WeatherDayTime.propTypes = {
  time: PropTypes.array,
  index: PropTypes.number,
};
