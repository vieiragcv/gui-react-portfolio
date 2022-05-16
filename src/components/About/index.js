/*------------------------------------------------------------
-                           About
------------------------------------------------------------*/
import React from 'react';
import aboutImage from "../../assets/images/gui-headshot.JPG"
function About() {

  return(

    <section className="my-5 container">
      <div className="flex-row card">
        <h1 id="about">Guilherme Vieira</h1>
        <img src={aboutImage} className="my-2" style={{ width: "auto" }} alt="headshot"></img>
      </div>
      <div>
        <p>Certificates: Project Management Professional (PMP), UM Full Stack Web Development</p>
        <a href="https://www.linkedin.com/in/vieiragui25/"><p>LinkedIn</p></a>
        <a href="https://github.com/vieiragcv"><p>GitHub</p></a>
      </div>
      <p>Seasoned Product/Project Manager with experience in start-ups and large corporations. 
        Passionate in new technologies and data-driven processes capable of improving communication 
        transparency and reliability on performance metrics. </p>

    </section>
  );
}

export default About;