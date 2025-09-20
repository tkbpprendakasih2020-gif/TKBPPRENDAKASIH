"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo TK BPP RENDA KASIH"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold text-lg text-primary">TK BPP RENDA KASIH</h1>
              <p className="text-xs text-muted-foreground">Sejak 1987</p>
            </div>
          </div>

          {/* Desktop Navigation - now right aligned */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("guru")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Guru
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </button>
            <Link
              href="/qr-code"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 4h4m0 0v4m0 0h4m0 0V4m-4 16h4m0 0v-4m0 0h-4m0 4V4"
                />
              </svg>
              QR Code
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("beranda")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("tentang")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("guru")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Guru
              </button>
              <button
                onClick={() => scrollToSection("galeri")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Kontak
              </button>
              <Link
                href="/qr-code"
                className="text-left text-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 4h4m0 0v4m0 0h4m0 0V4m-4 16h4m0 0v-4m0 0h-4m0 4V4"
                  />
                </svg>
                QR Code Generator
              </Link>
              <div className="flex items-center space-x-1 text-muted-foreground pt-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>087895932605</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
