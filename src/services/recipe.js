import { api } from "../boot/axios.js";
import { apiUrl, typeApi, apiId, apiKey } from "../axios/index.js";

async function getRecipe(name = "", diet = "", health = "", meal = "") {
  const responseRecipe = await api
    .get(
      `${apiUrl}${typeApi}${name}&app_id=${apiId}&app_key=${apiKey}${diet}${health}${meal}`
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  return responseRecipe?.data;
}

export { getRecipe };
