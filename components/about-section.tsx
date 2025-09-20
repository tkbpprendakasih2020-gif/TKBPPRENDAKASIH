import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CalendarIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const TrophyIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 13 20.24 13 22" />
    <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C11.96 18.75 11 20.24 11 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Tentang <span className="text-primary">TK BPP RENDA KASIH</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sekolah taman kanak-kanak yang telah berpengalaman lebih dari 3 dekade dalam memberikan pendidikan terbaik
            untuk anak-anak Indonesia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CalendarIcon />
                  Sejarah Sekolah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  TK BPP RENDA KASIH didirikan pada tahun <strong>1987</strong> oleh
                  <strong> Hj. Tjitjih S.Pd</strong>, seorang pendidik yang berdedikasi tinggi. Selama lebih dari 37
                  tahun, sekolah ini telah menjadi tempat tumbuh kembang ratusan anak di wilayah Sumedang.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPinIcon />
                  Lokasi Strategis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Berlokasi di{" "}
                  <strong>
                    Dusun Cisitu RT.01 RW.01, Desa Cisitu, Kecamatan Cisitu, Kabupaten Sumedang, Jawa Barat
                  </strong>
                  . Lokasi yang strategis dan mudah dijangkau oleh masyarakat sekitar.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UsersIcon />
                  Visi & Misi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Visi</h4>
                  <p className="text-muted-foreground text-sm">
                    Mewujudkan anak yang cerdas, berkarakter, mandiri, dan kreatif melalui pembelajaran yang menyenangkan dan penuh kasih sayang.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Misi</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Memberikan pendidikan yang menekankan pada pengembangan potensi anak secara menyeluruh (kognitif, afektif, dan psikomotorik).</li>
                    <li>• Menanamkan nilai-nilai moral, religius, dan sosial sejak usia dini.</li>
                    <li>• Mengembangkan kreativitas dan keterampilan anak melalui metode belajar aktif, inovatif, dan bermain sambil belajar.</li>
                    <li>• Menjalin kerja sama erat dengan orang tua dalam mendampingi perkembangan anak.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrophyIcon />
                  Keunggulan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pembelajaran berbasis bermain (play-based learning).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Kegiatan seni dan kreativitas (melukis, menari, musik).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pendidikan karakter dan pembiasaan positif sehari-hari.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Lingkungan belajar yang ramah anak dan berbasis nilai kekeluargaan.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section >
  )
}
