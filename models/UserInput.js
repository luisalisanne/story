const {Schema, model} = require('mongoose');

const userInputSchema = new Schema({
    timestamp: {type:Date},
    name:{default:'', type:String, required:true},
    characterOne: {default:'Frog', type:String},
    characterTwo:{default:'Toad', type:String},
    frog: {default:'frog', type:String},
    tea: {default:'hot tea', type:String},
    head: {default:'head', type:String},
    water: {default:'water', type:String},
    wall: {default:'wall', type:String},
    toad: {default:'toad', type:String}
})

const UserInput = model('UserInput', userInputSchema);

module.exports = UserInput;