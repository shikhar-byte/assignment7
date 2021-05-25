

const inp = document.querySelector('#inp');
const h1 = document.querySelector('h1');
const datePara = document.getElementById('datePara');
const tempPara = document.getElementById('tempPara');
const minTempSpan = document.getElementById('minTemp');
const maxTempSpan = document.getElementById('maxTemp'); 
const windPara = document.getElementById("windSpeed");
const humidPara =  document.getElementById('humidity');
const descPara =  document.getElementById('desc');
const iconImg =  document.getElementById('icon');


const apiKey = "4445f297aea74ffd31730bd8f633d175";




inp.addEventListener('keydown', function(e){

    if(e.which === 13){


        let inpText = e.target.value;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpText}&appid=${apiKey}&units=metric`;

        fetch(url)
        .then( data => {
            console.log(data);
            return data.json();
        })
        
        .then(fetchedData => {
            console.log(fetchedData );
            const currentTemp = fetchedData.main.temp;
            const minTemp = fetchedData.main.temp_min;
            const maxTemp = fetchedData.main.temp_max;
            const city = fetchedData.name;
            const country = fetchedData.sys.country;
            const windSpeed = fetchedData.wind.speed;
            const humidity = fetchedData.main.humidity;
            const description = fetchedData.weather[0].description;
            const icon = fetchedData.weather[0].icon;
        

            h1.innerText = city + "," + country;

            tempPara.innerText = currentTemp +" °C";

            minTempSpan.innerText = minTemp + " °C";

            maxTempSpan.innerText = maxTemp + " °C";

            iconImg.src = `https://openweathermap.org/img/wn/${icon}.png`;

            descPara.innerText = description;

            humidPara.innerText = "Humidity : " + humidity + " %";

            windPara.innerText ="Wind speed : " + windSpeed + " km/h";
        })
        
    }

    
})

