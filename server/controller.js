//use models PetSchema
const Pet = require("./models");

//export to routes.js
module.exports = {

    //get /api/pets 
    all: (req, res) => {
        //retrieve all the Pets
        Pet.find({})
            //if successful, respond with json file of result
            .then(results => res.json(results))
            //if there's error, respond with json file of error
            .catch(err => res.json(err))
    },

    //get /api/pets/:id 
    perId: (req, res) =>{
        //find Pet with id provided on the route
        Pet.findById(req.params.id)
        //if successful, respond with json file of result
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //post /api/pets 
    new:(req, res)=>{
        //create new Pet with returned json file on body
        Pet.create(req.body)
        //if successful, respond with json file with newly created Pet
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //put /api/pets/:id 
    update:(req, res)=>{
        //find Pet by id given on the route, update with json file on body
        Pet.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        //if successful, respond with json file with the updating Pet
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //delete /api/pets/:id 
    delete:(req, res)=>{
        //find Pet by id given on the route, delete it
        Pet.findByIdAndDelete(req.params.id)
        //if successful, respond with json file with the deleted Pet
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //put /api/pets/:id/like
    like:(req, res)=>{
        //find Pet by id given on the route
        Pet.findByIdAndUpdate({_id: req.params.id}, {$inc: {"likes":1}})
        //if successful, respond with json file with the updating Pet
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    }

}