import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Plane, Building, User, LogOut, LayoutDashboard, Plug } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itServices = [
    { name: 'IT Consulting & Strategy', href: '/services/it-consulting' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity Services', href: '/services/cybersecurity' },
  ];

  const visaServices = [
    { name: 'Study Abroad Visas', href: '/services/study-abroad' },
    { name: 'Work & Business Visas', href: '/services/work-business-visa' },
    { name: 'Travel & Tourism', href: '/services/travel-tourism' },
    { name: 'Extension & Renewal', href: '/services/extension-renewal' },
    { name: 'Document Verification', href: '/services/document-verification' },
    { name: 'Immigration Consultation', href: '/services/immigration-consultation' },
  ];

  const DropdownMenu = ({ title, items, icon: Icon }: { title: string, items: any[], icon: any }) => (
    <div 
      className="relative"
      onMouseEnter={() => setActiveDropdown(title)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <AnimatePresence>
        {activeDropdown === title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-50"
          >
            {items.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav className={clsx(
      'fixed w-full top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">ConsultPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={clsx(
                'px-3 py-2 transition-colors',
                location.pathname === '/' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              Home
            </Link>
            
            <DropdownMenu title="IT Services" items={itServices} icon={Code} />
            <DropdownMenu title="Visa Services" items={visaServices} icon={Plane} />
            
            <Link
              to="/about"
              className={clsx(
                'px-3 py-2 transition-colors',
                location.pathname === '/about' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              About
            </Link>
            
            <Link
              to="/career"
              className={clsx(
                'px-3 py-2 transition-colors',
                location.pathname === '/career' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              Career
            </Link>
            
            <Link
              to="/blog"
              className={clsx(
                'px-3 py-2 transition-colors',
                location.pathname === '/blog' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className={clsx(
                'px-3 py-2 transition-colors',
                location.pathname === '/contact' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{user.email?.split('@')[0]}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50"
                    >
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        to="/integrations"
                        className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Plug className="w-4 h-4" />
                        <span>Integrations</span>
                      </Link>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          handleSignOut();
                        }}
                        className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 w-full text-left rounded-b-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
            <Link
              to="/book-appointment"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                <Link to="/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
                
                <div className="px-4 py-2">
                  <p className="font-medium text-gray-900 mb-2">IT Services</p>
                  {itServices.map(item => (
                    <Link key={item.href} to={item.href} className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="px-4 py-2">
                  <p className="font-medium text-gray-900 mb-2">Visa Services</p>
                  {visaServices.map(item => (
                    <Link key={item.href} to={item.href} className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <Link to="/about" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</Link>
                <Link to="/career" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Career</Link>
                <Link to="/blog" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Blog</Link>
                <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</Link>
                
                <div className="px-4 py-4 border-t border-gray-100 space-y-3">
                  {user ? (
                    <>
                      <Link to="/dashboard" className="block text-center py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                      <Link to="/integrations" className="block text-center py-2 text-gray-700 hover:text-blue-600">Integrations</Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-center py-2 text-red-600 hover:text-red-700"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="block text-center py-2 text-gray-700 hover:text-blue-600">Login</Link>
                  )}
                  <Link to="/book-appointment" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}