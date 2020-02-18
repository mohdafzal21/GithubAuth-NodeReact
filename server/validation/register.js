const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data){
    let errors = {}
    
    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''

    if(!Validator.isLength(data.name, {min : 2 ,max:30})){
        errors.name = 'name must be between 2 and 30 chars'
    }
    if(Validator.isEmpty(data.name)){
        errors.name = "name field is required"
    }
    if(Validator.isEmpty(data.email)){
        errors.email = "Email Field is required"
    }

    return{
        errors,
        isValid : isEmpty(errors)
    }
}
