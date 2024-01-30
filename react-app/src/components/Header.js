import React, { useState } from "react";
import { Link } from 'react-router-dom';




function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        // Handle the login logic here
        // Once the user has successfully logged in, set the state variable to true
        setIsLoggedIn(true);
      };
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="/">
        <img  src={require('../assets/img/Screenshot_from_2024-01-07_20-49-32-removebg-preview.png')} alt='logo'  height="70"/>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/home" className="nav-item nav-link active">Home</a>
            <a href="/about" className="nav-item nav-link">About Us</a>
            <a href="/features" className="nav-item nav-link">How It's work</a>
            <div className="nav-item dropdown">
                <a href="1" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                <div className="dropdown-menu m-0">
                    <a href="1" className="dropdown-item">Gents</a>
                    <a href="1" className="dropdown-item">Ladies</a>
                    <a href="1" className="dropdown-item">Kids</a>
                     <a href="1" className="dropdown-item">Altering</a>
                </div>
            </div>
            <a href="/contact" className="nav-item nav-link">Contact Us</a>
        </div>
        <div className="d-none d-lg-flex ms-2">
            
        {/* <a className="-sm-square bg-white rounded- ms-3"href="/login" onclick="myFunction()"/> */}
    {/* <small className="fa fa-user text-body"></small> */}
     
   <button onClick={handleLoginClick}>
    {/* <small className="fa fa-user text-body"></small> */}
     {isLoggedIn ? 
<Link to="/profile" ><a className="-sm-square bg-white rounded- ms-3"></a></Link>
     : <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}

   </button>
  
        </div>
    </div>
</nav>

  );
}

// function myFunction() {
//     // Your code here
//     // alert('Login button was clicked!');
// }


export default Header;