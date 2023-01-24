let countriesName = [];

function getCountries(countryName = null) {
  let selectedCountry = "";
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: "get",
    success: function (res, _stText, xhr) {
      if (!!countryName) {
        selectedCountry = res.find(
          (country) => country.name.common === countryName
        );
        return;
      }
      res.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common, undefined, {
          numeric: true,
          sensitivy: false,
        });
      });
      for (const country of res) {
        countriesName.push([country.name.common, country.flags.png]);
      }
    },
    error: function (err) {
      console.log(err);
    },
    async: false,
  });
  return selectedCountry;
}
getCountries();

function getWeather([lat, lng]) {
  let weatherInfo = {};
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=963bc7a1945cf0f1c0aa271165ee890b`,
    type: "get",
    async: false,
    success: function (res) {
      weatherInfo = { ...res };
    },
  });
  return weatherInfo;
}
