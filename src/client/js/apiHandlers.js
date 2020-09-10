/**
 * @description gets data from geoname API
 * @param {string} inputText - a given location
 */

async function getGeoName(inputText) {
  return fetch(`http://localhost:8081/geoNames?formText=${inputText}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => ({
      status: {
        code: "offline",
        msg: error,
      },
    }));
}

/**
 * @description gets data from weatherData API
 * @param {string} apiType - "forecast/daily" or "current" depending of the data which should be fetched - prognosis or current weather
 * @param {string} lat - lattitude
 * @param {string} lon - longitude
 */

async function getWeatherData(apiType, lat, lon) {
  return fetch(
    `http://localhost:8081/weatherData?lon=${lon}&lat=${lat}&apiType=${apiType}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((error) => ({
      status: {
        code: "offline",
        msg: error,
      },
    }));
}

/**
 * @description gets data from pixabay API
 * @param {string} inputText - a given location
 */

async function getImage(inputText) {
  return fetch(`http://localhost:8081/pixabayImage?formText=${inputText}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => ({
      status: {
        code: "offline",
        msg: error,
      },
    }));
}

export { getGeoName, getWeatherData, getImage };
