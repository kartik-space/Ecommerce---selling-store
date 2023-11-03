import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import model from '../Assets/images/modelphoto.png';
import Navbar from '../Components/Global/Navbar';
function Signup() {
    return (
        <MainContent>
            <Navbar />
            <div className='container'>
                <div className='signup-box'>
                    <div className='box'>
                        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Create New Account</h1>
                        <div style={{ display: "flex" }}>
                            <input type='text' placeholder='First Name' className='name-input'></input>
                            <div style={{ marginRight: '10px' }}></div>
                            <input type='text' placeholder='Last Name' className='name-input'></input>
                        </div>
                        <div>
                            <input type='email' placeholder='E-mail ID*' className='input'></input>
                        </div>
                        <div>
                            <input type='password' placeholder='New Password*' className='input'></input>
                            <input type='password' placeholder='Confirm Password*' className='input'></input>
                        </div>
                        <Link to="/home">
                        <div>
                            <button className='button'>Create Account</button>
                        </div>
                        </Link>

                        <div style={{ display: "flex", paddingTop: "30px", alignItems: "center" }}>
                            <hr style={{ width: "50%", color: "#858585" }} /><h4 style={{ color: "#858585", paddingLeft: "5px", paddingRight: "5px" }}>Or</h4><hr style={{ width: "50%", height: "2%", color: "#858585" }} />
                        </div>
                    </div>
                </div>
                <div className='image'>
                </div>
            </div>
        </MainContent>
    )
}

const MainContent = styled.div`
    .container {
        display: flex;
        font-family: 'Roboto'; 

    }
    .signup-box {
        background-color: black;
        background: linear-gradient(rgba(0,0,0,1), rgba(0,0.9,0,1));
        width: 45%;
        height: 91vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box{
        color: white;
        height: 80%;
        width: 50%;
    }
    .image{
        background-size: cover;
        background-position: center;
        height: 91vh;
        background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0.9,0,0.7)), url(${model});
        width: 55%;
       
    }
    .name-input{
    color: grey;
    border: none; 
    background-color: #252525;
    height: 55px;
    width: 50%;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    &::placeholder {
      padding-left: 10px;
    }
    }
    .input{
    color: grey;
    border: none; 
    background-color: #252525;
    height: 55px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    &::placeholder {
      padding-left: 10px;
    }
    }
    .button{
        color: white;
        font-size: 20px;
        background-color: #252525;
        border: none; 
        border-radius: 10px;
        width: 100%;
        height: 50px;

    }
`;

export default Signup;
