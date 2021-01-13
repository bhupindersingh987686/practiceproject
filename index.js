// Import Core and Local Modules
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv/config');
require("./db/conn");                                           // connection with mongodb
const model = require("./model/schemamodel");                   // Schema and model 


// Middleware
// Take the permission from express for json data (postman)
app.use(express.json());            // Note : express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// to avoid cors header error while deploy on heroku
app.use(cors());



// Routing (Handling requests)
app.get("/", (req,res) => 
{
    res.status(200).send("response for get request");
});

app.post("/save", (req,res) => 
{
    console.log(req.body);

    // Insert the data from the form into database
    try
    {
        const registerPerson = new model({ name : req.body.name, phoneno : req.body.phoneno, email : req.body.email});
        registerPerson.save();
        res.status(200).send({"message" : "Saved successfully"});
    }
    catch(error)
    {
        res.status(400).send(error);
    }
}); 



// Listening 
let port = process.env.PORT;                   // We can access environment variables saved in .env through process.env
app.listen(port, () => 
{
    console.log("listening to port");
})