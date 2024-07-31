const request = require('postman-request')
const forecast = (lat, lon, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=38c2a05e2b6540909ad85312242607&query=' + lat + ',' + lon + '& aqi=yes& lan=ar'
    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error)
            callback('Unable to connect to location services', undefined)
        else if (body.length === 0)
            callback('Unable to find the location provided, try another search', undefined)
        else
            callback(undefined, {
                condition: body.current.condition.text,
                temp: body.current.temp_c,
                realfeel: body.current.feelslike_c
            })
    })
}
module.exports = forecast