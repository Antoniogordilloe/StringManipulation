import fs from 'fs'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
]

function createArraysFromJSON (jsonData) {
  const countries = {}

  for (const country in jsonData) {
    if (jsonData.hasOwnProperty(country)) {
      countries[country] = jsonData[country]
    }
  }

  return countries
}

// Read countries.json file
const rawData = fs.readFileSync('countries.json')
const jsonData = JSON.parse(rawData.toString())

const countriesArray = createArraysFromJSON(jsonData)

export { months, countriesArray }
