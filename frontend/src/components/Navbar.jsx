import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpenCheck,
  Info,
  Phone,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ onLogout, isLoggedIn }) {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="bg-white shadow-md z-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-xl md:text-2xl  text-blue-900">
              Hopn University
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {[
              { to: "/", label: "Home", icon: <Home />, key: "home" },
              { to: "/programs", label: "Programs Overview", icon: <BookOpenCheck />, key: "programs" },
              { to: "/about", label: "About Us", icon: <Info />, key: "about" },
              { to: "/contact", label: "Contact", icon: <Phone />, key: "contact" },
            ].map(({ to, label, icon, key }) => (
              <Link
                key={key}
                to={to}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-[15px] font-medium transition-all duration-150 ${
                  activeTab === key
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                {React.cloneElement(icon, { className: "h-5 w-5" })}
                <span>{label}</span>
              </Link>
            ))}

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-4 py-2 bg-blue-900bg-blue-900 text-white rounded-md hover:bg-blue-950 hover:text-white transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-950 hover:text-white transition-all duration-200"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-blue-900" />
              ) : (
                <Menu className="h-6 w-6 text-blue-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md space-y-1 py-2">
          {[
            { to: "/", label: "Home", icon: <Home />, key: "home" },
            { to: "/myrecipes", label: "Programs Overview", icon: <BookOpenCheck />, key: "programs" },
            { to: "/about", label: "About Us", icon: <Info />, key: "about" },
            { to: "/contact", label: "Contact", icon: <Phone />, key: "contact" },
          ].map(({ to, label, icon, key }) => (
            <Link
              key={key}
              to={to}
              onClick={() => {
                setActiveTab(key);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-base text-blue-900 hover:bg-blue-50 transition-colors"
            >
              {React.cloneElement(icon, { className: "h-5 w-5" })}
              {label}
            </Link>
          ))}

          {/* Login/Logout for mobile */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-white bg-blue-900 hover:bg-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-900 hover:bg-orange-600 transition-colors"
            >
              <LogIn className="h-5 w-5" />
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
