const searchBar = document.getElementById("searchBar");
const countries = document.getElementById("countries");
const center = document.getElementById("center");
const left = document.getElementById("left");
const right = document.getElementById("right");
const mapContainer = document.getElementById("mapContainer");

searchBar.addEventListener("focusin", () => {
  countries.classList.remove("d-none");
});
function logger() {
  console.log("text");
}

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
>` +
    cList
      .map((country) => {
        return `
      <a
        href="#"
        onclick="selectCountry('${country[0]}')"
        class="list-group-item list-group-item-action bg-secondary text-light d-flex justify-content-between"
        >${country[0]} <img src="${country[1]}" alt="${country[0]}'s Flag" width="40px" />
      </a>
    `;
      })
      .join("");
}
renderCountriesList();

function filterCountries(self) {
  let newcountriesName = countriesName;
  let searchKey = self.value.toLowerCase();
  newcountriesName = newcountriesName.filter(([cName, cFlag]) => {
    return cName.toLowerCase().includes(searchKey);
  });
  renderCountriesList(newcountriesName);
}

function selectCountry(countryName) {
  renderCountriesList();

  countries.classList.add("d-none");
  searchBar.value = countryName;
  const {
    capital,
    flags,
    idd,
    languages,
    name,
    population,
    region,
    timezones,
    latlng,
  } = getCountries(countryName);

  center.innerHTML = `
  <div
            class="rounded text-bg-dark mb-3 w-100"
            style="height: 350px; overflow: auto"
          >
            <div class="card-header rounded-top p-2 bg-warning text-dark">
              Country Native Name and Flag
            </div>
            <div class="card-body p-3">
              <img
                src="${flags.png}"
                alt="${name.common}'s Flag"
                class="rounded d-block mx-auto"
                style="height:200px; max-width:100%"

              />
              <h5 class="card-title text-center mt-2">
                <span class="text-warning">Native Name:</span> <br />${
                  Object.values(name.nativeName)[0].common
                }
              </h5>
            </div>
          </div>`;

  left.innerHTML = `
          <div
            class="rounded text-bg-dark mb-3 w-100"
            style="height: 350px; overflow: auto"
          >
            <div class="card-header rounded-top p-2 bg-warning text-dark">
              Country Information
            </div>
            <div class="card-body p-2">
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Capital:</span><span class="text-light">${capital}</span></p>
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Region:</span><span class="text-light">${region}</span></p>
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Population:</span><span class="text-light">${population}</span></p>
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Language(s):</span><span class="text-light">${Object.values(
                languages
              ).join(", ")}</span></p>
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Time Zone:</span><span class="text-light">${timezones}</span></p>
              <p><span class="card-title text-warning mt-2 d-inline-block w-50">Calling Code:</span><span class="text-light">${
                Object.values(idd)[0] + Object.values(idd)[1]
              }</span></p>
            </div>
          </div>
          `;
  let { main, wind, weather, visibility } = getWeather(latlng);
  console.log(weather[0]);
  right.innerHTML = `
<div
            class="rounded text-bg-dark mb-3 w-100"
            style="height: 350px; overflow: auto"
          >
            <div class="card-header rounded-top p-2 bg-warning text-dark">
              Wheather Information
            </div>
            <div class="card-body px-2 py-3">
              <div
                class="row container-fliud bg-info rounded  w-75 mx-auto mt-3 mb-4"
              >
                <div class="col-7 p-2">
                  <p class="text-danger text-center my-0">Weather Condition:</p>
                  <p class="text-dark text-center my-0">Condition</p>
                </div>
                <div class="col-5">
                  <img
                    src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
                    alt="weatherDescription"
                    class="d-block mx-auto w-75"
                  />
                </div>
              </div>
              <div class="container">
                <p>
                  <span class="text-warning d-inline-block w-25"
                    >Wind Speed:</span
                  ><span class="text-light"> test speed</span>
                </p>
                <p>
                  <span class="text-warning d-inline-block w-25"
                    >Temprature:</span
                  ><span class="text-light"> test Temprature</span>
                </p>
                <p>
                  <span class="text-warning d-inline-block w-25">Humidity:</span
                  ><span class="text-light"> test Humidity</span>
                </p>
                <p>
                  <span class="text-warning d-inline-block w-25"
                    >Visibility:</span
                  ><span class="text-light"> test Visibility</span>
                </p>
              </div>
            </div>
          </div>`;
  mapContainer.innerHTML = `
      <iframe
        src="https://maps.google.com/maps?width=100%&height=500&hl=en&q=${name.common}(Title)&ie=UTF8&t=&z=4&iwloc=B&output=embed"
        frameborder="0"
        width="100%"
        height="300px"
        class="rounded"
      ></iframe>`;
}
