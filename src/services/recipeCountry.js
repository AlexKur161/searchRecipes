import { api } from "../boot/axios.js";
import { apiUrl, typeApi, apiId, apiKey } from "../axios/index.js";

async function getRecipeCountry(country) {
  const responseCountry = await api
    .get(
      `${apiUrl}${typeApi}&app_id=${apiId}&app_key=${apiKey}&cuisineType=${country}`
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  return responseCountry?.data?.hits;
}

export { getRecipeCountry };
