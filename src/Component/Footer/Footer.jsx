import React from 'react'
import './footer.css';
//import video2 from '../../Assets/video2.mp4';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  return (
  
/*<section className='footer'>
  <div className='videoDiv'>
    <video src={video2} loop autoPlay muted type = "video2/mp4"> </video>
  </div>
  </section>
  */

  <div className='setContent Container'>
  <div className='contactDiv flex'>
    <div className='text'>

      <small> KEEP IN TOUCH</small>
      <h2>Travel with us </h2>

    </div>
    <div className='inputDiv flex'>
      <input type='text' placeholder='Enter email address'/>
    <button className='btn flex' type='submit'>
      SEND
      <FiSend className="icon" />

    </button>
    </div>

  </div>

  </div>



  
  )
}

export default Footer