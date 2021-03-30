const apiKey =  'f55bcd2506msh983592a22cacca6p1ee63cjsn879c2068a184'; 


const baseURL = "https://community-open-weather-map.p.rapidapi.com/weather?q=" 
const getWeatherData = async ()=> {


    const zipCode = document.getElementById('zip').textContent
    const response = await fetch(baseURL + zipCode,{
        method:'GET', 
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
          } 

    })
}