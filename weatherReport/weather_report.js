function showweatherDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const apiKey = 'e73f46b0d3205669c5af2a84ce6a6100'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data)
   
          weatherInfo.innerHTML = `<div class="result">
          <div>
            <div class="temp">${data.main.temp}K;</div>
            <div class="small">${data.weather[0].description} • <strong>${data.name}</strong></div>

            <div class="extras">
              <div class="pill">💧 Humidity: ${data.main.humidity}%</div>
              <div class="pill">🍃 Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h</div>
            </div>
          </div>

          <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" width="80" height="80" />
          </div>
        </div>
      `;
    })}
   document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );      