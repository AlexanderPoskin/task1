import React from 'react';
import { Navigation, UserSearch } from './components';
import Routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
