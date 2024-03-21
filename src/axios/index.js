import { api } from "../boot/axios.js";
const apiUrl = "https://api.edamam.com/api/recipes/v2";
const typeApi = "?type=public";
const apiId = import.meta.env.VITE_API_ID_RECIPE;
const apiKey = import.meta.env.VITE_API_KEY_RECIPE;
async function getRecipe(name = "", diet = "", health = "", meal = "") {
  console.log("name", name);
  console.log("diet", diet);
  const responseRecipe = await api
    .get(
      `${apiUrl}${typeApi}${name}&app_id=${apiId}&app_key=${apiKey}${diet}${health}${meal}`
    )
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  return responseRecipe?.data;
}

async function getRecipeCountry(country) {
  const responseCountry = await api
    .get(
      `${apiUrl}${typeApi}&app_id=${apiId}&app_key=${apiKey}&cuisineType=${country}`
    )
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
  return responseCountry?.data?.hits;
}
export { getRecipe, getRecipeCountry };
