//use mongoose 
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/petshelterdb', (err)=>{
    //if there's error, log
    if(err){
        console.log(err)
    }
});

var PetSchema = new mongoose.Schema({
    Name: {type:String, required: [true, "Please enter pet's name"], minlength:[3, "Pet name must be 3 characters or longer"], unique: [true, "That name is already added, please enter unique name"]},

    type: {type:String, required: [true, "Please enter type of pet"], minlength:[3, "Pet type must be 3 characters or longer"] },

    description: {type:String, required: [true, "Please enter description"], minlength:[3, "Description must be 3 characters or longer"] },

    skills: [String],

    likes: { type: Number, default: 0 }

}, {timestamps:true})

PetSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Pet', PetSchema);
