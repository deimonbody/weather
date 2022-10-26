import dayjs from "dayjs";

const findMinMaxTemp = (day) => {
  const maxTemps = day.map((dayInfo) => dayInfo.maxTempC);
  const minTemps = day.map((dayInfo) => dayInfo.minTempC);
  return {
    max: Math.max(...maxTemps),
    min: Math.min(...minTemps),
  };
};

export const weatherDataFilter = (weatherData) => {
  let days = [];
  while (weatherData.length > 0) {
    const newDay = weatherData.splice(0, 24);
    days.push(newDay);
  }
  let currentDay = days.shift();
  let nextDays = days;
  nextDays.pop();

  currentDay = currentDay.map((dayInfo) => {
    return {
      time: dayInfo.validTime,
      temp: dayInfo.avgTempC,
      feelsLike: dayInfo.feelslikeC,
      humidity: dayInfo.humidity,
      pressure: dayInfo.pressureMB,
      wind: dayInfo.windSpeedKPH,
      icon: dayInfo.icon,
    };
  });
  nextDays = nextDays.map((day) => {
    return {
      time: dayjs(day[0].dateTimeISO),
      icon: day[13].icon,
      ...findMinMaxTemp(day),
    };
  });

  days = [...currentDay, ...nextDays];
  return days;
};

export const createWeatherByHours = (weatherData) => {
  const filterData = weatherData.filter((dayInfo) => {
    const currentTime = dayjs(dayInfo.time).get("hours");
    // TODO: [2, 4, 8, 12, ...].includes(currentTime)
    return (
      currentTime === 2 ||
      currentTime === 4 ||
      currentTime === 8 ||
      currentTime === 12 ||
      currentTime === 14 ||
      currentTime === 16 ||
      currentTime === 20 ||
      currentTime === 22
    );
  });
  const weatherByHours = [
    { beginTime: "2:00", endTime: "4:00" },
    { beginTime: "8:00", endTime: "12:00" },
    { beginTime: "14:00", endTime: "16:00" },
    { beginTime: "20:00", endTime: "22:00" },
  ];
  let i = 0;
  let j = 0;
  while (i < filterData.length) {
    const tempDuringDay = [filterData[i].temp, filterData[i + 1].temp];
    const feelsLike = [filterData[i].feelsLike, filterData[i + 1].feelsLike];
    const pressure = [filterData[i].pressure, filterData[i + 1].pressure];
    const humidity = [filterData[i].humidity, filterData[i + 1].humidity];
    const winds = [filterData[i].wind, filterData[i + 1].wind];
    const icons = [filterData[i].icon, filterData[i + 1].icon];
    weatherByHours[j] = {
      ...weatherByHours[j],
      tempDuringDay,
      feelsLike,
      pressure,
      humidity,
      winds,
      icons,
    };
    i += 2;
    j += 1;
  }
  return weatherByHours;
};

export const getCurrentWeatherImg = (weatherData, currentTime) => {
  const nearistData = weatherData.find((dayInfo) => {
    return dayjs(currentTime).get("hours") === dayjs(dayInfo.time).get("hours");
  });
  return nearistData.icon;
};
