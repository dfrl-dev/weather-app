const request = require('request')

const geocode = (address, callback) => {
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiZGZybC1kZXYiLCJhIjoiY2t1cjAxY3V4MGY3NjJvcWo4ejVreGlnNyJ9.PpKKIz3UpTMKM78yHz45zA'
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services.', undefined)
        } else if (body.features.length === 0) {            
            callback('Unable to find location, try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode