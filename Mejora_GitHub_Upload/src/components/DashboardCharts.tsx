import React from 'react';

const STATS = [
  { value: '+20M', label: 'En publicity mensual' },
  { value: '+35', label: 'Clientes impactados' },
  { value: '20+', label: 'Años de experiencia' },
  { value: '+95', label: 'Voceros entrenados' },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-16 mb-16">
      {STATS.map((stat, index) => (
        <div key={index} className="bg-white px-4 md:px-6 py-12 md:py-16 flex flex-col items-center justify-center text-center border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-teal/20 transition-all duration-300 group">
          <p className="text-5xl md:text-[64px] xl:text-[80px] leading-none font-heading font-black text-brand-slate-dark tracking-tighter mb-4 md:mb-6 group-hover:text-brand-teal transition-colors duration-300">
            {stat.value}
          </p>
          <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-brand-slate-muted group-hover:text-brand-slate-dark transition-colors duration-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
