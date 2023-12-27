const URL = "https://pro.openweathermap.org/data/2.5/forecast/hourly"
const APIKEY = "656b648ea7ab6d8356a59d7c28ba62e6"
const UNITS = "&units=metric"

fetch(`${URL}?q=${city}&appid=${APIKEY}${UNITS}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
