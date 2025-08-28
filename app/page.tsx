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
import { SectionTracker } from '@/components/section-tracker'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background" tabIndex={-1}>
      <KeyboardNavigation />
      <Header />
      <div className="pt-16">
        <SectionTracker sectionId="hero">
          <Hero />
        </SectionTracker>
        <SectionTracker sectionId="about">
          <About />
        </SectionTracker>
        <SectionTracker sectionId="experience">
          <Experience />
        </SectionTracker>
        <SectionTracker sectionId="skills">
          <Skills />
        </SectionTracker>
        <SectionTracker sectionId="education">
          <Education />
        </SectionTracker>
        <SectionTracker sectionId="awards">
          <Awards />
        </SectionTracker>
        <SectionTracker sectionId="volunteer">
          <Volunteer />
        </SectionTracker>
        <SectionTracker sectionId="projects">
          <LazyProjects />
        </SectionTracker>
        <SectionTracker sectionId="contact">
          <LazyContact />
        </SectionTracker>
      </div>
      <Footer />
    </main>
  )
}
