import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Home,
  Printer,
  ShoppingCart,
  Utensils,
  Flame,
  Wrench,
  Shirt
} from 'lucide-react';

export default function NavbarPublico() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'ADSPIEN', path: '/adspien-imprenta', icon: Printer, bgClass: 'bg-purple-600 text-white hover:bg-purple-700' },
    { name: 'AdpiMarket', path: '/adpimarket', icon: ShoppingCart, bgClass: 'bg-blue-600 text-white hover:bg-blue-700' },
    { name: 'AdpiRest', path: '/adpirest', icon: Utensils, bgClass: 'bg-orange-500 text-white hover:bg-orange-600' },
    { name: 'Adfood', path: '/adfood', icon: Flame, bgClass: 'bg-red-600 text-white hover:bg-red-700' },
    { name: 'AdpiGar', path: '/adpigar', icon: Wrench, bgClass: 'bg-amber-400 text-neutral-900 hover:bg-amber-500' },
    { name: 'AdpiWear', path: '/adpiwear', icon: Shirt, bgClass: 'bg-emerald-600 text-white hover:bg-emerald-700' },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white border-b border-neutral-100 shadow-sm ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
              <div className="h-9 w-auto flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="h-8 w-auto text-slate-950" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="adpienLogoGradPublic" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="40%" stopColor="#0066ff" />
                      <stop offset="70%" stopColor="#7c3bed" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 25 80 C 25 80 25 45 35 40 C 45 35 55 35 65 42 C 75 50 78 68 62 75 C 46 82 35 70 38 58 C 42 45 58 48 72 40 L 85 30"
                    stroke="url(#adpienLogoGradPublic)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 70 30 L 85 30 L 85 45"
                    stroke="url(#adpienLogoGradPublic)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-neutral-900">
                AD<span className="text-purple-600 drop-shadow-[0_0_8px_rgba(168,85,247,0.2)]">PIEN</span>
              </span>
            </Link>

            {/* Desktop Nav - Cleaned Up (Only logo, 'Inicio' and green WhatsApp button) */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-neutral-900 hover:text-emerald-600 font-semibold text-sm transition-colors">
                Inicio
              </Link>

              {/* Contact WhatsApp */}
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 px-5 rounded-full flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 text-white fill-white" /> WhatsApp
              </a>
            </div>

            {/* Mobile hamburger menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-800 hover:text-emerald-600 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* PC Floating Right Sidebar Component (md: and above) */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col space-y-3.5 z-50 items-end">
        {solutions.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link 
              key={item.path}
              to={item.path} 
              className="flex items-center gap-2 group transition-all duration-300 hover:-translate-x-1"
            >
              {/* Circle (Left) */}
              <span className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md border border-neutral-100/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <IconComponent className="h-4.5 w-4.5 text-neutral-800" />
              </span>
              {/* Capsule (Right) */}
              <span className={`px-4 py-2 rounded-full font-bold text-sm shadow-sm transition-all duration-300 ${item.bgClass} group-hover:shadow-md min-w-[130px] text-center`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer (bg-white w-64, right-0 top-0, listed ordered spacious) */}
      <div 
        className={`fixed right-0 top-0 h-full w-64 bg-white z-50 p-6 shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
          <span className="font-display font-extrabold text-xl tracking-tight text-neutral-900">
            AD<span className="text-purple-600">PIEN</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-neutral-500 hover:text-neutral-900 p-1 focus:outline-none transition-colors" 
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Vertical ordered, spacious color-coded solutions blocks */}
        <div className="flex flex-col gap-3.5 flex-1 overflow-y-auto">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="text-neutral-900 hover:text-emerald-600 font-semibold text-sm transition-colors flex items-center gap-2 px-3 py-2 hover:bg-neutral-50 rounded-xl"
          >
            <Home className="h-4 w-4 text-neutral-500" />
            <span>Inicio</span>
          </Link>
          
          <div className="h-px bg-neutral-100 my-1" />
          
          <div className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase px-3">
            Soluciones Especiales
          </div>

          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm shadow-xs transition-transform hover:scale-[1.02] ${item.bgClass}`}
              >
                <IconComponent className="h-4.5 w-4.5 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* WhatsApp CTA at the bottom */}
        <div className="mt-auto border-t border-neutral-100 pt-5">
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4.5 w-4.5 text-white fill-white" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
