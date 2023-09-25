const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
require('dotenv').config()


const key = process.env.REACT_APP_API_KEY
// const myURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tennis+court+in+${zip}&radius=500&key=${key}`



// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON payloads from incoming requests
app.use(express.json());

// Serve the static frontend files from the 'client/dist' directory
app.use(express.static('client/dist')); // Serve your frontend

app.post('/api/find', (req, res) => {
  const zip = req.body.zip;
  console.log('zip', zip);
  const myURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tennis+court+in+${zip}&radius=500&key=${key}`
  const courtList = [];

  fetch(myURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response not ok: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      const results = data['results']

      for (let i = 0; i < results.length; i++) {
        let indObject = {
          name: results[i]['name'],
          address: results[i]['formatted_address'],
          rating: results[i]['rating'],
          _id: results[i]['place_id'],
          location: results[i]['geometry']['location']
        }
        courtList.push(indObject)
      };

      // console.log(courtList)
      res.status(200).json(courtList)

    })
    .catch(error => {
      res.status(500).json({ err: 'Failed: GET LOG' })
    });
});





// Middleware to handle 404 errors for undefined routes
app.use((req, res) => res.status(404).send('That endpoint doesnt exist'));

// Error handling middleware to catch any errors thrown in preceding middleware/functions
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

module.exports = app;