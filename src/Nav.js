import {React,useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar (props) {
let name = sessionStorage.getItem('user');
let [nameUser] = useState(0);
nameUser = name;
return (
<div>


<nav  className="navbar navbar-expand-lg navbar-light bg-blue">


  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}

    {/* <ul style={{marginLeft:'35% !important;'}} className="navbar-nav mr-auto"> */}



      {/* <li className="nav-item">

        {/* <NavLink style={{color:'white'}} className="nav-link" to='/home' ><span style={{color:'white !important'}} >Home</span></NavLink> */}

      {/* </li> */}

      {/* <li className="nav-item "> */}
        {/* <NavLink style={{color:'white'}} className="nav-link" to='/About' ><span style={{color:'white !important;'}} >About</span></NavLink> */}
      {/* </li> */}

      {/* <li className="nav-item "> */}
        {/* <NavLink style={{color:'white'}} className="nav-link" to='/Contact'><span style={{color:'white !important;'}} >Contact</span></NavLink> */}
      {/* </li> */}

      {/* <li className="nav-item "> */}
      {/* <NavLink style={{color:'white'}} className="nav-link" to='/Profile'><span style={{color:'white !important;'}} >Profile</span></NavLink> */}

      {/* </li> */}



    {/* </ul> */}


    • Enter your comfortable date & area  • Search for vaccination slots • Book on CoWIN

  {/* Disclaimer : While we have real-time data, slot availability on CoWin changes rapidly. If you see availability, please book on CoWin instantly before the slots are lost. */}

  {/* Online registration and appointment is now open for 18 to 44 age group.
 <p>Walk-in registration and appointment facility is currently not available for 18-44 age group, only online appointment can be taken.</p>
 <p>Appointment for Age 18 to 44 is based on slots made available by the private vaccinations centers as well as the respective state government.</p>
 <br></br>
The minimum age for each vaccination center is displayed with the name of the vaccination center. Appointment slots are available where the age displayed is 18+.
More Appointment slots will soon be offered. If slots are not currently available, please check again after sometime. We request your patience and understanding.
To add multiple individuals in a single Dose 2 appointment, the vaccine and Dose 1 date must be same.
The second dose of COVAXIN should be taken between 28 days to 42 days after the first dose. The second dose of COVISHIELD should be taken between 28 days to 56 days after the first dose. */}


    {/* <span> Hello {nameUser} ! </span> */}
     <span>&nbsp;</span>
    {/* <input style={{width:'8%'}} type="button" onClick= {props.logout}  value="Logout" /> */}


  {/* </div> */}
</nav>


</div>

);
}


export default Navbar;