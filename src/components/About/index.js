/*------------------------------------------------------------
-                           About
------------------------------------------------------------*/
import React from 'react';
import aboutImage from "../../assets/images/gui-headshot.JPG"
function About() {

  return(

    <section className="my-5 container">
      <div className="card">
        
        <img src={aboutImage} className="my-2" style={{ width: "auto" }} alt="headshot"></img>
      </div>

      <div className="card">
        <p>Certificates: Project Management Professional (PMP), UM Full Stack Web Development</p>
      </div>

      <div className="">
        <p>Seasoned Product/Project Manager with experience in start-ups and large corporations. 
          Passionate in new technologies and data-driven processes capable of improving communication 
          transparency and reliability on performance metrics. </p>
      </div>

    </section>
  );
}

export default About;