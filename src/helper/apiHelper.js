import dayjs from "dayjs";
import { weatherDataFilter } from "./weatherDataFilter";

const API_KEY = "dfae7ff26emsh92da296b5b77b28p131bf1jsn52a81475dbf0";
const API_HOST_DAYS = "aerisweather1.p.rapidapi.com";
const API_HOST_CURRENT_DAY = "weather-by-api-ninjas.p.rapidapi.com";

export const getWeatherInfoByCity = async (city) => {
  try {
    const fromDate = dayjs().format("YYYY-MM-DD");
    const endDate = dayjs().add(7, "day").format("YYYY-MM-DD");
    const response = await fetch(
      `https://${API_HOST_DAYS}/forecasts/${city},ukraine?from=${fromDate}&filter=1hr&to=${endDate}`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST_DAYS,
        },
      }
    );
    const weatherData = await response.json();
    return weatherDataFilter(weatherData.response[0].periods);
  } catch {
    throw new Error("Something went wrong with weather info city");
  }
};

export const getCurrentWeatherByTime = async (city) => {
  try {
    const response = await fetch(
      `https://${API_HOST_CURRENT_DAY}/v1/weather?city=${city}&country=Ukraine`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST_CURRENT_DAY,
        },
      }
    );
    const weatherData = await response.json();
    return weatherData.temp ? weatherData.temp : 0;
  } catch {
    throw new Error("Something went wrong with weather by current time");
  }
};
