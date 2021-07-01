const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

address = 'Delhi'
geocode(address, (error, data) => {
    if(error){
        return console.log(error);
    }
    
    forecast({ latitude: data.latitude, longitude: data.longitude }, (error, forecastData) => {
        if(error){
            return console.log(error);
        }
        console.log(`it is currently ${forecastData.cur_temp} C in ${data.locaton}`)
    });
})

