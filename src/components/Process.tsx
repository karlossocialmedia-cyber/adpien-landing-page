import React from 'react';
import { Sparkles, MessageSquare, Layers, Radio, Globe } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Comercial",
      description: "Nos cuentas de qué trata tu negocio por WhatsApp y definimos las herramientas que necesitas (Catálogo, Caja o Reservas) sin pagar de más.",
      icon: MessageSquare,
      color: "from-blue-500/20 to-indigo-500/10 text-blue-400"
    },
    {
      number: "02",
      title: "Diseño y Maquetación",
      description: "Creamos la interfaz visual de tu app. Te enviamos un demo interactivo privado para que lo pruebes en tu celular y nos des el visto bueno.",
      icon: Layers,
      color: "from-purple-500/20 to-indigo-500/10 text-purple-400"
    },
    {
      number: "03",
      title: "Conexión Automatizada",
      description: "Conectamos tu sistema a las alertas automáticas de WhatsApp y pasarelas de pago para que recibas pedidos ordenados al instante.",
      icon: Radio,
      color: "from-pink-500/20 to-purple-500/10 text-pink-400"
    },
    {
      number: "04",
      title: "¡Lanzamiento Mundial! 🚀",
      description: "Subimos tu aplicación a internet con tu propio dominio y te entregamos un código QR de acceso directo para tu local. ¡Listo para vender!",
      icon: Globe,
      color: "from-teal-500/20 to-emerald-500/10 text-teal-400"
    }
  ];

  return (
    <section 
      id="como-funciona" 
      className="py-24 bg-black relative border-t border-slate-900 overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <span className="text-xs font-bold tracking-widest text-electric-blue uppercase block text-center mb-3">
          Nuestro Proceso
        </span>

        {/* Title principal */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center font-display tracking-tight text-white mb-4">
          ¿Cómo funciona{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-400 to-purple-500 font-display">
            ADPIEN
          </span>
          ?<br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 font-display mt-2 block">
            Tu negocio digital en 4 pasos
          </span>
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base">
          Desarrollamos soluciones digitales a medida con un flujo ágil, directo y sin complicaciones, asegurando que participes activamente en cada etapa de la creación.
        </p>

        {/* Responsive Grid Layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6" 
          id="proceso-cards-container"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                id={`proceso-step-${step.number}`}
                className="group relative rounded-2xl border border-slate-800/60 p-6 md:p-8 transition-all duration-300 hover:border-electric-blue/70 hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] flex flex-col justify-between"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
              >
                <div>
                  {/* Step Header with Icon and Big Electric Blue Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-electric-blue/30 transition-colors duration-300`}>
                      <IconComponent className="h-6 w-6 text-slate-300 group-hover:text-electric-cyan transition-colors" />
                    </div>
                    <span className="text-4xl font-black text-electric-blue font-mono tracking-tighter opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-electric-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative border line animation effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
