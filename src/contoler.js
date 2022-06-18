document.querySelector(".Search").addEventListener("click",()=>{
    getCity = document.querySelector("#city").value
    axios
        .get('https://api.openweathermap.org/data/2.5/weather?q='+getCity+'&appid=61062d1cb453ee62970aed9b6c28d8a2')
        .then(res=>{
            console.log(res);
            Icon.innerHTML = `<img class="icon" src=${"https://openweathermap.org/img/wn/" + res.data.weather[0].icon + ".png"}>`
            document.querySelector(".city-name").innerText = res.data.name;
            document.querySelector(".temperaturs").innerHTML = (res.data.main.temp-273.15).toFixed(2)+"&deg;c";      
            document.querySelector(".humidity").innerHTML = `humidity:  ${res.data.main.humidity}%`
            document.querySelector(".wind").innerHTML ="wind: "+ res.data.wind.speed +" km/h";
            document.querySelector(".simbole-div").style.display = "none"
            document.querySelector(".errMessage").style.display = "none"
        })
        .catch(err=>{
             document.querySelector(".errMessage").style.display = "block"
        })
})


