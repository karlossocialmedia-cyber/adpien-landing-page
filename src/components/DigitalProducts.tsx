import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

export default function DigitalProducts() {
  return (
    <section 
      id="productos-digitales" 
      className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center w-full max-w-[1200px] mx-auto py-16 px-5 relative"
    >
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* COLUMNA IZQUIERDA (Textos y Botones) */}
      <div className="digital-textos space-y-8 text-left w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-600/20">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
            Productos digitales con entrega automática
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Vende tus productos digitales <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-electric-cyan">en segundos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Ebooks, cursos, plantillas, recetarios, guías. Tu cliente paga y recibe el archivo al instante — aunque sea de madrugada, aunque estés durmiendo. Sin mandar links por WhatsApp, sin enviar emails uno por uno.
          </p>
        </div>

        {/* Fila de 3 viñetas con iconos de check oscuros */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-slate-300 py-2">
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-medium">Sin comisiones por cobro</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-medium">Prueba 14 días gratis</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-medium">Entrega automática apenas el cliente paga</span>
          </div>
        </div>

        {/* Botón de Contacto WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="https://wa.me/50372332152?text=Hola,%20quisiera%20más%20información%20sobre%20la%20Venta%20de%20Productos%20Digitales%20con%20Entrega%20Automática."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-300 text-center"
          >
            <MessageCircle className="h-5 w-5 fill-current text-white" />
            ¡Hablemos por WhatsApp!
          </a>
        </div>
      </div>

      {/* COLUMNA DERECHA (Contenedor de Imagen de App) */}
      <div className="digital-imagen-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="https://i.ibb.co/dwQjsGSC/image-92585192-1.png" 
          alt="Soluciones Multi-App ADPIEN" 
          style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
