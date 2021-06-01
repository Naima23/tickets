const { findById } = require('../models/Tickets');
const Ticket = require('../models/Tickets')

//create Tickets
exports.userTickets = async (req ,res)=>{
    try {
        const ticky = new Ticket({
            ...req.body,
            id_user: res.auth._id
       })
        
        const saved = await ticky.save();
        if(saved) return res.status(201).json({message: 'data saved!', ticky }); 
    } catch (error) {
        return res.status(500).json({err: 'error server'})
    }
};


//git Tickets
exports.listTicket = (req, res ,next)=>{
    Ticket.find({id_user: res.auth._id})
    .then(response => {res.json({response})
    })
    .catch(error =>{
        res.json({message:error})
    })
  }

//get all ticket 
exports.allTicket = (req, res ,next)=>{
    Ticket.find()
    .then(response => {res.json({response})
    })
    .catch(error =>{
        res.json({message:error})
    })
  }

  //delete Tickets
  exports.deleteTickets= (req, res)=>{
      const id = req.params.id;
      Ticket.findByIdAndRemove(id)
  .then(data =>{
     if(!data) {
         res.status(404).json({
             message:`Cannot delete Ticket whit id=${id} !`
         });
     }  else{
        res.json({
            message:"Ticket was deleted successfully!"
        });
    }
   })
    .catch(err =>{
        res.status(500).json({
            message:"Could not delete Tutorial whit id="+id
        });
      });
    };


//updateTickets
 exports.updateTickets = (req , res) =>{
     const id = req.params.id;
     Ticket.findByIdAndUpdate(id , req.body)
     .then(data => {
         if (!data){
             res.status(404).send({
                 message:`Cannot updat Ticket with id=${id}. Maybe Ticket was not fond!`
             });
         }else res.send({message:"Ticket was Updated successfully!" });
        })
         .catch(err => {
             res.status(500).send({
            message:"Error updating Ticket with id="+id
         });
     });
 }


//getTicketById
exports.getTicketById = async (req, res)=>{
    try {
        const ticket = await Ticket.findById(req.params.id);
        if(ticket) return res.status(200).json(ticket)
    } catch (error) {
        throw Error(error)
    }
}





// filtr date 
exports.findData = async (req, res) => {
    const { date } = req.body;
    try {
        const ticket = await Ticket.find({date});
        if(ticket) return res.status(200).json(ticket)
    } catch (error) {
        throw Error(error)
    }
    }
  
  
 


