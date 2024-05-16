document.addEventListener("DOMContentLoaded", function() {
    const weatherBanner = document.getElementById('weather-banner');
    const weatherInfoDiv = document.getElementById('weather-info');

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error({message: "La geoli."});
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = '7e93c0c0a95a4b129d701931240705';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const locationName = data.location.name;
                const temperatureCelsius = data.current.temp_c;
                const conditionText = data.current.condition.text;
                const windSpeed = data.current.wind_kph;
                const humidity = data.current.humidity;
                const pressure = data.current.pressure_mb;

                // Mostrar la información del clima
                weatherInfoDiv.innerHTML = `
                    Clima en ${locationName}: 
                    Temperatura: ${temperatureCelsius}°C, 
                    Condición: ${conditionText}, 
                    Velocidad del viento: ${windSpeed} km/h, 
                    Humedad: ${humidity}%, 
                    Presión: ${pressure} mb
                `;

                // Mostrar la franja y ocultarla después de 15 segundos
                weatherBanner.style.display = 'block';
                setTimeout(() => {
                    weatherBanner.style.display = 'none';
                }, 15000); // Hide the banner after 15 seconds
            })
            .catch(error => {
                console.error('Error en la lectura del tiempo:', error);
            });
    }

    function error(err) {
        console.error('Error para obtener la ubicación:', err.message);
    }
});