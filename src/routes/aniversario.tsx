import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import img1 from "@/assets/hero-pledge.jpg";
import img2 from "@/assets/community-event.jpg";
import img3 from "@/assets/printer-donation.jpg";
import img4 from "@/assets/tarahumara-children.jpg";
import img5 from "@/assets/tarahumara-1.jpg";
import img6 from "@/assets/polio-projection.jpg";

export const Route = createFileRoute("/aniversario")({
  head: () => ({
    meta: [
      { title: "20° Aniversario · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Galería del cambio de insignias 2025 — celebrando 20 años de servicio." },
    ],
  }),
  component: Page,
});

const gallery = [img1, img2, img3, img4, img5, img6];

function Page() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-5xl mx-auto px-6 py-28 text-primary-foreground text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold text-accent-foreground text-xs font-bold uppercase tracking-widest">
            2006 — 2025
          </div>
          <h1 className="mt-6 text-6xl md:text-8xl font-display font-black">
            <span className="text-gold italic">20</span> años
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-display">de servir antes que uno mismo</p>
          <p className="mt-8 max-w-2xl mx-auto opacity-90">
            Galería del cambio de insignias 2025. Dos décadas dedicadas a fomentar la paz, el liderazgo y la amistad como ocasión de servir.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-card group ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img src={src} alt={`Memoria del aniversario ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
