const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
     nom:{ type: String,required: true,min: 3, max: 48,trim: true,},
      prenom:{  type: String,required: true,min: 3, max: 48,trim: true,},
      email: {  type:String,require: true},
      password:{ type : String ,require: true},
      role:{ type: String, ennum:['user', 'admin', 'technicien'], default: 'user'}
});

const User = mongoose.model('User',userSchema);
module.exports = User;