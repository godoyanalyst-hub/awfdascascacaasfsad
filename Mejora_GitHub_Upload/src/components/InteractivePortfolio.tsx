import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

export default function InteractivePortfolio() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We can still filter if we want, but since it's a carousel, maybe we just show all.
  // We'll just use CASE_STUDIES directly for the minimalist look, or keep the filter hidden.
  const carouselItems = [...CASE_STUDIES, { id: 'cs-more-projects', isSpecial: true }];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="archivo-casos" className="relative w-full max-w-6xl mx-auto mt-12 mb-24">
      {/* Navigation Controls (Top Right) */}
      <div className="flex justify-end gap-3 mb-6 pr-2">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal-surface transition-all duration-300"
          aria-label="Anterior caso"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal-surface transition-all duration-300"
          aria-label="Siguiente caso"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 bg-white">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, idx) => {
            
            // Special Last Card
            if ('isSpecial' in item) {
              return (
                <div key={item.id} className="w-full flex-shrink-0 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-brand-cream/50">
                  <div className="text-center group cursor-default">
                    <h4 className="font-heading text-6xl md:text-8xl font-black text-brand-slate-dark mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                      +100
                    </h4>
                    <p className="text-xl md:text-2xl font-bold text-brand-teal mb-6">
                      Proyectos Adicionales
                    </p>
                    <p className="text-sm md:text-base text-brand-slate-muted max-w-sm mx-auto leading-relaxed">
                      Casos de éxito gestionados bajo estrictos Acuerdos de Confidencialidad (NDA). Tu privacidad es nuestro estándar más alto.
                    </p>
                  </div>
                </div>
              );
            }

            // Normal Case Study Card
            const cs = item as CaseStudy;
            return (
              <div 
                key={cs.id}
                onClick={() => setActiveCase(cs)}
                className="w-full flex-shrink-0 flex flex-col lg:flex-row cursor-pointer group min-w-0"
              >
                {/* Left Side: Context & Title */}
                <div className="flex-1 min-w-0 p-6 md:p-16 lg:p-20 flex flex-col justify-center relative bg-white">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal bg-brand-teal-surface px-4 py-2 rounded-full border border-brand-teal/20">
                        {cs.category}
                      </span>
                      <div className="h-[1px] w-12 bg-slate-200 hidden md:block"></div>
                      <span className="text-xs font-semibold text-brand-slate-muted hidden md:flex items-center gap-2">
                        {cs.client.startsWith('Cliente área:') ? (
                          <>Área: <span className="text-brand-slate-dark">{cs.client.replace('Cliente área:', '').trim()}</span></>
                        ) : (
                          <>Cliente: <span className="text-brand-slate-dark">{cs.client}</span></>
                        )}
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-slate-dark leading-[1.15] tracking-tight group-hover:text-brand-teal transition-colors duration-500 mb-8 max-w-2xl">
                      {cs.title}
                    </h3>

                    {/* Mobile Client (shown only on small screens) */}
                    <p className="md:hidden text-xs font-semibold text-brand-slate-muted mb-8">
                      {cs.client.startsWith('Cliente área:') ? (
                        <>Área: <span className="text-brand-slate-dark">{cs.client.replace('Cliente área:', '').trim()}</span></>
                      ) : (
                        <>Cliente: <span className="text-brand-slate-dark">{cs.client}</span></>
                      )}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-slate-dark group-hover:text-brand-teal transition-colors duration-300">
                      VER DETALLES DEL CASO
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Monumental Result */}
                <div className="w-full lg:w-[45%] bg-brand-cream border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center p-6 md:p-16 lg:p-20 relative overflow-hidden group-hover:bg-brand-teal-surface/30 transition-colors duration-700">
                  <div className="relative z-10">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-teal mb-4 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-brand-teal inline-block"></span>
                      Impacto Comprobado
                    </p>
                    <p className="text-2xl md:text-4xl font-heading font-black text-brand-slate-dark leading-[1.2] tracking-tight">
                      {cs.stats.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === idx 
                ? 'w-8 bg-brand-teal' 
                : 'w-2 bg-slate-200 hover:bg-brand-teal/50'
            }`}
            aria-label={`Ir al caso ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide-over details Modal */}
      {activeCase && (
        <div className="fixed inset-0 bg-brand-slate-dark/45 backdrop-blur-xs z-50 flex justify-end items-center transition-all duration-300">
          <div className="absolute inset-0" onClick={() => setActiveCase(null)} />

          <div className="relative w-full max-w-xl bg-brand-cream h-full shadow-2xl flex flex-col justify-between p-8 md:p-12 overflow-y-auto animate-infinite">
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-6 right-6 text-2xl font-light hover:text-brand-teal text-brand-slate-muted transition-colors"
            >
              ✕
            </button>

            <div className="space-y-8 mt-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal bg-brand-teal-surface border border-brand-teal/25 px-3.5 py-1 rounded-full">
                  {activeCase.category.toUpperCase()}
                </span>
                <h3 className="font-heading text-3xl font-extrabold text-brand-slate-dark mt-4">
                  {activeCase.title}
                </h3>
                <p className="text-sm text-brand-slate-muted font-semibold mt-1">
                  {activeCase.client.startsWith('Cliente área:') ? (
                    <>Área: <span className="text-brand-slate-dark">{activeCase.client.replace('Cliente área:', '').trim()}</span></>
                  ) : (
                    <>Cliente: <span className="text-brand-slate-dark">{activeCase.client}</span></>
                  )}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6 space-y-6">
                <div>
                  <h4 className="font-heading text-xs font-extrabold text-brand-slate-dark tracking-wider uppercase mb-1">
                    El Desafío Estratégico
                  </h4>
                  <p className="text-xs text-brand-slate-muted leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-extrabold text-brand-slate-dark tracking-wider uppercase mb-1">
                    La Solución & Despliegue de Mejora
                  </h4>
                  <p className="text-xs text-brand-slate-muted leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-extrabold text-brand-slate-dark tracking-wider uppercase mb-1">
                    Impacto Comprobado
                  </h4>
                  <p className="text-xs text-brand-slate-muted leading-relaxed">
                    {activeCase.result}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold text-brand-teal uppercase tracking-widest">
                  Métrica Principal
                </p>
                <p className="text-lg font-heading font-black text-brand-slate-dark">
                  {activeCase.stats.label}
                </p>
              </div>
              <div className="bg-brand-teal text-white font-heading font-extrabold px-5 py-2.5 rounded-lg shadow-sm">
                {activeCase.stats.value}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

