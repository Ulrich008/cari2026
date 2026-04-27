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
import Workshops from './pages/Workshops';
import DAAfricaReadMore from './pages/DAAfricaReadMore';
import InterCoopReadMore from './pages/InterCoopReadMore';
import NLPARLReadMore from './pages/NLPARLReadMore';
import CybSecAfrica from './pages/CybSecAfrica';

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

          {/* Routes pour CALLS */}
          <Route path="/calls" element={<div>Calls Page</div>} />
          <Route path="/calls/papers" element={<CallForPapers />} />
          <Route path="/calls/cari-workshops" element={<Workshops />} />
          <Route path="/calls/satellite-events" element={<UnderConstruction />} />

          {/* Routes pour les pages READ MORE des workshops */}
          <Route path="/calls/cari-workshops/daafrica-read-more" element={<DAAfricaReadMore />} />
          <Route path="/calls/cari-workshops/nlparl-read-more" element={<NLPARLReadMore />} />
          <Route path="/calls/cari-workshops/cybsec-read-more" element={<CybSecAfrica/>} />
          <Route path="/calls/cari-workshops/intercoop-read-more" element={<InterCoopReadMore />} />

          {/* Routes pour ORGANIZATION */}
          <Route path="/organization/local-committee" element={<OrganizationCommittee />} />
          <Route path="/organization/tpc" element={<TechnicalProgramCommittee />} />
          <Route path="/organization/cari-steering" element={<UnderConstruction />} />

          {/* Routes pour PROGRAM */}
          <Route path="/program" element={<UnderConstruction />} />
          <Route path="/program/main-conference" element={<UnderConstruction />} />
          <Route path="/program/data-science-ai-agriculture" element={<UnderConstruction />} />
          <Route path="/program/nlp-african-languages" element={<UnderConstruction />} />
          <Route path="/program/cybersecurity-africa" element={<UnderConstruction />} />
          <Route path="/program/international-cooperation" element={<UnderConstruction />} />
          <Route path="/program/satellite-events" element={<UnderConstruction />} />

          {/* Autres pages */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proceedings" element={<Proceedings />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;