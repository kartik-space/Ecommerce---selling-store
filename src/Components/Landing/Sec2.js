import React from 'react';
import styled from 'styled-components';
import shirt1 from '../../Assets/images/shirt1.png'
import shirt2 from '../../Assets/images/shirt2.png'
import shirt3 from '../../Assets/images/shirt3.png'
import shirt4 from '../../Assets/images/shirt4.png'
import shirt5 from '../../Assets/images/shirt5.png'
import New from '../../Assets/images/new.png'
import Drops from '../../Assets/images/drops.png'


function Sec2() {
  return (
    <Maincontent>
      <div className="left">
        <div className="content">
        <img src={New} alt=''  style={{width: "60%"}} />
        <img src={Drops} alt=''  style={{width: "80%"}} />
        </div>
      </div>
      <div className="right">
        <img src={shirt1} alt=''  style={{width: "20%"}} />
        <img src={shirt2} alt=''  style={{width: "20%"}} />
        <img src={shirt3} alt=''  style={{width: "20%"}}/>
        <img src={shirt4} alt=''  style={{width: "20%"}}/>
        <img src={shirt5} alt=''  style={{width: "20%"}}/>
      </div>
    </Maincontent>
  );
}

const Maincontent = styled.div`
  display: grid;
  height: 20rem;
  grid-template-columns: [row1] 1fr [row2] 2fr;
  grid-gap: 50px;
  .right{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .content{
    height: 70%;
    width: 70%;
  }
`;

export default Sec2;
