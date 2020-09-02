/**
 * @description gets data from sentiment API
 * @param {string} inputText - a text to be checked by sentiment API
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
