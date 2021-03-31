const apiKey = 'cdfeb6f65326ce0662b2a9dbdc836ed3'; 




const postData = async (temp) => {

    const  d = new Date()
    const  newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear()
    const feeling = document.getElementById('feelings').value
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


}

const updateUI = async () => {
    
    await fetch('/retrieveData')
    .then(res=> res.json())
    .then(res => {
        document.getElementById('date').innerHTML = res.date
        document.getElementById('temp').innerHTML = res.temperature 
        document.getElementById('content').innerHTML = res.userResponse
    })
    
}
const getWeatherData = async ()=> {
    
    const zipCode = document.getElementById('zip').value
    const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
    const response = await fetch(URL,{
        method:'GET'

    })
    .then(res => res.json())
    .then(res => postData(res.main.temp))
    .then(res => updateUI())
    .catch(err=>console.log(err))
}




document.getElementById('generate').addEventListener('click',getWeatherData)