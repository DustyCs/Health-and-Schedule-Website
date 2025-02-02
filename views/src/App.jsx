import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div>
        <div className="Container bg-red-500">
          <h1>Supposed Nav</h1>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>  
      </Router>
    </>
  );
}

export default App;
