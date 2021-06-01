import React, {useState,useEffect} from 'react';
import Nav from './Nav'
// import {BrouserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const [data, setData] = useState([])
  const [technicien, setTechnicien] = useState([])
  const [nom, setNom] = useState('')

  const [formDate,setFormDate] = useState({date:''})
 
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
       const {data} = await axios.post('http://localhost:3012/api/find',formDate)
     if(data) setData(data)
    } catch (error) {
      if(error) console.log(error.response);
    }
    
   }

 
  //Get tickets
     const getTicket = async () =>{
        const response = await axios.get('http://localhost:3012/api/allTicket');
        console.log("Data", response.data.response);
        setData(response.data.response)
        
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
        await axios.post(`http://localhost:3012/api/affecter/${id}`,nom);   
         getTicket();
     } catch (error) {
         if (error) console.log(error.response);
     }
       
     }

     //Delete Tickets
    const onDelete = async(id) => {
      try {
         await axios.delete(`http://localhost:3012/api/delete/${id}`);
          getTicket();
      } catch (error) {
          if (error) console.log(error.response);
      }
  }
  console.log('ticket', data)

  const handelChange = (e)=>{
    const {name,value} = e.target
    setFormDate({...formDate,[name]:value})
  }


  return (
   <>
    <Nav />
      {/* <h5 className='ext-light'>Admin Page</h5> */}
      <div className="container">
      <form className='style'>
        <div className="form-group   w-50 p-10 ">
          <input        
            name="date"
            type="date"
            className="form-control"
            id="validationCustom01"
            placeholder="Date"
            onChange={handelChange}
            required/>
         <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleClick}>
          Search
        </button>
        </div>
        </form>
      </div>
      <div className="container tickits">
                    {data.length > 0 && data.map(res => (
                        <>
                            <div key={res._id} className='ticki tickis'>
                                <div className='country-detail '>
                                    <p><b>titre: </b>{res.titre} </p>
                                    <p><b>type: </b>{res.type}</p>
                                    <p><b>service: </b>{res.service}</p>
                                    <p><b>urgence: </b>{res.urgence}</p>
                                    <p><b>description: </b>{res.description}</p>
                                    <p><b>date: </b>{res.date}</p>
                                    <p><b>etat: </b>{res.etat}</p>                                     
                                        {
                                            (res.etat !== 'cloturer') && (   
                                                <>
                                        <select className="form-select form-select-sm" name="nom" onChange={(e)=>setNom({nom: e.target.value})} aria-label=".form-select-sm example">
                                        <option value=''>choisi technicien</option>
                                        {
                                            technicien.length > 0 && technicien.map((res)=>(
                                                <option value={res.nom}>{res.nom}</option>
                                            ))
                                        }
                                        
                                           </select>  
                                            </>                                                                 
                                       )}                
                                            <button className='btn btn-danger' onClick={()=>onDelete(res._id)}> Delete</button>                                                                    
                                            <button className='btn btn-success' onClick={()=>affecter(res._id)}> Assigne</button>   
                             </div>
                             </div>
                        </>
                    ))}
                </div>
              </>
 );
}


