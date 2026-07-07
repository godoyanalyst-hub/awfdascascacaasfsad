import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Radio, 
  ShieldAlert, 
  Mic, 
  ArrowRight, 
  Shield, 
  Award, 
  Users, 
  Sliders, 
  CheckCircle2, 
  Menu, 
  X, 
  Lock, 
  MessageSquare, 
  Quote 
} from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import DashboardCharts from './components/DashboardCharts';
import InteractivePortfolio from './components/InteractivePortfolio';
import MethodologyTabs from './components/MethodologyTabs';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import { SERVICES, TESTIMONIALS } from './data';
import ImagenPortada from './assets/ImagenPortadaa.jpeg';

// Service icon mapping dictionary helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper,
  Radio,
  ShieldAlert,
  Mic
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Garantizar un scroll suave matemático en todos los navegadores y dispositivos
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const navHeight = 80;
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          const startPosition = window.pageYOffset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'auto' // Instantáneo, sin animación
          });
          
          if (mobileMenuOpen) {
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] bg-brand-cream text-brand-slate-dark flex flex-col font-sans antialiased overflow-x-hidden">
      
      {/* 1. STICKY TOP NAVIGATION BAR */}
      <nav className="fixed w-full bg-brand-cream/90 backdrop-blur-md z-40 border-b border-brand-cream-dark transition-all duration-300 py-4" id="main-nav">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-wider items-center">
            <a href="#inicio" className="text-brand-slate-dark hover:text-brand-teal transition-colors">Inicio</a>
            <a href="#servicios" className="text-brand-slate-dark hover:text-brand-teal transition-colors">Servicios</a>
            <a href="#casos" className="text-brand-slate-dark hover:text-brand-teal transition-colors">Casos de Éxito</a>
            <a href="#testimonios" className="text-brand-slate-dark hover:text-brand-teal transition-colors">Testimonios</a>
            {/* <a href="#metodo" className="text-brand-slate-dark hover:text-brand-teal transition-colors">El Método</a> */}
            <a href="#contacto" className="bg-brand-teal text-white hover:bg-brand-teal-dark px-4 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all">Contacto</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-slate-dark hover:text-brand-teal transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Responsive Navigation Drawers */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-cream-dark absolute w-full left-0 top-full p-6 shadow-xl flex flex-col space-y-4 animate-fade-in z-50">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-brand-slate-dark hover:text-brand-teal block">Inicio</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-brand-slate-dark hover:text-brand-teal block">Servicios</a>
            <a href="#casos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-brand-slate-dark hover:text-brand-teal block">Casos de Éxito</a>
            <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-brand-slate-dark hover:text-brand-teal block">Testimonios</a>
            {/* <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-brand-slate-dark hover:text-brand-teal block">El Método</a> */}
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-brand-teal text-white text-center py-3 rounded-xl font-bold font-heading">Consultar Ahora</a>
          </div>
        )}
      </nav>

      {/* 2. HERO / PRESENTATION HEADER SEGMENT */}
      <header className="relative pt-28 pb-48 md:pt-32 md:pb-56 w-full flex flex-col justify-center min-h-screen overflow-hidden" id="inicio">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-teal/30 bg-brand-teal-surface text-brand-teal text-[10px] font-extrabold tracking-widest uppercase rounded-full select-none">
              <Lock size={12} className="text-brand-teal shrink-0" />
              PAULINA VEGA PERIODISTA SENIOR · DIRECTORA MEJORA COMUNICACIONES
            </div>
            
            <div className="flex flex-col gap-7 pt-2 pb-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-brand-slate-dark text-balance">
                La reputación ya no se construye solo ante las personas.
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-16 bg-brand-teal rounded-full"></div>
                <div className="h-1.5 w-4 bg-brand-teal/40 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-brand-teal/20 rounded-full"></div>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-medium italic leading-[1.15] tracking-tight text-brand-teal text-balance">
                También ante los sistemas que organizan la información del mundo.
              </h2>
            </div>
            
            {/*
            <p className="text-base md:text-lg text-brand-slate-muted font-light leading-relaxed max-w-2xl border-l-3 border-brand-teal pl-6">
              Ayudo a empresas, instituciones y líderes a construir confianza a través de relatos relevantes, gestión de prensa de alto nivel y visibilidad en los espacios donde hoy se forma la percepción pública: medios de comunicación, buscadores e inteligencia artificial.
              <span className="block mt-4">
                Más de 20 años de experiencia asesorando organizaciones en Chile, combinando criterio periodístico, ejecución ágil y una sólida red de relacionamiento con medios nacionales.
              </span>
            </p>
            */}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#casos" 
                className="bg-brand-slate-dark text-white hover:bg-brand-teal hover:border-brand-teal border border-brand-slate-dark px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all rounded-full shadow-xs hover:shadow-lg text-center"
              >
                Explorar Clientes &rarr;
              </a>
              <a 
                href="#contacto" 
                className="border border-brand-slate-dark hover:bg-brand-slate-dark text-brand-slate-dark hover:text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all rounded-full text-center"
              >
                AGENDAR CONSULTA
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center h-full relative mt-10 lg:mt-0">
            {/* Animación original de barras comentada a petición */}
            {/*
            <div className="flex items-center gap-5 xl:gap-6 transform transition-transform hover:scale-105 duration-500 cursor-default relative z-10">
              <div className="w-8 xl:w-10 h-40 xl:h-52 bg-brand-teal/90 rounded-full animate-wave shadow-lg shadow-brand-teal/20" />
              <div className="w-8 xl:w-10 h-64 xl:h-[320px] bg-brand-teal rounded-full animate-wave animation-delay-200 shadow-xl shadow-brand-teal/30" />
              <div className="w-8 xl:w-10 h-[320px] xl:h-[450px] bg-brand-teal rounded-full animate-wave animation-delay-400 shadow-2xl shadow-brand-teal/40" />
              <div className="w-8 xl:w-10 h-64 xl:h-[320px] bg-brand-teal rounded-full animate-wave animation-delay-600 shadow-xl shadow-brand-teal/30" />
              <div className="w-8 xl:w-10 h-40 xl:h-52 bg-brand-teal/90 rounded-full animate-wave animation-delay-200 shadow-lg shadow-brand-teal/20" />
            </div>
            */}

            {/* Nueva imagen de portada Premium */}
            <div className="relative w-[85%] max-w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(16,163,151,0.25)] border-[6px] border-white/60 group z-10 transform transition-transform duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-brand-teal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none mix-blend-multiply"></div>
              <img 
                src={ImagenPortada} 
                alt="Paulina Vega" 
                className="w-full h-full object-cover object-top scale-[1.05] group-hover:scale-100 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-slate-dark/40 to-transparent z-0 pointer-events-none"></div>
            </div>
            
            {/* Decorative background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/15 blur-[120px] rounded-full pointer-events-none" />
          </div>

        </div>

        {/* 3. CORPORATE LOGOS TICKER (Anchored to bottom of Hero) */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-[#e5e5e5] py-6 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-black tracking-[0.2em] text-brand-teal uppercase text-center mb-6">
              Nuestros voceros y contenidos alcanzan las principales editoriales
            </p>
            <div className="relative w-full overflow-hidden flex items-center">
              {/* Gradient Mask for fading edges */}
              <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="flex w-max animate-marquee gap-x-12 sm:gap-x-24 text-[18px] md:text-[22px] uppercase tracking-[0.15em] font-black text-[#1a1a1a] select-none py-2 hover:[animation-play-state:paused] transform-gpu will-change-transform">
                {/* Group 1 */}
                <div className="flex items-center gap-x-12 sm:gap-x-24">
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">DIARIO FINANCIERO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">RADIO LA CLAVE</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">EL MERCURIO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">LA TERCERA</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">T13 RADIO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">MEGA</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">EL DIARIO INMOBILIARIO</span>
                  <span className="text-xs text-slate-300">•</span>
                </div>
                {/* Group 2 (Duplicate for seamless loop) */}
                <div className="flex items-center gap-x-12 sm:gap-x-24">
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">DIARIO FINANCIERO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">RADIO LA CLAVE</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">EL MERCURIO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">LA TERCERA</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">T13 RADIO</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">MEGA</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="hover:text-brand-teal transition-colors whitespace-nowrap">EL DIARIO INMOBILIARIO</span>
                  <span className="text-xs text-slate-300">•</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* 4. SERVICES GRID (SERVICIOS) */}
      <section className="pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto" id="servicios">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal mb-4 block">
              Herramientas & Enfoque
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-slate-dark leading-[1.1]">
              Aporte para potenciar <br />
              <span className="text-brand-teal italic font-medium">tu Valor</span>
            </h2>
          </div>
          {/* 
          <div className="lg:col-span-5 pb-2">
            <div className="border-l-4 border-brand-teal pl-6">
              <p className="text-[17px] text-[#1a1a1a] leading-[1.75]">
                Desplegamos una combinación estratégica de inteligencia contextual, posicionamiento orgánico y narrativa profunda. Diseñamos soluciones para proteger y proyectar el activo más importante de tu organización: <strong>su reputación.</strong>
              </p>
            </div>
          </div> 
          */}
        </div>

        {/* Texto aportes - Diseño Premium Ordenado */}
        <div className="mb-24 pb-16 border-b border-slate-200/60 mt-4">
          <div className="max-w-5xl">
            {/* Lead-in / Subtitle */}
            <h3 className="text-2xl md:text-[28px] font-heading font-medium text-brand-slate-dark leading-[1.4] mb-12">
              Asesoría boutique de <span className="text-brand-teal font-semibold">comunicación estratégica</span> y posicionamiento reputacional.
            </h3>
            
            {/* Two balanced blocks */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <p className="text-[17px] text-slate-600 leading-[1.8] font-light">
                Ayudo a empresas, instituciones y líderes a construir confianza a través de relatos relevantes, gestión de prensa de alto nivel y visibilidad en los espacios donde hoy se forma la percepción pública: medios de comunicación, buscadores e inteligencia artificial.
              </p>
              
              <div className="flex items-start gap-6 relative md:pl-10">
                {/* Vertical subtle divider for desktop */}
                <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-slate-200"></div>
                
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/5 text-brand-teal font-extrabold text-2xl font-heading shadow-inner border border-brand-teal/10">
                    20+
                  </div>
                </div>
                <p className="text-[16px] text-slate-600 leading-[1.7] font-light">
                  <strong className="text-brand-slate-dark font-semibold block mb-1">Años de experiencia</strong>
                  asesorando organizaciones en Chile, combinando criterio periodístico, ejecución ágil y una sólida red de relacionamiento con medios nacionales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, index) => {
            const IconComponent = iconMap[srv.icon];
            const isSelected = selectedService === srv.id;

            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(isSelected ? null : srv.id)}
                className={`p-8 md:p-10 lg:p-12 rounded-[2.5rem] transition-all duration-500 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected 
                    ? 'bg-brand-slate-dark text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-[1.02] ring-1 ring-brand-teal/30 z-10' 
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(16,163,151,0.08)] hover:-translate-y-1 hover:border-brand-teal/30 z-0'
                }`}
              >
                {/* Number Watermark */}
                <div className={`absolute -right-4 -top-8 text-[160px] font-black leading-none pointer-events-none select-none transition-colors duration-500 ${
                  isSelected ? 'text-white/5' : 'text-slate-50'
                }`}>
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 md:p-5 rounded-2xl transition-colors duration-500 shadow-sm ${
                      isSelected 
                        ? 'bg-brand-teal text-white shadow-brand-teal/20' 
                        : 'bg-brand-teal-surface text-brand-teal border border-brand-teal/15 group-hover:bg-brand-teal group-hover:text-white'
                    }`}>
                      {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                    </div>
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 block transition-colors duration-300 ${
                    isSelected ? 'text-brand-teal-light' : 'text-brand-teal'
                  }`}>
                    Línea de Servicio 0{index + 1}
                  </span>

                  <h3 className={`font-heading text-2xl md:text-3xl font-extrabold transition-colors leading-tight tracking-tight pr-4 ${
                    isSelected ? 'text-white' : 'text-brand-slate-dark group-hover:text-brand-teal'
                  }`}>
                    {srv.title}
                  </h3>
                  
                  <p className={`text-[17px] mt-4 leading-[1.75] font-medium lg:max-w-[620px] transition-colors duration-300 ${
                    isSelected ? 'text-slate-300' : 'text-[#1a1a1a]'
                  }`}>
                    {srv.shortDescription}
                  </p>
                </div>

                {/* Expanding details block */}
                <div className={`transition-all duration-500 overflow-hidden relative z-10 ${
                  isSelected ? 'max-h-[1000px] opacity-100 mt-8 pt-8 border-t border-white/10' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`text-[17px] font-semibold mb-6 leading-[1.75] lg:max-w-[620px] ${
                    isSelected ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {srv.description}
                  </p>
                  <ul className="space-y-4 mt-6">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base gap-3">
                        <CheckCircle2 size={20} className={`shrink-0 mt-1 ${isSelected ? 'text-brand-teal-light' : 'text-brand-teal'}`} />
                        <span className={`leading-relaxed ${isSelected ? 'text-slate-300' : 'text-brand-slate-muted'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex items-center text-xs font-black mt-10 self-start gap-2 uppercase tracking-[0.15em] relative z-10 transition-colors duration-300 ${
                  isSelected ? 'text-brand-teal-light hover:text-white' : 'text-brand-teal group-hover:text-brand-slate-dark'
                }`}>
                  <span>{isSelected ? 'Cerrar Detalles' : 'Ver Detalles & Líneas de Acción'}</span>
                  <ArrowRight size={18} className={`transition-transform duration-500 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-2'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE CASE STUDIES & METRICS (CASOS DE ÉXITO) */}
      <section className="pt-10 pb-24 px-4 md:px-6 w-full max-w-[100vw] lg:max-w-7xl mx-auto overflow-hidden box-border" id="casos">
        
        {/* Cases Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal mb-4 block">
              Evidencia & Archivo de Casos
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-slate-dark leading-[1.1] break-words">
              Garantía <span className="text-brand-teal italic font-medium">Respaldada</span> por Resultados
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <div className="border-l-4 border-brand-teal pl-6">
              <p className="text-[17px] text-[#1a1a1a] leading-[1.75]">
                Una selección curada de intervenciones estratégicas de comunicación. No mostramos simples apariciones, revelamos <strong>casos de éxito reales</strong> donde el valor y alcance de la reputación fue medido empíricamente.
              </p>
            </div>
          </div>
        </div>

        <InteractivePortfolio />

        {/* Metrics Sub-header */}
        <div className="max-w-3xl mb-10 mt-32 relative">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal mb-3 block">
            Auditoría Cuantitativa y Cualitativa
          </span>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-slate-dark leading-tight">
            Impacto <span className="text-brand-teal italic font-medium">Consolidado</span>
          </h3>
          {/* 
          <p className="text-[17px] text-[#1a1a1a] mt-4 leading-[1.75] lg:max-w-[620px]">
            La reputación no es una variable blanda. En Mejora Comunicaciones medimos el impacto reportando permanentemente los hitos según el aporte estratégico a cada marca.
          </p> 
          */}
        </div>

        <DashboardCharts />

      </section>

      {/* 4. METHODOLOGY ROADMAP (METODOLOGÍA) - TEMPORARY DISABLED
      <section className="bg-brand-cream-dark pt-10 pb-24 px-6 border-y border-slate-200" id="metodo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Gobernanza de Proyectos</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-brand-slate-dark mt-1">
              El Rigor del Método "Mejora"
            </h2>
            <p className="text-[17px] text-[#1a1a1a] mt-3 leading-[1.75] lg:max-w-[620px]">
              Garantizamos un proceso cuidado y confiable para la marca y sus ejecutivos, en coordinación con áreas claves de cada organización, realizando un levantamiento exhaustivo de los atributos y detección de oportunidades y vulnerabilidades.
            </p>
          </div>

          <MethodologyTabs />
        </div>
      </section>
      */}

      <Testimonials />

      {/* 8. CLIENTS WALL SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Empresas de diversos sectores</span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-slate-dark mt-1">
            Han confiado en este servicio personalizado
          </h2>
          <p className="text-[17px] text-[#1a1a1a] mt-3 leading-[1.75] lg:max-w-[620px]">
            Obteniendo 100% de resultados favorables.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            'DIRECTV', 'NUAM', 'Inmobiliaria Manquehue', 'Saint George', 'Capital Inteligente', 'Melo & Asociados',
            'Andrés Pardo Consultores', 'Fundación Educacional Pudahuel', 'Preuniversitario Portezuelo', 'Inmobiliaria VIVA', 
            'Orca Business Consulting', 'AppWorki', 'Federación Médica de Chile', 'Academia 360 de Prevención Criminal', 
            'Inteliventa', 'InnovAgile Group', 'Leqtus', 'Inmobiliaria del Real', 'Inmobiliaria Lo Campino', 
            'Festival Interescolar de Artes Artmeet', 'Vegus', 'Piedra Roja', 'Hub APTA'
          ].map((client, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 px-8 py-5 rounded-xl shadow-sm hover:shadow-md hover:border-brand-teal transition-all text-center flex items-center justify-center min-w-[160px]"
            >
              <span className="font-heading font-extrabold text-brand-slate-dark text-sm tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. SECURE CONTACT FORM & ACCREDITATION FOOTER */}
      <section className="bg-brand-slate-dark text-white/90 pt-24 pb-8 px-6 border-t border-brand-teal/20" id="contacto">
        <div className="max-w-7xl mx-auto">
          <ContactForm />

          {/* Agency credentials & copyright bottom block */}
          <div className="border-t border-slate-800 mt-20 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
              <div className="flex items-center gap-2 select-none">
                {/* Pristine SVG soundwave icon inside footer with contrasting white text */}
                <svg
                  className="w-8 h-8 text-brand-teal shrink-0"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="15" y="40" width="8" height="20" rx="4" />
                  <rect x="31" y="22" width="8" height="56" rx="4" />
                  <rect x="47" y="10" width="8" height="80" rx="4" />
                  <rect x="63" y="22" width="8" height="56" rx="4" />
                  <rect x="79" y="40" width="8" height="20" rx="4" />
                </svg>
                <div className="flex flex-col select-none leading-none">
                  <span className="font-heading font-extrabold tracking-tight text-white">
                    MEJORA
                  </span>
                  <span className="font-sans font-medium text-[6.5px] tracking-[0.25em] text-slate-400 mt-0.5">
                    COMUNICACIONES
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 font-mono leading-relaxed">
                Servicio senior boutique de comunicación estratégica, especializado en Gestión de Prensa y Earned Media.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 lg:gap-6 text-[10px] uppercase font-bold tracking-wider text-slate-400 whitespace-nowrap">
              <a href="#" className="hover:text-brand-teal transition-colors">Aviso de Privacidad</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-brand-teal transition-colors">Términos de Servicio</a>
            </div>

            <p className="text-[10px] text-slate-500 font-mono whitespace-nowrap shrink-0 text-center lg:text-right">
              &copy; 2026 Mejora Comunicaciones.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
