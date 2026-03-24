/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Globe, Phone, Mail, MapPin, ChevronRight, 
  ShieldCheck, UserCheck, HardHat, Smile, ClipboardCheck, 
  CheckCircle, Award, Clock, Milestone, Building2, PencilRuler, 
  Mountain, BarChart3, Eye, Droplets, Map, Search, 
  ShoppingCart, BookOpen, Zap, Facebook, Linkedin, Twitter,
  ArrowRight, ExternalLink, ShieldAlert
} from 'lucide-react';
import { Language } from './types';
import { NAV_ITEMS, CORE_VALUES, SERVICES, PROJECTS, CONTACT_INFO } from './constants';
import DrMohammadAlgorafi from './DrMohammadAlgorafi';

const IconMap: Record<string, React.ElementType> = {
  ShieldCheck, UserCheck, HardHat, Smile, ClipboardCheck, 
  CheckCircle, Award, Clock, Milestone, Building2, PencilRuler, 
  Mountain, BarChart3, Eye, Droplets, Map, Search, 
  ShoppingCart, BookOpen, Zap, ShieldAlert
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'dr-mohammad'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: { ar: string; en: string }) => key[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const scrollTo = (id: string) => {
    if (id === 'dr-mohammad') {
      setCurrentPage('dr-mohammad');
      window.scrollTo(0, 0);
      setIsMenuOpen(false);
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(id);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
    setIsMenuOpen(false);
  };

  if (currentPage === 'dr-mohammad') {
    return <DrMohammadAlgorafi lang={lang} onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className={`min-h-screen bg-slate-50 font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <img src="/Drmohammad algorafi2026.png" alt="M.G. Engineering Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <div className="hidden sm:block">
                <h1 className={`text-lg font-bold leading-none ${scrolled ? 'text-slate-900' : 'text-indigo-900'}`}>M.G. Engineering</h1>
                <p className={`text-[10px] uppercase tracking-wider ${scrolled ? 'text-slate-500' : 'text-indigo-800/70'}`}>Company Limited</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600' : scrolled ? 'text-slate-600' : 'text-slate-700'}`}
                >
                  {t(item.title)}
                </button>
              ))}
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-semibold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
              >
                <Globe size={14} />
                {lang === 'ar' ? 'English' : 'عربي'}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-indigo-700 p-2"><Globe size={20} /></button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-right text-lg font-medium text-slate-700 hover:text-indigo-600"
                  >
                    {t(item.title)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
            alt="Engineering Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-700 uppercase bg-indigo-100 rounded-full">
                {lang === 'ar' ? 'استشارات هندسية من الدرجة الأولى' : 'First Class Engineering Consultancy'}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                {lang === 'ar' ? (
                  <>M.G. Engineering <br/><span className="text-indigo-900">حلول مبتكرة</span> لمستقبل مستدام</>
                ) : (
                  <>M.G. Engineering <br/><span className="text-indigo-900">Innovative Solutions</span> for a Sustainable Future</>
                )}
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                {lang === 'ar' 
                  ? 'شركة رائدة في اليمن معتمدة من الجمهورية اليمنية كشركة استشارية من الدرجة الأولى. نقدم حلولاً مبتكرة وتصاميم هندسية متكاملة تلبي أعلى المعايير العالمية.'
                  : 'A leading company in Yemen certified as a First-Class consulting firm. We provide innovative solutions and integrated engineering designs that meet the highest international standards.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollTo('services')}
                  className="px-8 py-4 bg-indigo-900 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all flex items-center gap-2 group shadow-lg shadow-indigo-900/20"
                >
                  {lang === 'ar' ? 'تعرف على خدماتنا' : 'Explore Our Services'}
                  <ArrowRight size={20} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-all"
                >
                  {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_VALUES.slice(0, 4).map((value, idx) => {
              const Icon = IconMap[value.icon];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-900 mx-auto mb-4 group-hover:bg-indigo-900 group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t(value.title)}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-indigo-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium opacity-80">{lang === 'ar' ? 'عاماً من التميز' : 'Years of Excellence'}</p>
              </div>
            </div>
            <div>
              <h2 className="text-indigo-900 font-bold tracking-widest uppercase text-sm mb-4">
                {lang === 'ar' ? 'من نحن' : 'About Us'}
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {lang === 'ar' 
                  ? 'نحن شركة استشارات هندسية نتمتع بالتحدي' 
                  : 'We are an Engineering Consultancy Firm that Enjoys Challenges'}
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {lang === 'ar' 
                  ? 'الشركة التي ستتصل بها عندما تحتاج إلى خدمات استشارية مثل التصميم الإنشائي والتحليل وحل المشكلات. نحن نؤمن بالتميز والاحترافية في كل مشروع نقوم به، وقد قمنا بتنفيذ مشاريع حيوية تشمل تقييم سلامة المستشفيات والمدارس وتصميم الجسور الحيوية في مختلف محافظات الجمهورية.'
                  : 'The company you call when you need consulting services such as structural design, analysis, and problem-solving. We believe in excellence and professionalism in every project we undertake, having executed vital projects including hospital and school integrity assessments and modular bridge designs across various governorates.'}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-900 shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h4>
                    <p className="text-slate-600 text-sm">
                      {lang === 'ar' 
                        ? 'أن نكون جمعية مهنية رائدة تعزز التميز والاحترافية في الاستشارات الهندسية في اليمن والشرق الأوسط.'
                        : 'To be a leading professional association promoting excellence and professionalism in engineering consultancy in Yemen and the Middle East.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-900 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{lang === 'ar' ? 'رسالتنا' : 'Our Mission'}</h4>
                    <p className="text-slate-600 text-sm">
                      {lang === 'ar' 
                        ? 'تعزيز ممارسة الاستشارات الهندسية في اليمن بما يتوافق مع المبادئ الأخلاقية المهنية والنزاهة التجارية.'
                        : 'Promoting the practice of engineering consultancy in Yemen in accordance with professional ethical principles and commercial integrity.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-indigo-900 font-bold tracking-widest uppercase text-xs mb-2">
              {lang === 'ar' ? 'شركاء النجاح' : 'Our Clients'}
            </h2>
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === 'ar' ? 'نفتخر بالعمل مع كبرى المنظمات والجهات' : 'Trusted by Leading Organizations'}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['UNOPS', 'World Bank', 'MPWH', 'RMF', 'Tesla', 'Amran Factory'].map((client) => (
              <div key={client} className="text-2xl font-black text-slate-300 hover:text-indigo-900 transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-900 font-bold tracking-widest uppercase text-sm mb-4">
              {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              {lang === 'ar' ? 'مجالات الخبرة والتميز' : 'Areas of Expertise & Excellence'}
            </h3>
            <p className="text-slate-600">
              {lang === 'ar' 
                ? 'نقدم حلولاً مبتكرة للتحديات المعقدة. يمكننا تقديم الخبرة في أي مرحلة من مراحل المشروع.'
                : 'We provide innovative solutions to complex challenges. We can provide expertise at any stage of the project.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-900 mb-6 shadow-sm group-hover:bg-indigo-900 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{t(service.title)}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {lang === 'ar' 
                      ? 'نقدم خدمات استشارية متكاملة تشمل الدراسات والتصاميم والإشراف الفني لضمان جودة التنفيذ.'
                      : 'We provide integrated consulting services including studies, designs, and technical supervision to ensure implementation quality.'}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
                {lang === 'ar' ? 'مشاريعنا' : 'Our Projects'}
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                {lang === 'ar' ? 'سجل حافل بالإنجازات' : 'A Track Record of Achievements'}
              </h3>
            </div>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
              {lang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-indigo-400 font-mono text-sm">{project.year}</span>
                  <span className="text-white/30 text-xs font-mono">{project.id}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                  {t(project.title)}
                </h4>
                
                <div className="mt-auto space-y-3">
                  {project.type && (
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                      <p className="text-slate-400"><span className="text-slate-300 font-semibold">{lang === 'ar' ? 'النوع: ' : 'Type: '}</span>{t(project.type)}</p>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                      <p className="text-slate-400"><span className="text-slate-300 font-semibold">{lang === 'ar' ? 'العميل: ' : 'Client: '}</span>{t(project.client)}</p>
                    </div>
                  )}
                </div>

                <div className="h-1 w-0 group-hover:w-full bg-indigo-500 transition-all duration-500 absolute bottom-0 left-0 rounded-b-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-900 font-bold tracking-widest uppercase text-sm mb-4">
              {lang === 'ar' ? 'الأخبار' : 'News'}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              {lang === 'ar' ? 'آخر المستجدات' : 'Latest Updates'}
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1545139224-79b176938ee9?auto=format&fit=crop&q=80&w=1000" 
                  alt="Bridge Design Project" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 md:w-3/5">
                <span className="text-indigo-700 font-bold text-sm mb-4 block">{lang === 'ar' ? 'نوفمبر 2023' : 'November 2023'}</span>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  {lang === 'ar' ? 'مشروع تصميم جسرين نمطيين في اليمن' : 'Modular Bridges Design Project in Yemen'}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {lang === 'ar' 
                    ? 'بدأنا العمل على مشروع استراتيجي لتصميم جسرين نمطيين والأعمال المرتبطة بهما في صنعاء وحضرموت بالتعاون مع مكتب الأمم المتحدة لخدمات المشاريع (UNOPS).'
                    : 'We have commenced a strategic project for the design of two modular bridges and associated works in Sana\'a and Hadramot in collaboration with UNOPS.'}
                </p>
                <button 
                  onClick={() => scrollTo('projects')}
                  className="text-indigo-900 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                  <ChevronRight size={20} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-indigo-900 font-bold tracking-widest uppercase text-sm mb-4">
                {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">
                {lang === 'ar' ? 'دعنا نتحدث عن مشروعك القادم' : 'Let\'s Talk About Your Next Project'}
              </h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-900 shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{lang === 'ar' ? 'العنوان' : 'Address'}</h4>
                    <p className="text-slate-600">{t(CONTACT_INFO.address)}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-900 shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{lang === 'ar' ? 'الهاتف والفاكس' : 'Phone & Fax'}</h4>
                    <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                    <p className="text-slate-600">{CONTACT_INFO.fax}</p>
                    <p className="text-indigo-600 font-medium mt-1">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-900 shadow-sm shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                    <p className="text-slate-600">{CONTACT_INFO.email}</p>
                    <p className="text-slate-600">{CONTACT_INFO.altEmail}</p>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
                {/* Mock Map */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 opacity-20" />
                    <p className="text-xs uppercase tracking-widest font-bold opacity-40">Interactive Map View</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get('firstName');
                  const lastName = formData.get('lastName');
                  const email = formData.get('email');
                  const mobile = formData.get('mobile');
                  const company = formData.get('company');
                  const comments = formData.get('comments');
                  
                  const subject = `Contact Form Submission from ${firstName} ${lastName}`;
                  const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\n\nComments:\n${comments}`;
                  
                  window.location.href = `mailto:mg@mgengineeringco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'الاسم الأول' : 'First Name'}</label>
                    <input name="firstName" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'اسم العائلة' : 'Last Name'}</label>
                    <input name="lastName" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'رقم الجوال' : 'Mobile Number'}</label>
                  <input name="mobile" type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'الشركة' : 'Company'}</label>
                  <input name="company" type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'ar' ? 'التعليقات' : 'Comments'}</label>
                  <textarea name="comments" rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"></textarea>
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="flex-1 py-4 bg-indigo-900 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-900/20">
                    {lang === 'ar' ? 'إرسال' : 'Send Message'}
                  </button>
                  <button type="reset" className="px-6 py-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all">
                    {lang === 'ar' ? 'إعادة تعيين' : 'Reset'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/Drmohammad algorafi2026.png" alt="M.G. Engineering Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                <h2 className="text-xl font-bold">M.G. Engineering</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {lang === 'ar' 
                  ? 'شركة استشارات هندسية رائدة في اليمن، نقدم حلولاً مبتكرة وتصاميم هندسية متكاملة منذ عام 2013.'
                  : 'A leading engineering consultancy firm in Yemen, providing innovative solutions and integrated designs since 2013.'}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)} className="hover:text-indigo-400 transition-colors">{t(item.title)}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{lang === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                {SERVICES.slice(0, 5).map(service => (
                  <li key={service.id}>
                    <button onClick={() => scrollTo('services')} className="hover:text-indigo-400 transition-colors">{t(service.title)}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{lang === 'ar' ? 'تواصل معنا' : 'Contact Info'}</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-indigo-500 shrink-0" />
                  <span>{t(CONTACT_INFO.address)}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-indigo-500 shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-indigo-500 shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} MG ENGINEERING COMPANY LIMITED. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="opacity-50">Web Hosting by Turbify</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
