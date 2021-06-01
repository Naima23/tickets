import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

const Nav = () => {
const history = useHistory()

  const logout = async (e) =>{
    e.preventDefault()
    await axios.post('http://localhost:3012/api/logout')
    history.push('/login')
  }
    return (
        
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">gestion de tickets</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/" onClick={logout}>logout</a>
      </div>
    </div>
  </div>
</nav>
</div>
        
    );
}

export default Nav;
