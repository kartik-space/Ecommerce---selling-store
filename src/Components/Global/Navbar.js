import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


import profile from '../../Assets/images/Profile Icon.png';
import search from '../../Assets/images/Search Icon.png';
import cart from '../../Assets/images/Shopping Cart.png';
import Logo from '../../Assets/images/Transparent White.png';


function Navbar() {
  return (
    <MainContent>
      <div className="content">


        <div className='navbar-logo'>
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className='navbar-menu'>
          <ul className='navbar-ul'>
            <li>
              <NavLink className='headerLinks' to='/home'>
                 <span>HOME</span>
              </NavLink>
            </li>
            <li>
              <NavLink className='headerLinks' to='/about'>
                 <span> ABOUT </span>
              </NavLink>
            </li>

            <li>
              <NavLink className='headerLinks' to='/community'>
                <span>COMMUNITY </span>
              </NavLink>
            </li>

            <li>
              <NavLink className='headerLinks' to='/our-collection'>
               <span>OUR COLLECTION</span> 
              </NavLink>
            </li>

            <li>
              <NavLink className='headerLinks' to='/contact-us'>
                <span>CONTACT US</span>
              </NavLink>
            </li>


          </ul>
        </div>
        <div className='navbar-right'>
          <ul className='navbar-ul'>
            <li><img src={search} alt="" srcset="" /></li>
            <li><img src={cart} alt="" srcset="" /></li>
            <li><img src={profile} alt="" srcset="" /></li>
          </ul>
          
        </div>

      </div>

    </MainContent>
  );
}

const MainContent = styled.div`
text-decoration: none;
font-family: 'Roboto';
font-weight: 500;
font-size: 1rem;
height: 9vh;
width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center ;
  align-items: center;

  .content{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }


    img{
      width: 3%.5;
      height: 3rem;
    }
  
    .navbar-menu{
      z-index: 2; 

      

  

    .navbar-ul {
    display: flex;
    gap:2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  

   .headerLinks{

    
  color: grey;

   span{
    font-size: 14px;
    position: relative;
    &:after{
      content: "";
      height: 2px;
      background: gray;
      position: absolute;
      z-index: 0;
      left: 0;
      right: 0;
      /* bottom: -6px; */
      top:1.2rem;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
   }
      &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }

    
  }

  .active{
  span{
    font-size: 14px;
    text-decoration: none;
    /* position: relative; */
    color: white;
    position: relative; 
    text-decoration: none; /* Remove the default underline */
    border-bottom: 2px solid white; /* Add a colored underline with spacing */
    padding-bottom: 2px;
    &:after{
      content: "";
      height: 2px;
      background: gray;
      position: absolute;
      z-index: 0;
      left: 0;
      right: 0;
      /* bottom: -6px; */
      top:1.2rem;
      opacity: 0;
      transform-origin: left center;
      
    }
    
    
    
    
     
  } 
  &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 0;
      }
    }
  
 
  }
  

  
 
 

  

  }

    
   
  }
    
  .navbar-right{
    display: flex;
    .navbar-ul {
    display: flex;
    gap:1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      
      margin-right: 10px;
      img{
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }

  }
 
`;

export default Navbar;
