function searchCity(valueSearch) {
  let apiKey = "dc6da26cba5d1a9368c9f7f2cd7d44f7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearch}&appid=${apiKey}&units=metric`;
  axios.get(url).then(UpdateTemp);
}
function handleSubmit(event) {
  event.preventDefault();
  let valueSearch = document.querySelector(".searchCityName").value;
  searchCity(valueSearch);
  let cityname = document.querySelector("#city-name");
  cityname.innerHTML = valueSearch;
}

let input = document.querySelector("form");
input.addEventListener("submit", handleSubmit);

function UpdateTemp(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let windSpeed = document.querySelector("#speed");
  windSpeed.innerHTML = response.data.wind.speed;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getForecast(response.data.coord);
}

let celsiustemp = null;

function changeTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];

  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let date = document.querySelector("#currentTime");
  let time = document.querySelector("#time");
  if (currentHours < 10) {
    if (currentMinutes < 10) {
      date.innerHTML = `${currentDay}`;
      time.innerHTML = `0${currentHours}:0${currentMinutes} `;
    } else {
      date.innerHTML = `${currentDay}`;
      time.innerHTML = `0${currentHours}:${currentMinutes} `;
    }
  } else {
    if (currentMinutes < 10) {
      date.innerHTML = `${currentDay}`;
      time.innerHTML = `${currentHours}:0${currentMinutes} `;
    } else {
      date.innerHTML = `${currentDay}`;
      time.innerHTML = `${currentHours}:${currentMinutes} `;
    }
  }
}

changeTime();
function forecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatdate(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
        </div>
      </div>
  `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apikey = "dc6da26cba5d1a9368c9f7f2cd7d44f7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(forecast);
}

function formatdate(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
searchCity("new york");
