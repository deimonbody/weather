import React, { useMemo } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import {
  createWeatherByHours,
  getCurrentWeatherImg,
} from "../../helper/weatherDataFilter";
import { WeatherDayTime } from "./WeatherDayTime";
import { WeatherDayIcon } from "./WeatherDayIcon";
import { WeatherDayTemp } from "./WeatherDayTemp";
import { WeatherDayValue } from "./WeatherDayValue";
import { WeatherDayPeriod } from "./WeatherDayPeriod";
import "./style.scss";

export const WeatherDay = ({ currentDayData, currentDayTemp }) => {
  const weatherDataByHours = createWeatherByHours(currentDayData);
  const currentWeatherImg = getCurrentWeatherImg(currentDayData, dayjs());
  const currentDay = useMemo(
    () =>
      `${dayjs(currentDayData.time).format("DD-MMMM-YYYY")} ${dayjs().format(
        "HH"
      )} : ${dayjs().format("mm")}`,
    []
  );
  return (
    <>
      <div className="wd-container block-color">
        <p className="wd-container__day text-color ff-openSans-reg">
          {currentDay}
        </p>
        <div className="wd-container__main">
          <div className="wd-container__left-side">
            <div className="wd-container__left-img">
              <img
                src={`./assets/img/${currentWeatherImg}`}
                alt="weather-img"
              />
            </div>
            <p className="wd-container__left-text text-color ff-inter-reg">
              {`${currentDayTemp < 0 ? "-" : "+"} ${currentDayTemp}`}°C
            </p>
          </div>
          <div className="wd-container__right-side">
            <table className="wd-container__table text-color">
              <thead>
                <tr>
                  <th colSpan="2"> </th>
                  <th> </th>
                  {["Night", "Morning", "Day", "Evening"].map(
                    (dayPeriod, index) => (
                      <WeatherDayPeriod
                        dayPeriod={dayPeriod}
                        index={dayPeriod}
                        key={index}
                      />
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" />
                  <td />
                  {[
                    ["2:00", "4:00"],
                    ["8:00", "12:00"],
                    ["16:00", "18:00"],
                    ["20:00", "22:00"],
                  ].map((time, index) => (
                    <WeatherDayTime time={time} index={index} key={index} />
                  ))}
                </tr>
                <tr>
                  <td colSpan="2" />
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.icons.map((icon, index) => (
                      <WeatherDayIcon icon={icon} key={index} />
                    ))
                  )}
                </tr>
                <tr>
                  <td colSpan="2" className="wd-container__label">
                    Temp, °C
                  </td>
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.tempDuringDay.map((temp, index) => (
                      <WeatherDayTemp temp={temp} key={index} />
                    ))
                  )}
                </tr>
                <tr>
                  <td colSpan="2" className="wd-container__label">
                    Feels Like
                  </td>
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.feelsLike.map((temp, index) => (
                      <WeatherDayTemp temp={temp} key={index} />
                    ))
                  )}
                </tr>
                <tr>
                  <td colSpan="2" className="wd-container__label">
                    Pressure
                  </td>
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.pressure.map((press, index) => (
                      <WeatherDayValue value={`${press}`} key={index} />
                    ))
                  )}
                </tr>
                <tr>
                  <td colSpan="2" className="wd-container__label">
                    Humidity, %
                  </td>
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.humidity.map((humidity, index) => (
                      <WeatherDayValue value={`${humidity}%`} key={index} />
                    ))
                  )}
                </tr>
                <tr>
                  <td colSpan="2" className="wd-container__label">
                    Wind, km/h
                  </td>
                  <td />
                  {weatherDataByHours.map((el) =>
                    el.winds.map((winds, index) => (
                      <WeatherDayValue value={`${winds}`} key={index} />
                    ))
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

WeatherDay.propTypes = {
  currentDayData: PropTypes.array,
  currentDayTemp: PropTypes.number,
};
