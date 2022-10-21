import React from "react";
import Cloudy from "../../img/icons/cloudy.png";
import NightCloud from "../../img/icons/night-cloud.png";

import "./style.scss";

export const MainPart = () => {
  return (
    <div className="main-part-container">
      <p className="main-part-container__day text-white ff-openSans-reg">
        14 October, 2022 11:30
      </p>
      <div className="weather-container">
        <div className="weather-container__main">
          <div className="weather-container__main-img">
            <img src={Cloudy} alt="weather-img" />
          </div>
          <p className="weather-container__main-text text-white ff-inter-reg">
            +16°C
          </p>
        </div>
        <div className="weather-container__weather-during-day">
          <table className="weather-container__table">
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
                <td className="weather-container__table-time">2:00</td>
                <td />
                <td className="weather-container__table-time">5:00</td>
                <td className="weather-container__table-border" />
                <td className="weather-container__table-time">2:00</td>
                <td />
                <td className="weather-container__table-time">5:00</td>
                <td className="weather-container__table-border" />
                <td className="weather-container__table-time">2:00</td>
                <td />
                <td className="weather-container__table-time">5:00</td>
                <td className="weather-container__table-border" />
                <td className="weather-container__table-time">2:00</td>
                <td />
                <td className="weather-container__table-time">5:00</td>
              </tr>
              <tr>
                <td colSpan="2" />
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
                <td />
                <td className="weather-container__table-icon">
                  <img src={NightCloud} alt="weather-img" />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="weather-container__table-label">
                  Temp, °C
                </td>
                <td />
                <td className="weather-container__table-value">+7°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+7°</td>
                <td />
                <td className="weather-container__table-value">+9</td>
                <td />
                <td className="weather-container__table-value">+7°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+7°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
              </tr>
              <tr>
                <td colSpan="2" className="weather-container__table-label">
                  Feels Like
                </td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
              </tr>
              <tr>
                <td colSpan="2" className="weather-container__table-label">
                  Pressure
                </td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
              </tr>
              <tr>
                <td colSpan="2" className="weather-container__table-label">
                  Humidity, %
                </td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
              </tr>
              <tr>
                <td colSpan="2" className="weather-container__table-label">
                  Wind, km/h
                </td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
                <td />
                <td className="weather-container__table-value">+9°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
