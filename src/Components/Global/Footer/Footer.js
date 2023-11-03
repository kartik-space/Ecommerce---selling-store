import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs"; // Import the BsWhatsapp component;
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../../Assets/images/Transparent White.png";
function Sec4() {
  const {} = useLoadScript({googleMapsApiKey: ""});
  return (
    <MainContent>
      <div className="content">
        <div className="up">
          <div className="up-left">
            <div className="quick-links">
              <NavLink to='/'><h3>Quick Links</h3></NavLink>
              <NavLink to='/about'><h5>About Us</h5></NavLink>
              <NavLink to = '/community'><h5>Community</h5></NavLink>
              <NavLink to='/our-collection'><h5>Our Collection</h5></NavLink>
            </div>
            <div className="my-account">
              <h5>My Account</h5>
              <h5>Wishlist</h5>
            </div>
          </div>
          <div className="vertical-line">
            <div className="vl"></div>
          </div>
          <div className="up-right">
            <div className="address-div">
              <div className="h4">Contact</div>
              <div
                className="contact"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <h5>+91 706-093-6660</h5>
                <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'20px'}}>
                <div className="vl"></div></div>
                <h5> official.wabisabistore@gmail.com</h5>
              </div>
              <div className="address">
                <h5>Dhanuka Textiles, Kamdhenu Complex, Transport Nagar</h5>
                <h5 style={{paddingTop:"5px"}}>Janta Road, Saharanpur, Uttar Pradesh, India - 247001</h5>
              </div>
            </div>

            <div className="maps-div">
            <div className="maps"></div>
            </div>
          </div>
        </div>
        <div className="horizontal-bar">
          <hr />
        </div>
        <div className="down">
          <div className="copyright">
            The content of the site is the property of Wabi Sabi Store
          </div>
          <div className="logo">
            <img src={logo} alt="" style={{ width: 57, height: 57 }} />
          </div>
          <div className="socials">
            <AiOutlineInstagram
              style={{ width: 47, height: 27, paddingRight: 10 }}
            />
            <BsWhatsapp style={{ width: 25, height: 25 }} />{" "}
            {/* Use the BsWhatsapp component */}
          </div>
        </div>
      </div>
    </MainContent>
  );
}

const MainContent = styled.div`
  display: flex;
  color: white;
  background-color: #000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  a{
    ffont-family: 'Roboto';
    color: white;
    transition: 0.15s;
  }
  a:hover{
    color: rgb(201, 201, 201);
  }

  .content {
    width: 80%;
    font-family: "Roboto";
  }
  .up {
    width: 100%;
    height: 12rem;
    display: flex;
    flex-direction: row;
  }
  .up-left {
    padding: 30px;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "Roboto";
  }
  .quick-links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .vertical-line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    .vl {
      border-left: 2px solid grey;
      height: 50px;
    }
  }
  .vl {
    border-left: 2px solid grey;
    height: 20px;
  }
  .my-account {
    padding-top: 40px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .up-right {
    padding: 20px;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-family: "Roboto";
  }
  .address-div {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .horizontalbar {
    width: 100%;
  }
  .down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
  }
  .maps-div{
    display: flex;
    justify-content: center;
    align-items: center;
    .maps{
      width: 80%;
      height: 90%;
      background-color: white;
      border-radius: 15px;
    }
  }
`;

export default Sec4;
