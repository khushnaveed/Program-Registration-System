import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }
  };

  return (
    <footer className="bg-white border-t border-gray-300 shadow-md mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-blue-900 mb-4">
              Hopn University
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Advancing knowledge, transforming lives. We provide accessible and
              impactful education for a global future.
            </p>
            <div className="flex space-x-4 text-blue-900">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5" size={18} />
                123 University Blvd, Germany
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                +41 61 000 0000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                info@hopnuni.edu
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} />
                Mon - Fri: 9am - 5pm
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-blue-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-blue-900 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for the latest academic news and
              updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-950 text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-blue-800 text-sm">{message}</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-red-500 text-sm">{message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mb-12 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Hopn University. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
}
