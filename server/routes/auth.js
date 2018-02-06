const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (router) => {


    router.post('/', function (req, res) {
        console.log(req.body);
        let user = new User({
            firstName: req.body.firstName.toLowerCase(),
            lastName: req.body.lastName.toLowerCase(),
            email: req.body.email.toLowerCase(),
            password: req.body.password
        });
           
            user.save((err) => {

                if(err) {
                    console.log(err);
                }
                res.json({ success: true, message: 'User added!' });
    
            });
    });




    router.post('/login', (req, res) => {

        if (!req.body.email || !req.body.password) {
            res.json({ success: false, message: 'No email/password was provided' });
        } else {
            User.findOne({ username: req.body.email.toLowerCase() }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'Username not found.' });
                    } else {
                        const validPassword = user.comparePassword(req.body.password);

                        if (!validPassword) {
                            res.json({ success: false, message: 'Password invalid' });
                        } else {
                           const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
                            res.json({
                                success: true,
                                message: 'Success!',
                                user: {
                                    username: user.username
                                }
                            });
                        }
                    }
                }
            });
        }
    });

    router.get('/profile', (req, res) => {
        User.findOne({ _id: req.decoded.userId }).select('lastName firstName email').exec((err, user) => {
            // Check if error connecting
            if (err) {
                res.json({ success: false, message: err }); // Return error
            } else {
                // Check if user was found in database
                if (!user) {
                    res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
                } else {
                    res.json({ success: true, user: user }); // Return success, send user object to frontend for profile
                }
            }
        });
    });

    return router;
}