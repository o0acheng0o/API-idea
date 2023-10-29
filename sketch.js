let apiKey = "6ba8cf91fd5f5c4fda60b758a8b66fcf";
let cityInput;
let weatherData;

function setup() {
    createCanvas(400, 200);
    background(220);

    let button = createButton('Looking for weather');
    button.position(10, 10);
    button.mousePressed(queryWeather);

    cityInput = createInput();
    cityInput.position(10, 40);
}

function draw() {
    background(220);
    if (weatherData) {
        textSize(20);
        text(`Weather in ${cityInput.value()}`, 10, 90);
        text(`Temperature: ${weatherData.current.temperature}°C`, 10, 120);
        text(`Description: ${weatherData.current.weather_descriptions[0]}`, 10, 150);
    }
}

function queryWeather() {
    let city = cityInput.value();
    let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    loadJSON(url, gotWeatherData, 'jsonp');
}

function gotWeatherData(data) {
    console.log(data); // 将从API获取的数据打印到控制台
    weatherData = data;
}