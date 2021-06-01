import React ,{useState} from 'react'
// import {useHistory} from 'react-router-dom';
import axios from 'axios'

export default function CreateTecki() {

    // const history = useHistory()
    const[data , setData]= useState({titre:'',type:'', service:'', urgence:'', description:''})

    const handlechange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
     }
     console.log(data)

    const onCreateTicket = async () =>{
    try {
        await axios.post('http://localhost:3012/api/create', data)
        return window.location.reload();
    } catch (error) {
        if (error) console.log(error.response);
    }      
    // history.push('/User') 
    }
    return (
        <>
        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Tickets</button>
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
                    <label htmlFor="exampleInputEmail1" className="form-label">titre</label>
                    <input name="titre" type="text" className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">type</label>
                    <input name="type" type="text" className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">service</label>
                    <input name="service" type="text" className="form-control" onChange={handlechange}  />
                </div>              
                <select name="urgence" className="form-select" aria-label="Default select example" onChange={handlechange}>
                <option selected>select urgence</option>
                <option value="urgence">urgence</option>
                <option value="pas urgence">pas urgence</option>
                <option value="tres urgence">tres urgence</option>
                </select>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"onChange={handlechange}></textarea>
                </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={onCreateTicket} type="button" className="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                </div>
                </div>
            </div>
            </div>
         </>
    )
}
