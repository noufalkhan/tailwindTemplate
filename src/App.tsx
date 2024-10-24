import React from 'react';

import Demo from './components/Demo';
import Navbar from './components/NavBar';



const App: React.FC = () => {
  return (
    <div className="transition-colors ">
      <Navbar />
    
     <Demo />
    </div>
  );
};

export default App;
