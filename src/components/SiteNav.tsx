import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoRotary from "@/assets/logo-queretaro.webp";



const links = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/aniversario", label: "20° Aniversario" },
  { to: "/proyectos", label: "Qué Hacemos" },
  { to: "/eventos", label: "Noticias" },
  { to: "/involucrate", label: "Involúcrate" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
  <img
    src={logoRotary}
    alt="Rotary San Miguel Chapultepec"
    className="h-30 w-auto"
  />
</Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/involucrate"
            className="ml-3 inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold text-sm shadow-card hover:shadow-elegant transition-shadow"
          >
            Únete
          </Link>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
