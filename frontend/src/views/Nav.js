import React from 'react';
import {Link, useHistory} from 'react-router-dom';
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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">gestion de tickets</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="" onClick={logout}>logout</a>
        {/* <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
</div>
        
    );
}

export default Nav;
