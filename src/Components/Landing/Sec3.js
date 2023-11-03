import React from 'react';
import styled from 'styled-components';
import upcoming from '../../Assets/images/upcoming.png';
import events from '../../Assets/images/events.png';
import banner from '../../Assets/images/Banner.png';

function Sec3() {
  return (
    <div>
      <MainContent>
        <div className='left'></div>
        <div className='right'>
          <div className='right-content'>
            <img src={upcoming} alt='' />
            <img src={events} alt='' />
          </div>
        </div>
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  background-color: #000;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 22rem;

  .left {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${banner});
  background-size: cover;
}


  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }

  .right-content {
    display: flex;
    flex-direction: column;
  }
`;

export default Sec3;
