const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const cors = require("cors");
const fetch = require("node-fetch");
const { response } = require("express");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/geoNames", getGeonamesResponse);

function getGeonamesResponse(req, res) {
  const text = req.query.formText;
  fetch(
    `http://api.geonames.org/searchJSON?name_equals=${text}&featureClass=P&maxRows=20&username=${process.env.GEONAMES_USERNAME}`
  )
    .catch(() =>
      res.send({
        status: {
          code: response.status,
          msg: response.statusText,
        },
      })
    )
    .then((response) => response.json())
    .then((body) => res.send(body));
}

app.get("/weatherData", getCurrentWeatherbitResponse);

function getCurrentWeatherbitResponse(req, res) {
  lon = req.query.lon;
  lat = req.query.lat;
  apiType = req.query.apiType;
  fetch(
    `https://api.weatherbit.io/v2.0/${apiType}?lon=${lon}&lat=${lat}&key=${process.env.WEATHERBIT_API_KEY}`
  )
    .catch(() =>
      res.send({
        status: {
          code: response.status,
          msg: response.statusText,
        },
      })
    )
    .then((response) => response.json())
    .then((body) => res.send(body));
}

app.get("/pixabayImage", getImage);

function getImage(req, res) {
  text = req.query.formText;
  fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${text}`)
    .catch(() =>
      res.send({
        status: {
          code: response.status,
          msg: response.statusText,
        },
      })
    )
    .then((response) => response.json())
    .then((body) => res.send(body));
}

// export for testing
module.exports = app;
