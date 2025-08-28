import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Awards } from '@/components/awards'
import { Volunteer } from '@/components/volunteer'
import { LazyProjects } from '@/components/lazy-load'
import { LazyContact } from '@/components/lazy-load'
import { Footer } from '@/components/footer'
import { KeyboardNavigation } from '@/components/keyboard-navigation'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background" tabIndex={-1}>
      <KeyboardNavigation />
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Awards />
        <Volunteer />
        <LazyProjects />
        <LazyContact />
      </div>
      <Footer />
    </main>
  )
}
