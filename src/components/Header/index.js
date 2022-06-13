/*------------------------------------------------------------
-                          Header
------------------------------------------------------------*/

import { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helper';

function Header (props) {

  const {
    navItem = [],
    setCurrentNavItem,
    currentNavItem,
  } = props;

  useEffect(() => {    // CHANGES TITLE ON CHROME TAB
    document.title = capitalizeFirstLetter(currentNavItem.name);
  }, [currentNavItem]);

  return (
    <header className="flex-row px-1">

      <h2>
        <a href="/">
          <span role="img" aria-label="camera"></span> Guilherme Vieira
        </a>
      </h2>

      <nav
        navItem={navItem}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      >
        <ul className="flex-row px-1">
          {navItem.map((type) => (
            <li
              className = {`mx-1 ${currentNavItem.name === type.name && 'navActive'}`}
              key={type.name}
            >
              <span
                onClick = { () => {
                  setCurrentNavItem(type);
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