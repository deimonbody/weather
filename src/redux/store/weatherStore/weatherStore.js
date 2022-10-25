import {
  setCurrentCityAction,
  setCurrentCityDataAction,
  setCurrentTempByTimeAction,
  addCityToCashData,
} from "./actions";

const initialState = {
  currentCity: "",
  allCitiesData: [],
  currentCityData: [],
  currentTemp: 0,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentCityAction: {
      return {
        ...state,
        currentCity: action.payload,
      };
    }
    case setCurrentCityDataAction: {
      return {
        ...state,
        currentCityData: action.payload,
      };
    }
    case setCurrentTempByTimeAction: {
      return {
        ...state,
        currentTemp: action.payload,
      };
    }
    case addCityToCashData: {
      const { city, data } = action.payload;
      return {
        ...state,
        allCitiesData: [
          ...state.allCitiesData,
          { cityName: city, dataOfCity: data },
        ],
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
