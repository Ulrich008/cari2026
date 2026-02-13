import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrganizationCommittee from './pages/LocalCommittee';
import TechnicalProgramCommittee from './pages/TechnicalProgramCommittee';
import CallForPapers from './pages/CallForPapers';

// Composant de mise en page global incluant la navigation
const Layout = () => (
  <>
   
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Page d'accueil */}
          <Route path="/" element={<HomePage />} />

          {/* Routes pour CALLS (mis à jour) */}
          <Route path="/calls" element={<div>Calls Page</div>} />
          <Route path="/calls/papers" element={<CallForPapers />} />
          <Route path="/calls/cari-workshops" element={<div>Call for Papers for CARI Workshops</div>} />
          <Route path="/calls/satellite-events" element={<div>Call for Papers for Satellite Events</div>} />

          {/* Routes pour ORGANIZATION (mis à jour) */}
          
          <Route path="/organization/local-committee" element={<><OrganizationCommittee /></>} />
          <Route path="/organization/tpc" element={<><TechnicalProgramCommittee /></>} />
          <Route path="/organization/cari-steering" element={<div>CARI Steering Committee</div>} />

          {/* Routes pour PROGRAM (mis à jour) */}
          <Route path="/program" element={<div>Program Page</div>} />
          <Route path="/program/main-conference" element={<div>Main Conference</div>} />
          <Route path="/program/data-science-ai-agriculture" element={<div>Workshop: Data Science and AI for Agriculture in Africa</div>} />
          <Route path="/program/nlp-african-languages" element={<div>Workshop: NLP for African and Low-Resource Languages</div>} />
          <Route path="/program/cybersecurity-africa" element={<div>Workshop: Cybersecurity in Africa</div>} />
          <Route path="/program/international-cooperation" element={<div>International Cooperation Session</div>} />
          <Route path="/program/satellite-events" element={<div>Satellite Events (CIMPA School and Summer School)</div>} />

          {/* Autres pages sans sous-menus */}
          <Route path="/registration" element={<div>Registration Page</div>} />
          <Route path="/venue" element={<div>Venue Page</div>} />
          <Route path="/sponsors" element={<div>Sponsors Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;