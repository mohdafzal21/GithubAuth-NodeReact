var express = require('express');
var router = express.Router();
const db = require('../models')
const validateRegisterInput = require('../validation/register')
const passport = require('passport')
//register route 
// METHOD - POST
//URL -htpp://localhost:5000/auth/register
//CHECK for Email exist - find and save 
router.post('/register', (req,res)=>{
        const {errors, isValid} = validateRegisterInput(req.body)
        //Check Validation 
        if(!isValid){
            return (
                res.status(400).json(errors)
            )
        }
        db.USER.findOne({email : req.body.email}).then((user)=>{
            if(user){
                return res.status(409).send("Email Already Exists")
            }else{
                const newUser = new db.USER({
                    name :  req.body.name,
                    email : req.body.email,
                    password : req.body.password
                })
                //complete the hash password
                //Generate a token 
                //With the token send the email to registered user 
            }
        } )
})


// LOGIN 
// Method = POST 
// url - htpp://localhost:5000/auth/login
//findONE 
// bcrypt compare
//create JWT Payload



// GOOGLE OAUTH - GET
// URL - htpp://localhost:5000/auth/google
//Authenticate 
router.get('/google', passport.authenticate("google"))

//GOOGLE HANDLE THE CALLBACK URL
router.get('/google/redirect')

module.exports = router;
