const request = require("request");
const geocode = (address,callback)=>{

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmFpYmhhdmJhbmdpYSIsImEiOiJja3FrM2cxaDIwNTgwMnBwbXlnaTZoOWpzIn0.vq2QlKhAF05hDLvL33wLqw`;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connnect to location server',undefined);
        }else if(response.body.features.length==0){
            callback('Unable to find location! Try another serch!',undefined)
        }else{
            
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                locaton: response.body.features[0].place_name
            })
        }
    })
};

// geocode('Delhi',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data);
// })





module.exports  = geocode




