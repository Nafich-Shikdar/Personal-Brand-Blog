import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  ArrowRight, 
  ArrowLeft,
  Menu, 
  X,
  ExternalLink,
  BookOpen,
  User,
  Send,
  Calendar,
  Clock,
  Tag
} from 'lucide-react';

const PortfolioBlog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    // If we are in article view, go back home first
    if (selectedPost) {
      setSelectedPost(null);
      // specific timeout to allow render cycle to clear
      setTimeout(() => {
        setActiveSection(id);
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActiveSection(id);
      setIsMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openArticle = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock Data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Minimalism",
      excerpt: "Why simpler interfaces and reduced noise are becoming the gold standard in web design for 2025 and beyond.",
      date: "Dec 02, 2025",
      category: "Design",
      readTime: "5 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed">
            In an era where our senses are constantly bombarded by notifications, pop-ups, and infinite scrolls, a new wave of design philosophy is taking root: <strong>Digital Minimalism</strong>. It's not just about white space or using fewer colors; it's about intentionality.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Why Now?</h3>
          <p className="mb-6 leading-relaxed">
            By 2024, user fatigue hit an all-time high. Apps were trying to do too much. The "Super App" trend, while convenient on paper, led to cognitive overload. In 2025, we are seeing a correction. Users are gravitating towards single-purpose tools that do one thing exceptionally well.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Core Principles</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Reduction of Choice:</strong> Limiting options to guide users rather than overwhelm them.</li>
            <li><strong>Calm Interfaces:</strong> Muted color palettes and typography that breathes.</li>
            <li><strong>Respectful Notifications:</strong> Systems that bundle alerts rather than pinging instantly.</li>
          </ul>
          <p className="mb-6 leading-relaxed">
            As designers, our responsibility is shifting from "how long can we keep them here?" to "how efficiently can we help them achieve their goal?". The future isn't flashy; it's quiet, efficient, and respectful.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "Building Scalable Systems",
      excerpt: "A deep dive into micro-frontends and how they change the way we think about large-scale application architecture.",
      date: "Nov 28, 2025",
      category: "Engineering",
      readTime: "8 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed">
            Monoliths have their place, but as teams grow beyond the "two-pizza" rule, coordination becomes a nightmare. Enter <strong>Micro-frontends</strong>. While not a silver bullet, they offer a path to decoupling that modern enterprise apps desperately need.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">The Problem with Monoliths</h3>
          <p className="mb-6 leading-relaxed">
            Imagine a frontend codebase where a change in the billing module breaks the user profile page. This tight coupling slows down deployment cycles. In 2025, speed is currency.
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6 border-l-4 border-blue-500 italic">
            "The goal of architecture is to minimize the human cost of building and maintaining the system."
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Module Federation</h3>
          <p className="mb-6 leading-relaxed">
            Webpack's Module Federation changed the game, allowing us to load code dynamically from other builds at runtime. This means Team A can deploy their "Checkout" feature independently of Team B's "Product Search" feature, yet to the user, it feels like one cohesive application.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "My Journey into AI Integration",
      excerpt: "Lessons learned from integrating LLMs into everyday workflows and the unexpected productivity boosts.",
      date: "Nov 15, 2025",
      category: "AI & Tech",
      readTime: "6 min read",
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed">
            I resisted for a long time. I thought AI was just a hype cycle, a parlor trick. Then I integrated a local LLM into my IDE, and everything changed. It wasn't about the code it wrote for me; it was about the friction it removed.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Beyond Autocomplete</h3>
          <p className="mb-6 leading-relaxed">
            The real power of AI in 2025 isn't generating boilerplate code—we have snippets for that. It's about <strong>contextual awareness</strong>. Having an assistant that understands the specific constraints of my project's architecture allows me to brainstorm architectural decisions in real-time.
          </p>
          <p className="mb-6 leading-relaxed">
            However, there are pitfalls. Over-reliance can lead to "autopilot syndrome," where we stop questioning the output. The key is to treat AI as a junior developer: incredibly fast, vast knowledge, but needs strict code review.
          </p>
        </>
      )
    }
  ];

  const projects = [
    {
      title: "TaskFlow App",
      description: "A productivity tool for remote teams focusing on asynchronous communication.",
      tags: ["React", "Firebase", "Tailwind"]
    },
    {
      title: "Neon Commerce",
      description: "Headless e-commerce template used by over 500+ developers.",
      tags: ["Next.js", "Stripe", "GraphQL"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-b border-slate-800' : 'bg-white/90 border-b border-slate-100'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => {
                setSelectedPost(null);
                scrollToSection('home');
              }}
            >
              <span className="text-xl font-bold tracking-tighter">ALEX<span className="text-blue-600">.DEV</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {!selectedPost && ['Home', 'About', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}
                >
                  {item}
                </button>
              ))}
              
              {selectedPost && (
                 <button
                 onClick={closeArticle}
                 className="text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1"
               >
                 <ArrowLeft size={16} /> Back to Home
               </button>
              )}

              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={closeArticle}
                className="block w-full text-left px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md text-blue-600"
              >
                {selectedPost ? '← Back to Home' : 'Home'}
              </button>
              {!selectedPost && ['About', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="min-h-screen">
        {selectedPost ? (
          // ARTICLE VIEWER
          <article className="pt-32 pb-20 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={closeArticle}
                className="mb-8 flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Articles
              </button>

              <header className="mb-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6 text-sm">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1">
                    <Tag size={14} /> {selectedPost.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar size={14} /> {selectedPost.date}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock size={14} /> {selectedPost.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-slate-100">
                  {selectedPost.title}
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-slate-200 dark:border-slate-700 pl-4 italic">
                  {selectedPost.excerpt}
                </p>
              </header>

              <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-10"></div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                {selectedPost.content}
              </div>

              <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold mb-4">Share this article</h4>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ) : (
          // LANDING PAGE CONTENT
          <>
            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
                  Available for freelance projects
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  Building digital products, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    sharing the journey.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                  I'm Alex, a Product Designer & Developer based in Dhaka. I write about code, design trends, and the future of the web.
                </p>
                
                <div className="flex justify-center items-center space-x-6 mb-12">
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={24} /></a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => scrollToSection('blog')}
                    className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Read the Blog <BookOpen size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </section>

            {/* About & Projects Split */}
            <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <User className="text-blue-600" size={24} />
                      <h2 className="text-3xl font-bold">About Me</h2>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      With over 5 years of experience in full-stack development, I bridge the gap between engineering and design. I believe the best products are built when form and function work in harmony.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                      Currently, I'm focused on exploring the possibilities of AI in creative workflows and building accessible web applications for everyone.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold text-blue-600">50+</h3>
                        <p className="text-sm text-slate-500">Projects Completed</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold text-purple-600">10k+</h3>
                        <p className="text-sm text-slate-500">Monthly Readers</p>
                      </div>
                    </div>
                  </div>

                  {/* Featured Projects Mini-Grid */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Featured Projects</h3>
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{project.title}</h4>
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-24 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Writings</h2>
                    <p className="text-slate-600 dark:text-slate-400">Thoughts on technology, life, and everything in between.</p>
                  </div>
                  <a href="#" className="hidden md:flex items-center text-blue-600 font-medium hover:underline mt-4 md:mt-0">
                    View all posts <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden group">
                        {/* Placeholder for blog image */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.id === 1 ? 'from-blue-400 to-purple-500' : post.id === 2 ? 'from-emerald-400 to-cyan-500' : 'from-orange-400 to-pink-500'} opacity-80 transition-opacity duration-300`}></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-xs font-bold shadow-sm backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 
                          className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors cursor-pointer leading-tight"
                          onClick={() => openArticle(post)}
                        >
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <button 
                          onClick={() => openArticle(post)}
                          className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center group-hover:gap-2 transition-all"
                        >
                          Read Article <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
                
                <div className="mt-8 text-center md:hidden">
                  <button className="inline-flex items-center text-blue-600 font-medium">
                    View all posts <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </section>

            {/* Newsletter / Contact Section */}
            <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 dark:border-slate-700">
                  <Mail className="mx-auto text-blue-600 mb-6" size={48} />
                  <h2 className="text-3xl font-bold mb-4">Let's start a conversation</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
                    Whether you want to hire me for a project, discuss a potential collaboration, or just say hi, I'd love to hear from you.
                  </p>
                  
                  <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 px-5 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                        Subscribe <Send size={18} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">ALEX.DEV</h3>
            <p className="text-sm text-slate-500 mt-2">© 2025 Alex Doe. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">RSS</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioBlog;
