//jshint esversion:6
const express = require('express');
const path = require('path');             //Core node.js module
const hbs = require('hbs');
const geocode = require('../../utils/geocode');
const forecast = require('../../utils/forecast');

const app = express();

//Defining paths for express.js configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setting up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//Setup for static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{               //Setting route for index.hbs
    res.render('index', {
        title: 'Weather App',
        name: 'Ashish Singh'
    });
});

app.get('/about', (req, res)=>{         //Setting route for about.hbs
    res.render('about', {
        title: 'About Us',
        description: 'Developer',
        name: 'Ashish Singh'
    });
});

app.get('/weather', (req, res)=>{       //This will render JSON 
    if(!req.query.address){
       return res.send({ 
            error: 'You must provide an address'
        });
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error){
            return res.send({
                error: error
            });
        }
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({
                    error: error
                });
            }
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address

            });
        });
    });
});

app.get('/products', (req, res)=>{
    if(!req.query.search){
      return res.send({
            error: 'You must provide search term.'
        });
    }
    console.log(req.query);
   
    res.send({
        products: []
    });
});

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Ashish Singh'
    });
});

app.listen(3000, ()=>{
    console.log('Server Started...');
});