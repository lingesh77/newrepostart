import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure this import is correct
import ComponentName from './demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentName />} />
      </Routes>
    </Router>
  );
}

export default App;
