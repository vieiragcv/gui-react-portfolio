/*------------------------------------------------------------
-                           About
------------------------------------------------------------*/
import React from 'react';
import aboutImage from "../../assets/images/gui-headshot.JPG"

function About() {

  return(

  <div className="container">
    <section className="">

      <div className="">
        <img src={aboutImage} className=""  alt="headshot"></img>
        <p className="px-1" >Product/Project Manager with experience in start-ups and large corporations. 
          Passionate in new technologies and data-driven processes capable of improving communication 
          transparency and reliability on performance metrics. </p>
      </div>

      <div className="" style={{ width: "100%", float: "right" }}>
        <div>
        <p classname="py-2"> Certificates: Project Management Professional (PMP)</p>
        <p>UM Full Stack Web Development </p> 
        </div >
        <div style={{ width: "100%", float: "right" }}>
        </div> 
      </div>
    </section>
  </div>
  );
}

export default About;