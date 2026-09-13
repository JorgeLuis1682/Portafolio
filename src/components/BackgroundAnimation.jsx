import React, { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Particles configuration
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90)
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 1,
        color:
          i % 3 === 0
            ? 'rgba(99, 102, 241, ' // Indigo
            : i % 3 === 1
            ? 'rgba(6, 182, 212, ' // Cyan
            : 'rgba(168, 85, 247, ', // Purple
        alpha: Math.random() * 0.45 + 0.25,
      })
    }

    const maxDistance = 135

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce from walls
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse proximity reaction
        const dxMouse = mouse.x - p.x
        const dyMouse = mouse.y - p.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius
          p.x -= (dxMouse / distMouse) * force * 1.5
          p.y -= (dyMouse / distMouse) * force * 1.5
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()

        // Draw connecting lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Dynamic Canvas with Interactive Constellation Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Cyber Grid + Dot Matrix Background across entire page */}
      <div className="absolute inset-0 bg-grid-pattern opacity-45" />

      {/* Distributed Ambient Glowing Color Orbs */}
      <div className="absolute top-[5%] left-[15%] w-[600px] h-[600px] bg-indigo-600/18 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-[25%] right-[10%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[160px] animate-float-slow" />
      <div className="absolute top-[50%] left-[8%] w-[500px] h-[500px] bg-cyan-600/14 rounded-full blur-[150px] animate-float-reverse" />
      <div className="absolute top-[75%] right-[15%] w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute top-[92%] left-[20%] w-[500px] h-[500px] bg-purple-600/12 rounded-full blur-[150px] animate-float-slow" />
    </div>
  )
}
