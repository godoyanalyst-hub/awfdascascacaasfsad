import React, { useState } from 'react';
import { METHOD_STEPS } from '../data';

export default function MethodologyTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* Tab Selectors list */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-2">
        {METHOD_STEPS.map((step, idx) => {
          const isActive = activeTab === idx;

          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left p-6 border-l-3 transition-all duration-300 rounded-r-xl ${
                isActive
                  ? 'border-brand-teal bg-white text-brand-slate-dark shadow-sm'
                  : 'border-transparent text-brand-slate-muted hover:bg-white/40 hover:text-brand-slate-dark'
              }`}
            >
              <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-1 ${
                isActive ? 'text-brand-teal' : 'text-brand-slate-muted'
              }`}>
                {step.phase}
              </span>
              <span className="font-heading font-bold text-base block">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Tab content display */}
      <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 border border-slate-100 rounded-2xl shadow-sm min-h-[380px] flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-300">
        <div className="space-y-6">
          <div className="flex justify-between items-start flex-wrap gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-teal text-brand-teal">
                PROCESO DE CONFIANZA
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-brand-slate-dark mt-1">
                {METHOD_STEPS[activeTab].title}
              </h3>
            </div>
            
            <div className="bg-brand-cream border border-slate-200 text-brand-slate-dark font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded-full select-none">
              ⏱ {METHOD_STEPS[activeTab].duration}
            </div>
          </div>

          <p className="text-xs text-brand-slate-muted leading-relaxed">
            {METHOD_STEPS[activeTab].description}
          </p>

          <div className="mt-6">
            <p className="text-[10px] font-bold text-brand-slate-dark uppercase tracking-wider mb-3">
              Actividades y Entregables Clave:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {METHOD_STEPS[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-start text-xs text-brand-slate-muted">
                  <span className="text-brand-teal mr-2.5 font-bold select-none text-sm leading-none">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic timeline indicator bars at the bottom */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[9px] font-semibold text-brand-slate-muted uppercase tracking-wider">
            Siguiente Paso: {activeTab === METHOD_STEPS.length - 1 ? 'Lanzamiento Inicial' : METHOD_STEPS[activeTab + 1].title}
          </span>
          
          <div className="flex items-center gap-2">
            {METHOD_STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeTab ? 'w-8 bg-brand-teal' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
