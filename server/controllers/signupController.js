const User = require('../db/dbModels.js')

console.log('User', User)

const signupController = {}

signupController.signup = (req, res, next) => {
    console.log('SIGNUP CONTROLLER REQ.BODY', req.body)
    const { username, password } = req.body;
        
    const user = new User({
        username: username,
        password: password
    });
    user.save()
        .then(() => console.log('User Signed Up Succesfully'))
        .then(() => res.locals.newUser = user)
        .then(() => {return next()})
        .catch((err) => next(err));
}

module.exports = signupController;