import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Historia y legado del Club Rotario San Miguel Chapultepec, fundado en 2006." },
    ],
  }),
  component: Page,
});

const timeline = [
  { year: "2006", title: "Fundación del club", text: "Nace el Club Rotario San Miguel Chapultepec con el registro 73285 ante Rotary International." },
  { year: "2010", title: "Donataria autorizada", text: "Obtenemos el reconocimiento como donataria autorizada en México." },
  { year: "2015", title: "Sierra Tarahumara", text: "Iniciamos un programa permanente de apoyo a comunidades rarámuri." },
  { year: "2020", title: "Sesiones híbridas", text: "Adoptamos el modelo presencial + Zoom para fortalecer la participación." },
  { year: "2025", title: "20° aniversario", text: "Celebramos dos décadas de servicio con el cambio de insignias." },
];

function Page() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">Nuestra historia</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Quiénes somos</h1>
          <p className="mt-8 text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl">
            El Club Rotario de San Miguel Chapultepec, fundado en 2006 con número de registro 73285, es un club de Rotary International dedicado a fomentar la paz, el liderazgo, y ver la amistad como ocasión de servir. Juntos construimos un mundo donde las personas se unen y toman acción para generar un cambio perdurable en nosotros mismos, en nuestras comunidades y en el mundo entero.
          </p>
          <p className="mt-6 text-base opacity-80 max-w-3xl">
            Nuestro club está constituido como Asociación Civil en México y cuenta con registro como donataria autorizada.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-display font-bold text-primary mb-12">Línea del tiempo</h2>
        <div className="relative border-l-2 border-gold/40 pl-10 space-y-12">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[3.25rem] top-1 size-6 rounded-full bg-gradient-gold border-4 border-background shadow-card" />
              <div className="text-base font-semibold uppercase tracking-wide text-cranberry">{t.year}</div>
              <h3 className="mt-1 text-2xl font-display font-bold text-primary">{t.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cloud/40">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Junta directiva y socios</h2>
          <p className="text-muted-foreground max-w-2xl">Próximamente compartiremos los perfiles de nuestra junta directiva y socios actuales.</p>
        </div>
      </section>
    </Layout>
  );
}
