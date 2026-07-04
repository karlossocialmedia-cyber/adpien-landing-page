import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, MessageCircle, ShoppingBag, Calendar, Utensils, Download, Cpu } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-navy-dark/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
          : 'bg-navy-dark/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleItemClick('inicio')}
            id="nav-logo"
          >
            <div className="bg-electric-blue p-2 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white">
              PINEDA<span className="text-electric-blue">CODE</span>
            </span>
          </div>

          {/* Desktop Nav: horizontal menu */}
          <div 
            className="hidden md:flex items-center" 
            id="nav-links-desktop" 
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px' }}
          >
            {/* 1. Producto */}
            <div className="relative group py-2">
              <button 
                className="flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors duration-200 text-sm font-semibold cursor-pointer"
              >
                Producto
              </button>
              
              {/* Dropdown flotante para Producto */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[260px] bg-[#0f172a]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 text-left z-50 hidden group-hover:block animate-fade-in">
                <div className="space-y-2">
                  <div 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer group/item" 
                    onClick={() => handleItemClick('servicios')}
                  >
                    <div className="text-[#38bdf8] p-1.5 rounded-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-xs">Características</h5>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">Nuestra plataforma core de software</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Soluciones */}
            <div className="relative group py-2">
              <button 
                className="flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors duration-200 text-sm font-semibold cursor-pointer"
              >
                Soluciones
              </button>
              
              {/* Dropdown flotante tecnológico, oscuro, bordes redondeados y sombra suave */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[580px] bg-[#0f172a]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-5 grid grid-cols-2 gap-4 text-left z-50 hidden group-hover:grid animate-fade-in">
                {/* Tiendas online */}
                <div 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group/item" 
                  onClick={() => handleItemClick('tiendas-online')}
                >
                  <div className="text-[#38bdf8] p-2.5 rounded-xl group-hover/item:scale-110 transition-transform duration-200">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Tiendas online</h5>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Vende productos y cobra sin complicaciones</p>
                  </div>
                </div>
                
                {/* Servicios y citas */}
                <div 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group/item" 
                  onClick={() => handleItemClick('casos')}
                >
                  <div className="text-[#38bdf8] p-2.5 rounded-xl group-hover/item:scale-110 transition-transform duration-200">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Servicios y citas</h5>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Agenda, cobra y gestiona reservas en un solo lugar</p>
                  </div>
                </div>
                
                {/* Restaurantes */}
                <div 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group/item" 
                  onClick={() => handleItemClick('casos')}
                >
                  <div className="text-[#38bdf8] p-2.5 rounded-xl group-hover/item:scale-110 transition-transform duration-200">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Restaurantes</h5>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Menús, pedidos y control diario sin enredos</p>
                  </div>
                </div>
                
                {/* Productos digitales */}
                <div 
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group/item" 
                  onClick={() => handleItemClick('casos')}
                >
                  <div className="text-[#38bdf8] p-2.5 rounded-xl group-hover/item:scale-110 transition-transform duration-200">
                    <Download className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Productos digitales</h5>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">Vende desde cursos y ebooks hasta archivos descargables</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Precios */}
            <button
              onClick={() => handleItemClick('precios')}
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-semibold cursor-pointer py-2"
            >
              Precios
            </button>

            {/* 4. Link para WhatsApp */}
            <button
              onClick={() => handleItemClick('cotizador')}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold cursor-pointer py-2 px-5 rounded-full flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4 text-white fill-white" /> Link para WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" id="nav-menu-mobile-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-navy-dark border-b border-slate-800 shadow-2xl overflow-y-auto max-h-[85vh] animate-fade-in"
          id="nav-menu-mobile-container"
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Producto Group */}
            <div className="space-y-1">
              <div className="px-4 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Producto
              </div>
              <button
                onClick={() => handleItemClick('servicios')}
                className="block w-full text-left px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                ⚙️ Características
              </button>
            </div>

            {/* Soluciones Group */}
            <div className="space-y-1">
              <div className="px-4 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Soluciones
              </div>
              <button
                onClick={() => handleItemClick('tiendas-online')}
                className="block w-full text-left px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                🛒 Tiendas online
              </button>
              <button
                onClick={() => handleItemClick('casos')}
                className="block w-full text-left px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                📅 Servicios y citas
              </button>
              <button
                onClick={() => handleItemClick('casos')}
                className="block w-full text-left px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                🍴 Restaurantes
              </button>
              <button
                onClick={() => handleItemClick('casos')}
                className="block w-full text-left px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                📥 Productos digitales
              </button>
            </div>

            {/* Precios */}
            <div className="pt-2">
              <button
                onClick={() => handleItemClick('precios')}
                className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Precios
              </button>
            </div>

            {/* Link para WhatsApp */}
            <div className="pt-2">
              <button
                onClick={() => handleItemClick('cotizador')}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-white fill-white" /> Link para WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
