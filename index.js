
 import { months, countriesArray } from './data.js';

 var cities = countriesArray["Spain"];

 var parameter = process.argv.slice(2).join(' ');

// var parameter = "12 1 Madri";


  var index = 0;
  
  var day = 0;
  var month = "";
  var city = "";
  
  processString(parameter);
  
  function processString(parameter) {
    var dayResult = determineDay(parameter);
    dayResult ? day = dayResult.day : day = 0;
  
    var monthResult = determineMonth(parameter);
    monthResult ? month = monthResult : month = "";
  
    var cityResult = determineCity(parameter);
    cityResult ? city = cityResult : city = "";
  
    console.log("Day: " + day);
    console.log("Month: " + month);
    console.log("City: " + city);
  }
  
  function determineDay(parameter) {
    var dayMatch = parameter.match(/\d+/);
  
    if (dayMatch) {
      var day = dayMatch[0];
      console.log("Day found");
  
      // Find the index where the day was found
      var index = parameter.indexOf(day) + 1;
  
      // Return an object containing both the day and its index
      return { day: day, index: index };
    } else {
      console.log("No day found");
      return null;
    }
  }
  
  function determineMonth(parameter) {

    for (var i = index; i < months.length; i++) {
      var month = months[i];
      var result = matchMost(parameter, month, 3);
      if (result) {
        console.log("Month found");
        return result;
      }
    }

    var monthNumber = parseInt(parameter);
    
    if (!isNaN(monthNumber) ) {
      var month = months[parameter];
      console.log("Month found");
      return months[monthNumber-1];
    }
  
    console.log("No month found");
    return null;
  }
  
  function determineCity(parameter) {
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      var result = matchMost(parameter, city, 5);
      if (result) {
        console.log("City found");
        return result;
      }
    }
  
    console.log("No city found");
    return null;
  }
  
  function matchMost(find, string, accuracy) {
    
    for (var i = 0; i < find.length; i++) {
      for (var j = find.length; j > i; j--) {
        var substring = find.substring(i, j);
        if (substring.length >= accuracy && string.indexOf(substring) !== -1) {
          return string;  // Return the entire word
        }
      }
    }
  
    return null;
  }

 
  