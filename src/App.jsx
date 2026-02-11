import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
        <Route path="/calls" element={<div>Calls Page</div>} />
        <Route path="/organization" element={<div>Organization Page</div>} />
        <Route path="/program" element={<div>Program Page</div>} />
        <Route path="/registration" element={<div>Registration Page</div>} />
        <Route path="/venue" element={<div>Venue Page</div>} />
        <Route path="/sponsors" element={<div>Sponsors Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;