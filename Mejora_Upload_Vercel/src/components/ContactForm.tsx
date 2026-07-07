import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const serviceOptions = [
    { value: 'pr-prensa', label: 'Gestión de prensa & Relaciones Públicas' },
    { value: 'estrategia-digital', label: 'Generación de contenido SEO, GEO e IA' },
    { value: 'crisis', label: 'Gestión de Crisis, Reputación y Control de Daños' },
    { value: 'media-training', label: 'Media Training Ejecutivo y Entrenamiento de Vocerías' },
    { value: 'otros', label: 'Otra consulta / Asesoría General' }
  ];
  const [selectedServiceLabel, setSelectedServiceLabel] = useState(serviceOptions[0].label);

  const handleSelectService = (value: string) => {
    setSelectedServiceLabel(serviceOptions.find(opt => opt.value === value)?.label || '');
    setDropdownOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('paulina.mejoracomunicaciones@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de correo electrónico inválido.';
    }
    if (!formData.message.trim()) newErrors.message = 'Por favor, describe brevemente tu requerimiento.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/paulina.mejoracomunicaciones@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Empresa: formData.company || 'No especificada',
          Correo: formData.email,
          'Área de Interés': selectedServiceLabel,
          Mensaje: formData.message,
          _subject: 'Nuevo mensaje - Mejora Comunicaciones'
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto" id="contacto-seccion">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-start">
        
        {/* Left Column: Typography & Info */}
        <div className="lg:col-span-2 flex flex-col justify-center lg:sticky lg:top-32 space-y-12">
          <div>
            <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Conversemos. <span className="text-brand-teal italic font-medium">Agenda una reunión.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-[1.75] mt-8 lg:max-w-[620px] font-light">
              Podemos definir tu hoja de ruta y detectar oportunidades de posicionamiento, visibilidad y protección reputacional.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-800/50">
            <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-500 mb-4">Contacto Directo</p>
            <div 
              className="group cursor-pointer inline-flex items-center gap-4 bg-slate-800/30 hover:bg-slate-800/80 border border-slate-700/50 hover:border-brand-teal/50 transition-all duration-300 p-2.5 pr-6 rounded-full" 
              onClick={copyToClipboard}
            >
              <div className="w-12 h-12 bg-slate-700/50 group-hover:bg-brand-teal transition-colors duration-300 rounded-full flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-mono text-xs sm:text-sm text-white group-hover:text-brand-teal transition-colors duration-300 truncate">
                  paulina.mejoracomunicaciones@gmail.com
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1 transition-colors duration-300">
                  {copied ? '¡Copiado al portapapeles!' : 'Haz clic para copiar'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form */}
        <div className="lg:col-span-3 lg:pl-12">
          <div className="bg-slate-900/40 backdrop-blur-3xl border border-slate-800/60 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
            
            {submitError && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-2xl z-20 text-sm text-center animate-fade-in">
                Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbenos directamente al correo.
              </div>
            )}
            
            {success ? (
              <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-12 text-center animate-fade-in rounded-[3rem]">
                <div className="w-24 h-24 bg-brand-teal/10 text-brand-teal flex items-center justify-center rounded-full mb-8 border border-brand-teal/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-heading text-4xl font-extrabold text-white mb-4">
                  Mensaje Recibido
                </h4>
                <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed">
                  Gracias por tu interés. Revisaré tus requerimientos detalladamente y me pondré en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-10 text-[11px] text-brand-teal font-extrabold tracking-[0.2em] uppercase hover:text-white transition-colors px-8 py-4 border border-brand-teal/30 hover:border-brand-teal rounded-full"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b-2 border-slate-700/50 py-3 px-0 text-base text-white focus:outline-none focus:ring-0 focus:border-brand-teal transition-colors peer"
                  />
                  <label htmlFor="name" className="absolute text-xs uppercase tracking-[0.15em] font-bold text-slate-500 duration-300 transform -translate-y-7 top-7 -z-10 origin-[0] peer-focus:text-brand-teal peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-7 peer-focus:text-xs">
                    Tu Nombre Completo
                  </label>
                  {errors.name && <p className="text-[10px] text-red-400 mt-2 absolute">{errors.name}</p>}
                </div>
                
                <div className="relative group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b-2 border-slate-700/50 py-3 px-0 text-base text-white focus:outline-none focus:ring-0 focus:border-brand-teal transition-colors peer"
                  />
                  <label htmlFor="company" className="absolute text-xs uppercase tracking-[0.15em] font-bold text-slate-500 duration-300 transform -translate-y-7 top-7 -z-10 origin-[0] peer-focus:text-brand-teal peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-7 peer-focus:text-xs">
                    Empresa <span className="font-normal opacity-50">(Opcional)</span>
                  </label>
                </div>
              </div>

              <div className="relative group pt-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="block w-full bg-transparent border-0 border-b-2 border-slate-700/50 py-3 px-0 text-base text-white focus:outline-none focus:ring-0 focus:border-brand-teal transition-colors peer"
                />
                <label htmlFor="email" className="absolute text-xs uppercase tracking-[0.15em] font-bold text-slate-500 duration-300 transform -translate-y-7 top-7 -z-10 origin-[0] peer-focus:text-brand-teal peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-7 peer-focus:text-xs">
                  Correo Electrónico
                </label>
                {errors.email && <p className="text-[10px] text-red-400 mt-2 absolute">{errors.email}</p>}
              </div>

              <div className="relative group pt-5">
                <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-500 mb-2">Área de Interés Principal</label>
                <div className="relative">
                  <div 
                    className="w-full bg-transparent border-0 border-b-2 border-slate-700/50 py-3 px-0 text-base text-white cursor-pointer flex justify-between items-center group-hover:border-brand-teal transition-colors"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedServiceLabel}</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 animate-fade-in">
                      {serviceOptions.map((opt) => (
                        <div
                          key={opt.value}
                          className="px-5 py-4 text-sm text-slate-300 hover:bg-slate-700/80 hover:text-white cursor-pointer transition-colors border-b last:border-0 border-slate-700/30"
                          onClick={() => handleSelectService(opt.value)}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative group pt-5">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder=" "
                  className="block w-full bg-transparent border-0 border-b-2 border-slate-700/50 py-3 px-0 text-base text-white focus:outline-none focus:ring-0 focus:border-brand-teal transition-colors peer resize-none"
                />
                <label htmlFor="message" className="absolute text-xs uppercase tracking-[0.15em] font-bold text-slate-500 duration-300 transform -translate-y-7 top-7 -z-10 origin-[0] peer-focus:text-brand-teal peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-7 peer-focus:text-xs">
                  Describe tu proyecto o requerimiento actual...
                </label>
                {errors.message && <p className="text-[10px] text-red-400 mt-2 absolute">{errors.message}</p>}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-extrabold text-[11px] uppercase tracking-[0.2em] py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-brand-teal/50 text-slate-800 cursor-not-allowed' 
                      : 'bg-brand-teal hover:bg-brand-teal-light text-slate-900 shadow-[0_0_30px_rgba(16,163,151,0.2)] hover:shadow-[0_0_40px_rgba(16,163,151,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Solicitar Evaluación Estratégica
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
