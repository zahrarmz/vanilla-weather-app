function searchCity(event) {
  event.preventDefault();
  let valueSearch = document.querySelector(".searchCityName").value;
  let cityname = document.querySelector("#city-name");
  cityname.innerHTML = valueSearch;
}
let input = document.querySelector("form");
input.addEventListener("submit", searchCity);

function changeTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "	Saturday",
  ];
  let currentDay = days[now.getDay()];

  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let date = document.querySelector("#currentTime");
  let time = document.querySelector("#time");
  if (currentMinutes < 10) {
    date.innerHTML = `${currentDay}`;
    time.innerHTML = `${currentHours}: 0${currentMinutes} `;
  } else {
    date.innerHTML = `${currentDay}`;
    time.innerHTML = `${currentHours}: ${currentMinutes} `;
  }
}

changeTime();
