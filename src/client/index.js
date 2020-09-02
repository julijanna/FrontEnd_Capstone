import { getGeoName } from "./js/apiHandlers";
import { handleSubmit } from "./js/formHandler";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => Client.handleSubmit(event));

export { getGeoName, handleSubmit };
