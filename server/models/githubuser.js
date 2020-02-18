const mongoose = require('mongoose')
const githubuserSchema = new mongoose.Schema({
    username : String,
    email : String,
    gitHubId : String,
    image : String
})

const GITHUBUSER = mongoose.model('GITHUBUSER', githubuserSchema)

module.exports = GITHUBUSER