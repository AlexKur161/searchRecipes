import { api } from "boot/axios";
const apiUrl = "https://api.edamam.com/api/recipes/v2";
const typeApi = "?type=public";
const apiId = "9133ecf7";
const apiKey = "1dc00f739ac8dce83875c61eae475139";
async function getRecipe(name = "", diet = "", health = "", meal = "") {
  console.log("name", name);
  console.log("diet", diet);
  const responseRecipe = await api
    .get(
      `${apiUrl}${typeApi}${name}&app_id=${apiId}&app_key=${apiKey}${diet}${health}${meal}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return responseRecipe?.data?.hits;
}

async function getRecipeCountry(country) {
  const responseCountry = await api
    .get(
      `${apiUrl}${typeApi}&app_id=${apiId}&app_key=${apiKey}&cuisineType=${country}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return responseCountry?.data?.hits;
}
export { getRecipe, getRecipeCountry };
