import React ,{useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
// import {useParams} from 'react-router-dom';
import axios from 'axios'

export default function UpdateTicket() {
    // const {id} = useParams()

    const[data , setData]= useState({titre:'',type:'', service:'', urgence:'', description:''})

    const handlechange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
     }
     console.log(data)



   
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
        <>
        <button type="button" className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Update Ticket</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Tickets</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">titre</label>
                    <input name="titre" type="text" className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">type</label>
                    <input name="type" type="text" className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">service</label>
                    <input name="service" type="text" className="form-control" onChange={handlechange}  />
                </div>              
                <select name="urgence" className="form-select" aria-label="Default select example" onChange={handlechange}>
                <option selected>select urgence</option>
                <option value="urgence">urgence</option>
                <option value="pas urgence">pas urgence</option>
                <option value="tres urgence">tres urgence</option>
                </select>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"onChange={handlechange}></textarea>
                </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={onUpdateTickets} type="button" className="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
