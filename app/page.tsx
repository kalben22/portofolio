import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import Competitions from "@/components/sections/competitions"
import Contact from "@/components/sections/contact"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import NetworkBackground from "@/components/ui-custom/network-background"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NetworkBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Competitions />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

