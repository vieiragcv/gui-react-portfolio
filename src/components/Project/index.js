/*------------------------------------------------------------
-                          Project
------------------------------------------------------------*/
import React from 'react';

import proj1Image from "../../assets/images/proj1.jpg";
import proj2Image from "../../assets/images/proj2.jpg";
import proj3Image from "../../assets/images/proj3.jpg";
import proj4Image from "../../assets/images/proj4.jpg";
import proj5Image from "../../assets/images/proj5.jpg";
import proj6Image from "../../assets/images/proj6.jpg";

function Project() {

  return(
    <div className="container">

        <div className ="" id="">
          <a href="https://vieiragcv.github.io/run-buddy/">
            <img src={ proj1Image } className=""  alt="proj1"></img> 
          </a>
        </div>

        <div className ="" id="">
          <a href="https://vieiragcv.github.io/la-cocina-g/"> 
            <img src={ proj2Image } className=""  alt="proj2" ></img>
          </a>
        </div>

        <div className ="" id="">
          <a href="https://vieiragcv.github.io/note-taker/">
            <img src={ proj3Image } className=""  alt="proj3" ></img>
          </a>
        </div>  

        <div className ="" id="">
          <a href="https://vieiragcv.github.io/project-1-team-8/">
            <img src={ proj4Image } className=""  alt="proj4" ></img> 
          </a>
        </div>

        <div className =""id="">
          <a href="https://vieiragcv.github.io/weather-dashboard/">
            <img src={ proj5Image } className=""  alt="proj5" ></img>
          </a>
        </div>

        <div className ="" id="">
          <a href="https://vieiragcv.github.io/code-quiz/">
            <img src={ proj6Image } className=""  alt="proj6" ></img>
          </a>
        </div>
    </div> 
  )
}

export default Project;