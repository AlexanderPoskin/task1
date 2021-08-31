import React from 'react';
import { Header } from './components';
import Routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
