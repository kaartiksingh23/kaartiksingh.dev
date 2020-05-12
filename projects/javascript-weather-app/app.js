window.addEventListener('load',()=>{
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    let temperatureSpan = document.querySelector('.temperature span');

   
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/cf69e177461f54ce847caf38f7b1e02c/${lat},${long}`;
            
            fetch(api)
            .then(response =>{
                return response.json(); /* json() is a function that reads the response stream to completion and parses the response as json. This operation may take take time, so instead of just returning the json, it returns another Promise . The success function of this promise will have the resulting json as an argument */
            })
            .then(data =>{
                const {temperature, summary, icon} = data.currently
                
                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                temperatureSpan.textContent = 'F'; // default temperature in Fahrenheit;
                
                //Set Icon
                setIcons(icon,document.querySelector(".icon"));

                //Change temperature to celsius/fahrenheit
                temperatureSection.addEventListener('click',()=>{
                    if(temperatureSpan.textContent === 'F'){
                        temperatureSpan.textContent = 'C';
                        let celsius = (temperature -32) * (5/9);
                        temperatureDegree.textContent = Math.floor(celsius);
                    }else{
                        temperatureSpan.textContent = 'F';
                        temperatureDegree.textContent = temperature;
                    }
                })
            })
        });
    
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }

})