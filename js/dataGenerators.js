function nameFlagGenerator({ name, flags }) {
  return `
    <div
      class="rounded text-bg-dark mb-3 w-100"
      style="height: 350px;"
    >
      <div class="card-header rounded-top p-2 bg-warning text-dark">
        Country Native Name and Flag
      </div>
      <div class="card-body p-3" style="height: 310px; overflow: auto">
        <img
          src="${flags.png}"
          alt="${name.common}'s Flag"
          class="rounded d-block mx-auto"
          style="height:200px; max-width:100%"
        />
        <h5 class="card-title text-center mt-2">
          <span class="text-warning">Native Name:</span><br />${
            Object.values(name.nativeName)[0].common
          }
        </h5>
      </div>
    </div>`;
}

function countryDataGenerator(
  { name, capital, region, subregion, population, languages, timezones },
  callingCode
) {
  return `
    <div
      class="rounded text-bg-dark mb-3 w-100"
      style="height: 350px;"
    >
      <div class="card-header rounded-top p-2 bg-warning text-dark">
        Country Information
      </div>
      <div class="card-body px-2 pt-2" style="height: 310px; overflow: auto">
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Name:</span>
          <span class="text-light">${name.common}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Capital:</span>
          <span class="text-light">${capital}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Region:</span>
          <span class="text-light">${region}, ${subregion}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Population:</span>
          <span class="text-light">${population}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Language(s):</span>
          <span class="text-light">${Object.values(languages).join(", ")}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Time Zone:</span>
          <span class="text-light">${timezones.join(" , ")}</span>
        </p>
        <p>
          <span class="card-title text-warning mt-0 d-inline-block w-50">Calling Code:</span>
          <span class="text-light">${callingCode}</span>
        </p>
      </div>
    </div>
  `;
}

function weatherDataGenerator({ main, wind, weather, visibility }) {
  return `
    <div
      class="rounded text-bg-dark mb-3 w-100"
      style="height: 350px;"
      >
        <div class="card-header rounded-top p-2 bg-warning text-dark">
          Capital Weather Information
        </div>
        <div class="card-body px-2 py-3" style="height: 310px; overflow: auto">
          <div
            class="row container-fliud bg-info rounded  w-75 mx-auto mt-3 mb-4"
            >
              <div class="col-7 p-2">
                <p class="text-danger text-center my-0">Weather Condition:</p>
                <p class="text-dark text-center my-0">${weather[0].main}</p>
              </div>
              <div class="col-5">
                <img
                  src="http://openweathermap.org/img/wn/${
                    weather[0].icon
                  }@2x.png"
                  alt="weatherDescription"
                  class="d-block mx-auto w-75"
                  />
              </div>
          </div>
          <div class="container">
            <p>
              <span class="text-warning d-inline-block w-25"
                >Wind Speed:</span>
              <span class="text-light">${(wind.speed * 3.6).toFixed(1)}</span>
              <span class="text-warning ts = 2"> km/h</span>
            </p>
            <p>
              <span class="text-warning d-inline-block w-25"
                >Temprature:</span>
              <span class="text-light">${main.temp} </span>
              <span class="text-warning">°C</span>
            </p>
            <p>
              <span class="text-warning d-inline-block w-25">Humidity:</span
                    >
              <span class="text-light">${main.humidity} </span>
              <span class="text-warning"> %</span>
            </p>
            <p>
              <span class="text-warning d-inline-block w-25"
                >Visibility:</span>
              <span class="text-light">${visibility} </span>
              <span class="text-warning">m</span>
            </p>
          </div>
        </div>
      </div>`;
}

function mapGenerator(city) {
  return `
      <div
        class="rounded text-bg-dark mb-3 w-100"
      >
        <div class="card-header rounded-top p-2 bg-warning text-dark">
          Capital Location On Map
        </div>
        <div class="card-body px-2 py-3">
          <iframe
            src="https://maps.google.com/maps?width=100%&height=500&hl=en&q=${city}(Title)&ie=UTF8&t=&z=5&iwloc=B&output=embed"
            frameborder="0"
            width="100%"
            height="300px"
            class="rounded"
          ></iframe>
        </div>
      </div>`;
}
