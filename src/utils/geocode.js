const request = require('postman-request')
const geocode = (address, callback) => {
    const url1 = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) + '&api_key=66a39af4ed102683572148swj81c4b3&limit=1'
    request({ url: url1, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to loation services', undefined)
        }
        else if (body[0] === undefined) {
            callback('Unable to connect to loation services,try another search', undefined)

        }
        else {
            callback(undefined, {
               lat:body[0].lat,
               lon :body[0].lon,
               location:body[0].display_name
            })
        }
    })
}
module.exports = geocode