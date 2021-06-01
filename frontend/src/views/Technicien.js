import React,{useState,useEffect} from 'react';
import Nav from './Nav'
import axios from 'axios'

const Technicien = () => {

    const [ticket,setTicket] = useState([])

    const fetChTicket = async ()=> {
         const {data} = await axios.get(`http://localhost:3012/api/ticketTechnicien`)
         console.log(data)
         setTicket(data)
    }

    useEffect(()=>{
        fetChTicket();
    },[])
    console.log('data ticket',ticket)


const cloturer = async (id) =>{
    try {
        await axios.post(`http://localhost:3012/api/cloturer/${id}`)
        return fetChTicket();
    } catch (error) {
        console.log(error)
    }

}

const annuler = async (id) =>{
    try {
        await axios.post(`http://localhost:3012/api/annuler/${id}`)
        return fetChTicket();
    } catch (error) {
        console.log(error)
        
    }
}


    return (
       
        <div>
             <Nav />
             <div className="container tickits">
                    {ticket.length && ticket.map(res => (
                       (res.id_ticket.etat === 'affecter' || res.id_ticket.etat === 're-affecter') && (
                        <>
                            <div key={res._id} className='ticki'>
                                <div className='country-detail'>
                                    <p><b>Titre: </b>{res.id_ticket.titre} </p>
                                    <p><b>Type: </b>{res.id_ticket.type}</p>
                                    <p><b>Service: </b>{res.id_ticket.service}</p>
                                    <p><b>Urgence: </b>{res.id_ticket.urgence}</p>
                                    <p><b>Description: </b>{res.id_ticket.description}</p>
                                    <p><b>Etat: </b>{res.id_ticket.etat}</p>    
                                    {/* <p><b>date: </b>{res.id_ticket.date}</p>                              */}
                                    <button className='btn btn-danger' onClick={()=> annuler(res.id_ticket._id)}> Annuler</button>                          
                                    <button className='btn btn-warning' onClick={()=> cloturer(res.id_ticket._id)}> Cloturer</button>                          
                                </div>
                            </div>
                        </>

                       )
                    ))}
                </div>
        </div>
    );
}
export default Technicien;
