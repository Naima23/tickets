
 const authController = require("../controllers/authController")
 const ticketsController = require('../controllers/ticketsController')
 const express = require('express');
 const route = express.Router()
 const {auth} = require('../middlewares/auth.middlewares')

 //authController
 route.post('/register',authController.userRegister); //register
 route.post('/login',authController.loginUser); // login 
 route.post('/logout',authController.logoutController); //logout
 route.get('/technicien',authController.alltechnicien) //get alltechnicien
 route.post('/affecter/:id',authController.affecter) //affecter
//  route.post('/assign/:id',authController.Assign)//Assign

 //ticketsController
 route.post('/create', auth('user') ,ticketsController.userTickets)//creat
 route.get('/Tickets', auth('user') , ticketsController.listTicket)//get Tickets
 route.get('/allTicket',ticketsController.allTicket) //get allTicket
 route.delete('/delete/:id', ticketsController.deleteTickets)//delete Tickets
 route.put('/update/:id', ticketsController.updateTickets)//update Tickets
//  route.get('ticket/affecter/:id',ticketsController.getTicketAffecter)//getTicketAffecter

 module.exports = route;