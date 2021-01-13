const mongoose = require("mongoose");  

// Schema : structure of the document (defines the datatype for each field) , default values, validator
const Schema = new mongoose.Schema({
    name : {type : String},
    phoneno : {type : String, unique : true},
    email : {type : String},
});



// Model : A mongoose model is a wrapper on the Mongoose Schema and Model is used for CRUD operations
const model = new mongoose.model("student", Schema);                    // Class 

// Note : student is the name of the collection (table)



// Export
module.exports = model;