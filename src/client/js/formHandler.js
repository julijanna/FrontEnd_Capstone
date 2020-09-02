import { getGeoName, getWeatherData, getImage } from "./apiHandlers";

/**
 * @description handles the submit form - front end text check and response check and updates UI
 * @param {object} event - A form submit event
 */

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let dateInput = new Date(document.getElementById("date").value);
  getWeather(dateInput, formText);
  const imageResponse = await getImage(formText);
  console.log(imageResponse["hits"][0]["webformatURL"]);
}

async function getWeather(date, location) {
  const todaysDate = new Date();
  const datesDiff = Math.ceil((date - todaysDate) / (1000 * 3600 * 24));
  const sentimentResponse = await getGeoName(location);
  let lat = sentimentResponse["geonames"][0]["lat"];
  let lon = sentimentResponse["geonames"][0]["lng"];
  let weatherResponse = {};

  // console.log(sentimentResponse["geonames"][0]);

  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    weatherResponse = await getWeatherData("current", lat, lon);
    weatherResponse = weatherResponse["data"][0];
  } else {
    weatherResponse = await getWeatherData("forecast/daily", lat, lon);
    if (datesDiff <= 16) {
      weatherResponse = weatherResponse["data"][datesDiff - 1];
    } else {
      weatherResponse = weatherResponse["data"][15];
    }
  }

  let temperature = weatherResponse["temp"];
  let description = weatherResponse["weather"]["description"];

  return temperature, description, datesDiff;
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
