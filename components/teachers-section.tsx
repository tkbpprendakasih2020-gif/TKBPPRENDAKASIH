import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const GraduationCapIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const AwardIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

export function TeachersSection() {
  const teachers = [
    {
      name: "Ening Supatini, S.Pd",
      role: "Kepala Sekolah",
      image: "/images/supartini.jpg",
      description:
        "Memimpin sekolah dengan dedikasi tinggi dan pengalaman puluhan tahun dalam pendidikan anak usia dini.",
      specialties: ["Manajemen Pendidikan", "Pengembangan Kurikulum", "Kepemimpinan"],
    },
    {
      name: "Suhayati, S.Pd",
      role: "Guru Kelas A",
      image: "/images/suhayati.jpg",
      description: "Guru berpengalaman yang mengajar dengan penuh kasih sayang dan metode pembelajaran yang inovatif.",
      specialties: ["Pembelajaran Kreatif", "Seni & Kerajinan", "Pengembangan Motorik"],
    },
    {
      name: "Laelawati, S.Pd",
      role: "Guru Kelas B",
      image: "/images/laelawati.jpg",
      description: "Pendidik yang berdedikasi dalam mengembangkan potensi setiap anak dengan pendekatan yang personal.",
      specialties: ["Literasi Dini", "Matematika Dasar", "Pengembangan Sosial"],
    },
  ]

  return (
    <section id="guru" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Tim <span className="text-primary">Pengajar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Memiliki guru-guru yang berpengalaman, penuh dedikasi, serta mengedepankan pendekatan personal dalam mendidik anak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${teacher.name === "Suhayati, S.Pd" ? "object-[0_20%]" : "object-center"}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-balance">{teacher.name}</h3>
                  <Badge variant="secondary" className="text-primary">
                    {teacher.role}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{teacher.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <GraduationCapIcon />
                    Keahlian
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCapIcon />
              </div>
              <h3 className="font-semibold">Kualifikasi S.Pd</h3>
              <p className="text-sm text-muted-foreground">
                Semua guru memiliki kualifikasi Sarjana Pendidikan yang sesuai dengan bidangnya
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <AwardIcon />
              </div>
              <h3 className="font-semibold">Berpengalaman</h3>
              <p className="text-sm text-muted-foreground">
                Pengalaman bertahun-tahun dalam mendidik dan mengembangkan anak usia dini
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <HeartIcon />
              </div>
              <h3 className="font-semibold">Penuh Kasih Sayang</h3>
              <p className="text-sm text-muted-foreground">
                Mendidik dengan pendekatan yang penuh kasih sayang dan perhatian personal
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
