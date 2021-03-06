import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { red } from '@material-ui/core/colors';



function Login(props) {

    const history = createBrowserHistory({ forceRefresh: true });
    const [username, Setusername] = useState(0);
    const [showsubmit, Setshowsubmit] = useState(0);

    const handleLogin = () => {
        if(username=="amar")
        {
            
        sessionStorage.setItem('user', username);
        history.push('/home');
        }
        else
        {
            Setshowsubmit('block');
        }
    }


    return (
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">
                            <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo" /> </div>
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">


                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input onChange={event => Setusername(event.target.value)} class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                           
                            <span style={{'color':'red', 'display': showsubmit ? "block" : "none" }}>Invalid username and password</span>
                        
                        </div>

                        <div class="row px-3"> <label class="mb-1">

                        </label> <button style={{ marginLeft: '10%', background: '#1A237E' }} type="button" class="btn btn-primary" onClick={handleLogin} >Login Me</button>  </div>




                    </div>
                </div>
            </div>
            <div class="bg-blue py-4">
                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2020. All rights reserved.</small>
                    <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login);
