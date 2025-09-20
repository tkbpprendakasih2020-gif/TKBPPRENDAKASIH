import { QRCodeGenerator } from "@/components/qr-code-generator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QRCodePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">QR Code Generator</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Buat QR code untuk memudahkan orang tua dan pengunjung mengakses website TK BPP RENDA KASIH dengan mudah
            melalui smartphone mereka.
          </p>
        </div>

        <QRCodeGenerator />

        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Cara Menggunakan QR Code:</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                1
              </span>
              <p>Generate QR code dengan mengklik tombol "Generate QR Code"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                2
              </span>
              <p>Download QR code dalam format PNG</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                3
              </span>
              <p>Cetak dan tempel di brosur, spanduk, atau media promosi lainnya</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                4
              </span>
              <p>Orang tua dapat scan QR code dengan kamera smartphone untuk langsung mengakses website</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
