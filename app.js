window.addEventListener("load",() =>{
    let long;
    let lat;
    let cityName = document.querySelector(".city-name");
    let temperature = document.querySelector("#temp");
    let climate = document.querySelector(".climate");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            fetch(`https://api.weatherstack.com/current?access_key=592c72a8354f6c906412155a9a1fd7a4&query=${lat},${long}`)
                .then(weather =>{
                    return weather.json();
                })
                .then(data =>{
                    console.log(data);
                    cityName.textContent = data.location.name; 
                    temperature.textContent = data.current.temperature; 
                    climate.textContent =  data.current.weather_descriptions;
                                
                });
        })
    }
});
