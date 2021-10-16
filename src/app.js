const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname,'..','/public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Dylan Lauzon'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Dylan Lauzon'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'Get help at github.com/dfrl-dev/web-server',
        name: 'Dylan Lauzon'
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        location: 'Cochrane',
        forecast: 'Gloomy'
    },
    {
        location: 'Timmins',
        forecast: 'Gloomy'
    }])
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dylan Lauzon',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Dylan Lauzon',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


