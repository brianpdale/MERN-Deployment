const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    petType: {
        type: String,
        required:[true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },
    petDesc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    petSkill1: {
        type: String,

    },
    petSkill3: {
        type: String,

    },
    petSkill2: {
        type: String,

    },
    
}, {timestamps: true});




const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;