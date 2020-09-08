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

function getWeather(date, todaysDate, lat, lon) {
  let responseType = "forecast/daily";

  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    responseType = "current";
  }

  return getWeatherData(responseType, lat, lon);
}

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

function processImage(dataObject) {
  if (dataObject["hits"].length > 0) {
    dataObject = dataObject["hits"][0]["webformatURL"];
  } else {
    dataObject = "src/client/img/unknown_location.png";
  }

  return dataObject;
}

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
 * @description Sets the result table to default empty strings
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

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("geoname"));
}

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
}

export { handleSubmit, updateLastTrips, getLocalStorage };
