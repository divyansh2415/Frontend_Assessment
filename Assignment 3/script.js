
        const apikey = "2a41b257c494f3f5143c169e89f59814";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        async function checkweather(city){
            const response = await fetch(apiUrl + city +`&appid=${apikey}`);
             if(response.status ==404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
             }else{
                var data = await response.json();
            // console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          //  document.querySelector(".humidity").innerHTML = data.wind.speed;
            document.querySelector(".wind").innerHTML = (data.wind.speed * 3.6).toFixed(1) + " Km/h";
            
            document.querySelector(".weather").style.display = "block";

             }


        }
        searchBtn.addEventListener("click", () => {
            const city = searchBox.value.trim();
               if (city) {
        checkweather(city);
               } else {
           alert("Please enter a city name");
            }
            // checkweather(searchBox.value);
        })
    