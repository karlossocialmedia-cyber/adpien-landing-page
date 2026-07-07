import React, { useState } from 'react';
import { 
  Check, 
  MessageCircle, 
  Play, 
  QrCode, 
  ShoppingBag, 
  Tag, 
  CheckCircle2, 
  TrendingUp, 
  Search,
  Plus,
  Coins,
  FileText,
  BarChart3,
  Bell
} from 'lucide-react';

export default function OnlineStores() {
  // Micro-state for the interactive phone mockup
  const [cartCount, setCartCount] = useState(2);
  const [totalPrice, setTotalPrice] = useState(12.50);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddItem = (itemName: string, price: number) => {
    setCartCount(prev => prev + 1);
    setTotalPrice(prev => prev + price);
    setAddedItem(itemName);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section 
      id="tiendas-online" 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '60px 20px' 
      }}
    >
      {/* Decorative Neon Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      {/* COLUMNA IZQUIERDA: Textos y Botones */}
      <div className="tienda-textos space-y-8 text-left w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-electric-cyan">
            Tu tienda online, sin comisiones
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Crea tu tienda online y <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">empieza a vender</span> hoy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Publica tu catálogo en minutos, recibe pedidos ordenados por WhatsApp, cobra con pasarelas locales y controla tu negocio desde un solo panel.
          </p>
        </div>

        {/* Viñetas con Checks */}
        <div className="space-y-3.5" id="tiendas-bullets">
          <div className="flex items-center gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors group-hover:bg-emerald-500/30">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-slate-200 font-medium text-sm sm:text-base">Sin comisiones por venta</span>
          </div>
          
          <div className="flex items-center gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors group-hover:bg-emerald-500/30">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-slate-200 font-medium text-sm sm:text-base">Catálogo auto-administrable</span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors group-hover:bg-emerald-500/30">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-slate-200 font-medium text-sm sm:text-base">Pedidos directo a tu WhatsApp</span>
          </div>
        </div>

        {/* Botón de Contacto WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2" id="tiendas-actions">
          <a
            href="https://wa.me/50372332152?text=Hola,%20quisiera%20más%20información%20sobre%20la%20creación%20de%20mi%20Tienda%20Online."
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5 fill-current text-white" />
            ¡Hablemos por WhatsApp!
          </a>
        </div>
      </div>

      {/* COLUMNA DERECHA: Tu Imagen Oficial */}
      <div className="tienda-imagen-wrapper relative z-10" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img 
          src="https://i.ibb.co/hJyn6n8X/tienda-hero-removebg-preview-2.png" 
          alt="Tiendas Online ADPIEN" 
          style={{ width: '100%', maxWidth: '480px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))' }}
          referrerPolicy="no-referrer"
        />
      </div>

    </section>
  );
}
