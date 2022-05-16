import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';


function App() {

  const [projectType] = useState([
    { name: 'JavaScript', description: 'pure js projects' },
    { name: 'NoSQL', description: 'NoSQL projects' },
    { name: 'Node/js', description: 'node/js focused' },
    { name: 'mySQL', description: 'mySQL focused' },
  ]);

  const [currentProjectType, setCurrentProjectType] = useState(projectType[0]);

  return (
    <div>
      <Header
        projectType={projectType}
        setCurrentProjectType={setCurrentProjectType}
        currentProjectType={currentProjectType}       
      ></Header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
