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
import { StorageKeys, themes } from "../../common/common";

export const App = () => {
  const dispatch = useDispatch();
  const { currentCityData, currentCity, currentTemp, allCitiesData } =
    useSelector((store) => store.weatherReducer);
  const [currentDayData, setCurrentDayData] = useState(null);
  const [nextDaysData, setNextDaysData] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(themes.lightTheme);
  const changeThemeHandler = () => {
    if (currentTheme === themes.lightTheme) {
      setCurrentTheme(themes.darkTheme);
      document.body.style.backgroundColor = "#080338";
    } else {
      setCurrentTheme(themes.lightTheme);
      document.body.style.backgroundColor = "#fff";
    }
  };

  useEffect(() => {
    const currentCityFromLS = getItem(StorageKeys.currentCity);
    if (currentCityFromLS !== null && currentCityFromLS.length) {
      dispatch(setCurrentCity(currentCityFromLS));
    } else {
      dispatch(setCurrentCity("Vinnytsia"));
      setItem(StorageKeys.currentCity, "Vinnytsia");
    }
  }, []);

  useEffect(() => {
    if (currentCity.length) {
      setCurrentDayData([]);
      dispatch(setCurrentCityData(currentCity));
      dispatch(setTempByCurrentTime(currentCity));
    }
  }, [currentCity]);

  useEffect(() => {
    const cityFromCashData = allCitiesData.find(
      (cityCashData) => cityCashData.cityName === currentCity
    );
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
        {currentDayData && currentDayData.length && currentTemp ? (
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
