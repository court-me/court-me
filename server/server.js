const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

// Routers
const mapsRouter = require('./routes/mapsRouter.js')
const usersRouter = require('./routes/usersRouter.js')

// Middleware to allow cross-origin requests
app.use(cors());
// Middleware to parse JSON payloads from incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve the static frontend files from the 'client/dist' directory
app.use('/', express.static(path.resolve(__dirname, '../dist')));
// Sends all POST requests to /api/find to the router
app.use('/api/find', mapsRouter);
app.use('/api/users', usersRouter)

// Middleware to handle 404 errors for undefined routes
app.use('*', (req, res) => {
  res.status(404).send('That endpoint doesnt exist')
});

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

app.listen(3000, () => {
  console.log(`Express server is running on http://localhost:3000`);
});

module.exports = app;