//jshint esversion:6
const express = require('express');
const path = require('path');             //Core node.js module
const hbs = require('hbs');

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
    res.send({
        forecast: 'Partly cloudy',
        location: 'New Delhi'
    });
});

app.listen(3000, ()=>{
    console.log('Server Started...');
});