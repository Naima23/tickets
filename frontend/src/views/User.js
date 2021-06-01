import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import CreateTecki from '../modals/CreateTecki'
// import UpdateTicket from '../modals/Updateticket'
import axios from 'axios'
import Nav from './Nav'
import {Link} from 'react-router-dom';

const User = () => {
//  const history = useHistory()
    const [data, setData] = useState([])
  
//Get tickets
    const getTicket = () =>{
        axios.get('http://localhost:3012/api/Tickets')
        .then((res) => {
            const Data = res.data;
            console.log("Data", Data);
            setData(Data.response)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getTicket();
    }, [])

    
//Delete Tickets
    const onDelete = async(id) => {
        try {
         await axios.delete(`http://localhost:3012/api/delete/${id}`);
            // if(res) window.confirm('are you sure you want to delete this ticket');
            // return window.location.reload();
            getTicket();
        } catch (error) {
            if (error) console.log(error.response);
        }
    }

    return (
        <>
             <Nav />
            <CreateTecki />
      
            <div>
                <div className="container tickits">
                    {data && data.map(res => (
                        <>
                            <div key={res._id} className='ticki'>
                                <div className='country-detail'>
                                    <p><b>Titre: </b>{res.titre} </p>
                                    <p><b>Type: </b>{res.type}</p>
                                    <p><b>Service: </b>{res.service}</p>
                                    <p><b>Urgence: </b>{res.urgence}</p>
                                    <p><b>Description: </b>{res.description}</p>
                                    <p><b>date: </b>{res.date}</p>
                                    <p><b>Etat: </b>{res.etat}</p>
                                    {/* <UpdateTicket title={res.titre} /> */}
                                    {/* <button className='btn btn-success'>Update</button> */}
                                    {
                                    (res.etat !== 'cloturer') && (
                                    <>
                                    {/* <button type="button" className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Update Ticket</button> */}
                                    <Link to={`/UpdateTicket/${res._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <button className='btn btn-danger'onClick={()=>onDelete(res._id)}>Delete</button> 
                                    </>
                                    )
                                    }                      
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
     );
}

export default User;
