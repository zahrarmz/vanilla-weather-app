function searchCity(event) {
  event.preventDefault();
  let valueSearch = document.querySelector(".searchCityName").value;
  let cityname = document.querySelector("#city-name");
  cityname.innerHTML = valueSearch;
  let apiKey = "dc6da26cba5d1a9368c9f7f2cd7d44f7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearch}&appid=${apiKey}&units=metric`;

  axios.get(url).then(UpdateTemp);
}
let input = document.querySelector("form");
input.addEventListener("submit", searchCity);

function UpdateTemp(response) {
  console.log(response);
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
  celsiustemp = Math.round(response.data.main.temp);
}

function changeToFahrenheit(event) {
  event.preventDefault();

  let fahrenheitTemp = document.querySelector("#temperature");
  fahrenheitTemp.innerHTML = Math.round(1.8 * celsiustemp + 32);
}

function changeTocelsiustemp(event) {
  event.preventDefault();
  let Temp = document.querySelector("#temperature");
  if (celsiustemp != null) {
    Temp.innerHTML = celsiustemp;
  }
}

let celsiustemp = null;
let fahrenheit = document.querySelector("#funit");
fahrenheit.addEventListener("click", changeToFahrenheit);
let celsius = document.querySelector("#cunit");
celsius.addEventListener("click", changeTocelsiustemp);

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

function forecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}
forecast();
