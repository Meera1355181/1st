import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Smartphone, Globe, Layout } from 'lucide-react';

// --- Project Data ---
const projects = [
  {
    id: 1,
    title: "Lumina Art Gallery",
    category: "Web Design",
    description: "A minimalist, high-performance portfolio for a contemporary art gallery. Features a masonry layout and immersive light-box galleries.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/1725537934865058579",
    tags: ["React", "Tailwind", "Framer Motion"],
    icon: Layout
  },
  {
    id: 2,
    title: "Apex Marketing",
    category: "Agency Site",
    description: "A bold, corporate identity website for a leading digital marketing agency. Focused on lead generation and authority building.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17469724784308127718",
    tags: ["Next.js", "CMS Integration", "SEO"],
    icon: Globe
  },
  {
    id: 3,
    title: "Urban Threads",
    category: "E-Commerce",
    description: "A fully functional fashion e-commerce store with secure stripe payments, cart functionality, and real-time inventory tracking.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/2003713947650441471",
    tags: ["Shopify", "Liquid", "Analytics"],
    icon: Layers
  },
  {
    id: 4,
    title: "FitPulse Pro",
    category: "Mobile App",
    description: "A cross-platform fitness tracking application with social features, workout planning, and Apple Health integration.",
    image: "http://googleusercontent.com/image_collection/image_retrieval/9631829305884161414",
    tags: ["React Native", "Firebase", "HealthKit"],
    icon: Smartphone
  }
];

// --- Project Card Component ---
const ProjectCard = ({ project }) => (
  <div className="group relative bg-neutral-800/50 rounded-2xl overflow-hidden border border-neutral-700 hover:border-sky-400/50 transition duration-300">
    {/* Image Container with Overlay */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition duration-300" />
      
      {/* Floating Category Badge */}
      <div className="absolute top-4 right-4 bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {project.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-8 relative">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
          <project.icon size={20} />
        </div>
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition">
          {project.title}
        </h3>
      </div>
      
      <p className="text-slate-400 mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs font-medium text-slate-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-700">
            #{tag}
          </span>
        ))}
      </div>

      {/* Action Link */}
      <a href="#" className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition group/link">
        View Case Study <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition" />
      </a>
    </div>
  </div>
);

// --- Main Portfolio Page Component ---
const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Design', 'E-Commerce', 'Mobile App', 'Agency Site'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-black via-neutral-900 to-neutral-950 font-sans text-white min-h-screen">
      
      {/* 1. Header */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight mb-6">
          Selected <span className="text-sky-400">Works</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We don't just build websites; we build digital businesses. Explore some of our recent collaborations and success stories.
        </p>
      </section>

      {/* 2. Filter Tabs */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition duration-300 border ${
                filter === cat 
                  ? 'bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-500/25' 
                  : 'bg-neutral-800/50 text-slate-400 border-neutral-700 hover:border-sky-400/50 hover:text-sky-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Project Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Client Testimonial (Featured) */}
      <section className="max-w-5xl mx-auto px-6 py-16 mb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-3xl blur-xl" />
        <div className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-700 p-10 md:p-14 rounded-3xl text-center">
          <div className="text-5xl text-sky-500 mb-6">"</div>
          <p className="text-2xl md:text-3xl font-medium text-slate-200 mb-8 italic leading-relaxed">
            Crazy Thinker didn't just redesign our website; they completely revitalized our brand. Traffic is up 200% and our conversion rate has doubled.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden">
               <img src="https://placehold.co/100x100/334155/ffffff?text=JD" alt="Client" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Jonathan Doe</div>
              <div className="text-sm text-sky-400">CEO, Apex Marketing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="border-t border-sky-400/20 pt-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">Have a project in mind?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you need a simple portfolio or a complex e-commerce platform, we are ready to bring your vision to life.
          </p>
          <a
             href="tel:8872488038"
             className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-sky-500/20 transition transform hover:scale-105"
          >
             Start Your Project <ExternalLink size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;