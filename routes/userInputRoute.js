const express = require('express');
const router = express.Router();

const controller = require('../controllers/userInputController');

// Create new document
router.post('/create', controller.createDocument);

// Add first character's name
// router.post('/addCharNameOne/:id', controller.addCharNameOne)

// Add second character's name
// router.post('/addCharNameTwo/:id', controller.addCharNameTwo)

// Define first animal
// router.post('/updateAnimalOne/:id', controller.updateAnimalOne)

// TEST: GET DOC BY ID
// router.get('/get/:id', controller.getDocumentById)

module.exports = router;


