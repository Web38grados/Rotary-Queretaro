import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-pledge.jpg";
import polioImg from "@/assets/polio-projection.jpg";
import tarahumaraImg from "@/assets/tarahumara-1.jpg";
import communityImg from "@/assets/community-event.jpg";
import { ArrowRight, Heart, Users, Globe2 } from "lucide-react";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
  meta: [
    { title: "Club Rotario San Miguel Chapultepec" },
    {
      name: "description",
      content:
        "Club Rotario San Miguel Chapultepec. Construimos paz, liderazgo y servicio en México y el mundo.",},
   ],
   }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      
      <Hero></Hero>


      {/* PILARES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
  {[
    { icon: Heart, title: "Paz", text: "Fomentamos la paz y la prevención de conflictos en cada acción." },
    { icon: Users, title: "Liderazgo", text: "Formamos líderes que inspiran a sus comunidades." },
    { icon: Globe2, title: "Servicio Global", text: "La amistad como ocasión de servir, dentro y fuera de México." },
  ].map(({ icon: Icon, title, text }) => (
    <div
      key={title}
      className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
    >
      <div className="size-14 rounded-xl bg-gradient-gold grid place-items-center mb-6 text-accent-foreground">
        <Icon size={26} />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  ))}
</div>

      <div className="mt-8 flex justify-end">
        <Link
           to="/quienes-somos"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Conoce quiénes somos <ArrowRight size={16} />
               </Link>
                </div>

        
      </section>

      {/* CAMPAÑA DESTACADA */}
      <section className="bg-cloud/20">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-cranberry">
                   Campaña activa
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary">
              Fin a la Poliomielitis (End Polio Now)
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Hace casi 40 años Rotary lidera la lucha global por erradicar la poliomielitis. Hoy estamos a un paso de lograrlo. Cada contribución cuenta.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/proyectos" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Conocer más <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img src={polioImg} alt="Proyección End Polio Now" className="rounded-2xl shadow-elegant w-full h-[480px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-gold rounded-2xl px-6 py-4 shadow-elegant hidden md:block">
              <div className="text-3xl font-display font-black text-primary">99.9%</div>
              <div className="text-xs uppercase tracking-widest text-primary/80">casos reducidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-cranberry">Qué hacemos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary">Impacto que perdura</h2>
          </div>
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Ver todos los proyectos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/proyectos" className="group relative h-[420px] rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow">
            <img src={tarahumaraImg} alt="Sierra Tarahumara" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-primary-foreground">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Proyecto continuo</span>
              <h3 className="mt-2 text-3xl font-display font-bold">Sierra Tarahumara</h3>
              <p className="mt-2 opacity-90">Apoyo permanente a comunidades rarámuri.</p>
            </div>
          </Link>
          <Link to="/proyectos" className="group relative h-[420px] rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow">
            <img src={communityImg} alt="Bienio en curso" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-primary-foreground">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Bienio 2025–2026</span>
              <h3 className="mt-2 text-3xl font-display font-bold">Proyecto destacado</h3>
              <p className="mt-2 opacity-90">Servicio comunitario con impacto medible.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-primary-foreground shadow-elegant">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Donde la amistad <span className="text-gold italic">se convierte</span> en servicio.
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Conecta con personas que comparten el deseo de generar un cambio real. Te invitamos a sesionar con nosotros.
            </p>
            <div className="mt-10">
    <Link
    to="/contacto"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-accent-foreground font-bold shadow-elegant hover:scale-105 transition-transform"
   >
    Conoce cómo involucrarte <ArrowRight size={18} />
   </Link>

   <div className="mt-5">
    
    </div>
   </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
