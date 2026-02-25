"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ui-custom/theme-toggle"

const navItems = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#competitions", label: "Compétitions" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <span className="text-primary">Bernard</span>
          <span>Houngbo</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span>CV</span>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-4">
            <ThemeToggle />
            <Button variant="default" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span>CV</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

