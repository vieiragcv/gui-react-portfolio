import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {

  const [projectType] = useState([
    { name: 'JavaScript', description: 'pure js projects' },
    { name: 'NoSQL', description: 'NoSQL projects' },
    { name: 'Node/js', description: 'node/js focused' },
    { name: 'mySQL', description: 'mySQL focused' },
  ]);

  const [currentProjectType, setCurrentProjectType] = useState(projectType[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>

      <Header
        projectType={projectType}
        setCurrentProjectType={setCurrentProjectType}
        currentProjectType={currentProjectType}   
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}    
      ></Header>

      <main>
        
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ):(
            <Contact></Contact>
          )
        }

      </main>

      <Footer>

      </Footer>

    </div>
  );
}

export default App;
