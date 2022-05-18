import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import './App.css';

function App() {

  const [projectType] = useState([
    { name: 'Coding', description: 'pure js projects' },
    { name: 'Project Controls', description: 'NoSQL projects' },
    {name : 'IPs', desription: 'construction earned value management'}
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
          <div>
            <About></About>
          </div>
          <div>
            <Project></Project>
          </div>
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
