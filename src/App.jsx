import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CVModal from './components/CVModal'
import BackgroundAnimation from './components/BackgroundAnimation'

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)

  const handleOpenCV = () => setIsCVModalOpen(true)
  const handleCloseCV = () => setIsCVModalOpen(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      {/* Interactive Background Particle & Glow Animation */}
      <BackgroundAnimation />

      {/* Navigation */}
      <Navbar onOpenCV={handleOpenCV} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCV={handleOpenCV} />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact onOpenCV={handleOpenCV} />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Download Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={handleCloseCV} />
    </div>
  )
}