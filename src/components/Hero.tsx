import { useState, useEffect } from "react";
import { ArrowRight, CalendarDays, Globe2, Heart, Target, Users, ExternalLink, ChevronLeft, ChevronRight, Palmtree, Calendar, Image as ImageIcon, Megaphone } from "lucide-react";
import imgHero from '../assets/hero.png';
import imgConcurso from '../assets/hero2.png';

// Ejes del evento y público objetivo
const pillars = [
  { icon: Users, title: 'Rotaractianos', text: 'Jóvenes con vocación de liderazgo y de servicio.' },
  { icon: Target, title: 'Empresarios', text: 'Líderes de cámaras y asociaciones empresariales afines.' },
  { icon: Globe2, title: 'Emprendedores', text: 'Universitarios e innovadores sociales en su comunidad.' },
  { icon: Heart, title: 'Alianzas', text: 'Vínculos con COPARMEX, CANACINTRA y universidades.' },
  { icon: CalendarDays, title: 'Identidad Hispana', text: 'Liderazgo juvenil en un contexto cultural compartido.' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="inicio" className="relative h-screen min-h-[750px] w-full flex flex-col justify-center overflow-hidden bg-[#071b36]">
        
        {/* IMÁGENES DE FONDO DINÁMICAS */}
        <div className="absolute inset-0 z-0">
          {/* FONDO SLIDE 0 */}
          <img 
            src={imgHero} 
            alt="Equipo de Imagen Pública de Rotary" 
            className={`absolute inset-0 h-full w-full object-cover object-right md:object-[80%_center] transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`} 
          />

          {/* FONDO SLIDE 1 */}
          <img 
            src={imgConcurso} 
            alt="Concurso de Fotografía Gente de Acción" 
            className={`absolute inset-0 h-full w-full object-cover object-right md:object-[80%_center] transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`} 
          />

          {/* Gradiente oscuro protector */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001736] via-[#001736]/80 to-transparent md:w-[70%]"></div>
        </div>

        {/* 
          CONTENEDOR MAESTRO
          Añadimos pt-20 y pb-24 para garantizar que el texto nunca toque los controles 
          incluso en monitores pequeños de 20 pulgadas.
        */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 pt-20 pb-28">
          
          {/* 
            TRUCO MAGICO: CSS GRID
            Ambos slides comparten la misma celda de la grilla (col-start-1 row-start-1).
            Esto evita que el contenedor colapse durante la animación.
          */}
          <div className="grid grid-cols-1 grid-rows-1 w-full items-center">
            
            {/* =========================================================
                SLIDE 0: IMAGEN PÚBLICA 
                ========================================================= */}
            <div className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100 translate-x-0 z-20 pointer-events-auto' : 'opacity-0 -translate-x-12 z-0 pointer-events-none'}`}>
              <div className="max-w-xl xl:max-w-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-[2px] w-10 bg-[#F7A800]" />
                  <p className="text-xs font-bold uppercase tracking-[2px] text-white flex items-center gap-2">
                    <Megaphone size={14} className="text-[#F7A800]" /> IMAGEN PÚBLICA <span className="mx-1">·</span> ZONA 25A
                  </p>
                </div>
                
                <h1 className="font-serif text-[60px] font-bold leading-[0.95] tracking-tight text-white sm:text-[80px] lg:text-[95px]">
                  Proyectamos <br />
                  <span className="text-[#F7A800]">el impacto</span>
                </h1>
                
                <h2 className="mt-6 text-xl font-medium leading-tight text-white md:text-2xl lg:text-[28px]">
                  Estrategias de comunicación <br className="hidden md:block" /> para transformar comunidades.
                </h2>
                
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90">
                  Brindamos herramientas, campañas y recursos visuales para ayudar a los clubes rotarios a contar sus historias al mundo y demostrar que somos Gente de Acción.
                </p>
                
                <div className="mt-8 flex flex-wrap items-center gap-4 text-white">
                  <a href="#campanas" className="inline-flex items-center gap-3 rounded-[4px] bg-[#00529b] px-7 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#003d73]">
                    Ver campañas <ArrowRight size={16} />
                  </a>
                  <a href="#recursos" className="inline-flex items-center gap-3 rounded-[4px] border border-[#F7A800] px-7 py-3 text-[13px] font-bold text-[#F7A800] transition-all hover:bg-[#F7A800]/10">
                    <ImageIcon size={16} /> Recursos de marca
                  </a>
                </div>
              </div>
            </div>

            {/* =========================================================
                SLIDE 1: CONCURSO DE FOTOGRAFÍA
                ========================================================= */}
            <div className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100 translate-x-0 z-20 pointer-events-auto' : 'opacity-0 translate-x-12 z-0 pointer-events-none'}`}>
              <div className="max-w-xl xl:max-w-2xl">
                
                <h1 className="font-serif text-[48px] font-bold leading-[0.95] tracking-tight text-white sm:text-[60px] lg:text-[76px]">
                  Concurso de <br />
                  <span className="text-[#F7A800]">Fotografía</span>
                </h1>
                
                <h2 className="mt-4 text-xl font-medium leading-tight text-white md:text-[26px]">
                  "Gente de Acción" <span className="font-light mx-2">—</span> <span className="font-light">Zona 25A</span>
                </h2>
                
                <p className="mt-5 max-w-md text-[13px] leading-relaxed text-white/90">
                  Captura la esencia del servicio rotario y comparte historias que inspiran a transformar comunidades.
                </p>
                
                <div className="mt-6 flex max-w-[420px] items-center gap-5 rounded-lg border border-[#F7A800] bg-[#001736]/30 p-4 backdrop-blur-sm shadow-lg">
                  <Palmtree className="text-[#F7A800] shrink-0" size={36} strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/80 mb-0.5">
                      Participa y gana un
                    </p>
                    <p className="text-[17px] font-bold leading-tight text-[#F7A800]">
                      hospedaje de 5 días y 4 noches
                    </p>
                    <p className="text-[12px] text-white">
                      con vista al mar en Cancún.
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex max-w-[420px] items-center gap-5 rounded-lg border border-white/20 bg-[#001736]/30 p-4 backdrop-blur-sm shadow-lg">
                  <Calendar className="text-[#F7A800] shrink-0" size={26} strokeWidth={1.5} />
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/80">
                      Cierre de recepción
                    </p>
                    <div className="h-6 w-[1px] bg-white/20 mx-4"></div>
                    <p className="font-serif text-[22px] font-bold text-white flex items-baseline gap-2">
                      15 DIC <span className="font-sans text-[13px] font-normal text-white/80">2026</span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap items-center gap-4 text-white">
                  <a 
                    href="https://forms.gle/pec4AnfTZXCG8Ts86" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-3 rounded-[4px] bg-[#F7A800] px-8 py-3.5 text-[13px] font-bold text-[#071b36] transition-all hover:bg-[#df9800] shadow-md"
                  >
                    Inscribirme al concurso <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* CONTROLES DEL CARRUSEL (Ahora están fijos de forma segura en la parte inferior) */}
          <div className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-4 z-30">
            <button onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))} className="w-10 h-10 rounded-full border border-white/20 hover:bg-[#F7A800] hover:text-[#071b36] text-white flex items-center justify-center transition-all" aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              <span onClick={() => setCurrentSlide(0)} className={`h-2.5 rounded-full transition-all cursor-pointer ${currentSlide === 0 ? 'w-8 bg-[#F7A800]' : 'w-2.5 bg-white/40'}`} />
              <span onClick={() => setCurrentSlide(1)} className={`h-2.5 rounded-full transition-all cursor-pointer ${currentSlide === 1 ? 'w-8 bg-[#F7A800]' : 'w-2.5 bg-white/40'}`} />
            </div>
            <button onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))} className="w-10 h-10 rounded-full border border-white/20 hover:bg-[#F7A800] hover:text-[#071b36] text-white flex items-center justify-center transition-all" aria-label="Siguiente">
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PILARES */}
      <section className="bg-white border-b border-gray-100 relative z-20">
        <div className="mx-auto grid max-w-[1400px] px-6 lg:grid-cols-5 lg:px-10">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex flex-col gap-3 border-b border-gray-100 py-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F7A800] text-[#F7A800]">
                <Icon size={18} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-serif text-[15px] font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}