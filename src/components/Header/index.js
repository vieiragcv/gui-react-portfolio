/*------------------------------------------------------------
-                          Header
------------------------------------------------------------*/

import { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helper';

function Header (props) {

  const {
    projectType = [],
    setCurrentProjectType,
    currentProjectType,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProjectType.name);
  }, [currentProjectType]);

  return (
    <header className="flex-row px-1">

      <h2>
        <a href="/">
          <span role="img" aria-label="camera"></span> Guilherme Vieira
        </a>
      </h2>

      <nav
        projectType={projectType}
        setCurrentProjectType={setCurrentProjectType}
        currentProjectType={currentProjectType}
        contactSelected={contactSelected} 
        setContactSelected={setContactSelected}
      >

        <ul className="flex-row px-1">

{/*------------------------------------- ABOUT ME -------------------------------------*/}

          <li className={`mx-2 ${ contactSelected && 'navActive'}`}>
            <a href="#about" onClick = {() => setContactSelected(false)}>About Me</a>
          </li>

{/*------------------------------------- Portfolio -------------------------------------*/}

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
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(type.name)}
              </span>
            </li>
          ))}

{/*------------------------------------- Contact -------------------------------------*/}

          <li>
            <span onClick={() => setContactSelected(true)}>  Contact</span>
          </li>
         
{/*------------------------------------- Resume -------------------------------------*/}

          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;