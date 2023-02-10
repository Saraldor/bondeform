import React from "react";
import CookieConsent from "react-cookie-consent";
import News from "../News/NewsList";
import "./home.css";
const Home = () => {


  return (
    <div className="container mt-1"> 
    <News/>
    <CookieConsent
  location="bottom"
  buttonText="Ja"
  cookieName="bondeformsKakmonster"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "18px" }}
  expires={150}
>
  Din här sidan använder kakor för att du ska få den bästa upplevelsen!
 
</CookieConsent>            
   </div> 
  );
};

export default Home;
