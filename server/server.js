// import cors and express
const express = require("express");
const cors = require("cors");
// initialize express and set the default port
const app = express();
const PORT = 8000;

// config middleware // tell express to use cors and save entries as JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// import the mongoose config and the routes
require('./config/mongoose.config');
require('./routes/petshelter.routes')(app);

// set up a listener on the specified port
app.listen(PORT, ()=> console.log(`>>> Server running on ${PORT}. Better go catch it. <<<`));