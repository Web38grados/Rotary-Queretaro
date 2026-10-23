import { createFileRoute } from '@tanstack/react-router'
// 👇 ESTA LÍNEA ES LA CRÍTICA. 
// Tiene que apuntar exactamente a donde moviste tu diseño.
import BasesConcurso from '../components/BasesConcurso' 
import SiteNav from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'

export const Route = createFileRoute('/concurso-fotografia')({
  component: ConcursoPage,
})

function ConcursoPage() {
  return (
    <main className="min-h-screen">
      <SiteNav></SiteNav>
      <BasesConcurso />
      <SiteFooter></SiteFooter>
    </main>
  )
}