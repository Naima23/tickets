import React ,{useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios'

export default function UpdateTicket() {
const id = useParams()
console.log(id)

    const[data , setData]= useState({titre:'',type:'', service:'', urgence:'', description:''})

    const handlechange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
     }
    //  console.log('update data', data)
     
  
 //Get tickets
         const getTicket = (id) =>{
             axios.get(`http://localhost:3012/api/selectedTicket/${id}`)
             .then((res) => {
                 const Data = res.data;
                 setData(Data.response)
             })
             .catch(err => console.log(err))
         }
         useEffect((id) => {
             getTicket(id);
         }, [])
         console.log("getTicket", setData)


   
//Update tickets
    const onUpdateTickets = async (id) =>{
    try {
        await axios.post(`http://localhost:3012/api/update${id}`)
        return window.location.reload();
    } catch (error) {
        if (error) console.log(error.response);
    }
    }

return ( 
         <div className='container w-50 p-3'>        
        <form>
        {data.length && data.map(res=>(
            <>
           <div  className="mb-3">
            <label  className="form-label" >Titre</label>
            <input value={res.titre} type="text" className="form-control"onChange={handlechange} />
        </div>
        <div className="mb-3">
            <label  className="form-label">Type</label>
            <input type="text" className="form-control" onChange={handlechange} />
        </div>
        <div className="mb-3">
            <label  className="form-label">Service</label>
            <input type="text" className="form-control" onChange={handlechange} />
        </div>
        <select name="urgence" className="form-select" aria-label="Default select example" onChange={handlechange}>
                        <option selected>select urgence</option>
                        <option value="urgence">urgence</option>
                        <option value="pas urgence">pas urgence</option>
                        <option value="tres urgence">tres urgence</option>
                        </select>
        <div className="mb-3">
            <label  className="form-label">Description</label>
            <input type="text" className="form-control" onChange={handlechange} />
        </div>
        
        <button onClick={onUpdateTickets} type="button" className="btn btn-primary" data-bs-dismiss="modal" >Save</button>
        </>
    ))
    }
        </form>
        </div>
    )
}
