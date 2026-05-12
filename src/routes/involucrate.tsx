import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/involucrate")({
  head: () => ({
    meta: [
      { title: "Involúcrate · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Conoce el proceso para ser socio del Club Rotario San Miguel Chapultepec." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Involúcrate</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Quiero ser socio</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl">Si compartes el deseo de servir y quieres conocer el club, déjanos tus datos. Te contactaremos para invitarte a una sesión.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-display font-bold text-primary">El proceso</h2>
          {[
            "Conoce al club en una sesión de invitado.",
            "Comparte tus motivaciones y tu vocación de servicio.",
            "Un socio te apadrina y presenta tu candidatura.",
            "Bienvenida oficial y cambio de insignia.",
          ].map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="size-9 shrink-0 rounded-full bg-gradient-gold grid place-items-center font-bold text-accent-foreground">{i + 1}</div>
              <p className="text-muted-foreground pt-1.5">{step}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 bg-card border border-border rounded-2xl shadow-card p-8 space-y-5"
        >
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto text-gold" size={48} />
              <h3 className="mt-4 text-2xl font-display font-bold text-primary">¡Gracias!</h3>
              <p className="mt-2 text-muted-foreground">Te contactaremos muy pronto.</p>
            </div>
          ) : (
            <>
              <Field label="Nombre completo" name="nombre" />
              <Field label="Teléfono" name="telefono" type="tel" />
              <Field label="Correo electrónico" name="correo" type="email" />
              <div>
                <label className="text-sm font-semibold text-foreground/90">¿Por qué te interesa pertenecer al club?</label>
                <textarea required rows={4} name="motivo" className="mt-2 w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-bold shadow-card hover:shadow-elegant transition-shadow">
                Enviar solicitud
              </button>
            </>
          )}
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground/90">{label}</label>
      <input required name={name} type={type} className="mt-2 w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
