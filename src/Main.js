import React from 'react';
import './index.css';
import Login from './Login';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav.js';
import Contact from './Contact';
import {Switch,Route } from "react-router-dom";
import About from './About';
import Profile from './Profile';
import { createBrowserHistory } from 'history';


function Main (props)
{
  const history = createBrowserHistory({ forceRefresh: true });
  const handleLogout = () => {
    sessionStorage.setItem('user', '');
    history.push('/login');
  }


return(
  <div  style={{'background-color':'white !important;'}}>
  <h3 style={{'margin-left':'18%'}} class="display-5" >
  <img src="https://i.imgur.com/CXQmsmF.png" class="logo"/>#Vaccination slot </h3>


     <div style={{"margin-top": "-23px;"}} class="container"><br/>
      <Nav logout={handleLogout} />
     <br/>

     <Switch>
         <Route exact path="/home" component={App} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Contact" component={Contact} />
         <Route exact path="/Profile" component={Profile} />
         <Route path="/Login" component={Login} />

     </Switch>

     </div>
     </div>
);
}

export default Main;