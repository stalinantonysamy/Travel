import React from 'react'
import './home.css';
import video from '../../Assets/video.mp4';
import{GrLocation} from 'react-icons/gr';
import{HiFilter} from 'react-icons/hi';
import{FiFacebook} from 'react-icons/fi';
import{AiOutlineInstagram} from 'react-icons/ai';
import{FaTripadvisor} from 'react-icons/fa';
import{BsListTask} from 'react-icons/bs';
import{TbApps} from 'react-icons/tb';

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>

      <div className='homeContent container'>

        <div className='textDiv'>
          <span className='smallText'>
            Our Packages

          </span>
          <h1 className='homeTitle'>
            Search your Holidays

          </h1>

        </div>
        <div className='carDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'> Search your destination: </label>
            <div className='input flex'>
              <input type='text' placeholder='Enter name here...'/>
              <GrLocation className="icon"/>
            </div>

          </div>
          <div className='dataInput'> 
          <label htmlFor='date'>Select your date: </label>
          <div className='input flex'>
            <input type='date' />
            
          </div>
          
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'> Max price:</label>
              <h3 className='total'> $5000</h3>
            </div>
            <div className='input flex'>
              <input type="range" max="5000" min="1000" />

            </div>
          
            </div>


             <div className='searchOptions flex'>
              <HiFilter className="icon"/>
              <span> MORE FILRTERS</span>

             </div>
        </div>
        <div className='homeFooterIcons flex'>
          <div className='rightIcons'>
          <FiFacebook className='icon1' />
          <AiOutlineInstagram className='icon1' />
          <FaTripadvisor className='icon1' />
          </div>

          <div className='leftIcons'>
            <BsListTask className="icon1"/>
            <TbApps className="icon1"/>
            

          </div>


        </div>
        </div>
      
     

    </section>
  )
}

export default Home