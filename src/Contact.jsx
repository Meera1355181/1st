import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// --- Contact Form Component ---
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // NOTE: In a real application, you would send this data to a backend endpoint here.
    // For this example, we'll simulate a successful submission.
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
            placeholder="Enter Name"
          />
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
            placeholder="mail@example.com"
          />
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
};

// --- Contact Info Item Component ---
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


// --- Main Contact Page Component ---
const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 font-sans text-white min-h-screen">

      {/* 1. Header and Subtitle */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight">
          Get In <span className="text-sky-400">Touch</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
          We're ready to discuss your project, answer questions, or just talk about crazy ideas.
        </p>
      </section>

      {/* 2. Contact Grid: Form and Info */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Form (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Details (1/3 width on large screens) */}
          <div className="space-y-6">
            <ContactInfoItem
              icon={Phone}
              title="Give Us a Call"
              value="+91 88724-88038"
            />
            <ContactInfoItem
              icon={Mail}
              title="Email Us Directly"
              value="meerasroya11117575@gmail.com"
            />
            <ContactInfoItem
              icon={MapPin}
              title="Our Location"
              value="Digital Nomad Space, Earth"
            />
          </div>
        </div>
      </section>

      {/* 3. Map Placeholder */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-slate-100 mb-6 border-t border-sky-400/20 pt-10">Find Us</h2>
        <div className="h-96 w-full bg-neutral-800 rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-xl flex items-center justify-center">
          <p className="text-xl text-slate-500 flex items-center gap-2">
            <MapPin size={24} className="text-sky-400" />
            Map View Placeholder
          </p>
        </div>
      </section>

      {/* 4. Final CTA/Assurance */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="border-t border-sky-400/20 pt-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Let's Build Something Great</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Your vision is just a call or an email away from becoming a reality. Reach out today and let's start planning.
          </p>
          <a
            href="meerasroya11117575@gmail.com"
            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-sky-500/20 transition transform hover:scale-105"
          >
            <Mail size={20} /> Send Email
          </a>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;