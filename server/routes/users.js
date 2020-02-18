var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')
mongoose.set('useCreateIndex', true);

//register route 
// 

router.get(
    "/github",
    passport.authenticate("github")
);

router.get(
    "/success",
    passport.authenticate("github"),
    (req, res) => {
        console.log("payload req user",req.user)
        const payload = {
            name: req.user.username,
            email: req.user.email,
            imgage : req.user.image,
            id: req.user.gitHubId
        }
        res.json(payload)
    }
);




module.exports = router;
