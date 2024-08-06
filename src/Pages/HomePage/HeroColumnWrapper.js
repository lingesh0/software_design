import React from 'react';
import '../../Styles/HomePage/HeroColumnWrapper.css';
import sample from '../../Assets/Images/images12.png';
import { useNavigate } from 'react-router-dom';
import taskk from '../../LottieFiles/Animation - 1722321893867.json';
import blackHand from '../../LottieFiles/black-hand.json';
import Lottie from 'react-lottie';

function HeroColumnWrapper() {

  const defaultOptions = {
    loop:true,
    autoplay: true,
    animationData : taskk,
    renderSettings : {
      preserveAspectRatio : "xMidYMid slice"
    }
  };

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('./login');
  };

  return (
    <div className="hero-column-wrapper">
      <div className='bg-sample-image'>
        {/* <img src={sample} alt='asdh' className='bg-sample-pic'></img> */}
        {/* <Lottie options={defaultOptions} width={500} height={500}/> */}
      </div>
      <h1 className='fline'>Say bye to </h1><span className='span'> chaos.</span>
      <p className='sline'>
        Manage your work, timelines and team mates all at once. Set and follow timelines, assign tasks and keep your projects in check.
      </p>
      <div className="button-container">
        <button onClick={handleGetStarted} className="get-started-button">Get started →</button>

      </div>
    </div>
  );
}

export default HeroColumnWrapper;
