import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-gradient-gold grid place-items-center font-display font-black text-primary text-lg">
              R
            </div>
            <div>
              <div className="font-display font-bold">Rotary</div>
              <div className="text-xs uppercase tracking-widest opacity-70">San Miguel Chapultepec</div>
            </div>
          </div>
          <p className="text-sm opacity-80 max-w-xs">
            Fundado en 2006 · Registro 73285. Asociación Civil mexicana y donataria autorizada.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/quienes-somos" className="opacity-80 hover:opacity-100">Quiénes somos</Link></li>
            <li><Link to="/proyectos" className="opacity-80 hover:opacity-100">Proyectos</Link></li>
            <li><Link to="/involucrate" className="opacity-80 hover:opacity-100">Involúcrate</Link></li>
            <li><Link to="/contacto" className="opacity-80 hover:opacity-100">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Síguenos</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/ClubRotarioSanMiguelChapultepec" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-primary-foreground/30 grid place-items-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/rotary.sanmiguelchapultepec/" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-primary-foreground/30 grid place-items-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
              <Instagram size={18} />
            </a>
            <Link to="/contacto" className="size-10 rounded-full border border-primary-foreground/30 grid place-items-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
              <Mail size={18} />
            </Link>
          </div>
          <p className="mt-6 text-xs opacity-60">Sesionamos en el Centro Asturiano de México, Polanco.</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs opacity-60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Club Rotario San Miguel Chapultepec.</span>
          <span>Servicio antes que uno mismo.</span>
        </div>
      </div>
    </footer>
  );
}
