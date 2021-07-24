const Pet = require("../models/petshelter.model");

module.exports = {
    addPet: (req, res) => {
        Pet.create(req.body)
            .then(newPet => {
                console.log("Added new Pet to Shelter ", newPet);
                console.log(req.body);
                res.json(newPet)
            })
            .catch(err => {
                console.log("ERROR", err);
                res.status(400).json(err);
            })
        },

    findAllPets: (req, res) => {
        Pet.find().sort("petType")
            .then( allPets => res.json(allPets))
            .catch(err => res.json(err));
    },
    getOnePet: (req, res) => {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err))
    },
    editPet: (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(editedPet =>  {
            console.log("Edited pet in shelter: ", editedPet);
            console.log(req.body);
            res.json(editedPet);
        })
        .catch(err => {
            console.log("ERROR", err);
            res.status(400).json(err);
        })
    },
    adoptPet: (req, res) => {
        Pet.deleteOne({_id: req.params._id})
        .then(adoptedPet =>  {
            console.log("Pet was adopted: ", adoptedPet);
            console.log(req.body);
            res.json(adoptedPet);
        })
        .catch(err => {
            console.log("ERROR", err);
            res.status(400).json(err);
        })
    }
}