import React from 'react';
import { Navigation } from './components';
import Routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes />
      <Navigation />
    </div>
  );
}

export default App;
