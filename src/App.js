import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {

  const [navItem] = useState([
    { name: 'About Me', description: 'Brief summary about myself'},
    { name: 'Product Development', description: 'Coding Experience' },
    { name: 'Project Management', description: 'Project Management Experience' },
    { name: 'Contact', description: 'Contact me form'},
    { name: 'Resume', description: 'Download my full resume'}
  ]);

  const [currentNavItem, setCurrentNavItem] = useState(navItem[0]);
  
  return (
    <div>

      <Header
        navItem={navItem}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem} 
      ></Header>

      <main>
        {currentNavItem.name === 'About Me' && 
          <>
          <div>
            <About></About>
          </div>

          </>
        }
        {currentNavItem.name === 'Coding' &&
          <>
          <div>
            <Project></Project>
          </div>
          </>
        }
        {currentNavItem.name === 'Project Management' &&
          <>
          <div>
            <p>Project Management</p>
          </div>
          </>
        }
        {currentNavItem.name === 'IP' &&
          <>
          <div>
            <p>IP</p>
          </div>
          </>
        }
        {currentNavItem.name === 'Contact' &&
          <>
          <div>
            <Contact></Contact>
          </div>
          </>
        }
        {currentNavItem.name === 'Resume' &&
          <>
          <div>
            <p>Resume</p>
          </div>
          </>
        }
      </main>

      <Footer
      ></Footer>
      
    </div>
  );
}

export default App;
