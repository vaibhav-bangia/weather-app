const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
//     }

geocode('Mumbai', (error, data) => {
    if(error){
        return console.log(error);
    }
    
    forecast({ latitude: data.latitude, longitude: data.longitude }, (error, data) => {
        if(error){
            return console.log(error);
        }
    });
})

