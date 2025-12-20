import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, X, Zap, Briefcase, DollarSign, ExternalLink, ArrowRight, Layers, Smartphone, Globe, Layout, HelpCircle } from 'lucide-react';
import PortfolioPage from "./Portfolio";
import ContactPage from "./Contact";
import PricingPage from "./Pricing";
import logo from "../public/LOGO.png"
import ServicesPage from "./Services";

// --- Shared 
// 
// Components for Pages ---

// Contact Page Components
function ContactForm({ setPage }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate API call
    setTimeout(() => {
      setStatus('Message sent successfully! We will be in touch shortly.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-neutral-800/80 rounded-2xl shadow-2xl border border-sky-400/20">
      <h3 className="text-3xl font-bold text-sky-300 mb-6">Send Us a Message</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-sky-500 focus:border-sky-500 transition"
            placeholder="Jane Doe" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-sky-500 focus:border-sky-500 transition"
            placeholder="jane.doe@example.com" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Project Details</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:ring-sky-500 focus:border-sky-500 transition resize-none"
            placeholder="Tell us about your crazy idea and requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'Sending...'}
          className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition transform hover:scale-[1.01] disabled:opacity-50"
        >
          <Send size={20} />
          {status === 'Sending...' ? 'Sending...' : 'Submit Inquiry'}
        </button>

        {status && status !== 'Sending...' && (
          <p className={`mt-4 text-center font-medium ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </div>
    </form>
  );
}

// Contact Info Item Component
const ContactInfoItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-start gap-4 p-6 bg-neutral-800/80 rounded-xl border border-neutral-700">
    <div className="p-3 rounded-full bg-sky-500/20 text-sky-400 flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
      <p className="text-slate-400">{value}</p>
    </div>
  </div>
);


// --- Service Component (Used on Home Page) ---
const Services = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-100">
        Our <span className="text-sky-400">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Service Box 1: Business Websites */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">💼</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">Business Websites</h3>
          <p className="text-gray-300">Professional, high-conversion websites for companies and organizations looking to grow their market presence.</p>
        </div>

        {/* Service Box 2: Portfolio Websites */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">🖼️</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">Portfolio Websites</h3>
          <p className="text-gray-300">Visually stunning and clean modern designs to showcase your creative work or professional achievements effectively.</p>
        </div>

        {/* Service Box 3: E-Commerce Stores */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">🛒</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">E-Commerce Stores</h3>
          <p className="text-gray-300">Robust, fully functional online stores with secure payment integration, ready for massive sales.</p>
        </div>

        {/* Service Box 4: UI/UX Design */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">💡</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">UI/UX Design</h3>
          <p className="text-gray-300">Custom and modern user interface and user experience design for web applications and digital products.</p>
        </div>

        {/* Service Box 5: Website Redesign */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">🔄</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">Website Redesign</h3>
          <p className="text-gray-300">Transform outdated sites into fresh, high-performance, and conversion-focused modern designs.</p>
        </div>

        {/* Service Box 6: Fast Hosting & Deployment */}
        <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:bg-neutral-700 transition duration-300 transform hover:scale-[1.02]">
          <span className="text-4xl block mb-4">🚀</span>
          <h3 className="text-2xl font-semibold mb-3 text-sky-300">Fast Hosting</h3>
          <p className="text-gray-300">Super-speed, reliable hosting and seamless deployment services for guaranteed site speed and uptime.</p>
        </div>

      </div>
    </section>
  );
};


// --- Page Components ---

// 1. Home Page Component (Hero + Value Props + Services)
const HomePage = ({ setPage }) => (
  <main className="pt-32">
    {/* Hero Section */}
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-200 leading-tight">
        Elevate Your Business with a <br />
        <span className="text-6xl md:text-8xl block text-sky-400 mt-4">Powerful Online Presence!</span>
      </h1>
      <p className="mt-8 text-xl text-slate-400 max-w-3xl">
        Crazy Thinker delivers modern design, blazing-fast performance, and fully responsive layouts to transform your brand identity online.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setPage('Contact')}
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-2xl shadow-sky-500/30 transition transform hover:scale-105"
        >
          Get Started Now ➡️
        </button>
        <button
          onClick={() => setPage('Portfolio')}
          className="bg-neutral-700 hover:bg-neutral-600 text-slate-200 px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105"
        >
          View Portfolio
        </button>
      </div>
    </section>

    {/* Value Proposition Section */}
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-neutral-800/60 rounded-xl shadow-lg border border-neutral-700/50 hover:border-sky-400/40 transition duration-300">
          <span className="text-4xl block mb-3">⚡</span>
          <h3 className="text-2xl font-bold text-sky-300 mb-2">Blazing Fast</h3>
          <p className="text-slate-400">Optimized for speed, ensuring your visitors never leave due to slow loading times.</p>
        </div>
        <div className="p-6 bg-neutral-800/60 rounded-xl shadow-lg border border-neutral-700/50 hover:border-sky-400/40 transition duration-300">
          <span className="text-4xl block mb-3">📱</span>
          <h3 className="text-2xl font-bold text-sky-300 mb-2">Fully Responsive</h3>
          <p className="text-slate-400">Perfect display across all devices, from desktop monitors to small mobile phones.</p>
        </div>
        <div className="p-6 bg-neutral-800/60 rounded-xl shadow-lg border border-neutral-700/50 hover:border-sky-400/40 transition duration-300">
          <span className="text-4xl block mb-3">🎨</span>
          <h3 className="text-2xl font-bold text-sky-300 mb-2">Modern Design</h3>
          <p className="text-slate-400">Cutting-edge design trends that captivate your audience and build trust.</p>
        </div>
      </div>
    </section>

    {/* Render the Services component */}
    <Services />

    {/* Call to Action Section */}
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-sky-500/10 border-2 border-sky-400/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-200 mb-4">Ready to Launch Your Dream Website?</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Don't let your competition get ahead. Contact us today for a free consultation and personalized quote.
        </p>
        <button
          onClick={() => setPage('Contact')}
          className="inline-block bg-sky-500 hover:bg-sky-600 px-10 py-4 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-105"
        >
          Start Your Project Now!
        </button>
      </div>
    </section>
  </main>
);


// --- Footer Component ---
const Footer = ({ setPage }) => {
  return (
    <footer className="mt-20 bg-black/50 backdrop-blur-md text-white py-12 border-t border-sky-400/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-slate-300">CRAZY</span>
            <span className="ml-2 px-2 py-1 bg-sky-200/50 text-indigo-900 rounded-lg shadow-md">
              THINKER
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm max-w-xs">
            The architect of your online success. Modern, fast, and responsive digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-300">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map(link => (
              <li
                key={link}
                className="hover:text-sky-400 cursor-pointer transition"
                onClick={() => setPage(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-300">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-sky-400 cursor-pointer transition">About Us</li>
            <li className="hover:text-sky-400 cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-sky-400 cursor-pointer transition">Terms of Service</li>
            <li className="hover:text-sky-400 cursor-pointer transition">Careers</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-sky-300">Get In Touch</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">📞 <a href="tel:+91 8872488038" className="hover:text-sky-400 transition">8872488038</a></li>
            <li className="flex items-center gap-2">📧 <a href="meeerasroya11117575@gmail.com" className="hover:text-sky-400 transition">meeerasroya11117575@gmail.com</a></li>
            <li className="flex items-center gap-2">📍 Mukerian, Punjab, IN</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/5 pt-6">
        © {new Date().getFullYear()} Crazy Thinker. All Rights Reserved.
      </div>
    </footer>
  );
};


// --- Main App Component ---
export default function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('Home'); // State for internal routing

  // Function to render the current page component
  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage />
      case 'Services': // Services content is part of the Home view
        return <ServicesPage />;
      case 'Portfolio':
        return <PortfolioPage />;
      case 'Pricing':
        return <PricingPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  const navLinks = ['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-950 font-sans text-white">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-neutral-900/70 border-b border-sky-400/20 rounded-b-xl shadow-lg">

          {/* Logo + Brand */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPage('Home')}>
            {/* Using the uploaded logo image */}
            <img
              src={logo}
              alt="Crazy Thinker Logo - Rat Mascot"
              className="w-12 h-12 object-cover rounded-xl border-2 border-sky-400 p-0.5 shadow-lg"
              // Fallback placeholder in case the image cannot be loaded
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/48x48/6b21a8/ffffff?text=CT";
              }}
            />

            <div className="leading-tight">
              <div className="text-2xl font-extrabold tracking-tight" style={{ letterSpacing: '-1px' }}>
                <span className="text-slate-300">CRAZY</span>
                <span className="ml-2 px-3 py-1 bg-sky-400/30 text-sky-100 rounded-lg">THINKER</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">Build Your Online Presence</div>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-base font-medium">
            {navLinks.map(link => (
              <li
                key={link}
                className={`transition-colors cursor-pointer ${page === link ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-sky-400'}`}
                onClick={() => setPage(link)}
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact button + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('Contact')}
              className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transition transform hover:scale-[1.05]"
            >
              📞 Talk to an Expert
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-md px-6 py-4 border-b border-sky-400/20">
            <ul className="flex flex-col gap-3 text-lg font-medium text-slate-200">
              {navLinks.map(link => (
                <li
                  key={link}
                  className="py-2 border-b border-white/5 hover:text-sky-400 cursor-pointer transition"
                  onClick={() => { setPage(link); setOpen(false); }}
                >
                  {link}
                </li>
              ))}
              <li className="py-2 hover:text-sky-400 cursor-pointer transition">
                Contact — 📞 8872488038
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* RENDER THE CURRENT PAGE */}
      {renderPage()}

      {/* Render the Footer component */}
      <Footer setPage={setPage} />
    </div>
  );
}