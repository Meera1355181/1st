import React from 'react';
import { Check, Code, ShoppingCart, PenTool, TrendingUp, Clock, Target, Rocket } from 'lucide-react';

// --- Reusable Service Card Component ---
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-sky-400/20 hover:border-sky-300 transition duration-300 transform hover:scale-[1.02]">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-500/20 text-sky-400 mb-4">
      <Icon size={30} />
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-sky-300">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// --- Process Step Component ---
const ProcessStep = ({ number, title, description, isLast }) => (
  <div className={`relative flex flex-col items-center w-full ${isLast ? '' : 'md:pb-16'}`}>
    {/* Dot */}
    <div className="z-10 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900 border-4 border-sky-400 text-xl font-bold text-sky-400 shadow-lg">
      {number}
    </div>

    {/* Line (Visible on larger screens) */}
    {!isLast && (
      <div className="hidden md:block absolute top-6 right-0 w-1/2 h-1 bg-neutral-700 -translate-x-full"></div>
    )}

    <h3 className="text-xl font-bold text-slate-100 mt-6 mb-2 text-center">{title}</h3>
    <p className="text-center text-sm text-slate-400 max-w-xs">{description}</p>
  </div>
);


// --- Main Services Page Component ---
const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 font-sans text-white min-h-screen">

      {/* 1. Header and Subtitle */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight">
          Comprehensive <span className="text-sky-400">Digital Solutions</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-4xl mx-auto">
          From high-speed portfolio sites to robust e-commerce platforms, Crazy Thinker provides end-to-end services built for modern performance and scale.
        </p>
      </section>

      {/* 2. Core Services (Tiled Icons - from Slide 3) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-100">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="High-performance business sites and stunning portfolios built with modern frameworks."
          />
          <ServiceCard
            icon={ShoppingCart}
            title="E-Commerce Stores"
            description="Robust online stores with secure payment integration designed to maximize conversion and sales."
          />
          <ServiceCard
            icon={PenTool}
            title="UI/UX Design"
            description="User-centric design that creates intuitive interfaces and communicates your brand identity effectively."
          />
        </div>
      </section>

      {/* 3. Deep Dive: Web Development (from Slide 4) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <h2 className="text-4xl font-extrabold text-sky-400 mb-12">Business & Portfolio Websites</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-100 mb-6">Custom Crafted for Success</h3>
            <p className="text-slate-300 mb-8">
              We focus on building digital experiences that don't just look great, but perform flawlessly. Every site is unique, responsive, and ready for growth.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                <div><strong className='text-sky-300'>Blazing Fast Speed:</strong> Optimized code for load times under 1 second.</div>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                <div><strong className='text-sky-300'>SEO Ready Structure:</strong> Foundations built for high search engine rankings.</div>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                <div><strong className='text-sky-300'>Fully Responsive:</strong> Perfect display across all mobile and desktop devices.</div>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                <div><strong className='text-sky-300'>Modern Tech Stack:</strong> Leveraging React, Tailwind, and scalable cloud solutions.</div>
              </li>
            </ul>
          </div>
          <div className="w-full h-80 bg-neutral-800 rounded-xl overflow-hidden shadow-2xl border border-sky-400/30">
            {/* Placeholder image for Web Dev */}
            <img
              src="https://placehold.co/800x600/1e293b/ffffff?text=Modern+Web+Interface"
              alt="Modern web development interface preview"
              className='w-full h-full object-cover opacity-80'
            />
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: E-Commerce (from Slide 5) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <div className="bg-sky-500/5 p-8 rounded-2xl shadow-inner border border-sky-400/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-sky-300 mb-6">Launch Your Store with Confidence</h3>
              <p className="text-slate-300 mb-8">
                We provide end-to-end e-commerce development, covering everything from secure payment integration to advanced inventory management and user flows.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200"><Check className="text-sky-400" size={20} /> Secure Payment Gateways</li>
                <li className="flex items-center gap-3 text-slate-200"><Check className="text-sky-400" size={20} /> Integrated Admin Dashboard</li>
                <li className="flex items-center gap-3 text-slate-200"><Check className="text-sky-400" size={20} /> Advanced Sales Analytics</li>
                <li className="flex items-center gap-3 text-slate-200"><Check className="text-sky-400" size={20} /> Scalable Architecture for Growth</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 w-full h-80 bg-neutral-800 rounded-xl overflow-hidden shadow-2xl border border-sky-400/30">
              {/* Placeholder image for E-Commerce */}
              <img
                src="https://placehold.co/800x600/0f172a/ffffff?text=E-Commerce+Dashboard"
                alt="E-Commerce dashboard preview"
                className='w-full h-full object-cover opacity-80'
              />
            </div>
          </div>
        </div>
      </section>


      {/* 5. Our Process (Timeline - from Slide 7) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-100">The Crazy Thinker <span className='text-sky-400'>Process</span></h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-stretch">

          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-neutral-700"></div>

          <ProcessStep
            number={1}
            title="Discovery"
            description="Detailed analysis of your market, audience, and technical requirements."
          />
          <div className="hidden md:block w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-t-transparent border-l-neutral-700 border-r-transparent absolute top-6 left-[25%] transform -translate-x-1/2"></div>


          <ProcessStep
            number={2}
            title="Design"
            description="Wireframing, prototyping, and high-fidelity mockups for UI/UX approval."
          />
          <div className="hidden md:block w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-t-transparent border-l-neutral-700 border-r-transparent absolute top-6 left-[50%] transform -translate-x-1/2"></div>

          <ProcessStep
            number={3}
            title="Develop"
            description="Clean, modular, and scalable code development across all specified platforms."
          />
          <div className="hidden md:block w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-t-transparent border-l-neutral-700 border-r-transparent absolute top-6 left-[75%] transform -translate-x-1/2"></div>

          <ProcessStep
            number={4}
            title="Launch"
            description="Testing, deployment, hosting setup, and final handover with documentation."
            isLast={true}
          />
        </div>
      </section>

      {/* 6. Pricing Packages (Table - from Slide 8) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-100">Flexible <span className='text-sky-400'>Pricing</span></h2>

        <div className="overflow-x-auto bg-neutral-800/80 rounded-xl shadow-2xl border border-neutral-700">
          <table className="min-w-full divide-y divide-neutral-700">
            <thead>
              <tr className="bg-neutral-700/50">
                <th scope="col" className="px-6 py-4 text-left text-xl font-bold text-sky-300 uppercase tracking-wider">Features</th>
                <th scope="col" className="px-6 py-4 text-center text-xl font-bold text-slate-100 uppercase tracking-wider">Startup</th>
                <th scope="col" className="px-6 py-4 text-center text-xl font-bold text-slate-100 uppercase tracking-wider">Business</th>
                <th scope="col" className="px-6 py-4 text-center text-xl font-bold text-slate-100 uppercase tracking-wider">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              <tr className="hover:bg-neutral-800">
                <td className="px-6 py-4 whitespace-nowrap text-slate-300 font-medium">Pages Included</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">Up to 5</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">Up to 15</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">Unlimited</td>
              </tr>
              <tr className="hover:bg-neutral-800">
                <td className="px-6 py-4 whitespace-nowrap text-slate-300 font-medium">Fully Responsive Design</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
              </tr>
              <tr className="hover:bg-neutral-800">
                <td className="px-6 py-4 whitespace-nowrap text-slate-300 font-medium">Basic SEO Implementation</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-green-400"><Check /></td>
              </tr>
              <tr className="hover:bg-neutral-800">
                <td className="px-6 py-4 whitespace-nowrap text-slate-300 font-medium">Ongoing Support</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">Email Only</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">Priority Email</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sky-200">24/7 Phone</td>
              </tr>
              <tr className="hover:bg-neutral-800 border-t-2 border-sky-400/50">
                <td className="px-6 py-4 whitespace-nowrap text-xl font-extrabold text-sky-400">Total Price (One-Time)</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-2xl font-extrabold text-sky-400">3000-5000</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-2xl font-extrabold text-sky-400">10,000-15,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-2xl font-extrabold text-sky-400">Custom Quote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Why Choose Us (Stats - from Slide 9) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-100">The <span className='text-sky-400'>Crazy Thinker</span> Difference</h2>

        <div className="flex flex-col md:flex-row justify-around gap-10">
          <div className="flex-1 text-center p-8 bg-sky-500/10 rounded-xl border border-sky-400/30">
            <p className="text-7xl md:text-8xl font-black text-sky-400 mb-2">100%</p>
            <p className="text-xl font-semibold text-slate-100">Responsive Guarantee</p>
          </div>
          <div className="flex-1 text-center p-8 bg-sky-500/10 rounded-xl border border-sky-400/30">
            <p className="text-7xl md:text-8xl font-black text-sky-400 mb-2">&lt;1s</p>
            <p className="text-xl font-semibold text-slate-100">Optimized Load Time</p>
          </div>
          <div className="flex-1 text-center p-8 bg-sky-500/10 rounded-xl border border-sky-400/30">
            <p className="text-7xl md:text-8xl font-black text-sky-400 mb-2">24/7</p>
            <p className="text-xl font-semibold text-slate-100">Expert Technical Support</p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA (from Slide 10) */}
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <div className="bg-sky-600/20 border-2 border-sky-400/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sky-100 mb-4">Ready for Your Next Project?</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation. We turn crazy ideas into reliable digital realities.
          </p>
          <a
            href="tel:8872488038"
            className="inline-block bg-sky-500 hover:bg-sky-700 px-10 py-4 rounded-full text-xl font-bold text-white shadow-lg transition transform hover:scale-105"
          >
            📞 Call Now: 8872488038
          </a>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;