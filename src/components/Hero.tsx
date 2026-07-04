import React from 'react';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <>
      <section id="inicio" className="relative pt-32 pb-12 overflow-hidden bg-navy-dark">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        
        {/* Decorative Dotted Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 flex flex-col items-center justify-center" id="hero-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-cyan text-sm font-semibold tracking-wide animate-fade-in" id="hero-tag">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>Agencia de Software Premium</span>
            </div>

            {/* Main Headline & Slogan */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                {/* Slogan adaptation */}
                Llevamos tu negocio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-500 to-electric-cyan">
                  al siguiente nivel
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Desarrollamos software a medida, aplicaciones web de alta velocidad y plataformas de e-commerce conectadas a WhatsApp que multiplican tus ventas y automatizan tus operaciones cotidianas.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('cotizador')}
                className="w-full sm:w-auto bg-electric-blue hover:bg-electric-blue/90 text-white font-bold px-8 py-4 rounded-xl text-md shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Cotizar Proyecto Gratis
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('casos')}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold px-8 py-4 rounded-xl text-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                Ver Demostraciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Continuous Mobile Phone Mockup Carousel */}
      <section className="carousel-section">
        <div className="carousel-title">
          <h3>Soluciones a la medida de cada rubro</h3>
        </div>
        
        <div className="infinite-carousel-container select-none">
          {/* Edge shadow fades to hide cutoff beautifully */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none"></div>

          <div className="carousel-track">
            {/* Primer grupo de tarjetas */}
            <div className="carousel-card">
              <h4>Dulcería</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_dulceria_1783107185110.jpg" alt="App Dulcería" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Comida Rápida</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_comida_rapida_1783107202989.jpg" alt="App Burgers" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Manicure</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_manicure_1783107216506.jpg" alt="App Nails" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Maquillaje</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_maquillaje_1783107227201.jpg" alt="App Makeup" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Gimnasio</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/business_app_booking_1783060903033.jpg" alt="App Gym" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Veterinaria</h4>
              <div className="phone-mockup app-vet-petcare">
                {/* Encabezado y Barra de Estado */}
                <div className="pc-header">
                  <div className="pc-status-bar">
                    <span>9:41</span>
                    <span>📶 🔋 100%</span>
                  </div>
                  <div className="pc-welcome-row">
                    <div className="pc-welcome">Welcome <span className="pc-user">louis,</span><br /><strong>what you looking for?</strong></div>
                    <div className="pc-search-icon">🔍</div>
                  </div>
                </div>
                
                {/* Grilla de Servicios Superiores (8 Iconos) */}
                <div className="pc-services-grid">
                  <div className="pc-service-item"><span className="pc-icon ic-red">➕</span><span className="pc-lbl">Veterinary</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-orange">✂️</span><span className="pc-lbl">Grooming</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-yellow">📋</span><span className="pc-lbl">Tasks</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-brown">🥩</span><span className="pc-lbl">Pet Food</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-purple">🏠</span><span className="pc-lbl">Pet Hotel</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-pink">🦴</span><span className="pc-lbl">Adoption</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-blue">🧴</span><span className="pc-lbl">Products</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-green">🦮</span><span className="pc-lbl">Training</span></div>
                </div>

                {/* Sección Explore con Banner de Mascota */}
                <div className="pc-section-title">Explore</div>
                <div className="pc-explore-banner">
                  <div className="pc-banner-text">5 ways in which dogs keep you in good health.</div>
                  <div className="pc-banner-img">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&auto=format&fit=crop&q=80" alt="Dog" referrerPolicy="no-referrer" />
                  </div>
                </div>

                {/* Sección de Tareas Pendientes (Pending Task) */}
                <div className="pc-section-title">Pending Task</div>
                <div className="pc-tasks-row">
                  <div className="pc-task-card card-orange">
                    <div className="pc-task-icon">🦮</div>
                    <div className="pc-task-info"><strong>Grooming</strong><br /><span>Scheduled at 3:30 PM<br /><small>Delayed</small></span></div>
                  </div>
                  <div className="pc-task-card card-blue">
                    <div className="pc-task-icon">🚶</div>
                    <div className="pc-task-info"><strong>Daily Walk</strong><br /><span>Scheduled at 5:30 PM<br /><small>Delayed</small></span></div>
                  </div>
                </div>

                {/* Barra de Navegación del Pie de Página */}
                <div className="pc-footer-nav">
                  <span className="pc-tab active">🏠</span>
                  <span className="pc-tab">🔍</span>
                  <span className="pc-tab">📅</span>
                  <span className="pc-tab">🕒</span>
                  <span className="pc-tab">👤</span>
                </div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Minimarket</h4>
              <div className="phone-mockup app-punto-express">
                {/* Encabezado de la App */}
                <div className="pe-header">
                  <div className="pe-logo-row">
                    <span className="pe-apple">🍎</span>
                    <div className="pe-title-wrap">
                      <div className="pe-main-title">PUNTO EXPRESS</div>
                      <div className="pe-sub-title">MINIMARKET ONLINE</div>
                    </div>
                    <span className="pe-close">✕</span>
                  </div>
                </div>
                
                {/* Bloque de Despacho */}
                <div className="pe-shipping-box">
                  <div className="pe-ship-item">🕒 <strong>Despacho express</strong><br /><span>30 - 60 min hoy mismo</span></div>
                  <div className="pe-ship-item">📍 <strong>Envío Gratis</strong><br /><span>Por compras sobre $20.000</span></div>
                </div>

                {/* Título de Categorías */}
                <div className="pe-section-title">CATEGORÍAS DE DESPENSA</div>

                {/* Lista de Categorías Reales */}
                <div className="pe-categories-list">
                  <div className="pe-cat-item active">
                    <span className="pe-cat-icon icon-red">🥩</span>
                    <div className="pe-cat-text"><strong>Carnes y Pescados</strong><br /><span>Cortes premium de vacuno, aves y pescados</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥦</span>
                    <div className="pe-cat-text"><strong>Verduras Frescas</strong><br /><span>Hortalizas, papas y hierbas rústicas</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥛</span>
                    <div className="pe-cat-text"><strong>Lácteos y Huevos</strong><br /><span>Leche, quesos, yogures y huevos</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🍞</span>
                    <div className="pe-cat-text"><strong>Panadería y Pastelería</strong><br /><span>Pan fresco del día y bollería</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥫</span>
                    <div className="pe-cat-text"><strong>Despensa (Abarrotes)</strong><br /><span>Arroz, aceites, pastas y salsas</span></div>
                  </div>
                </div>

                {/* Botón Inferior de Atención */}
                <div className="pe-footer-btn">🏠 Atención al Cliente Inmediata</div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Imprenta y Publicidad</h4>
              <div className="phone-mockup app-macprint-clon">
                {/* Barra Superior */}
                <div className="mp-nav">
                  <span className="mp-menu">☰</span>
                  <div className="mp-logo-circle">M</div>
                  <span className="mp-cart">🛒 <small>1</small></span>
                </div>
                
                {/* Cuerpo del Catálogo */}
                <div className="mp-grid">
                  <div className="mp-item">
                    <div className="mp-badge">Popular</div>
                    <div className="mp-icon-box">🪪</div>
                    <div className="mp-name">Tarjetas de Presentación x100</div>
                    <div className="mp-price">$8.900</div>
                    <div className="mp-btn">COMPRAR ❯</div>
                  </div>
                  
                  <div className="mp-item">
                    <div className="mp-badge-premium">Premium</div>
                    <div className="mp-icon-box">📜</div>
                    <div className="mp-name">Pendón Roller 80x200cm</div>
                    <div className="mp-price">$49.900</div>
                    <div className="mp-btn">COMPRAR ❯</div>
                  </div>
                </div>

                {/* Botón Flotante de WhatsApp */}
                <div className="mp-ws-btn">💬</div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Contabilidad Pymes</h4>
              <div className="phone-mockup app-finance-nexora">
                {/* Encabezado de la App */}
                <div className="nx-header">
                  <div className="nx-status-bar">
                    <span>16:26</span>
                    <span>📶 🔋 95%</span>
                  </div>
                  <div className="nx-brand-row">
                    <div className="nx-brand">☰ <strong>Nexora</strong></div>
                    <div className="nx-icons"><span>🔔</span> <span>⁝</span></div>
                  </div>
                </div>

                {/* Bloque de Saldo Principal */}
                <div className="nx-balance-box">
                  <span className="nx-lbl">Your Total Portfolio Value</span>
                  <h2 className="nx-amount">$186,486.28</h2>
                  <div className="nx-stats-row">
                    <span className="nx-badge-green">📈 +4.73%</span>
                    <span className="nx-stat-txt">+$1,286 • Today</span>
                  </div>
                </div>

                {/* Fila de Botones de Acción Redondeados */}
                <div className="nx-actions-row">
                  <div className="nx-act-btn"><span>📈</span> Invest</div>
                  <div className="nx-act-btn"><span>+</span> Add Fund</div>
                  <div className="nx-act-btn"><span>📥</span> Withdraw</div>
                </div>

                {/* Listado de Activos / Top Holdings */}
                <div className="nx-section-title">
                  <span>Top Holdings</span>
                  <a href="#">See All</a>
                </div>
                
                <div className="nx-holdings-list">
                  <div className="nx-item">
                    <div className="nx-item-left">
                      <div className="nx-avatar avatar-blue">CG</div>
                      <div><strong>COINBASE GLOBAL</strong><br /><span className="nx-sub">COIN</span></div>
                    </div>
                    <div className="nx-item-right"><strong>$12,236.12</strong><br /><span className="nx-txt-green">↗ +3.16%</span></div>
                  </div>
                  <div className="nx-item">
                    <div className="nx-item-left">
                      <div className="nx-avatar avatar-purple">MS</div>
                      <div><strong>MICROSTRATEGY</strong><br /><span className="nx-sub">MSTR</span></div>
                    </div>
                    <div className="nx-item-right"><strong>$18,632.89</strong><br /><span className="nx-txt-green">↗ +2.12%</span></div>
                  </div>
                </div>

                {/* Gráfico de Barras Estadístico Inferior */}
                <div className="nx-chart-box">
                  <div className="nx-chart-bars">
                    <div className="nx-bar" style={{ height: '35%' }}><span>JAN</span></div>
                    <div className="nx-bar" style={{ height: '50%' }}><span>FEB</span></div>
                    <div className="nx-bar" style={{ height: '45%' }}><span>MAR</span></div>
                    <div className="nx-bar" style={{ height: '85%' }}><span>APR</span></div>
                    <div className="nx-bar" style={{ height: '70%' }}><span>MAY</span></div>
                    <div className="nx-bar" style={{ height: '40%' }}><span>JUN</span></div>
                  </div>
                </div>

                {/* Barra de Navegación del Pie de Página */}
                <div className="nx-footer-nav">
                  <span className="nx-tab active">🏠</span>
                  <span className="nx-tab">🔍</span>
                  <span className="nx-tab">📊</span>
                  <span className="nx-tab">🕒</span>
                  <span className="nx-tab">👤</span>
                </div>
              </div>
            </div>
            
            {/* Duplicado idéntico para el efecto infinito */}
            <div className="carousel-card">
              <h4>Dulcería</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_dulceria_1783107185110.jpg" alt="App Dulcería" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Comida Rápida</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_comida_rapida_1783107202989.jpg" alt="App Burgers" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Manicure</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_manicure_1783107216506.jpg" alt="App Nails" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Maquillaje</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/app_maquillaje_1783107227201.jpg" alt="App Makeup" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Gimnasio</h4>
              <div className="phone-mockup">
                <img src="/src/assets/images/business_app_booking_1783060903033.jpg" alt="App Gym" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="carousel-card">
              <h4>Veterinaria</h4>
              <div className="phone-mockup app-vet-petcare">
                {/* Encabezado y Barra de Estado */}
                <div className="pc-header">
                  <div className="pc-status-bar">
                    <span>9:41</span>
                    <span>📶 🔋 100%</span>
                  </div>
                  <div className="pc-welcome-row">
                    <div className="pc-welcome">Welcome <span className="pc-user">louis,</span><br /><strong>what you looking for?</strong></div>
                    <div className="pc-search-icon">🔍</div>
                  </div>
                </div>
                
                {/* Grilla de Servicios Superiores (8 Iconos) */}
                <div className="pc-services-grid">
                  <div className="pc-service-item"><span className="pc-icon ic-red">➕</span><span className="pc-lbl">Veterinary</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-orange">✂️</span><span className="pc-lbl">Grooming</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-yellow">📋</span><span className="pc-lbl">Tasks</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-brown">🥩</span><span className="pc-lbl">Pet Food</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-purple">🏠</span><span className="pc-lbl">Pet Hotel</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-pink">🦴</span><span className="pc-lbl">Adoption</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-blue">🧴</span><span className="pc-lbl">Products</span></div>
                  <div className="pc-service-item"><span className="pc-icon ic-green">🦮</span><span className="pc-lbl">Training</span></div>
                </div>

                {/* Sección Explore con Banner de Mascota */}
                <div className="pc-section-title">Explore</div>
                <div className="pc-explore-banner">
                  <div className="pc-banner-text">5 ways in which dogs keep you in good health.</div>
                  <div className="pc-banner-img">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&auto=format&fit=crop&q=80" alt="Dog" referrerPolicy="no-referrer" />
                  </div>
                </div>

                {/* Sección de Tareas Pendientes (Pending Task) */}
                <div className="pc-section-title">Pending Task</div>
                <div className="pc-tasks-row">
                  <div className="pc-task-card card-orange">
                    <div className="pc-task-icon">🦮</div>
                    <div className="pc-task-info"><strong>Grooming</strong><br /><span>Scheduled at 3:30 PM<br /><small>Delayed</small></span></div>
                  </div>
                  <div className="pc-task-card card-blue">
                    <div className="pc-task-icon">🚶</div>
                    <div className="pc-task-info"><strong>Daily Walk</strong><br /><span>Scheduled at 5:30 PM<br /><small>Delayed</small></span></div>
                  </div>
                </div>

                {/* Barra de Navegación del Pie de Página */}
                <div className="pc-footer-nav">
                  <span className="pc-tab active">🏠</span>
                  <span className="pc-tab">🔍</span>
                  <span className="pc-tab">📅</span>
                  <span className="pc-tab">🕒</span>
                  <span className="pc-tab">👤</span>
                </div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Minimarket</h4>
              <div className="phone-mockup app-punto-express">
                {/* Encabezado de la App */}
                <div className="pe-header">
                  <div className="pe-logo-row">
                    <span className="pe-apple">🍎</span>
                    <div className="pe-title-wrap">
                      <div className="pe-main-title">PUNTO EXPRESS</div>
                      <div className="pe-sub-title">MINIMARKET ONLINE</div>
                    </div>
                    <span className="pe-close">✕</span>
                  </div>
                </div>
                
                {/* Bloque de Despacho */}
                <div className="pe-shipping-box">
                  <div className="pe-ship-item">🕒 <strong>Despacho express</strong><br /><span>30 - 60 min hoy mismo</span></div>
                  <div className="pe-ship-item">📍 <strong>Envío Gratis</strong><br /><span>Por compras sobre $20.000</span></div>
                </div>

                {/* Título de Categorías */}
                <div className="pe-section-title">CATEGORÍAS DE DESPENSA</div>

                {/* Lista de Categorías Reales */}
                <div className="pe-categories-list">
                  <div className="pe-cat-item active">
                    <span className="pe-cat-icon icon-red">🥩</span>
                    <div className="pe-cat-text"><strong>Carnes y Pescados</strong><br /><span>Cortes premium de vacuno, aves y pescados</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥦</span>
                    <div className="pe-cat-text"><strong>Verduras Frescas</strong><br /><span>Hortalizas, papas y hierbas rústicas</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥛</span>
                    <div className="pe-cat-text"><strong>Lácteos y Huevos</strong><br /><span>Leche, quesos, yogures y huevos</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🍞</span>
                    <div className="pe-cat-text"><strong>Panadería y Pastelería</strong><br /><span>Pan fresco del día y bollería</span></div>
                  </div>
                  <div className="pe-cat-item">
                    <span className="pe-cat-icon">🥫</span>
                    <div className="pe-cat-text"><strong>Despensa (Abarrotes)</strong><br /><span>Arroz, aceites, pastas y salsas</span></div>
                  </div>
                </div>

                {/* Botón Inferior de Atención */}
                <div className="pe-footer-btn">🏠 Atención al Cliente Inmediata</div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Imprenta y Publicidad</h4>
              <div className="phone-mockup app-macprint-clon">
                {/* Barra Superior */}
                <div className="mp-nav">
                  <span className="mp-menu">☰</span>
                  <div className="mp-logo-circle">M</div>
                  <span className="mp-cart">🛒 <small>1</small></span>
                </div>
                
                {/* Cuerpo del Catálogo */}
                <div className="mp-grid">
                  <div className="mp-item">
                    <div className="mp-badge">Popular</div>
                    <div className="mp-icon-box">🪪</div>
                    <div className="mp-name">Tarjetas de Presentación x100</div>
                    <div className="mp-price">$8.900</div>
                    <div className="mp-btn">COMPRAR ❯</div>
                  </div>
                  
                  <div className="mp-item">
                    <div className="mp-badge-premium">Premium</div>
                    <div className="mp-icon-box">📜</div>
                    <div className="mp-name">Pendón Roller 80x200cm</div>
                    <div className="mp-price">$49.900</div>
                    <div className="mp-btn">COMPRAR ❯</div>
                  </div>
                </div>

                {/* Botón Flotante de WhatsApp */}
                <div className="mp-ws-btn">💬</div>
              </div>
            </div>
            <div className="carousel-card">
              <h4>Contabilidad Pymes</h4>
              <div className="phone-mockup app-finance-nexora">
                {/* Encabezado de la App */}
                <div className="nx-header">
                  <div className="nx-status-bar">
                    <span>16:26</span>
                    <span>📶 🔋 95%</span>
                  </div>
                  <div className="nx-brand-row">
                    <div className="nx-brand">☰ <strong>Nexora</strong></div>
                    <div className="nx-icons"><span>🔔</span> <span>⁝</span></div>
                  </div>
                </div>

                {/* Bloque de Saldo Principal */}
                <div className="nx-balance-box">
                  <span className="nx-lbl">Your Total Portfolio Value</span>
                  <h2 className="nx-amount">$186,486.28</h2>
                  <div className="nx-stats-row">
                    <span className="nx-badge-green">📈 +4.73%</span>
                    <span className="nx-stat-txt">+$1,286 • Today</span>
                  </div>
                </div>

                {/* Fila de Botones de Acción Redondeados */}
                <div className="nx-actions-row">
                  <div className="nx-act-btn"><span>📈</span> Invest</div>
                  <div className="nx-act-btn"><span>+</span> Add Fund</div>
                  <div className="nx-act-btn"><span>📥</span> Withdraw</div>
                </div>

                {/* Listado de Activos / Top Holdings */}
                <div className="nx-section-title">
                  <span>Top Holdings</span>
                  <a href="#">See All</a>
                </div>
                
                <div className="nx-holdings-list">
                  <div className="nx-item">
                    <div className="nx-item-left">
                      <div className="nx-avatar avatar-blue">CG</div>
                      <div><strong>COINBASE GLOBAL</strong><br /><span className="nx-sub">COIN</span></div>
                    </div>
                    <div className="nx-item-right"><strong>$12,236.12</strong><br /><span className="nx-txt-green">↗ +3.16%</span></div>
                  </div>
                  <div className="nx-item">
                    <div className="nx-item-left">
                      <div className="nx-avatar avatar-purple">MS</div>
                      <div><strong>MICROSTRATEGY</strong><br /><span className="nx-sub">MSTR</span></div>
                    </div>
                    <div className="nx-item-right"><strong>$18,632.89</strong><br /><span className="nx-txt-green">↗ +2.12%</span></div>
                  </div>
                </div>

                {/* Gráfico de Barras Estadístico Inferior */}
                <div className="nx-chart-box">
                  <div className="nx-chart-bars">
                    <div className="nx-bar" style={{ height: '35%' }}><span>JAN</span></div>
                    <div className="nx-bar" style={{ height: '50%' }}><span>FEB</span></div>
                    <div className="nx-bar" style={{ height: '45%' }}><span>MAR</span></div>
                    <div className="nx-bar" style={{ height: '85%' }}><span>APR</span></div>
                    <div className="nx-bar" style={{ height: '70%' }}><span>MAY</span></div>
                    <div className="nx-bar" style={{ height: '40%' }}><span>JUN</span></div>
                  </div>
                </div>

                {/* Barra de Navegación del Pie de Página */}
                <div className="nx-footer-nav">
                  <span className="nx-tab active">🏠</span>
                  <span className="nx-tab">🔍</span>
                  <span className="nx-tab">📊</span>
                  <span className="nx-tab">🕒</span>
                  <span className="nx-tab">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
