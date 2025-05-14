
// 替换成你的OpenWeatherMap API密钥
const apiKey = "2b66b34236af8923813dfbfcdd885a7d";
const city = "Taipei"; // 可以更换为你想要显示天气的城市

// 获取天气信息
async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data = ' ,data);
    // location
    const location = data.name
    console.log('location = ' ,location)
    // weather
    const weather = data.weather[0].main
    // weather test
    // const weather = "rain"
    console.log('weather = ',weather);
    // temp
    const temp = Math.round(data.main.temp);
    console.log('temp = ',temp);
    // time
    const timeZone = data.timezone;
    const localTime = calculateLocalTime (timeZone);
    // icon
    let weatherIconPath;
    switch(weather.toLowerCase()) {
        case "clouds":
            weatherIconPath = "../images/weather/cloud.svg"; 
            break;
        case "sun":
            weatherIconPath = "../images/weather/sun.svg";
            break;
        case "rain":
            weatherIconPath = "../images/weather/rain.svg";
            break;
    }

    document.getElementById('location').innerText = `${location}`;
    document.getElementById('time').innerText = `${localTime}`;
    document.getElementById('weather').innerText =  `${weather}`;
    document.getElementById('temp').innerText =  `${temp}` + ' °C';
    document.getElementById('pic').innerHTML = `<img class="p-2" style="height:50px; width:50px" src="${weatherIconPath}" alt="Weather Icon">`;

}

function calculateLocalTime(timeZone) {
    const now = new Date();
    const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTimestamp = utcNow + timeZone * 1000;
    const localTime = new Date(localTimestamp);
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
    };

    return localTime.toLocaleTimeString('en-US', options);
}



fetchWeather();