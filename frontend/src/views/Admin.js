import React, {useState,useEffect} from 'react';
import Nav from './Nav'
// import {BrouserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const [data, setData] = useState([])
  const [technicien, setTechnicien] = useState([])
  const [nom, setNom] = useState('')
  
  //Get tickets
     const getTicket = () =>{
         axios.get('http://localhost:3012/api/allTicket')
         .then((res) => {
             const Data = res.data;
             console.log("Data", Data);
             setData(Data.response)
         })
         .catch(err => console.log(err))
     }
     const getTechnicien = () =>{
        axios.get('http://localhost:3012/api/technicien')
        .then((res) => {
            const Data = res.data;
         
            setTechnicien(Data.response)
        })
        .catch(err => console.log(err))

     }

     useEffect(() => {
         getTicket();
         getTechnicien();
     }, [])

     const affecter = async (id) =>{
    try{
        await axios.post(`http://localhost:3012/api/affecter/${id}`, nom);   
         getTicket();
     } catch (error) {
         if (error) console.log(error.response);
     }
       
     }

     //Delete Tickets
    const onDelete = async(id) => {
      try {
        const res = await axios.delete(`http://localhost:3012/api/delete/${id}`);
          // if(res) window.confirm('are you sure you want to delete this ticket');
          // return window.location.reload();
          getTicket();
      } catch (error) {
          if (error) console.log(error.response);
      }
  }
  const myData = data;
  console.log('technicien', nom)

  return (
   <>
    <Nav />
      {/* <h5 className='ext-light'>Admin Page</h5> */}
      <div className="container tickits">
                    {data.map(res => (
                        <>
                            <div key={res._id} className='ticki tickis'>
                                <div className='country-detail '>
                                    <p><b>titre: </b>{res.titre} </p>
                                    <p><b>type: </b>{res.type}</p>
                                    <p><b>service: </b>{res.service}</p>
                                    <p><b>urgence: </b>{res.urgence}</p>
                                    <p><b>description: </b>{res.description}</p>
                                    <p><b>etat: </b>{res.etat}</p>      
                                    <select class="form-select form-select-sm" name="nom" onChange={(e)=>setNom({nom: e.target.value})} aria-label=".form-select-sm example">
                                        <option value=''>choisi technicien</option>
                                        {
                                            technicien.length && technicien.map((res)=>(
                                                <option value={res.nom}>{res.nom}</option>
                                            ))
                                        }
                                        
                                    </select>                  
                                    <button className='btn btn-danger' onClick={()=>onDelete(res._id)}> Delete</button>                                                                    
                                    <button className='btn btn-danger' onClick={()=>affecter(res._id)}> Assigne</button>                                                                    
                             </div>
                            </div>
                        </>
                    ))}
                </div>
    </>
  );
}

