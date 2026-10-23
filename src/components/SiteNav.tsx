import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Search } from 'lucide-react';
import { useLocation, Link } from '@tanstack/react-router';
import logo from "@/assets/logo-queretaro.webp";
import logo_blanco from "@/assets/logo_blanco_1.png";

import { ROUTES } from '@/routes/routes';

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Comprueba si estamos en la ruta de inicio
  const isHomePage = location.pathname === ROUTES.INICIO || location.pathname === '/';

  // Lógica de Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const navItems = [
    { name: 'Inicio', path: ROUTES.INICIO }, // ¡El infaltable!
    { name: 'Quiénes Somos', path: ROUTES.QUIENES_SOMOS },
    { name: 'Legado', path: '#legado' }, // o 'Aniversario/Legado'
    { name: 'Proyectos', path: 'proyectosEInvolucrate' },
    { name: 'Noticias y Eventos', path: ROUTES.NOTICIAS_EVENTOS },
    { name: 'Involúcrate', path: ROUTES.CONTACTO }
  ];

  const isTransparent = isHomePage && !isScrolled && !menuOpen;

  // Clases dinámicas basadas en si es transparente o no
  const headerBgClass = isTransparent 
    ? 'bg-transparent text-white border-transparent' 
    : 'bg-white text-[#0b3c78] border-b border-[#e5e1d7] shadow-sm';

  const linkColorClass = isTransparent
    ? 'text-white hover:text-white/80'
    : 'text-[#354352] hover:text-[#0b3c78]';

  // const activeIndicatorColor = isTransparent
  //   ? 'border-[#F7A800]'
  //   : 'border-[#0b3c78]';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-150 ease-in-out ${headerBgClass}`}>
      <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-6 lg:px-10 ">
        
        {/* LOGO DINÁMICO */}
        <Link 
          to={ROUTES.INICIO} 
          className="flex items-center" 
          onClick={() => setMenuOpen(false)}
        >
          <img 
            // Aquí ocurre la magia: Si es transparente usa el blanco, si no, usa el normal
            src={isTransparent ? logo_blanco : logo} 
            alt="Logo RYLA Latino 2027" 
            className="relative lg:bottom-2 h-25 w-auto md:h-35 transition-all duration-300 hover:scale-105" 
          />
        </Link>

{/* NAVEGACIÓN DESKTOP */}
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium font-['Open_Sans']">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.name === 'Inicio' && location.pathname === '/');
        
        return (
          <Link 
            key={item.name} 
            to={item.path} 
            // Usamos "group" para detectar el hover, y "pb-1.5" para que la línea quede pegadita al texto
           className={`relative py-2 transition-colors ${linkColorClass}`}

          >
            {item.name}
            
            {/* Línea inferior con transición fluida (Activa y en Hover) */}
            <span 
              className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300 ease-out origin-left ${
                isActive 
                  ? 'bg-[#F7A800] scale-x-100 opacity-100' // Nota: Puedes cambiar bg-[#F7A800] por bg-white si prefieres la línea blanca
                  : 'bg-white scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
              }`} 
            />
          </Link>
        );
      })}
    </nav>

        {/* CONTROLES DERECHA */}
        <div className="flex items-center gap-6">
          <button 
            aria-label="Buscar" 
            className={`hidden md:block transition-colors ${linkColorClass}`}
          >
            <Search size={20} />
          </button>
          
          <Link 
            to={ROUTES.CONTACTO} 
            className={`hidden md:flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5
              ${isTransparent
                ? 'border-[#F7A800] bg-transparent text-[#F7A800] hover:bg-[#F7A800] hover:text-white' 
                : 'border-[#F7A800] bg-transparent text-[#F7A800] hover:bg-[#F7A800] hover:text-[#0b3c78]' 
              }`}
          >
            Únete <ArrowRight size={16} />
          </Link>

          {/* MENÚ HAMBURGUESA MÓVIL */}
          <button 
            className={`md:hidden p-2 -mr-2 transition-colors ${linkColorClass}`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div 
        className={`absolute inset-x-0 top-[80px] border-t border-slate-200 bg-white px-6 py-6 shadow-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="flex flex-col gap-4 text-slate-800">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.name === 'Inicio' && location.pathname === '/');
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setMenuOpen(false)} 
                className={`py-2 text-lg font-medium border-b border-slate-100 ${isActive ? 'text-[#0b3c78] border-[#0b3c78]' : ''}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link 
            to={ROUTES.CONTACTO} 
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex w-full justify-center items-center gap-2 rounded-full bg-[#0b3c78] px-6 py-3 text-sm font-bold text-white"
          >
            Únete ahora <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}