import { getGeoName } from "./js/apiHandlers";
import {
  handleSubmit,
  updateLastTrips,
  getLocalStorage,
} from "./js/formHandler";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const submitButton = document.getElementById("submit");
const dateField = document.getElementById("date");
const storedLocations = getLocalStorage();

if (storedLocations != null) {
  updateLastTrips(getLocalStorage());
}

dateField.min = new Date().toISOString().substring(0, 10);
dateField.value = new Date().toISOString().substring(0, 10);

submitButton.addEventListener("click", () => Client.handleSubmit(event));

export { getGeoName, handleSubmit };
