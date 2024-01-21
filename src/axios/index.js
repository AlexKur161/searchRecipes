import { api } from "boot/axios";
const apiUrl = "https://api.edamam.com/api/recipes/v2";
const typeApi = "?type=public";
const apiId = "9133ecf7";
const apiKey = "1dc00f739ac8dce83875c61eae475139";
function getRecipe() {
  console.log("запрос");
  api
    .get(`${apiUrl}${typeApi}&app_id=${apiId}&app_key=${apiKey}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
export { getRecipe };
