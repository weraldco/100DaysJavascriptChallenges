const API_KEY = ''
const cityNameTxt = document.getElementById('cityNameTxt')
const submitBtn = document.getElementById('submitBtn')

const container = document.querySelector('.container')
const displayWeather = document.getElementById('displayWeather')

const weatherImg = document.getElementById('weatherImg')
const cityName = document.getElementById('cityName')
const temperature = document.getElementById('temperature')
const weatherType = document.getElementById('weatherType')

const windspeedValue = document.getElementById('windspeedValue')
const humidityValue = document.getElementById('humidityValue')
const sunriseTime = document.getElementById('sunriseTime')
const sunsetTime = document.getElementById('sunsetTime')
const notFoundImg = document.querySelector('.notfound')

function fetchWeatherAPI(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(res =>res.json())
    .then(data => {
        // if(data.cod === '404') {
            
        //     notFoundImg.classList.add('show')
            
        //     cityNameTxt.value=''
        //     return;
        // }
        // notFoundImg.classList.remove('show')
        return data;
        
    })
}

submitBtn.addEventListener('click',()=>{
    
    getWeatherData(cityNameTxt.value)

    

})

async function getWeatherData(city){
   
    const weather = await fetchWeatherAPI(city)
    console.log(weather)

    weatherImg.setAttribute('src', weatherTypeDetail(weather.weather[0].main))
    cityName.textContent = weather.name
    temperature.textContent = `${weather.main.temp} °C`
    weatherType.textContent = weather.weather[0].description
    windspeedValue.textContent = `${weather.wind.speed} km/hr`
    humidityValue.textContent = `${weather.main.humidity} %`
    sunriseTime.textContent = getTime(weather.sys.sunrise)
    sunsetTime.textContent = getTime(weather.sys.sunset)
    displayWeather.classList.add('show')

}

function getTime(timestamp) {
    function padZero(n) {
        return n < 10 ? `0${n}` : n
    }
    function checkAMPM(date) {
        return date.getHours() > 12 ? 'PM' : 'AM'
    }

    const date = new Date(timestamp * 1000)

    const hour = date.getHours() % 12
    const minute = date.getMinutes()

    return `${padZero(hour)}:${padZero(minute)} ${checkAMPM(date)}`
}

function weatherTypeDetail(weather){
    if(weather === '') return
    if(weather === 'Clear') return 'img/clear.png'
    if(weather === 'Clouds') return 'img/clouds.png'
    if(weather === 'Snow') return 'img/snowy.png'
    if(weather === 'Rain') return 'img/rain.png'
    if(weather === 'Haze') return 'img/sun cloudy.png'
}