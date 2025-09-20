"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container mx-auto px-4">
  <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kami siap membantu Anda untuk informasi lebih lanjut tentang pendaftaran dan program pembelajaran.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Jam Operasional - Left */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="text-muted-foreground">07:30 - 11:00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informasi Pendaftaran - Center */}
          <Card className="bg-primary/5 border-primary/20 h-fit rounded-xl shadow-lg p-4 flex flex-col justify-center">
            <CardHeader className="text-center">
              <CardTitle className="text-primary text-lg text-center">Pendaftaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground text-sm text-center">
                Segera daftarkan putra-putri Anda<br />
                untuk mendapatkan tempat terbaik.
              </p>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="sm"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAluxmqoUVRF_C7seusIZzZjOOFeLLBv5OPLklLqDdA7Yf1g/viewform?usp=header", "_blank")}
                >
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                  Formulir Pendaftaran Online
                </Button>

                <div className="text-center text-xs text-muted-foreground">atau</div>

                <Button
                  variant="outline"
                  className="w-full bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
                  size="sm"
                  onClick={() => window.open("https://wa.me/6287817559593", "_blank")}
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Hubungi untuk Konsultasi
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alamat Sekolah - Right */}
          <Card className="h-fit rounded-xl shadow-lg p-4 flex flex-col justify-center">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center gap-3 text-lg justify-center text-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Alamat Sekolah
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed text-sm text-center">
                42GP+RQH, Situmekar
                <br />
                Kec. Cisitu, Kabupaten Sumedang
                <br />
                Jawa Barat 45363
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=42GP%2BRQH%2C+Situmekar%2C+Kec.+Cisitu%2C+Kabupaten+Sumedang%2C+Jawa+Barat+45363",
                    "_blank",
                  )
                }
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="3,11 22,2 13,21 11,13 3,11" />
                </svg>
                Lihat di Maps
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
