import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrganizationCommittee from './pages/LocalCommittee';
import TechnicalProgramCommittee from './pages/TechnicalProgramCommittee';
import CallForPapers from './pages/CallForPapers';
import UnderConstruction from './pages/UnderConstruction';
import Proceedings from './pages/Proceedings';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Sponsors from './pages/Sponsors';
import Venue from './pages/Venue';
import PhotoGallery from './pages/PhotoGallery';


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
          <Route path="/calls/cari-workshops" element={<UnderConstruction />} />
          <Route path="/calls/satellite-events" element={<UnderConstruction />} />

          {/* Routes pour ORGANIZATION (mis à jour) */}
          
          <Route path="/organization/local-committee" element={<><OrganizationCommittee /></>} />
          <Route path="/organization/tpc" element={<><TechnicalProgramCommittee /></>} />
          <Route path="/organization/cari-steering" element={<UnderConstruction />} />

          {/* Routes pour PROGRAM (mis à jour) */}
          <Route path="/program" element={<UnderConstruction />} />
          <Route path="/program/main-conference" element={<UnderConstruction />} />
          <Route path="/program/data-science-ai-agriculture" element={<UnderConstruction />}/>
          <Route path="/program/nlp-african-languages" element={<UnderConstruction />} />
          <Route path="/program/cybersecurity-africa" element={<UnderConstruction />} />
          <Route path="/program/international-cooperation" element={<UnderConstruction />} />
          <Route path="/program/satellite-events" element={<UnderConstruction />} />

          {/* Autres pages sans sous-menus */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proceedings" element={<Proceedings/>} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;