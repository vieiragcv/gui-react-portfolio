/*------------------------------------------------------------
-                          Header
------------------------------------------------------------*/

import { useEffect } from "react";
import {capitalizeFirstLetter} from '../../utils/helper';


function Header(props) {

  const {
    projectType = [],
    currentProjectType,
    setCurrentProjectType,
    projectTypeSelected,
    setProjectTypeSelected  
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProjectType.name);
  }, [currentProjectType]);

  return (

    <header className="fle-row px-1">

      <h2>
        <a href="/">
          <span role="img" aria-label="camera">👨‍💻</span> @vieiragcv
        </a>
      </h2>

      <nav
        projectType={projectType}
        setCurrentProjectType={setCurrentProjectType}
        projectTypeSelected={projectTypeSelected}
        setProjectTypeSelected={setProjectTypeSelected}
      >
        <ul className="flex-row">

          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>

          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>

          <li className="mx-2">
            <a href="#contact">Contact</a>
          </li>
         

          {projectType.map((type) => (
            <li
              className = {`mx-1 ${
                currentProjectType.name === type.name && 'navActive'
              }`}
              key={type.name}
            >
              <span
                onClick = { () => {
                  setCurrentProjectType(type);
                }}
              >
                {capitalizeFirstLetter(type.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;