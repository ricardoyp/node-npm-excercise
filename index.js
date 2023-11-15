// Require the lodash library here in this line
const lodash = require('lodash')

function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return lodash.add(a,b)
}

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
  return lodash.compact(arr)
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return lodash.difference(firstArray, secondArray)
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return lodash.fill(arr, value)
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  return lodash.mean(arr)
}

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  return lodash.camelCase(str)
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  return lodash.capitalize(str)
}

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  return lodash.sortBy(arr, 'name')
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  return lodash.mean(lodash.flatten(arr))
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name}
  // let auxArr = []

  // arr.forEach(element => {
  //   if (element.name) {
  //     element.name = lodash.capitalize(element.name);
  //     auxArr.push(element.name)
  //   }
  // });

  // return lodash.sortBy(auxArr)

  const result = arr.map(element => lodash.capitalize(element.name))
  return lodash.sortBy(result);
}
const arr = [{ name: "john" },{ name: "alex" },]
sortByNamesAndCapitalizeFirstLetter(arr);
function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  const result = arr.map(element => lodash.toUpper(lodash.snakeCase(element)))
  return result;  
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};

