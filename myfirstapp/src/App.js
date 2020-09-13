import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import './App.css';
//import NewExample from './create-react-app'
//import ExampleCompenent from'./MyCompenent'
import image from './imageInSrc.jpg'
//import ReactPlayer from 'react-player'

function App() {
  return (
    <div>
    <div style={{border:"solid 10px black" , maxWidth:'100vw'}}>

    <h1 className='title-red'> FETEN </h1>
  
     
    <div>

<img src={image} alt ='myImage' />
  
   <img src="/imageInPublic.jpg" className="my-profile" alt= 'imagepublic'/>
   </div>   
    
   </div>


   <video width="320" height="240" controls >
   
    <source src='/myVideo.mp4' type='video/mp4' />
   
   </video>
   
 
 

</div>
  );   
 }
export default App;
