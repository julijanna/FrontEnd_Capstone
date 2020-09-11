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
  const todaysDate = new Date();
  const datesDiff = Math.ceil((dateInput - todaysDate) / (1000 * 3600 * 24));
  const coordinates = await getGeoData(formText);

  if (coordinates == null) {
    setDefaults();
    alert("Please enter a valid location");
    return;
  }

  const weatherPromise = getWeather(
    dateInput,
    todaysDate,
    coordinates.lat,
    coordinates.lon
  );
  const imageResponsePromise = getImage(formText);

  let responseObject = await Promise.all([
    imageResponsePromise,
    weatherPromise,
  ]).then(function (values) {
    return {
      image: values[0],
      weather: values[1],
    };
  });

  responseObject["weather"] = processWeatherData(
    responseObject["weather"],
    datesDiff
  );

  responseObject["image"] = processImage(responseObject["image"]);

  updateUI(responseObject);
  addToLocalStorage(formText);
  updateLastTrips(getLocalStorage());
}

/**
 * @description gets a location string and returns it's longitude and lattitue as an object
 * @param {string} location - location string
 */

async function getGeoData(location) {
  const sentimentResponse = await getGeoName(location);

  if (sentimentResponse["geonames"].length === 0) {
    return;
  }

  return {
    lat: sentimentResponse["geonames"][0]["lat"],
    lon: sentimentResponse["geonames"][0]["lng"],
  };
}

/**
 * @description gets weather for a given date and langitute, longitude; returns an object with temperature and description
 * @param {string} date  - date in format YYYY-MM-DD
 * @param {date object} todaysDate  - today's Date() object
 * @param {string} lat  - lattitude
 * @param {string} lon  - longitude
 */

function getWeather(date, todaysDate, lat, lon) {
  let responseType = "forecast/daily";

  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    responseType = "current";
  }

  return getWeatherData(responseType, lat, lon);
}

/**
 * @description processes weather response from the function getWeather; returns an object with temperature and description
 * @param {json} data - weather API response
 * @param {int} datesDiff - difference between given date and today
 */

function processWeatherData(data, datesDiff) {
  let weatherResponse = {};
  if (datesDiff == 0) {
    weatherResponse = data["data"][0];
  } else if (datesDiff <= 16) {
    weatherResponse = data["data"][datesDiff - 1];
  } else {
    weatherResponse = data["data"][15];
  }

  let temperature = weatherResponse["temp"] + "\xB0";
  let description = weatherResponse["weather"]["description"];

  return { temperature: temperature, description: description };
}

/**
 * @description processes the response from the pixabay image API and returns a link to the image
 * @param {json} dataObject  - reponse from the image API
 */

function processImage(
  dataObject = {
    total: 0,
    totalHits: 0,
    hits: [],
  }
) {
  if (dataObject["hits"].length > 0) {
    dataObject = dataObject["hits"][0]["webformatURL"];
  } else {
    dataObject = "src/client/img/unknown_location.png";
  }

  return dataObject;
}

/**
 * @description updates the UI with the weather data and a picture
 * @param {object} dataObject - an object with keys 'weather' and 'picture'
 */

function updateUI(dataObject) {
  let temp = document.getElementById("temperature");
  let weather = document.getElementById("weather");
  let picture = document.getElementById("picture");
  let pictureSection = document.getElementById("picture_section");
  let resultSection = document.getElementById("results_section");

  resultSection.style.display = "block";
  temp.innerText = dataObject["weather"]["temperature"];
  weather.innerText = dataObject["weather"]["description"];
  picture.style.backgroundImage = `url(${dataObject["image"]})`;
  pictureSection.style.display = "block";
}

/**
 * @description Sets the result table to default empty strings and blends out the picutre
 */

function setDefaults() {
  let picture = document.getElementById("picture");
  let pictureSection = document.getElementById("picture_section");
  let resultSection = document.getElementById("results_section");

  resultSection.style.display = "none";
  picture.style.backgroundImage = "";
  pictureSection.style.display = "none";
  document.getElementById("temperature").innerHTML = "";
  document.getElementById("weather").innerHTML = "";
}

/**
 * @description adds a location to the local storage
 * @param {string} location - location from the text box
 */

function addToLocalStorage(location) {
  let values = [];
  if (localStorage["geoname"]) {
    values = getLocalStorage();
  }

  if (values.indexOf(location) == -1) {
    values.unshift(location);
    if (values.length > 5) {
      values.pop();
    }
    localStorage["geoname"] = JSON.stringify(values);
  }
}

/**
 * @description gets the location values from the local storage
 */

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("geoname"));
}

/**
 * @description updates the last trips table in the UI with the given list of values
 * @param {array of strings} list - array of locations
 */

function updateLastTrips(list) {
  let newRow = {};
  let newBody = document.createElement("tbody");
  let resultsTable = document
    .getElementById("trips_table")
    .getElementsByTagName("tbody")[0];

  for (const val of list) {
    newRow = newBody.insertRow(newBody.rows.length);
    newRow.innerHTML = "<td>" + val + "</td>";
  }

  resultsTable.parentNode.replaceChild(newBody, resultsTable);

  let tripsSection = document.getElementById("trips");
  tripsSection.style.display = "block";
}

export {
  handleSubmit,
  updateLastTrips,
  getLocalStorage,
  processImage,
  getGeoData,
};
