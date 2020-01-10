const router = require('express').Router();     //  we need the express router because this is a route that we are creating
let User = require('../models/user.model');     // require the model, mongoose model 

router.route('/').get((req, res) => {
    User.find()                                // find() method returns the promise 
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;