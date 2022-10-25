import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setCurrentCity } from "../../redux/store/weatherStore/actions";
import { setItem } from "../../helper/localStorage";
import "./style.scss";

export const SearchLine = () => {
  const [inpVal, setVal] = useState("");
  const currentCity = useSelector((store) => store.weatherReducer.currentCity);
  const inputRef = useRef(null);
  const helpsRef = useRef(null);
  const citites = [
    "Kiev",
    "Vinnytsia",
    "Kharkiv",
    "Odesa",
    "Lviv",
    "Zaporizhzhia",
    "Zhytomyr",
    "Kherson",
  ];
  const [isShowHelp, setIsShowHelp] = useState(false);
  const [activeCities, setActiveCities] = useState(citites);
  const dispatch = useDispatch();

  const inputChange = (val) => {
    setVal(val);
    if (val === "") {
      setActiveCities(citites);
    } else {
      const filteredCitites = citites.filter((city) => {
        return city.includes(val);
      });
      setActiveCities(filteredCitites);
    }
  };
  const setNewCityHandler = () => {
    if (citites.includes(inpVal)) {
      dispatch(setCurrentCity(inpVal));
      setItem("currentCity", inpVal);
      setVal("");
    }
  };
  const setCityInputVal = (city) => {
    setVal(city);
    setIsShowHelp(false);
  };
  const onFocusHanlder = () => {
    setIsShowHelp(true);
    if (inpVal === "") {
      setActiveCities(citites);
    }
  };

  useEffect(() => {
    const clickHandler = (e) => {
      if (e.target !== inputRef.current && e.target !== helpsRef.current) {
        setIsShowHelp(false);
      }
    };
    const enterPressed = (e) => {
      if (e.key === "Enter") {
        setNewCityHandler();
      }
    };
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", enterPressed);
    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", enterPressed);
    };
  }, [inpVal]);

  return (
    <div className="container-search-line">
      <p className="text-color ff-openSans-reg container-search-line__city-name">
        {currentCity}, Ukraine
      </p>
      <div className="container-search-line__search-box">
        <svg
          onClick={setNewCityHandler}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <div className="input-block">
          <input
            onFocus={onFocusHanlder}
            ref={inputRef}
            value={inpVal}
            onChange={(e) => inputChange(e.target.value)}
            className="ff-openSans-reg"
            placeholder="Search the city"
          />
          {isShowHelp ? (
            <div className="help-list" ref={helpsRef}>
              {activeCities.length ? (
                activeCities.map((city) => {
                  return (
                    <div
                      key={`${uuidv4()}`}
                      className="help-list__item ff-openSans-bold"
                      onClick={() => {
                        setCityInputVal(city);
                      }}
                    >
                      {city}
                    </div>
                  );
                })
              ) : (
                <div className="help-list__item help-list__item_not-found ff-openSans-bold">
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
