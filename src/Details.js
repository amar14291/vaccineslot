import React from 'react';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

function Details (props) {

  const stIcon = {
    'margin-left': '73%',
    'margin-top': '-19%'
}

  const items = [
    {
      id: 1,
      header: '29-10-12',
      description:
        'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
      image: 'https://www.pngkey.com/png/detail/804-8043401_milk-bottle-png-best-cartoon-food-litlestuff-.png'
    },


    {
      id: 2,
      header: '30-10-12',
      description:
        'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
      image: 'image-src'
    },

  ]
   return (

<div class="card-group">
     { props.data.map((post,index) => (



    <div class="card">
       &nbsp;&nbsp;&nbsp;
      <div class="card-body">

        <h5 class="card-title">{post.date}</h5>
        <div style={stIcon}>
        <EditIcon onClick= { () => {props.getde(index)} } />
         <DeleteIcon onClick= { () => {props.simplifiedFunction(index)} } />
         </div>
        <hr></hr>

        {post.milk==='NO' ? (
       <p class="card-text">Milk ({post.milk}) <CancelOutlinedIcon/> </p>
      ) : (
        <p class="card-text">Milk ({post.milk}) <CheckOutlinedIcon/>  </p>
      )}

       {post.paper==='NO' ? (
       <p class="card-text">Paper ({post.paper}) <CancelOutlinedIcon/> </p>
      ) : (
        <p class="card-text">Paper ({post.paper}) <CheckOutlinedIcon/>  </p>
      )}

       {post.water==='NO' ? (
       <p class="card-text">Water ({post.water}) <CancelOutlinedIcon/> </p>
      ) : (
        <p class="card-text">Water ({post.water}) <CheckOutlinedIcon/>  </p>
      )}

       {post.TIFFIN==='NO' ? (
       <p class="card-text">Tiffin ({post.TIFFIN}) <CancelOutlinedIcon/> </p>
      ) : (
        <p class="card-text">Tiffin ({post.TIFFIN}) <CheckOutlinedIcon/>  </p>
      )}

        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        {/* <button type="button" onClick= { () => {props.getde(index)} }  class="btn btn-outline-secondary">Edit</button>
        <button type="button" onClick= { () => {props.simplifiedFunction(index)} } class="btn btn-outline-secondary">Delete</button> */}


   </div>
    </div>



      ))}
     </div>

/*<CardView
items={items}
activeColor='#000'
imageHeight='150px'
imageWidth='200px'
/>*/
   );

}


export default Details;