const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
     id_technicien: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
     id_ticket: {type: mongoose.Schema.Types.ObjectId, ref:'tick'},
     
});

 
module.exports = mongoose.model('Assign',assignSchema);