const UserInput = require("../models/UserInput");

// Create a new document
// Return test message

const createDocument = async (req, res) => {
  const { body } = req;

  try {
    const newDocument = await UserInput.create({
      ...body,
    });
    return res.status(200).json(newDocument);
  } catch {
    return res.status(400).json(error);
  }
};

// // Find document by ID and update first character name
// const addCharNameOne = async (req, res) => {
//     try {
//         const {id} = req.params;
//         charNameOne = req.body.characterOne;
//         console.log(charNameOne)

//         const addCharName = await UserInput.findByIdAndUpdate(id, {characterOne:charNameOne});
//         return res.status(200).json(charNameOne)

//     } catch (error) {
//         return res.status(400).json(error)
//     }
// }

// // Find document by ID and update second character's name
// const addCharNameTwo = async (req, res) => {
//     try {
//         const {id} = req.params;
//         charNameTwo = req.body.characterTwo;
//         console.log(charNameTwo)

//         const addCharName = await UserInput.findByIdAndUpdate(id, {characterTwo:charNameTwo});
//         return res.status(200).json(charNameTwo)

//     } catch (error) {
//         return res.status(400).json(error)
//     }
// }

// // Find document by ID and update first animal's name
// const updateAnimalOne = async (req, res) => {
//     try {
//         const {id} = req.params;
//         animal = req.body.frog;
//         console.log(animal)

//         const updateAnimal = await UserInput.findByIdAndUpdate(id, {frog:animal});
//         return res.status(200).json(animal)

//     } catch (error) {
//         return res.status(400).json(error)
//     }
// }

// //* TESTING
// const getDocumentById = async (req, res) => {
//     try {
//         const {id} = req.params;
//         const list = await UserInput.findById(id);
//         return res.status(200).json(list)
//     } catch (error) {
//         return res.status(400).json(error)
//     }
// }

module.exports = {
  createDocument,
  // addCharNameOne,
  // addCharNameTwo,
  // updateAnimalOne,
  // getDocumentById
};
