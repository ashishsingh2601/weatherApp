//jshint esversion:6
const request = require('postman-request');

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=6de605d7a713ef0779de2da9948500aa&query=' + latitude + ',' + longitude;
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather services!', undefined);
        }else if(response.body.error){
            callback('Unable to find location. Try again!');
        } else{
            callback(undefined, 'Weather: ' + response.body.current.weather_descriptions[0] + '. Current temperature is: ' +  response.body.current.temperature + ' degrees. Temperature feels like: ' + response.body.current.feelslike + ' degrees.');
           
        }
    });
};

module.exports = forecast;