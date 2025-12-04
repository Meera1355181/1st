import React from 'react';
import { Check, X, Zap, Briefcase, DollarSign, HelpCircle, Phone, Code } from 'lucide-react';

// --- Price Tier Data ---
const tiers = [
  {
    name: "Startup",
    price: "3000-5000",
    description: "Ideal for launching a personal brand, professional portfolio, or simple business landing page.",
    features: [
      { text: "Up to 5 Pages", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Basic SEO Implementation", included: true },
      { text: "1 Month Post-Launch Support", included: true },
      { text: "Priority Email Support", included: false },
      { text: "E-commerce Integration", included: false },
    ],
    icon: Zap,
    theme: "border-sky-500/50 bg-neutral-800",
    ctaText: "Get Started Now",
  },
  {
    name: "Business",
    price: "10,000-15,000",
    description: "Perfect for growing businesses needing expanded content, advanced features, and faster support.",
    features: [
      { text: "Up to 15 Pages", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Advanced SEO & Analytics Setup", included: true },
      { text: "3 Months Post-Launch Support", included: true },
      { text: "Priority Email Support", included: true },
      { text: "E-commerce Integration", included: false },
    ],
    icon: Briefcase,
    theme: "border-sky-400 bg-neutral-900 shadow-2xl shadow-sky-500/10",
    ctaText: "Choose Business",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Designed for large projects, custom web applications, or complex e-commerce requirements.",
    features: [
      { text: "Unlimited Pages & Sections", included: true },
      { text: "Dedicated UI/UX Design", included: true },
      { text: "Full API & Third-Party Integration", included: true },
      { text: "1 Year Ongoing Maintenance", included: true },
      { text: "24/7 Phone & Slack Support", included: true },
      { text: "Advanced E-commerce / Custom App", included: true },
    ],
    icon: DollarSign,
    theme: "border-neutral-700 bg-neutral-800",
    ctaText: "Request a Quote",
  },
];

// --- Pricing Card Component ---
const PricingCard = ({ tier }) => {
  const Icon = tier.icon;
  const isHighlighted = tier.highlight;

  return (
    <div className={`flex flex-col p-8 rounded-2xl transition duration-300 border-2 ${tier.theme} ${isHighlighted ? 'transform scale-[1.03]' : ''}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-full ${isHighlighted ? 'bg-sky-500/30 text-sky-300' : 'bg-neutral-700 text-slate-300'}`}>
          <Icon size={28} />
        </div>
        <h3 className={`text-3xl font-bold ${isHighlighted ? 'text-sky-300' : 'text-slate-100'}`}>{tier.name}</h3>
      </div>

      <div className="mb-8">
        <p className="text-4xl font-extrabold text-white">
          {tier.price === "Custom" ? (
            <span className="text-sky-400">{tier.price}</span>
          ) : (
            <>
              {tier.price} <span className="text-lg font-medium text-slate-400">One-Time Fee</span>
            </>
          )}
        </p>
        <p className="mt-2 text-slate-400">{tier.description}</p>
      </div>

      <ul className="space-y-4 flex-grow">
        {tier.features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-3 ${feature.included ? 'text-slate-200' : 'text-slate-500 line-through'}`}>
            {feature.included ? (
              <Check className="text-sky-400 mt-1 flex-shrink-0" size={20} />
            ) : (
              <X className="text-neutral-600 mt-1 flex-shrink-0" size={20} />
            )}
            <span className={feature.included ? '' : 'italic'}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.price === "Custom" ? "tel:8872488038" : "#contact-section"}
        className={`mt-10 block text-center py-3 rounded-xl font-bold transition transform hover:scale-[1.02] ${
          isHighlighted 
            ? 'bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/30'
            : 'bg-neutral-700 text-slate-200 hover:bg-neutral-600'
        }`}
      >
        {tier.ctaText}
      </a>
    </div>
  );
};

// --- Main Pricing Page Component ---
const PricingPage = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 font-sans text-white min-h-screen">
      
      {/* 1. Header and Subtitle */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight">
          Transparent <span className="text-sky-400">Pricing</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
          Simple, one-time fees for upfront development. No hidden costs, just exceptional digital products.
        </p>
      </section>

      {/* 2. Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </section>
      
      {/* 3. FAQ/Transparency Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-sky-400/20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-100 flex items-center justify-center gap-3">
            <HelpCircle size={32} className='text-sky-400'/>
            Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="bg-neutral-800/80 p-6 rounded-xl border border-neutral-700">
            <h3 className="font-bold text-sky-300 mb-2">Are these prices one-time or recurring?</h3>
            <p className="text-slate-400">
              The prices listed for the Startup and Business packages are **one-time development fees**. This covers the full build, design, testing, and launch.
            </p>
          </div>
          <div className="bg-neutral-800/80 p-6 rounded-xl border border-neutral-700">
            <h3 className="font-bold text-sky-300 mb-2">What about hosting and domain fees?</h3>
            <p className="text-slate-400">
              Hosting and domain registration are recurring costs and are **not included** in the package price. We will assist you in setting up your preferred hosting solution (AWS, Vercel, etc.).
            </p>
          </div>
          <div className="bg-neutral-800/80 p-6 rounded-xl border border-neutral-700">
            <h3 className="font-bold text-sky-300 mb-2">How long does a typical project take?</h3>
            <p className="text-slate-400">
              A Startup project usually takes 2-3 weeks, and a Business project takes 4-6 weeks, depending on client feedback speed and content readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Custom Project CTA */}
      <section id="contact-section" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="bg-sky-500/10 border-2 border-sky-400/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl font-extrabold text-sky-100 mb-4">Need Something Custom?</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              If your project scope exceeds our standard tiers (e.g., complex databases, custom integrations), let's discuss a tailored Enterprise solution.
          </p>
           <a
              href="tel:+91 8872488038"
              className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-full text-lg font-bold text-white shadow-xl shadow-sky-500/20 transition transform hover:scale-105"
          >
              <Phone size={20} /> Call for a Free Quote
          </a>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;