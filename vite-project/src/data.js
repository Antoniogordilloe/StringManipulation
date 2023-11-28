// import fs from 'fs'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
]

// function createArraysFromJSON (jsonData) {
//   const countries = {}

//   for (const country in jsonData) {
//     if (jsonData.hasOwnProperty(country)) {
//       countries[country] = jsonData[country]
//     }
//   }

//   return countries
// }

// // Read countries.json file
// const rawData = fs.readFileSync('countries.json')
// const jsonData = JSON.parse(rawData.toString())

// const countriesArray = createArraysFromJSON(jsonData)

const countriesArray = {
  "Spain": [
    "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza",
    "Malaga", "Murcia", "Palma de Mallorca", "Las Palmas", "Bilbao",
    "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "L'Hospitalet de Llobregat",
    "La Coruna", "Granada", "Vitoria", "Toledo", "Salamanca", "Santander",
    "Pamplona", "Segovia", "Tarragona", "Girona", "Badajoz", "Almería",
    "Castellón de la Plana", "Oviedo", "Jerez de la Frontera", "Cartagena",
    "Albacete", "Huelva", "Logroño", "Cáceres", "Lleida", "Jaén", "Getafe",
    "Burgos", "Algeciras", "León", "Santa Cruz de Tenerife", "Fuenlabrada",
    "Dos Hermanas", "Alcorcón", "Elche", "Ourense", "Almería", "Torrevieja",
    "Palencia", "Ciudad Real", "Marbella", "Mataró", "Sabadell", "Santa Coloma de Gramenet",
    "Alcobendas", "Telde", "Barakaldo", "Badalona", "Parla", "San Sebastian",
    "Getafe", "Cornellà de Llobregat", "Torrejón de Ardoz", "Pozuelo de Alarcón",
    "Torremolinos", "Fuengirola", "San Fernando", "Torrent", "Manresa", "Torrelavega"
  ],
  "France": [
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice",
    "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"
  ],
  "Germany": [
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt",
    "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig"
  ],
  // Add more countries and cities as needed
};



export { months, countriesArray }
