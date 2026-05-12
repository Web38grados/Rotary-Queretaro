import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { CheckCircle2, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Rotary San Miguel Chapultepec" },
      { name: "description", content: "Contacta al Club Rotario San Miguel Chapultepec. Sesionamos en el Centro Asturiano de México, Polanco." },
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
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Contacto</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Hablemos</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl">Escríbenos para conocer el calendario de sesiones y obtener el enlace de Zoom.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-primary text-lg">Sede</h3>
              <p className="text-muted-foreground mt-1">Centro Asturiano de México<br />Polanco, Ciudad de México</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-primary text-lg">Sesiones</h3>
              <p className="text-muted-foreground mt-1">Algunos domingos al mes presencial; el resto en línea por Zoom. Contáctanos para el calendario y el enlace.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 mt-1 flex gap-2">
              <a href="https://www.facebook.com/ClubRotarioSanMiguelChapultepec" target="_blank" rel="noreferrer" className="text-gold"><Facebook /></a>
              <a href="https://www.instagram.com/rotary.sanmiguelchapultepec/" target="_blank" rel="noreferrer" className="text-gold"><Instagram /></a>
            </div>
            <div>
              <h3 className="font-display font-bold text-primary text-lg">Redes sociales</h3>
              <p className="text-muted-foreground mt-1">Síguenos para actividades y noticias frecuentes.</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card border border-border rounded-2xl shadow-card p-8 space-y-5"
        >
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto text-gold" size={48} />
              <h3 className="mt-4 text-2xl font-display font-bold text-primary">¡Mensaje enviado!</h3>
              <p className="mt-2 text-muted-foreground">Responderemos a la brevedad.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-display font-bold text-primary">Envíanos un mensaje</h2>
              <Field label="Nombre" name="nombre" />
              <Field label="Teléfono" name="telefono" type="tel" />
              <Field label="Correo" name="correo" type="email" />
              <div>
                <label className="text-sm font-semibold text-foreground/90">Mensaje</label>
                <textarea required rows={5} name="mensaje" className="mt-2 w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-bold shadow-card hover:shadow-elegant transition-shadow">
                Enviar mensaje
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
