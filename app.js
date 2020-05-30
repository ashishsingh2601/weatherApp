//jshint esversion:6

const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=6de605d7a713ef0779de2da9948500aa&query=28.613939,77.209023';

request({url: url}, (error, response)=>{
   
    const data = JSON.parse(response.body);
    console.log(data.current);
});