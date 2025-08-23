import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">ConsultPro</span>
            </div>
            <p className="text-sm">
              Professional IT and visa consulting services helping businesses and individuals achieve their goals with expert guidance and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/it-consulting" className="hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/services/software-development" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/data-analytics" className="hover:text-white transition-colors">Data & Analytics</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Visa Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/study-abroad" className="hover:text-white transition-colors">Study Abroad</Link></li>
              <li><Link to="/services/work-business-visa" className="hover:text-white transition-colors">Work & Business</Link></li>
              <li><Link to="/services/travel-tourism" className="hover:text-white transition-colors">Travel & Tourism</Link></li>
              <li><Link to="/services/extension-renewal" className="hover:text-white transition-colors">Extension & Renewal</Link></li>
              <li><Link to="/services/immigration-consultation" className="hover:text-white transition-colors">Immigration Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@consultpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 ConsultPro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}