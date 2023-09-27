const express = require('express');
const loginController = require('../controllers/loginController.js')
const signupController = require('../controllers/signupController.js')
const usersRouter = express.Router()

usersRouter.post('/login', loginController.login, (req, res) => {

    return res.status(200).json(res.locals.userInfo)
})

usersRouter.post('/signup', signupController.signup, (req, res) => {

    return res.status(200).json(res.locals.newUser)
})

module.exports = usersRouter