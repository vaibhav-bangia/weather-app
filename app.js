const express = require('express')
const bodyParser = require('body-parser')
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname+ '/index.html'))
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
    var loc = req.body.loc;
    address = loc; 
    console.log(loc)
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
    res.send("HelO!");
})

// geocode(address, (error, data) => {
//     if(error){
//         return console.log(error);
//     }
    
//     forecast({ latitude: data.latitude, longitude: data.longitude }, (error, forecastData) => {
//         if(error){
//             return console.log(error);
//         }
//         console.log(`it is currently ${forecastData.cur_temp} C in ${data.locaton}`)
//     });
// })

app.listen(port, () => console.log(`Example app listening on port port!`))