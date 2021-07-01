const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
// WEATHER REQUEST
// const url = 'http://api.weatherstack.com/current?access_key=2fce57cf49d5b3616cfd69c3260cbce3&query=28.7397,77.1956';

// request({ url: url, json: true }, (error, response) => {
//     //console.log(response.body);
//     if (error) {
//         console.log('Unable to connect to weather servers!');
//     } else if (response.body.error) {
//         console.log(response.body.error)
//     } else {
//         var cur_temp = response.body.current.temperature;
//         var cur_feelslike = response.body.current.feelslike;
//         console.log(cur_temp);
//         console.log(cur_feelslike);
//     }

// });
// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFpYmhhdmJhbmdpYSIsImEiOiJja3FrM2cxaDIwNTgwMnBwbXlnaTZoOWpzIn0.vq2QlKhAF05hDLvL33wLqw';

// request({ url: url2, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the location service!');
//     } else if (response.body.features.length == 0) {
//         console.log('Unable to find locaiton. Try another search!')
//     } else {
//         const lat = response.body.features[0].center[1]; // latitude
//         const long = response.body.features[0].center[0]; // longitude 
//         console.log(lat);
//         console.log(long);
//     }

//  });



forecast({ latitude: 28.66667, longitude: 77.21667 }, (erro, data) => {
    console.log('Error', undefined);
    console.log('Data', data)
});

geocode('Delhi',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data);
})



// encodeURIcomponent 
