import { months, countriesArray } from './data.js'

const cities = countriesArray.Spain

const parameter = process.argv.slice(2).join(' ')

const index = 0

let day = 0
let month = ''
let city = ''

processString(parameter)

function processString (parameter) {
  const dayResult = determineDay(parameter)
  dayResult ? day = dayResult.day : day = 0

  const monthResult = determineMonth(parameter)
  monthResult ? month = monthResult : month = ''

  const cityResult = determineCity(parameter)
  cityResult ? city = cityResult : city = ''

  console.log('Day: ' + day)
  console.log('Month: ' + month)
  console.log('City: ' + city)
}

function determineDay (parameter) {
  const dayMatch = parameter.match(/\d+/)

  if (dayMatch) {
    const day = dayMatch[0]
    console.log('Day found')

    const index = parameter.indexOf(day) + 1

    return { day, index }
  } else {
    console.log('No day found')
    return null
  }
}

function determineMonth (parameter) {
  for (let i = index; i < months.length; i++) {
    var month = months[i]
    const result = matchMost(parameter, month, 3)
    if (result) {
      console.log('Month found')
      return result
    }
  }

  const monthNumber = parseInt(parameter)

  if (!isNaN(monthNumber)) {
    var month = months[parameter]
    console.log('Month found')
    return months[monthNumber - 1]
  }

  console.log('No month found')
  return null
}

function determineCity (parameter) {
  const maxAccuracy = 10

  for (let accuracy = maxAccuracy; accuracy >= 0; accuracy--) {
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i]

      const result = matchMost(parameter, city, accuracy)

      if (result) {
        console.log('City found')
        return result
      }
    }
  }
  console.log('No city found')
  return null
}

function matchMost (find, string, accuracy) {
  for (let i = 0; i < find.length; i++) {
    for (let j = find.length; j > i; j--) {
      const substring = find.substring(i, j)
      if (substring.length >= accuracy && string.indexOf(substring) !== -1) {
        return string
      }
    }
  }

  return null
}
