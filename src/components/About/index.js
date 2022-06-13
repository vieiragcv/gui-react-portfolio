/*------------------------------------------------------------
-                           About
------------------------------------------------------------*/
import React from 'react';

function About() {

  return(

  <div className="">
    <section className="">
      <div className="">
        <p className="px-1" >Product/Project Manager with experience in start-ups and large corporations. 
          Passionate in new technologies and data-driven processes capable of improving communication 
          transparency and reliability on performance metrics. </p>
      </div>

      <div className="">
          <ul>
            <li>
              <p className="py-2"> Education</p>
            </li>
            <li>
              <p className="py-2">Full Stack Developer - University of Miami </p> 
            </li>
            <li>
              <p className="py-2">PMP - Project Management Institute</p> 
            </li>
            <li>
              <p className="py-2">Insutrial Engineer - Pontifical Catholic University of Rio de Janeiro</p> 
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vieiragui25/"><p>LinkedIn</p></a>
              <a href="https://github.com/vieiragcv"><p>GitHub</p></a>
              <a href="https://sites.google.com/prinmaevm.com/prinmaevm/home"><p>Prinma EVM</p></a>
            </li>
          </ul>
      </div>
    </section>
  </div>
  );
}

export default About;