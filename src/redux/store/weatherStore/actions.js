import {
  getWeatherInfoByCity,
  getCurrentWeatherByTime,
} from "../../../helper/apiHelper";

export const setCurrentCityAction = "SET_CURRENT_CITY";
export const setCurrentCityDataAction = "SET_CURRENT_CITY_DATA";
export const setCurrentTempByTimeAction = "SET_CURRENT_TEMP";
export const addCityToCashData = "ADD_CITY_TO_CASH_DATA";

export function setCurrentCity(city) {
  return {
    type: setCurrentCityAction,
    payload: city,
  };
}

export function setCurrentCityData(city) {
  return async function setCityData(dispatch) {
    const data = await getWeatherInfoByCity(city);
    dispatch({
      type: setCurrentCityDataAction,
      payload: data,
    });
  };
}
export function setTempByCurrentTime(city) {
  return async function setTemp(dispatch) {
    const response = await getCurrentWeatherByTime(city);
    dispatch({
      type: setCurrentTempByTimeAction,
      payload: response,
    });
  };
}
export function cashCityDay(city, data) {
  return {
    type: addCityToCashData,
    payload: {
      city,
      data,
    },
  };
}
