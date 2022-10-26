import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchLine } from "../SearchLine/SearchLine";
import { Loader } from "../Loader/Loader";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { NextDaysWeather } from "../NextDaysWeather/NextDaysWeather";
import "./style.scss";
import { getItem, setItem } from "../../helper/localStorage";
import {
  setCurrentCity,
  setCurrentCityData,
  setTempByCurrentTime,
  cashCityDay,
} from "../../redux/store/weatherStore/actions";

export const App = () => {
  const dispatch = useDispatch();
  const { currentCityData, currentCity, currentTemp, allCitiesData } =
    useSelector((store) => store.weatherReducer);
  const [currentDayData, setCurrentDayData] = useState(null);
  const [nextDaysData, setNextDaysData] = useState(null);
  // TODO: create a variable for possible theme values (it will be an object like for the StorageKeys - look below)
  const [currentTheme, setCurrentTheme] = useState("light");
  const changeThemeHandler = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      document.body.style.backgroundColor = "#080338";
    } else {
      setCurrentTheme("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  useEffect(() => {
    // TODO: create an object for the storage keys. It will look like:
    // const StorageKeys = {
    //   currentCity: 'currentCity',
    //   ...
    // }
    // And you should use it everywhere to avoid mistyping
    const currentCityFromLS = getItem("currentCity");
    if (currentCityFromLS !== null && currentCityFromLS.length) {
      dispatch(setCurrentCity(currentCityFromLS));
    } else {
      dispatch(setCurrentCity("Vinnytsia"));
      setItem("currentCity", "Vinnytsia");
    }
  }, []);

  useEffect(() => {
    if (currentCity.length) {
      dispatch(setCurrentCityData(currentCity));
      dispatch(setTempByCurrentTime(currentCity));
    }
  }, [currentCity]);

  useEffect(() => {
    // TODO: arrow function don't need a return if it is one line
    const cityFromCashData = allCitiesData.find((cityCashData) => {
      return cityCashData.cityName === currentCity;
    });
    if (cityFromCashData) {
      setCurrentDayData(cityFromCashData.dataOfCity.slice(0, 24));
      setNextDaysData(cityFromCashData.dataOfCity.slice(24));
      return;
    }
    if (currentCityData.length && currentCity.length) {
      setCurrentDayData(currentCityData.slice(0, 24));
      setNextDaysData(currentCityData.slice(24));
      dispatch(cashCityDay(currentCity, currentCityData));
    }
  }, [currentCityData]);

  return (
    <div className="main-container" data-theme={currentTheme}>
      <div className="main-color">
        {currentDayData && currentTemp ? (
          <>
            <div className="App ">
              <SearchLine />
              <WeatherDay
                currentDayData={currentDayData}
                currentDayTemp={currentTemp}
              />
              <NextDaysWeather nextDaysInfo={nextDaysData} />
              <div onClick={changeThemeHandler} className="change-theme">
                <div className="change-theme__circle" />
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
