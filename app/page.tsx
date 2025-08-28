import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Awards } from '@/components/awards'
import { Volunteer } from '@/components/volunteer'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Awards />
        <Volunteer />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
