const mongoose = require('mongoose')
const ticketSchema = new mongoose.Schema({
    id_user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    titre:{type : String , required: true},
    type:{type :String , required: true},
    service:{type :String ,required: true},
    urgence:{ type: String,ennum:['urgence', 'pas urgence' ,'tres urgence' ]},
    description:{type:String , required: true},
    etat:{type:String ,ennum:['en-attent', 'affecter', 're-en-attent', 're-affecter','cloturer' ], default: 'en-attent'},
    date: {type: Date, default: Date.now }
});
const Tickets = mongoose.model('tick', ticketSchema);
module.exports= Tickets;


