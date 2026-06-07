import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
import RegistrationPortal from './pages/RegistrationPortal';
import RegistrationMyInfo from './pages/RegistrationMyInfo';
import RegistrationPayment from './pages/RegistrationPayment';
import RegistrationInvitation from './pages/RegistrationInvitation';
import RegistrationCertificate from './pages/RegistrationCertificate';
import CybSecAfrica from './pages/CybSecAfrica';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Program from './pages/Program';
import InternationalCooperation from './pages/InternationalCooperation';

const Layout = () => (
  <>
    <Outlet />
  </>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
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
            <Route path="/program" element={<Program />} />
            <Route path="/program/main-conference" element={<Program />} />
            <Route path="/program/data-science-ai-agriculture" element={<UnderConstruction />} />
            <Route path="/program/nlp-african-languages" element={<UnderConstruction />} />
            <Route path="/program/cybersecurity-africa" element={<UnderConstruction />} />
            <Route path="/program/international-cooperation" element={<InternationalCooperation />} />
            <Route path="/program/satellite-events" element={<UnderConstruction />} />

            {/* Autres pages publiques */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/proceedings" element={<Proceedings />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />

            {/* Routes protégées — portail participant */}
            <Route
              path="/registration/portal"
              element={<ProtectedRoute><RegistrationPortal /></ProtectedRoute>}
            />
            <Route
              path="/registration/portal/myinfo"
              element={<ProtectedRoute><RegistrationMyInfo /></ProtectedRoute>}
            />
            <Route
              path="/registration/portal/payment"
              element={<ProtectedRoute><RegistrationPayment /></ProtectedRoute>}
            />
            <Route
              path="/registration/portal/invitation"
              element={<ProtectedRoute><RegistrationInvitation /></ProtectedRoute>}
            />
            <Route
              path="/registration/portal/certificate"
              element={<ProtectedRoute><RegistrationCertificate /></ProtectedRoute>}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
