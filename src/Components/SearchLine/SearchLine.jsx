import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/store/weatherStore/actions";
import { setItem } from "../../helper/localStorage";
import "./style.scss";
import { citites } from "../../common/common";

export const SearchLine = () => {
  const [inpVal, setVal] = useState("");
  const currentCity = useSelector((store) => store.weatherReducer.currentCity);
  const inputRef = useRef(null);
  const helpsRef = useRef(null);
  const [isShowHelp, setIsShowHelp] = useState(false);
  const [activeCities, setActiveCities] = useState(citites);
  const dispatch = useDispatch();

  const inputChange = (val) => {
    setVal(val);
    if (!val) {
      setActiveCities(citites);
    } else {
      const filteredCitites = citites.filter((city) => city.includes(val));
      setActiveCities(filteredCitites);
    }
  };
  const setNewCityHandler = (cityName = null) => {
    if (citites.includes(cityName || inpVal)) {
      dispatch(setCurrentCity(cityName || inpVal));
      setItem("currentCity", cityName || inpVal);
      setVal("");
    }
  };
  const setCityInputVal = (city) => {
    setNewCityHandler(city);
    setIsShowHelp(false);
  };
  const onFocusHanlder = () => {
    setIsShowHelp(true);
    if (!inpVal) setActiveCities(citites);
  };

  useEffect(() => {
    const clickHandler = (e) => {
      if (e.target !== inputRef.current && e.target !== helpsRef.current) {
        setIsShowHelp(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className="search-container">
      <p className="text-color ff-openSans-reg search-container__city">
        {currentCity}, Ukraine
      </p>
      <div className="search-container__inp-box">
        <svg
          onClick={() => setNewCityHandler()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <div className="search-container__inp-block">
          <input
            onFocus={onFocusHanlder}
            ref={inputRef}
            value={inpVal}
            onChange={(e) => inputChange(e.target.value)}
            className="ff-openSans-reg"
            placeholder="Search the city"
          />
          {isShowHelp ? (
            <div className="search-container__cities-list" ref={helpsRef}>
              {activeCities.length ? (
                activeCities.map((city) => (
                  <div
                    key={city}
                    className="search-container__cities-item ff-openSans-bold"
                    onClick={() => {
                      setCityInputVal(city);
                    }}
                  >
                    {city}
                  </div>
                ))
              ) : (
                <div className="search-container__cities-item search-container__cities-item_not-found ff-openSans-bold">
                  Nothing was found...
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SearchLine;
