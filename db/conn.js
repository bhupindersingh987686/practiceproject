// Import mongoose
const mongoose = require("mongoose");           // with mongoose object we will connect to database

// Create connection  (connect() returns promises) 
// Note : Three stages in promises (i) pending       (ii) resolve        (iii) reject
mongoose.connect(process.env.MONGODB_URI, 
{ 
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true, 
    useUnifiedTopology : true, 
    useCreateIndex : true
})
.then( () => console.log("Connection successfull ......."))
.catch( (err) => console.log(err)); 