const apiKey =  'f55bcd2506msh983592a22cacca6p1ee63cjsn879c2068a184'; 
const baseURL = "https://community-open-weather-map.p.rapidapi.com/weather?q=" 


const updateUI = async (temp) => {
    const  d = new Date()
    const  newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear()
    const feeling = document.getElementById('feelings').value
    document.getElementById('date').textContent = newDate
    document.getElementById('temp').textContent = temp 
    document.getElementById('content').textContent = feeling
    await fetch('/addNewTemp',{
        method:"POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            date:newDate,
            temperature:temp,
            userResponse:feeling
        })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    const allData = await fetch('/all')
    .then(res=> res.json())
    .then(res => console.log(res))
    
}
const getWeatherData = async ()=> {
    
    const zipCode = document.getElementById('zip').value
    console.log(zipCode)
    const response = await fetch(baseURL + zipCode,{
        method:'GET', 
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    })
    .then(res => res.json())
    .then(res => res.main.temp)
    .then(res => updateUI(res))
    .catch((err)=>{
        console.log(err)
    })
}




document.getElementById('generate').addEventListener('click',getWeatherData)