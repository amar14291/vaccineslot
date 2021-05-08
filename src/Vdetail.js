import React, { useState }  from 'react';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

function Vdetails(props) {

  const [fil, Setfil] = useState(0);
  const [filname, Setfilname] = useState(0);
  //const [showsubmit, Setshowsubmit] = useState(0);

    const stIcon = {
        'margin-left': '73%',
        'margin-top': '-19%'
    }

    const fillset = e => {
      // alert(filname);
      // alert(fil);
      // alert(e.target.value);
       if(e.target.value=='18' || e.target.value=='45' )
       {
        console.log('in age');
         Setfil(e.target.value);
         Setfilname('age');

       }
       else
       {
         console.log('in fee');
        Setfil(e.target.value);
        Setfilname('fee');
       }
  }


    let datesplit = props.date.split('-');

    let corredate = (datesplit[2]) ?  datesplit[2]+'-'+datesplit[1]+'-'+datesplit[0] : undefined ;


    return (
         <div>
        <h6> { (props.data.length) ? 'Status For : ' + corredate : ''  }</h6>

        { (props.data.length > 0 ) ? (
          <div>
        {/* <div className="roundcl"></div>  */}
         <div>Last update from CoWIN - 3 Minutes ago</div>
        </div>) : (<div></div>) }


        {/* <div style={{"display": "inline-block","text-align":"right"}}>
        <button onClick={fillset}  type="button" class="btn btn-outline-primary" value="18">18+</button>
        <button onClick={fillset} type="button" class="btn btn-outline-primary" value="45">45+</button>
        <button onClick={fillset} type="button" class="btn btn-outline-primary" value="free">FREE</button>
        <button onClick={fillset} type="button" class="btn btn-outline-primary" value="paid">PAID</button>
        </div> */}

       <div className="table-responsive">
        <table class="table table-striped">
  <thead>
    <tr>

      <th scope="col">Center Name</th>

      <th style={{"textAlign":"center"}} scope="col">Available capacity</th>
      {/* <th scope="col">District name</th> */}

      {/* <th scope="col">Fee</th> */}
      <th scope="col">Fee</th>

      <th scope="col">age limit</th>
      <th scope="col">Vaccine</th>
      <th scope="col">Pincode</th>
      {/* <th scope="col">Slots</th> */}

      <th scope="col">Center open</th>
      <th scope="col">Center closed</th>
    </tr>
  </thead>
  <tbody>

    {console.log(fil)}
    {console.log(filname)}

  { (props.data.length > 0) ? (

    props.data.map((post, index) => (

    //  ( (fil > 0 && post.min_age_limit==fil) ) ? (
    <tr>

      <td>{post.name}</td>
      <td style={{"textAlign":"center"}}>
       <b>{post.available_capacity}</b><br/>
       <a href="https://selfregistration.cowin.gov.in/" target="_blank" color='#007bff'>Book Now</a>
      </td>
      {/* <td>{post.district_name}</td> */}
      {/* <td>{post.fee}</td> */}
      <td>{post.fee_type}
       { (post.fee > 0) ? (post.fee) : ''}
       </td>

      <td>{post.min_age_limit}+</td>
      <td>{post.vaccine}</td>
      <td>{post.pincode}</td>
      {/* <td>{post.slots}</td> */}

      <td>{post.from}</td>
      <td>{post.to}</td>

    </tr>
    //  ) : (<tr></tr>)


  ))

  )  : (  <tr ><td colSpan="12">Vaccination may start soon...Please check after some time</td></tr> )
}

  </tbody>
</table>

</div>

</div>
      /*  <div class="card-group">
            {props.data.map((post, index) => (



                <div class="card">
                    &nbsp;&nbsp;&nbsp;
                        <div class="card-body">

                        <h5 class="card-title">{post.name}</h5>

                        <hr></hr>
                        <p class="card-text">Available capacity : {post.available_capacity}   </p>
                        <p class="card-text">District name : {post.district_name}   </p>
                        <p class="card-text">Fee : {post.fee}   </p>
                        <p class="card-text">Fee type : {post.fee_type}   </p>
                        <p class="card-text">Center open  : {post.from}   </p>
                        <p class="card-text">Center closed :  {post.to}  </p>
                        <p class="card-text">Min. age limit : {post.min_age_limit}    </p>
                        <p class="card-text">Pincode : {post.pincode}    </p>
                        <p class="card-text">Slots : {post.slots}   </p>
                        <p class="card-text">Vaccine Provided : {post.vaccine}   </p>


                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>



                    </div>
                </div>



            ))}
        </div>
*/

    );

}


export default Vdetails;