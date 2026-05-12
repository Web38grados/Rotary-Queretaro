import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import tarahumaraImg from "@/assets/tarahumara-1.jpg";
import tarahumaraChildrenImg from "@/assets/tarahumara-children.jpg";
import printerImg from "@/assets/printer-donation.jpg";
import communityImg from "@/assets/community-event.jpg";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Conoce los proyectos y causas que impulsan al Club Rotario San Miguel Chapultepec." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Qué hacemos</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Proyectos y causas</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl">Servicio que perdura en el tiempo, hecho con amistad y propósito.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        {/* Sierra Tarahumara - galería permanente */}
        <article>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cranberry">Proyecto permanente</span>
              <h2 className="mt-2 text-4xl font-display font-bold text-primary">Sierra Tarahumara</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">Acompañamos a las comunidades rarámuri con apoyo continuo en salud, educación y necesidades básicas.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 md:row-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img src={tarahumaraImg} alt="Mujer y niño en la Sierra Tarahumara" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img src={tarahumaraChildrenImg} alt="Niños en la Sierra Tarahumara" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img src={communityImg} alt="Trabajo comunitario" className="w-full h-full object-cover" />
            </div>
          </div>
        </article>

        {/* Proyecto destacado del bienio */}
        <article className="grid lg:grid-cols-2 gap-10 items-center bg-cloud/40 rounded-3xl p-8 md:p-12">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
            <img src={printerImg} alt="Donación de impresora" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cranberry">Bienio 2025 — 2026</span>
            <h2 className="mt-2 text-4xl font-display font-bold text-primary">Proyecto destacado del bienio</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Una iniciativa con impacto directo en nuestra comunidad, desarrollada con aliados estratégicos y la energía de cada socio del club.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3"><span className="size-1.5 rounded-full bg-gold mt-2" /> Beneficiarios directos en la zona metropolitana.</li>
              <li className="flex gap-3"><span className="size-1.5 rounded-full bg-gold mt-2" /> Aliados públicos y privados.</li>
              <li className="flex gap-3"><span className="size-1.5 rounded-full bg-gold mt-2" /> Resultados medibles y sostenibles.</li>
            </ul>
          </div>
        </article>
      </section>
    </Layout>
  );
}
