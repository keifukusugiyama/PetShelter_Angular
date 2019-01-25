//to use controller file
const controller = require("./controller");
const path = require("path");


//export for server.js
module.exports = function(app){
    //call on methods from controller for each route
    app
    .get('/api/pets', controller.all)
    //show id
    .get('/api/pets/:id', controller.perId)
    //create new
    .post('/api/pets', controller.new)
    //update for id
    .put ('/api/pets/:id', controller.update)
    //delete id
    .delete ('/api/pets/:id', controller.delete)

    .put('/api/pets/:id/like', controller.like)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}