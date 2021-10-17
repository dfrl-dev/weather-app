const request = require('request')

const forecast = (latitude, longitude, units, callback ) => {    
    const url = 'http://api.weatherstack.com/current?access_key=d7650cb74058da2599ac5d95c38e9a4e&query=' 
        + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +'&units=' + encodeURIComponent(units)

    console.log(url)
    request({url, json: true}, (error, {body}) => {

        if(error) {
            callback('Cannot reach weather services', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' throughout the day. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The current humidity is: ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast