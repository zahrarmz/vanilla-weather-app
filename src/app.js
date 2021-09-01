function searchCity(event) {
  event.preventDefault();
  let valueSearch = document.querySelector(".searchCityName").value;
  let cityname = document.querySelector("#city-name");
  cityname.innerHTML = valueSearch;
}
let input = document.querySelector("form");
input.addEventListener("submit", searchCity);
