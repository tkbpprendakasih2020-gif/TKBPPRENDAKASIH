"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function QRCodeGenerator() {
  const [websiteUrl, setWebsiteUrl] = useState("https://v0-kindergarten-website-ecru.vercel.app/")
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  const generateQRCode = () => {
    // Using QR Server API for generating QR codes
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(websiteUrl)}`
    setQrCodeUrl(qrUrl)
  }

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a")
      link.href = qrCodeUrl
      link.download = "qr-code-tk-renda-kasih.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 4h4m0 0v4m0 0h4m0 0V4m-4 16h4m0 0v-4m0 0h-4m0 4V4"
            />
          </svg>
          Generator QR Code Website
        </CardTitle>
        <CardDescription>Buat QR code untuk akses mudah ke website TK BPP RENDA KASIH</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="website-url">URL Website</Label>
          <Input
            id="website-url"
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="https://tk-renda-kasih.vercel.app"
          />
        </div>

        <Button onClick={generateQRCode} className="w-full">
          Generate QR Code
        </Button>

        {qrCodeUrl && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src={qrCodeUrl || "/placeholder.svg"}
                alt="QR Code untuk website TK BPP RENDA KASIH"
                className="border rounded-lg shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Button onClick={downloadQRCode} variant="outline" className="w-full bg-transparent">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download QR Code
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Scan QR code ini untuk mengakses website TK BPP RENDA KASIH
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
