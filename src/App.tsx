import React from 'react';
import ThemeToggler from './components/ThemeToggler';

import Demo from './components/Demo';
import Navbar from './components/NavBar';


const App: React.FC = () => {
  return (
    <div className="min-h-screen  bg-light-background dark:bg-dark-background transition-colors ">
      <Navbar />
      <h1 className="text-3xl font-bold">Dynamic Theme Toggle</h1>

      <ThemeToggler />


     <Demo />
    </div>
  );
};

export default App;
