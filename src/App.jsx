import React from 'react';
import './App.css';
import './components/Navigation/Navigation.css';
import HeaderFile from './components/Header/Header';
import ArcticleFile from './components/Article/Article';
import WelcomeFile from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <HeaderFile />
      <WelcomeFile />
      <ArcticleFile />
    </main>
  );
}

export default App;
