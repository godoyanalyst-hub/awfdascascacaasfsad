import React from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'René Larraín',
    position: 'Gerente Regional de Ventas Chile Perú Brasil',
    initials: 'RL',
    color: 'from-blue-500 to-cyan-400',
    text: [
      'Tuve la oportunidad de trabajar con Paulina durante mi trabajo en Nestlé Purina Petcare Chile cuando estaba a cargo del Marketing en esta área de negocios; Paulina nos daba servicios de comunicación y desarrollo de campañas de mercadeo y relaciones públicas, integrando nuestras operaciones con los diferentes medios y organismos claves para lanzar una campaña y/o marca en el mercado chileno.',
      'Me llevo una muy grata experiencia y recuerdo de su trabajo, siempre muy profesional, totalmente al servicio del Cliente, algo difícil de encontrar en Chile, y con una excelente disposición a la búsqueda de nuevas ideas y nuevas posibilidades de desarrollo; mente abierta, rápida de ejecución y resistente a la presión, siempre con una grata sonrisa y un excelente trato, ideal para trabajar en equipo.'
    ],
    theme: 'light'
  },
  {
    id: 2,
    name: 'Carolina Guzmán',
    position: 'Psicóloga Organizacional | Ex Gerente de Personas | Headhunter',
    initials: 'CG',
    color: 'from-brand-teal to-emerald-400',
    text: [
      'He tenido la oportunidad de conocer el trabajo de Paulina Vega y la recomiendo con mucha confianza.',
      'Paulina tiene una gran capacidad para mirar estratégicamente la comunicación, entender rápido lo que una organización necesita transmitir y ayudar a convertir esas ideas en mensajes claros, consistentes y bien enfocados.',
      'Destaco especialmente su criterio, su experiencia en comunicaciones y gestión de prensa, y la forma en que acompaña los procesos: con profesionalismo, cercanía y mucho cuidado por los detalles. Se nota que entiende tanto el contenido como el contexto, algo fundamental cuando se trata de comunicar bien, posicionar una marca o relacionarse con distintos públicos.',
      'Creo que Paulina es una excelente aliada para empresas, organizaciones o profesionales que quieran fortalecer su comunicación, ordenar su relato, ganar visibilidad y transmitir con mayor claridad el valor de lo que hacen.'
    ],
    theme: 'dark'
  },
  {
    id: 3,
    name: 'Enrique Infante',
    position: 'Ex Director de la Fundación Educacional Pudahuel',
    initials: 'EI',
    color: 'from-amber-400 to-orange-500',
    text: [
      'Tuve la oportunidad de trabajar con Paulina, dónde me ayudó en lo comunicacional, a levantar un proyecto.',
      'La verdad es que su profesionalismo, visión estratégica y vinculación con los medios, fueron claves para lograr posicionar nuestra idea, que finalmente fue un éxito y logró los objetivos que nos habíamos propuesto desde el inicio.'
    ],
    theme: 'light'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative" id="testimonios">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-extrabold uppercase tracking-widest mb-4">
          <Quote size={12} fill="currentColor" /> Respaldo Directo
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-slate-dark mt-2 mb-6">
          La voz de <span className="text-brand-teal italic font-medium">nuestros clientes</span>
        </h2>
        <p className="text-[#1a1a1a] text-lg lg:text-xl font-medium leading-[1.75] max-w-[620px] mx-auto">
          No solo construimos reputación, también construimos relaciones de largo plazo basadas en resultados y confianza.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {TESTIMONIALS.map((testimonial, idx) => {
          const isDark = testimonial.theme === 'dark';
          
          return (
            <div 
              key={testimonial.id} 
              className={`
                relative rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full
                ${isDark 
                  ? 'bg-brand-slate-dark text-white shadow-2xl shadow-brand-slate-dark/20 lg:-mt-8 lg:mb-8 border border-brand-slate-dark/50' 
                  : 'bg-white text-brand-slate-dark shadow-xl shadow-slate-200/50 border border-slate-100'}
              `}
            >
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br ${testimonial.color} shadow-lg shrink-0`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className={`font-heading font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-brand-slate-dark'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-xs font-bold uppercase tracking-wider mt-1 line-clamp-2 ${isDark ? 'text-brand-teal-surface' : 'text-brand-teal'}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Decorative Quote Icon (moved to left and subtle) */}
              <div className="mb-6">
                <Quote size={32} className={`${isDark ? 'text-brand-teal/40' : 'text-slate-200'} rotate-180 transform`} fill="currentColor" />
              </div>
              
              {/* Testimonial Text */}
              <div className="flex-grow space-y-4">
                {testimonial.text.map((paragraph, pIdx) => (
                  <p 
                    key={pIdx} 
                    className={`text-sm md:text-base leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
