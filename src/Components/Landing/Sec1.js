import React from "react";
import styled from "styled-components";
import ore from '../../Assets/images/Ore.png';
import sabistore from '../../Assets/images/sabiStore.png';
import wa from '../../Assets/images/wa.png';
import wabisabi from '../../Assets/images/wabiSabi.png';
import model from '../../Assets/images/wobackground2.png';
function Sec1() {
  return (

    <MainContent>
    <div className="content">
    <img src={model} alt="" className="model" />
    <div className="secup">
    <div className="image-container">
    <img src={sabistore} alt="" className="image" />
    </div>
    <div className="image-container">
    <img src={wa} alt="" className="image" />
    </div>
    </div>
    <div className="secdown">
    <div className="image-container">
    <img src={ore} alt="" className="image" />
    </div>
    <div className="image-container">
    <img src={wabisabi} alt="" className="image" />
    </div>
    </div>
    </div>
    </MainContent>


  );
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden; 

  .content {
    width: 100%;
    height: 70%;
  }

  .secup {
    position: relative; 
    display: flex;
    align-items: center;
  }

  .image-container {
    margin-right: 2rem; 
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  .secdown {
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem; 
  }

  .secdown-content {
    margin-top: 2rem; 

  }

  @media (max-width: 768px) {
    .secup {
      // flex-direction: column;
      align-items: center; 
      gap: 2rem; 
    }

    .image-container {
      margin-right: 0; /* Remove margin on smaller screens */
      margin-bottom: 2rem; /* Add vertical space between images */
    }
  }

  .model {
    position: absolute;
    top: 0;
    right: 0;
    width: auto; /* Allow the width to adjust according to its container */
    max-height: 89%; /* Set a maximum height to prevent overflow */
    z-index: 1;
  }
`;

export default Sec1;
