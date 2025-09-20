"use client"

import Image from "next/image"

const HeartIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="Logo TK BPP RENDA KASIH"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">TK BPP RENDA KASIH</h3>
                <p className="text-sm opacity-80">Sejak 1987</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Memberikan pendidikan berkualitas untuk anak usia dini dengan penuh kasih sayang dan dedikasi tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("beranda")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("guru")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Tim Pengajar
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Galeri
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPinIcon />
                <span className="opacity-80">
                  Dusun Cisitu RT.01 RW.01
                  <br />
                  Desa Cisitu, Kec. Cisitu
                  <br />
                  Kab. Sumedang, Jawa Barat
                </span>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold">Jam Sekolah</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="opacity-80">Senin - Jumat</span>
                <span className="opacity-80">07:30 - 11:00</span>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs opacity-60 flex items-center gap-1">
                <CalendarIcon />
                Didirikan tahun 1987 oleh Hj. Tjitjih S.Pd
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 flex items-center justify-center gap-1">
            © 2024 TK BPP RENDA KASIH. Dibuat dengan
            <HeartIcon />
            untuk pendidikan anak Indonesia.
          </p>
        </div>
      </div>
    </footer>
  )
}
