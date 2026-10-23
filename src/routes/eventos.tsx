import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar } from "lucide-react";
import communityImg from "@/assets/community-event.jpg";
import NoticiasYEventos from "../components/NoticiasYEventos";

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
     <NoticiasYEventos></NoticiasYEventos>
    </Layout>
  );
}
