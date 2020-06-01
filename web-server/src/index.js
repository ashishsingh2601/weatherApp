//jshint esversion:6

const express = require('express');

const app = express();

app.get('', (req, res)=>{
    res.send('<h1>Weather App!</h1>>');
});

app.get('/about', (req, res)=>{
    res.send('<h1>About Us</h1>');
});

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'Partly cloudy',
        location: 'New Delhi'
    });
});

app.listen(3000, ()=>{
    console.log('Server Started...');
});