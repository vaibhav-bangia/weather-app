const request = require("request");
const geocode = require('./geocode')
const forecast = (location, callbck) => {
    const url = `http://api.weatherstack.com/current?access_key=2fce57cf49d5b3616cfd69c3260cbce3&query=${location.latitude},${location.longitude}}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callbck('Unable to connect to the internet!', undefined)
        } else if (response.body.error) {
            callbck('Unable to find location!', undefined);
        }
        else {
            callbck(undefined, {
                cur_temp: response.body.current.temperature,
                cur_feels_like: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast;