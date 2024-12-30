import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';

const App = () => {
  return (
    <div className="App" data-testid="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
