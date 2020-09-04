import { getGeoName, getWeatherData, getImage } from "./apiHandlers";

/**
 * @description handles the submit form - front end text check and response check and updates UI
 * @param {object} event - A form submit event
 */

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const todaysDate = new Date();
  const datesDiff = Math.ceil((date - todaysDate) / (1000 * 3600 * 24));
  let formText = document.getElementById("name").value;
  let dateInput = new Date(document.getElementById("date").value);
  const coordinates = await getGeoData(formText);

  console.log(coordinates);

  const weatherPromise = getWeather(
    dateInput,
    todaysDate,
    coordinates.lat,
    coordinates.lon
  );
  const imageResponsePromise = getImage(formText);
  // console.log(imageResponse["hits"][0]["webformatURL"]);

  Promise.all([imageResponsePromise, weatherPromise]).then((values) => {
    console.log(values[0]);
  });
}

async function getGeoData(location) {
  const sentimentResponse = await getGeoName(location);

  return {
    lat: sentimentResponse["geonames"][0]["lat"],
    lon: sentimentResponse["geonames"][0]["lng"],
  };
}

function getWeather(date, todaysDate, lat, lon) {
  // let weatherResponse = {};
  let responseType = "forecast/daily";

  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    responseType = "current";
  }
  // weatherResponse = weatherResponse["data"][0];

  console.log(lat, lon);

  return getWeatherData(responseType, lat, lon);
}

function processWeatherData(data, datesDiff) {
  let weatherResponse = {};
  if (datesDiff <= 16) {
    weatherResponse = data["data"][datesDiff - 1];
  } else {
    weatherResponse = data["data"][15];
  }

  let temperature = data["temp"];
  let description = data["weather"]["description"];

  return temperature, description;
}

/**
 * @description Sets the result table to default empty strings
 */

function setDefaults() {
  document.getElementById("subjectivity").innerHTML = "";
  document.getElementById("confidence").innerHTML = "";
  document.getElementById("irony").innerHTML = "";
}

export { handleSubmit };
