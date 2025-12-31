import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CareerPage } from './pages/CareerPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ITConsultingPage } from './pages/services/ITConsultingPage';
import { SoftwareDevelopmentPage } from './pages/services/SoftwareDevelopmentPage';
import { UIUXDesignPage } from './pages/services/UIUXDesignPage';
import { DataAnalyticsPage } from './pages/services/DataAnalyticsPage';
import { CybersecurityPage } from './pages/services/CybersecurityPage';
import { StudyAbroadPage } from './pages/services/StudyAbroadPage';
import { WorkBusinessVisaPage } from './pages/services/WorkBusinessVisaPage';
import { TravelTourismPage } from './pages/services/TravelTourismPage';
import { ExtensionRenewalPage } from './pages/services/ExtensionRenewalPage';
import { DocumentVerificationPage } from './pages/services/DocumentVerificationPage';
import { ImmigrationConsultationPage } from './pages/services/ImmigrationConsultationPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { BuilderPage } from './pages/dashboard/BuilderPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <DashboardPage />
              </motion.div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/builder/:projectId?"
          element={
            <ProtectedRoute>
              <BuilderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/integrations"
          element={
            <ProtectedRoute>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <IntegrationsPage />
              </motion.div>
            </ProtectedRoute>
          }
        />

        {/* Public Routes with Navigation */}
        <Route
          path="/*"
          element={
            <>
              <Navigation />
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <HomePage />
                    </motion.div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <AboutPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/career"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <CareerPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <BlogPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ContactPage />
                    </motion.div>
                  }
                />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />

                {/* IT Services */}
                <Route path="/services/it-consulting" element={<ITConsultingPage />} />
                <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
                <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
                <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/services/cybersecurity" element={<CybersecurityPage />} />

                {/* Visa Services */}
                <Route path="/services/study-abroad" element={<StudyAbroadPage />} />
                <Route path="/services/work-business-visa" element={<WorkBusinessVisaPage />} />
                <Route path="/services/travel-tourism" element={<TravelTourismPage />} />
                <Route path="/services/extension-renewal" element={<ExtensionRenewalPage />} />
                <Route path="/services/document-verification" element={<DocumentVerificationPage />} />
                <Route path="/services/immigration-consultation" element={<ImmigrationConsultationPage />} />

                <Route path="/book-appointment" element={<BookAppointmentPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-white">
          <AnimatedRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;