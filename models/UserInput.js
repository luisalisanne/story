const {Schema, model} = require('mongoose');

const userInputSchema = new Schema({
    timestamp: {type:Date},
    name:{default:'', type:String, required:true},
    characterOne: {default:'Frog', type:String},
    characterTwo:{default:'Toad', type:String},
    drink: {default:'frog', type:String},
    animalOne: {default:'hot tea', type:String},
    objectOne: {default:'head', type:String},
    liquid: {default:'water', type:String},
    objectTwo: {default:'wall', type:String},
    animalTwo: {default:'toad', type:String}
})

const UserInput = model('UserInput', userInputSchema);

module.exports = UserInput;