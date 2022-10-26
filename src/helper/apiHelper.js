import dayjs from "dayjs";
import axios from "axios";
import { weatherDataFilter } from "./weatherDataFilter";
import { API_HOST_CURRENT_DAY, API_KEY, API_HOST_DAYS } from "../common/common";

export const getWeatherInfoByCity = async (city) => {
  try {
    const fromDate = dayjs().format("YYYY-MM-DD");
    const endDate = dayjs().add(7, "day").format("YYYY-MM-DD");
    // TODO: rework fetch with axios
    const response = await axios.get(
      `https://${API_HOST_DAYS}/forecasts/${city},ukraine?from=${fromDate}&filter=1hr&to=${endDate}`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST_DAYS,
        },
      }
    );
    const weatherData = response.data.response[0].periods;
    return weatherDataFilter(weatherData);
  } catch {
    throw new Error("Something went wrong with weather info city");
  }
};

export const getCurrentWeatherByTime = async (city) => {
  try {
    const response = await axios.get(
      `https://${API_HOST_CURRENT_DAY}/v1/weather?city=${city}&country=Ukraine`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST_CURRENT_DAY,
        },
      }
    );
    const weatherData = response.data.temp;
    return weatherData;
  } catch {
    throw new Error("Something went wrong with weather by current time");
  }
};
