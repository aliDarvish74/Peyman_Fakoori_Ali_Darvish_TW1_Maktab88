const searchBar = document.getElementById("searchBar");
const countries = document.getElementById("countries");
const nameFlag = document.getElementById("name-flag-data");
const countryData = document.getElementById("country-data");
const weatherData = document.getElementById("weather-data");
const mapContainer = document.getElementById("mapContainer");

$(() => {
  getCountries();
  renderCountriesList();
});

searchBar.addEventListener("focusin", function () {
  countries.classList.remove("d-none");
  filterCountries(this);
});

window.addEventListener("click", (e) => {
  if (!countries.classList.contains("d-none")) {
    if (e.target.parentElement !== countries && e.target !== searchBar) {
      countries.classList.add("d-none");
    }
  }
});

function renderCountriesList(cList = countriesName) {
  countries.innerHTML =
    `<a
  id="searchTitle"
  class="list-group-item list-group-item-action disabled bg-warning text-dark"
  >Matching Countries...</a
> 
<div id="country-list-body" class="rounded-bottom">
` +
    cList
      .map((country) => {
        return `
      <a
        href="#"
        onclick="selectCountry('${country[0]}')"
        class="list-group-item list-group-item-action bg-dark text-light d-flex justify-content-between"
        >${country[0]} <img src="${country[1]}" alt="${country[0]}'s Flag" width="40px" />
      </a>
    `;
      })
      .join("");
  +`</div>`;
}

function selectCountry(countryName) {
  countries.classList.add("d-none");
  searchBar.value = countryName;

  const country = getCountries(countryName);

  const callingCode =
    country.idd.suffixes.length !== 1
      ? country.idd.root
      : country.idd.root + country.idd.suffixes;

  nameFlag.innerHTML = nameFlagGenerator(country);

  countryData.innerHTML = countryDataGenerator(country, callingCode);

  const weather = getWeather(country.capitalInfo.latlng);
  weatherData.innerHTML = weatherDataGenerator(weather);

  mapContainer.innerHTML = mapGenerator(country.capital);
}
