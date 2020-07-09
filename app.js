let long;
let lat;
let cityName = document.querySelector(".city-name");
let temperature = document.querySelector("#temp");
let climate = document.querySelector(".climate");
fetch(`http://api.weatherstack.com/current?access_key=592c72a8354f6c906412155a9a1fd7a4&query=fetch:ip`)
    .then(weather =>{
        return weather.json();
    })
    .then(data =>{
        cityName.textContent = data.location.name; 
        temperature.textContent = data.current.temperature; 
        climate.textContent =  data.current.weather_descriptions;
                    
    });