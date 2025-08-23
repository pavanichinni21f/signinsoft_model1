import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/builder/:projectId?" element={<BuilderPage />} />
          
          {/* Public Routes with Navigation */}
          <Route path="/*" element={
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
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
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;