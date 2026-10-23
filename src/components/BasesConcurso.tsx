import { 
  Calendar, 
  Trophy, 
  
  Camera, 
  Users, 
  CheckCircle2, 
  Award, 
  Star, 
  Shield, 
  HeartPulse, 
  Droplet, 
  Baby, 
  BookOpen, 
  TrendingUp, 
  Leaf,
  ExternalLink
} from "lucide-react";



export default function BasesConcurso() {
  return (
    <section className="bg-[#fbfaf6] py-20 lg:py-28 font-sans ">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* ==========================================
            1. HERO DEL CONCURSO (Cabecera y Premios)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-24">
          
          {/* Columna Izquierda: Título y Fechas */}
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#F7A800]">
                CONCURSO DE FOTOGRAFÍA
              </p>
            </div>
            
            <h1 className="font-serif text-[48px] font-bold leading-[1.05] tracking-tight text-[#0b3c78] sm:text-[56px] lg:text-[64px] mb-6">
              Concurso: <br /> Gente de Acción
            </h1>
            
            <p className="text-[15px] leading-relaxed mb-10 text-[#536477]">
              Una celebración visual del servicio rotario en acción. Te invitamos a capturar, a través de tu lente, el impacto positivo que generan nuestros clubes, mostrando cómo juntos construimos un mundo mejor.
            </p>
            
            {/* Fechas */}
            <div className="flex flex-wrap gap-10 mb-10">
              <div className="flex gap-4">
                <div className="mt-1 text-[#F7A800]"><Calendar size={24} /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#74808b] mb-1">Recepción de fotografías</p>
                  <p className="font-serif text-2xl font-bold text-[#0b3c78]">15 sep – 15 dic</p>
                  <p className="text-xs text-[#74808b]">2026</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[#F7A800]"><Trophy size={24} /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#74808b] mb-1">Premiación</p>
                  <p className="font-serif text-2xl font-bold text-[#0b3c78]">23 feb</p>
                  <p className="text-xs text-[#74808b]">2027<br/><span className="text-[10px]">122º Aniversario de Rotary</span></p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://forms.gle/pec4AnfTZXCG8Ts86" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#0b3c78] px-7 py-3.5 text-xs font-bold text-white transition-all hover:bg-[#0b3c78]/90 shadow-md"
            >
              <span className="text-white">Inscribirme al concurso </span><ExternalLink className='text-white' size={16} />
            </a>
          </div>

          {/* Columna Derecha: Tarjeta Blanca de Premios */}
          <div className="bg-white rounded-2xl shadow-xl flex flex-col sm:flex-row overflow-hidden border border-[#e5e1d7]/60">
            {/* Mitad Foto */}
            <div className="sm:w-[40%] h-[250px] sm:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80" 
                alt="Fotógrafo en acción" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mitad Info Premios */}
            <div className="sm:w-[60%] p-8">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b] mb-2">PREMIOS</p>
              <h3 className="font-serif text-2xl font-bold text-[#0b3c78] mb-8 leading-tight">
                Tu mirada también transforma vidas
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#F7A800]/20 flex items-center justify-center text-[#F7A800] shrink-0 mt-1">
                    <Trophy size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold ">Premio Principal</h4>
                    <p className="text-[11px] leading-snug mt-1 text-[#536477]">Hospedaje de 5 días y 4 noches con vista al mar en Cancún para 2 personas (AMARA 2) + Diploma.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#F7A800]/20 flex items-center justify-center text-[#F7A800] shrink-0 mt-1">
                    <Star size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b3c78]">Reconocimiento Regional</h4>
                    <p className="text-[11px] leading-snug mt-1">Publicación de la fotografía ganadora en las Revistas Regionales de Rotary (Zona 25A).</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#F7A800]/20 flex items-center justify-center text-[#F7A800] shrink-0 mt-1">
                    <Award size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b3c78]">Mención Honorífica</h4>
                    <p className="text-[11px] leading-snug mt-1">Diploma oficial de reconocimiento institucional por participación destacada.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#fbfaf6] border border-[#e5e1d7] rounded-lg p-3 flex items-center gap-3">
                <Camera size={16} className="text-[#0b3c78]" />
                <p className="text-[11px] text-[#0b3c78]"><strong>Categoría única:</strong> Fotografía de acción rotaria.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            2. OBJETIVO Y PARTICIPANTES (2 Columnas)
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#e5e1d7] pt-16 mb-16">
          
          {/* Bloque Objetivo */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">01. OBJETIVO</p>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0b3c78] mb-4">¿Cuál es el objetivo?</h2>
            <p className="text-[13px] leading-relaxed mb-6">
              Exaltar, a través de la fotografía, la labor de servicio de los rotarios, rotarias y miembros de Rotaract, mostrando su compromiso activo con las comunidades, bajo el lema que nos identifica: <strong>"Somos Gente de Acción"</strong>.
            </p>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e1d7]/60">
              <div className="w-10 h-10 rounded-full bg-[#fbfaf6] flex items-center justify-center text-[#F7A800] shrink-0">
                <Camera size={16} />
              </div>
              <p className="text-[13px] italic font-serif text-[#0b3c78]">La fotografía tiene el poder de contar historias que inspiran.</p>
            </div>
          </div>

          {/* Bloque Participantes */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">02. PARTICIPANTES</p>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0b3c78] mb-4">¿Quiénes pueden participar?</h2>
            <p className="text-[13px] leading-relaxed mb-4">El concurso está abierto a:</p>
            <ul className="space-y-2 text-[13px] mb-6 list-disc pl-5 marker:text-[#F7A800]">
              <li>Miembros activos de clubes Rotarios y Rotaract de la Zona 25A.</li>
              <li>No podrán participar familiares directos del jurado ni personas ajenas a Rotary.</li>
            </ul>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e1d7]/60 mt-auto">
              <div className="w-10 h-10 rounded-full bg-[#fbfaf6] flex items-center justify-center text-[#0b3c78] shrink-0">
                <Users size={16} />
              </div>
              <p className="text-[13px] italic font-serif text-[#0b3c78]">Juntos por un mismo propósito: más servicio, más impacto.</p>
            </div>
          </div>

        </div>

        {/* ==========================================
            3. TEMÁTICA, CATEGORÍAS Y REQUISITOS (3 Columnas)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-[#e5e1d7] pt-16">
          
          {/* Columna 1: Temática */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">03. TEMÁTICA</p>
            </div>
            <h2 className="font-serif text-[26px] font-bold text-[#0b3c78] mb-4">¿Qué tipo de fotos se buscan?</h2>
            <p className="text-xs leading-relaxed mb-5">
              Las fotografías deberán capturar acciones de servicio que reflejen la esencia de <strong>"Gente en Acción"</strong>:
            </p>
            <ul className="space-y-3 text-xs mb-8">
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> Momentos cotidianos de la vida real.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> Transmitiendo una sensación de movimiento.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> Con solo unas pocas personas, bien visibles.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> Con iluminación cálida y colores naturales.</li>
            </ul>

            <p className="text-xs font-bold text-[#0b3c78] mb-4">Representando nuestras áreas de interés:</p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[10px] leading-tight">
              <div className="flex gap-2 items-start"><Shield size={14} className="text-[#0b3c78] shrink-0" /> <span>Paz y resolución<br/>de conflictos</span></div>
              <div className="flex gap-2 items-start"><HeartPulse size={14} className="text-[#0b3c78] shrink-0" /> <span>Prevención de<br/>enfermedades</span></div>
              <div className="flex gap-2 items-start"><Droplet size={14} className="text-[#0b3c78] shrink-0" /> <span>Agua, saneamiento<br/>e higiene</span></div>
              <div className="flex gap-2 items-start"><Baby size={14} className="text-[#0b3c78] shrink-0" /> <span>Salud materno<br/>infantil</span></div>
              <div className="flex gap-2 items-start"><BookOpen size={14} className="text-[#0b3c78] shrink-0" /> <span>Alfabetización y<br/>educación básica</span></div>
              <div className="flex gap-2 items-start"><TrendingUp size={14} className="text-[#0b3c78] shrink-0" /> <span>Desarrollo económico<br/>y comunitario</span></div>
              <div className="flex gap-2 items-start col-span-2"><Leaf size={14} className="text-[#0b3c78] shrink-0" /> <span>Protección del medio ambiente</span></div>
            </div>
          </div>

          {/* Columna 2: Categorías (Polaroid) */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">04. CATEGORÍAS</p>
            </div>
            <h2 className="font-serif text-[26px] font-bold text-[#0b3c78] mb-1">Categoría única</h2>
            <p className="text-[13px] font-bold text-[#0b3c78] mb-3">Fotografía de acción rotaria</p>
            <p className="text-xs leading-relaxed mb-8">
              Si lo desean, pueden dividir por tipo de proyecto o técnica fotográfica, aunque la categoría única también es válida.
            </p>

            {/* Efecto de Foto Polaroid */}
            <div className="w-[85%] mx-auto bg-white p-3 pb-10 shadow-lg transform rotate-2 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" 
                alt="Cámara fotográfica" 
                className="w-full h-[180px] object-cover mb-4"
              />
              <p className="text-center font-serif italic text-sm text-[#0b3c78]">Captura el impacto<br/>del servicio</p>
            </div>
          </div>

          {/* Columna 3: Requisitos Técnicos */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F7A800]" />
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">05. REQUISITOS TÉCNICOS</p>
            </div>
            <h2 className="font-serif text-[26px] font-bold text-[#0b3c78] mb-4">Detalles de tu foto</h2>
            
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <span>A color o blanco y negro.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <span>Formato digital: <strong>JPG o PNG</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <span>Resolución mínima: <strong>300 dpi</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <span>Tamaño mínimo: <strong>2 MB</strong> y máximo: <strong>10 MB</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <span>Máximo <strong>2 fotografías</strong> por participante.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F7A800] shrink-0 mt-0.5" /> 
                <div>
                  <p className="font-bold text-[#0b3c78] mb-1">Cada fotografía debe incluir:</p>
                  <ul className="list-disc pl-4 space-y-1 marker:text-gray-300">
                    <li>Título.</li>
                    <li>Breve descripción (máx. 100 palabras): contexto, lugar, acción y club involucrado.</li>
                    <li>Fecha en que fue tomada.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ==========================================
            4. CALENDARIO, JURADO Y PREMIOS (Hero Secundario)
        ========================================== */}
        <div className="relative mt-16 overflow-hidden rounded-3xl shadow-lg border border-[#e5e1d7]/50">
          
          {/* Imagen de fondo con gradiente para que el texto izquierdo se lea perfecto */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1593113589914-0759972b0286?auto=format&fit=crop&w=1600&q=80" 
              alt="Rotarios en acción al atardecer" 
              className="h-full w-full object-cover object-right"
            />
            {/* Gradiente color crema que viene desde la izquierda y se desvanece hacia la derecha */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf6] via-[#fbfaf6]/95 to-transparent md:w-[75%]"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12 items-center">
            
            {/* IZQUIERDA: Línea de Tiempo (Calendario) */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#F7A800]" />
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">06. CALENDARIO</p>
              </div>
              <h2 className="font-serif text-[32px] font-bold text-[#0b3c78] mb-12">Fechas importantes</h2>
              
              {/* Timeline Horizontal */}
              <div className="relative flex justify-between">
                {/* Línea conectora amarilla */}
                <div className="absolute top-[11px] left-4 right-4 h-[2px] bg-[#F7A800]/40 z-0"></div>
                
                {/* Punto 1: Recepción */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3 px-1">
                  <div className="w-6 h-6 rounded-full border-[3px] border-[#F7A800] bg-[#fbfaf6] mb-4 shadow-sm"></div>
                  <p className="text-[10px] uppercase text-[#0b3c78] font-bold leading-tight mb-1 h-6">Recepción de<br/>fotografías</p>
                  <p className="font-serif text-[15px] font-bold text-[#0b3c78]">15 sep – 15 dic</p>
                  <p className="text-[10px] text-[#74808b]">2026</p>
                </div>

                {/* Punto 2: Evaluación */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3 px-1">
                  <div className="w-6 h-6 rounded-full border-[3px] border-[#F7A800] bg-[#fbfaf6] mb-4 shadow-sm"></div>
                  <p className="text-[10px] uppercase text-[#0b3c78] font-bold leading-tight mb-1 h-6">Evaluación<br/>del jurado</p>
                  <p className="font-serif text-[15px] font-bold text-[#0b3c78]">enero</p>
                  <p className="text-[10px] text-[#74808b]">2027</p>
                </div>

                {/* Punto 3: Premiación */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3 px-1">
                  <div className="w-6 h-6 rounded-full border-[3px] border-[#F7A800] bg-[#F7A800] mb-4 shadow-md outline outline-4 outline-[#F7A800]/20"></div>
                  <p className="text-[10px] uppercase text-[#0b3c78] font-bold leading-tight mb-1 h-6">Anuncio de ganador<br/>y premiación</p>
                  <p className="font-serif text-[15px] font-bold text-[#0b3c78]">23 feb</p>
                  <p className="text-[10px] text-[#74808b]">2027<br/><span className="text-[8px]">122º Aniversario</span></p>
                </div>
              </div>
            </div>

            {/* DERECHA: Tarjeta Blanca (Jurado y Premios) */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#e5e1d7]">
              
              {/* Mitad: Jurado */}
              <div className="md:pr-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-[#F7A800]" />
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">07. JURADO</p>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b3c78] mb-4">¿Quiénes lo conforman?</h3>
                <p className="text-[11px] mb-4 text-[#536477]">El jurado estará integrado por:</p>
                
                <ul className="space-y-2 text-[11px] text-[#536477] list-disc pl-4 marker:text-[#F7A800] mb-6">
                  <li>Representantes del Comité de Imagen Pública de la Zona 25A.</li>
                  <li>Fotógrafos profesionales invitados.</li>
                  <li>Representantes editoriales de las Revistas Regionales de Rotary.</li>
                </ul>
                <p className="text-[10px] italic text-[#74808b]">Las decisiones del jurado serán inapelables.</p>
              </div>

              {/* Mitad: Premios */}
              <div className="pt-8 md:pt-0 md:pl-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-[#F7A800]" />
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#74808b]">08. PREMIOS</p>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b3c78] mb-4">Premios y beneficios</h3>
                <p className="text-[11px] mb-4 text-[#536477]">
                  La fotografía ganadora será publicada en las Revistas Regionales de Rotary de la Zona 25A.
                </p>
                
                <ul className="space-y-2 text-[11px] text-[#536477] list-disc pl-4 marker:text-[#F7A800] mb-6">
                  <li>Diploma de reconocimiento.</li>
                  <li><strong>Hospedaje de 5 días y 4 noches con vista al mar en Cancún para 2 personas</strong> en el condominio AMARA 2, Cancún, Quintana Roo. (validez de 1 año).</li>
                </ul>

                {/* Foto del Resort Cancún */}
                <div className="h-24 w-full rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1512813111408-366f49b6ef93?auto=format&fit=crop&w=600&q=80" 
                    alt="Resort AMARA 2 Cancún" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}