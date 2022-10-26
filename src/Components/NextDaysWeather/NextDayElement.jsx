import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export const NextDayElement = ({ dayInfo }) => {
  return (
    <div className="nd-container__el text-color block-color">
      <p className="nd-container__day ff-openSans-bold">
        {dayjs(dayInfo.time).format("ddd")}
      </p>
      <p className="nd-container__date ff-openSans-reg">
        {dayjs(dayInfo.time).format("D-MMMM")}
      </p>
      <div className="nd-container__box">
        <div className="nd-container__box-left nd-container__box-el">
          <img src={`./assets/img/${dayInfo.icon}`} alt="weather-pic" />
        </div>
        <div className="nd-container__box-right nd-container__box-el">
          <p className="ff-inter-medium first-temp">
            {`${dayInfo.max < 0 ? "-" : "+"} ${dayInfo.max}`}°
          </p>
          <p className="ff-inter-medium second-temp">
            {`${dayInfo.min < 0 ? "-" : "+"} ${dayInfo.min}`}°
          </p>
        </div>
      </div>
    </div>
  );
};

NextDayElement.propTypes = {
  dayInfo: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    time: PropTypes.any,
    icon: PropTypes.string,
  }),
};
