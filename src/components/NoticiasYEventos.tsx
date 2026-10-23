import { ArrowRight, Calendar, MapPin, Newspaper, Video } from "lucide-react";
import { Link } from '@tanstack/react-router';

export default function NoticiasYEventos() {
  return (
    <section id="eventos" className="bg-white py-20 lg:py-28 relative">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Cabecera de la sección */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#F7A800]">ACTUALIDAD</span>
              <span className="h-[1px] w-12 bg-[#F7A800]" />
            </div>
            <h2 className="font-serif text-[38px] font-bold text-[#0b3c78] lg:text-[46px]">
              Noticias y Eventos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#536477]">
              Mantente informado sobre nuestras últimas campañas, convocatorias especiales y próximas sesiones de nuestro club.
            </p>
          </div>
          
          <a href="#todas-noticias" className="hidden md:inline-flex items-center gap-2 text-xs font-bold text-[#0b3c78] hover:text-[#F7A800] transition-colors">
            Ver todo el boletín <ArrowRight size={15} />
          </a>
        </div>

        {/* Grid de Noticias (1 Destacada + 2 Pequeñas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* TARJETA DESTACADA: CONCURSO DE FOTOGRAFÍA (Columna de 7) */}
          <article className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-[#0b3c78] shadow-lg">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80" 
                alt="Fotógrafo al atardecer" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Degradado oscuro para que el texto resalte */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b36] via-[#071b36]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10 text-white">
              {/* <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F7A800] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#071b36]">
                <Camera size={14} /> Convocatoria Abierta
              </div> */}
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                Concurso de Fotografía "Gente de Acción"
              </h3>
              
              <p className="text-sm text-white/80 max-w-md mb-6 line-clamp-2">
                Exalta la labor de servicio de los rotarios a través de tu lente. Participa y gana un viaje a Cancún para 2 personas. Recepción abierta hasta el 15 de diciembre.
              </p>
              
              <div className="flex items-center gap-6 text-[11px] text-white/70 mb-8">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-[#F7A800]" /> Premiación: 23 Feb 2027</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#F7A800]" /> Zona 25A</span>
              </div>
              
              {/* NOTA: Este botón luego lo conectaremos a tu nueva página del concurso usando React Router (ej. <Link to="/concurso">) */}
              <Link 
                to='/concurso-fotografia'
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F7A800] px-6 py-3 text-xs font-bold text-[#0b3c78] transition-all hover:bg-[#DE9600] hover:text-[#071b36]"
              >
                Ver bases completas <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          {/* COLUMNA DERECHA: NOTICIAS SECUNDARIAS (Columna de 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Noticia 2: RYLA */}
            <article className="flex gap-5 rounded-2xl bg-[#fbfaf6] p-5 shadow-sm border border-[#e5e1d7]/60 transition-colors hover:border-[#F7A800]/50">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80" 
                  alt="RYLA Latino" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#F7A800]">
                  <Newspaper size={12} /> Nota de prensa
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0b3c78] leading-tight mb-2">
                  Acapulco será la sede oficial del RYLA Latino 2027
                </h4>
                <p className="text-[11px] text-[#74808b]">Publicado: Octubre 2026</p>
              </div>
            </article>

            {/* Noticia 3: Sesión Ordinaria */}
            <article className="flex gap-5 rounded-2xl bg-[#fbfaf6] p-5 shadow-sm border border-[#e5e1d7]/60 transition-colors hover:border-[#F7A800]/50">
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl bg-[#0b3c78] text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7A800]">NOV</span>
                <span className="font-serif text-3xl font-bold">12</span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#536477]">
                  <Video size={12} className="text-[#F7A800]" /> Sesión Híbrida
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0b3c78] leading-tight mb-2">
                  Reunión de planificación de proyectos comunitarios
                </h4>
                <p className="text-[11px] text-[#74808b]">Vía Zoom y Sede del Club</p>
              </div>
            </article>

            {/* CTA Extra para móvil */}
            <a href="#todas-noticias" className="mt-auto inline-flex md:hidden items-center justify-center gap-2 text-xs font-bold text-[#0b3c78] border border-[#e5e1d7] rounded-full py-3">
              Ver todo el boletín <ArrowRight size={15} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}