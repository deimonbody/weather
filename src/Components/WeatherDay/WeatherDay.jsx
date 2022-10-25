import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {
  createWeatherByHours,
  getCurrentWeatherImg,
} from "../../helper/weatherDataFilter";
import "./style.scss";

export const WeatherDay = ({ currentDayData, currentDayTemp }) => {
  const weatherDataByHours = createWeatherByHours(currentDayData);
  const currentWeatherImg = getCurrentWeatherImg(currentDayData, dayjs());
  const currentDay = `${dayjs(currentDayData.time).format(
    "DD-MMMM-YYYY"
  )} ${dayjs().format("HH")} : ${dayjs().format("mm")}`;

  return (
    <>
      <div className="main-part-container block-color">
        <p className="main-part-container__day text-color ff-openSans-reg">
          {currentDay}
        </p>
        <div className="weather-container">
          <div className="weather-container__main">
            <div className="weather-container__main-img">
              <img
                src={`./assets/img/${currentWeatherImg}`}
                alt="weather-img"
              />
            </div>
            <p className="weather-container__main-text text-color ff-inter-reg">
              {`${currentDayTemp < 0 ? "-" : "+"} ${currentDayTemp}`}°C
            </p>
          </div>
          <div className="weather-container__weather-during-day">
            <table className="weather-container__table text-color">
              <thead>
                <tr>
                  <th colSpan="2"> </th>
                  <th> </th>
                  <th
                    colSpan="3"
                    className="weather-container__table-day-period-name"
                  >
                    Night
                  </th>
                  <th> </th>
                  <th
                    colSpan="3"
                    className="weather-container__table-day-period-name"
                  >
                    Morning
                  </th>
                  <th> </th>
                  <th
                    colSpan="3"
                    className="weather-container__table-day-period-name"
                  >
                    Day
                  </th>
                  <th> </th>
                  <th
                    colSpan="3"
                    className="weather-container__table-day-period-name"
                  >
                    Evening
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" />
                  <td />
                  <td className="weather-container__table-time text-color">
                    2:00
                  </td>
                  <td />
                  <td className="weather-container__table-time text-color">
                    4:00
                  </td>
                  <td className="weather-container__table-border" />
                  <td className="weather-container__table-time text-color">
                    8:00
                  </td>
                  <td />
                  <td className="weather-container__table-time text-color">
                    12:00
                  </td>
                  <td className="weather-container__table-border" />
                  <td className="weather-container__table-time text-color">
                    16:00
                  </td>
                  <td />
                  <td className="weather-container__table-time text-color">
                    18:00
                  </td>
                  <td className="weather-container__table-border" />
                  <td className="weather-container__table-time text-color">
                    20:00
                  </td>
                  <td />
                  <td className="weather-container__table-time text-color">
                    22:00
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" />
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.icons.map((icon) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-icon"
                            key={`${uuidv4()}`}
                          >
                            <img
                              src={`./assets/img/${icon}`}
                              alt="weather-img"
                            />
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
                </tr>
                <tr>
                  <td colSpan="2" className="weather-container__table-label">
                    Temp, °C
                  </td>
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.tempDuringDay.map((temp) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-value"
                            key={`${uuidv4()}`}
                          >
                            {`${temp < 0 ? "-" : "+"} ${temp}`}°
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
                </tr>
                <tr>
                  <td colSpan="2" className="weather-container__table-label">
                    Feels Like
                  </td>
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.feelsLike.map((temp) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-value"
                            key={`${uuidv4()}`}
                          >
                            {`${temp < 0 ? "-" : "+"} ${temp}`}°
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
                </tr>
                <tr>
                  <td colSpan="2" className="weather-container__table-label">
                    Pressure
                  </td>
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.pressure.map((press) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-value"
                            key={`${uuidv4()}`}
                          >
                            {press}
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
                </tr>
                <tr>
                  <td colSpan="2" className="weather-container__table-label">
                    Humidity, %
                  </td>
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.humidity.map((humidity) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-value"
                            key={`${uuidv4()}`}
                          >
                            {humidity}%
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
                </tr>
                <tr>
                  <td colSpan="2" className="weather-container__table-label">
                    Wind, km/h
                  </td>
                  <td />
                  {weatherDataByHours.map((el) => {
                    return el.winds.map((winds) => {
                      return (
                        <>
                          <td
                            className="weather-container__table-value"
                            key={`${uuidv4()}`}
                          >
                            {winds}
                          </td>
                          <td />
                        </>
                      );
                    });
                  })}
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
