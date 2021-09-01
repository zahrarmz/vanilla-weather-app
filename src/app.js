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
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let windSpeed = document.querySelector("#speed");
  windSpeed.innerHTML = response.data.wind.speed;
}

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
