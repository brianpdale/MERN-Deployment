const mongoose = require("mongoose");
mongoose.set("runValidators", true);

const DB = "rebbeltDB";

mongoose.connect('mongodb://localhost/' + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Established connection to the database"))
.catch(err => console.log("Something went very very wrong when connecting to the database", err));