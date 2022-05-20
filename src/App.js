import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {

  const [projectType] = useState([
    { name: 'Coding', description: 'Coding Experience' },
    { name: 'PM Experience', description: 'Project Management Experience' },
    { name : 'IP', desription: 'Intellectual Property developed'}
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
