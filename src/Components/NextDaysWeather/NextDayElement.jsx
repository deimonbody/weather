import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export const NextDayElement = ({ dayInfo }) => {
  return (
    <div className="dayInfoEl text-color block-color">
      <p className="dayInfoEl__day ff-openSans-bold">
        {dayjs(dayInfo.time).format("ddd")}
      </p>
      <p className="dayInfoEl__date ff-openSans-reg">
        {dayjs(dayInfo.time).format("D-MMMM")}
      </p>
      <div className="dayInfoEl__img-block">
        <div className="dayInfoEl__img-container dayInfoEl__img-block-el">
          <img src={`./assets/img/${dayInfo.icon}`} alt="weather-pic" />
        </div>
        <div className="dayInfoEl__text-container dayInfoEl__img-block-el">
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
