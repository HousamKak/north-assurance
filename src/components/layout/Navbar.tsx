import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/common/Button';
import { ROUTES, COMPANY_INFO } from '@/utils/constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
      isActive
        ? 'text-primary dark:text-primary-light font-semibold'
        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-lg shadow-lg'
          : 'bg-white dark:bg-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-shadow">
              <span className="text-white font-bold text-xl">NA</span>
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-gray-900 dark:text-white block leading-tight">
                North Assurance
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Since {COMPANY_INFO.established}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to={ROUTES.HOME} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to={ROUTES.ABOUT} className={navLinkClass}>
              About Us
            </NavLink>

            {/* Products Dropdown — supports hover AND click/keyboard */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setProductsDropdownOpen(!productsDropdownOpen);
                  }
                }}
                className="px-4 py-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={productsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-dark-light rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                    role="menu"
                  >
                    <Link
                      to={ROUTES.INDIVIDUAL_PRODUCTS}
                      className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-gray-700 dark:text-gray-300 text-sm focus-visible:outline-none focus-visible:bg-primary/5"
                      role="menuitem"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      Individual Products
                    </Link>
                    <Link
                      to={ROUTES.CORPORATE_PRODUCTS}
                      className="block px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-gray-700 dark:text-gray-300 text-sm focus-visible:outline-none focus-visible:bg-primary/5"
                      role="menuitem"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      Corporate Products
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to={ROUTES.MOTOR_REPAIR} className={navLinkClass}>
              Motor Repair
            </NavLink>
            <NavLink to={ROUTES.CONTACT} className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to={ROUTES.CAREERS} className={navLinkClass}>
              Careers
            </NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <div className="hidden lg:block">
              <Button
                size="sm"
                variant="primary"
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Get A Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-gray-100 dark:border-gray-800">
                {[
                  { to: ROUTES.HOME, label: 'Home' },
                  { to: ROUTES.ABOUT, label: 'About Us' },
                ].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium ${
                        isActive
                          ? 'bg-primary/10 text-primary dark:text-primary-light'
                          : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Products
                  </p>
                  <div className="pl-3 space-y-1 border-l-2 border-primary/20">
                    <NavLink
                      to={ROUTES.INDIVIDUAL_PRODUCTS}
                      className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Individual Products
                    </NavLink>
                    <NavLink
                      to={ROUTES.CORPORATE_PRODUCTS}
                      className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Corporate Products
                    </NavLink>
                  </div>
                </div>

                {[
                  { to: ROUTES.MOTOR_REPAIR, label: 'Motor Repair' },
                  { to: ROUTES.CONTACT, label: 'Contact' },
                  { to: ROUTES.CAREERS, label: 'Careers' },
                ].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium ${
                        isActive
                          ? 'bg-primary/10 text-primary dark:text-primary-light'
                          : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="px-4 pt-4">
                  <Button
                    className="w-full"
                    size="md"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(ROUTES.CONTACT);
                    }}
                  >
                    Get A Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
