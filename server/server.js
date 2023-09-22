const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');




// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON payloads from incoming requests
app.use(express.json());

// Serve the static frontend files from the 'client/dist' directory
app.use(express.static('client/dist')); // Serve your frontend







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