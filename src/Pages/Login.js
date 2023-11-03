import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/images/Transparent White.png';
import bgRight from '../Assets/images/foundingtitanfb1.png';
import bgLeft from '../Assets/images/itachifb1.png';
import Navbar from '../Components/Global/Navbar';
function Login() {
  return (
    <MainContent>
      <Navbar />
      <div className='login-content'>
        <div className='Logo'>
          <div style={{ display: "flex", justifyContent: "right", alignItems: "center", paddingRight: "50px" }}>
            <img src={logo} alt='' style={{ width: "25%" }} />
          </div>
        </div>
        <div className='Form-box'>
          <div style={{ backgroundColor: "#171717", height: "60%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "80%", height: "80%" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>LOG IN</h1>
              <form style={{ display: "flex", flexDirection: "column", paddingTop: "30px" }}>
                <input type='email' placeholder='E-mail' className='input' />
                <input type='password' placeholder='Passsword' className='input' />
              </form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <form>
                  <input type="checkbox"></input>
                  <label style={{ color: "#858585", paddingLeft: "10px" }}>Remember me</label>
                </form>
                <h5 style={{ color: "#858585" }}>Forgot Your password?</h5>
              </div>
              <div style={{ display: "flex", justifyContent: "center", paddingRight: "40px", paddingTop: "20px" }}>
                <Link to="/home">
                  <button className='button'>Sign In</button>
                </Link>
              </div>
              <div style={{ display: "flex", paddingTop: "30px", alignItems: "center" }}>
                <hr style={{ width: "50%", color: "#858585" }} /><h4 style={{ color: "#858585", paddingLeft: "5px", paddingRight: "5px" }}>Or</h4><hr style={{ width: "50%", height: "2%", color: "#858585" }} />
              </div>
              <Link to="/Signup">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" }}>
                  <h5 style={{ color: "#858585", paddingTop: "5px" }}>Dont have an account?
                    <span style={{ color: "white", paddingLeft: "3px" }}>SignUp for free</span>
                  </h5>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
const MainContent = styled.div`
  .login-content {
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Logo{
    background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0.9,0,0.7)), url(${bgLeft});
    height: 91vh;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Form-box{
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0.9,0,0.7)), url(${bgRight});
    height: 91vh;
    width: 60%;
    
  }
  .input{
    color: grey;
    border: none; 
    background-color: #252525;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 20px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  .button{
    border: none; 
    border-radius: 11px;
    color: white;
    font-size: 15px;
    background-color: #9A212A;
    width: 200%;
    height: 40px;
  }
`;
export default Login;
