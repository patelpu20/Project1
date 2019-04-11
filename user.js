var passport = require('passport');
var passportConf = require('../config/passport');

module.exports = function(app){


    app.get('/login', function(req,res,next){
        res.render('accounts/login');
    });

    app.get('/auth/facebook',passport.authenticate('facebook', { scope: 'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook',{
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));


    app.get('/logout', fucntion(req, res, next){
        req.logout(),
        res.redirect('/'),
    });

    app.get('/profile', function(req,res,next){

        res.render('accounts/profile');
    });

}