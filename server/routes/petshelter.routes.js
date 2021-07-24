const Pet = require('../controllers/petshelter.controller');

module.exports = (app) => {
    app.get('/api/pets', Pet.findAllPets);
    app.post('/api/pets', Pet.addPet);
    app.get('/api/pets/:_id', Pet.getOnePet);
    app.put('/api/pets/:_id', Pet.editPet);
    app.delete('/api/pets/:_id', Pet.adoptPet);

}