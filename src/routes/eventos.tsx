import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar } from "lucide-react";
import communityImg from "@/assets/community-event.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Noticias y Eventos · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Próximas actividades de servicio y noticias del club." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Noticias y eventos</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Lo que viene</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={communityImg} alt="Próxima actividad" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          <div className="relative p-10 md:p-16 text-primary-foreground max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-accent-foreground text-xs font-bold uppercase tracking-widest">
              <Calendar size={14} /> Próxima actividad
            </div>
            <h2 className="mt-6 text-4xl font-display font-bold">Actividad de servicio</h2>
            <p className="mt-4 opacity-90">Mantente al tanto de nuestra próxima jornada de servicio. Pronto compartiremos fecha y detalles.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
