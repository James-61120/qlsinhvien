const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number},
    email:{type:String}
})

module.exports = mongoose.model('student',studentSchema)