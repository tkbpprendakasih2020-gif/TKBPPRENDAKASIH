"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const GraduationCapIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const AwardIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="beranda" className="relative py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="block text-center">Selamat Datang</span>
                <span className="block text-center">di</span>
                <span className="block text-center text-primary">TK BPP RENDA KASIH</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed text-center">
                Didirikan pada tahun 1987, dengan tujuan memberikan pendidikan anak usia dini yang berkualitas serta menciptakan fondasi karakter yang kuat bagi generasi penerus bangsa. Sejak awal berdiri, sekolah ini berkomitmen untuk menjadi wadah belajar yang menyenangkan, aman, serta mendukung tumbuh kembang anak secara optimal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("tentang")}>
                Pelajari Lebih Lanjut
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
                onClick={() => scrollToSection("kontak")}
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">37+</div>
                <div className="text-sm text-muted-foreground">Tahun Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Guru Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Kelas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Siswa Alumni</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCapIcon />
              </div>
              <h3 className="font-semibold">Pendidikan Berkualitas</h3>
              <p className="text-sm text-muted-foreground">
                Kurikulum yang disesuaikan dengan perkembangan anak usia dini
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <HeartIcon />
              </div>
              <h3 className="font-semibold">Penuh Kasih Sayang</h3>
              <p className="text-sm text-muted-foreground">
                Lingkungan yang hangat dan penuh perhatian untuk setiap anak
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <UsersIcon />
              </div>
              <h3 className="font-semibold">Guru Berpengalaman</h3>
              <p className="text-sm text-muted-foreground">Tim pengajar yang berpengalaman dan berdedikasi tinggi</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <AwardIcon />
              </div>
              <h3 className="font-semibold">Prestasi Membanggakan</h3>
              <p className="text-sm text-muted-foreground">
                Berbagai prestasi yang diraih siswa dalam berbagai kompetisi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
