import React from 'react';
import Header from './components/Header';
import Tenor from './components/Tenor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Browse Gifs"/>
      <Tenor />
    </div>
  );
}

export default App;
