// const db = require('ADD THE DB HERE');
require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;


const mapsController = {}

mapsController.getMap = (req, res, next) => {
    const zip = req.body.zip;
    console.log('req body zip', zip);
    const myURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tennis+court+in+${zip}&radius=500&key=${key}`
    res.locals.courtList = [];
    let indObject
  
    fetch(myURL)
        .then((response) => {
            if (!response.ok) {
            throw new Error(`Network response not ok: ${response.status}`)
            }
            return response.json();
        })
        .then((data) => {  
            console.log('DATA', data)
            for (let i = 0; i < data['results'].length; i++) {
                indObject = {
                    name: data['results'][i]['name'],
                    address: data['results'][i]['formatted_address'],
                    rating: data['results'][i]['rating'],
                    _id: data['results'][i]['place_id'],
                    location: data['results'][i]['geometry']['location']
                }
                // console.log('IND OBJ', indObject)
                res.locals.courtList.push(indObject)
            };
            return next();
        })
        .catch(error => {
            return next({
                log: 'Unable to get map',
                message: {err: `ERROR: mapsController.getMap : ${error}`}
            })
        });

}


module.exports = mapsController;